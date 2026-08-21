/* ============================================================
   PAINEL NOLD — router + render
   ============================================================ */
const app = document.getElementById('app');
const crumbs = document.getElementById('crumbs');
const find = s => CLIENTES.find(c => c.slug === s);
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const pad2 = n => String(n).padStart(2, '0');

/* ---------- chrome ---------- */
function setCrumbs(parts){
  crumbs.innerHTML = parts.map((p, i) => {
    const sep = i ? '<span class="sep">/</span>' : '';
    return sep + (p.href ? `<a href="${p.href}">${esc(p.t)}</a>` : `<span class="cur">${esc(p.t)}</span>`);
  }).join('');
}
const tagCls = c => c === 'conversão' ? 'tag solid' : (c === 'alta' || c === 'posicionamento') ? 'tag coral' : 'tag';

/* ============================ CARTEIRA ============================ */
function viewHome(){
  setCrumbs([{t:'Carteira'}]);
  const card = c => {
    const off = !c.ativo && !c.emAnalise;
    const temCiclo = c.ativo && c.ciclos && c.ciclos.length;
    const status = temCiclo ? '<span class="tag coral">ciclo ativo</span>'
                 : c.ativo ? '<span class="tag coral">pautas prontas</span>'
                 : c.emAnalise ? '<span class="tag">em análise</span>'
                 : '<span class="tag">sem ciclo</span>';
    const right = temCiclo ? `<span class="mono">${c.ciclos[0].pecas.length} peças</span>`
                : c.ativo ? `<span class="mono">${c.pautas.length} pautas</span>`
                : c.emAnalise ? '<span class="mono">8 pautas</span>' : '<span class="mono">—</span>';
    const av = c.avatar ? `<img class="avatar" src="${c.avatar}" alt="" loading="lazy">` : `<span class="avatar ph">${esc((c.nome.split('·').pop()||'').trim().slice(0,1)||'•')}</span>`;
    const inner = `<div class="chead">${av}<span class="mono">${esc(c.categoria)}</span></div>
        <div class="nm">${esc(c.nome)}</div>
        <div class="terr">${esc(c.resumo)}</div>
        <div class="meta">${status}${right}</div>`;
    return off ? `<div class="client" data-off="1">${inner}</div>`
               : `<a class="client" href="#/c/${c.slug}">${inner}</a>`;
  };
  app.innerHTML = `<div class="wrap">
    <span class="mono mark eyebrow">Espelho do trabalho · ${CLIENTES.length} clientes</span>
    <h1>Carteira</h1>
    <p class="lead">Cada cliente tem diagnóstico, leitura de perfil, benchmark, pautas com referência ao lado da nossa versão, e os materiais produzidos por ciclo.</p>
    <div class="clients">${CLIENTES.map(card).join('')}</div>
    <div class="gap" style="margin-top:34px">
      <b>Conforto visual.</b> Este painel não usa animação, autoplay, piscar ou contraste vibrante. A navegação é estática e previsível.
    </div>
  </div>`;
}

/* ============================ CLIENTE ============================ */
function viewClient(slug){
  const c = find(slug);
  if(!c) return viewHome();
  setCrumbs([{t:'Carteira', href:'#/'}, {t:c.apelido||c.nome.split('·')[0].trim()}]);

  if(!c.ativo){
    app.innerHTML = `<div class="wrap">
      <span class="mono mark eyebrow">Cliente</span><h1>${esc(c.nome)}</h1>
      <p class="lead">${esc(c.resumo)}</p>
      <div class="empty" style="margin-top:30px">${esc(c.nota || 'Ainda sem ciclo aberto.')}</div>
    </div>`;
    return;
  }

  const id=c.identidade, pa=c.perfilAnalise, cp=c.campanha, s=c.sintese, cy=(c.ciclos&&c.ciclos[0])||null;
  const marca=c.apelido||c.nome.split('·')[0].trim();
  const lum=h=>{const n=parseInt(h.slice(1),16);return (0.299*(n>>16&255)+0.587*(n>>8&255)+0.114*(n&255))/255};
  const nav=[['b1','Diagnóstico'],['b2','Zag'],['b3','Identidade'],['b4','Leitura de perfil'],['b5','O que já funciona'],
             ['b6','Ensaio fotográfico'],['b7','Campanha'],['b8','Benchmark'],['b9','Pautas'],['b10','Ciclos e peças']]
    .map((x,i)=>`<a href="#${x[0]}" data-j="${x[0]}"><i>${pad2(i+1)}</i>${x[1]}</a>`).join('');
  const head=(n,t,sub)=>`<div class="blk-head"><span class="n">${n}</span><h2>${t}</h2><span class="sp"></span>${sub?`<span class="mono">${sub}</span>`:''}</div>`;

  const fc=pa.feedCores;
  const feed=pa.feedIdeal.map(f=>`<div style="background:${fc[f.c].bg};color:${fc[f.c].fg}">${esc(f.t)}</div>`).join('');
  const legenda=Object.keys(fc).map(k=>`<span><i style="background:${fc[k].bg}"></i>${fc[k].l}</span>`).join('');

  const pauta=p=>`<article class="pt">
    <div class="pt-h">
      <span class="mono">Pauta ${p.n}</span>
      <span class="t">${esc(p.tema)}</span>
      <span class="tag coral">${esc(p.cls)}</span>
      ${p.conv?'<span class="tag solid">conversão</span>':''}
      <span class="tag">${esc(p.bm)}</span>
    </div>
    <div class="pt-b">
      <div class="pt-ref">
        <div class="mono" style="margin-bottom:9px">◇ Post de referência</div>
        <div class="metrica">${esc(p.ref.metrica)}</div>
        <p class="o">${esc(p.ref.o)}</p>
        <p class="pq">${esc(p.ref.porque)}</p>
        <a class="lk" href="${p.ref.url}" target="_blank" rel="noopener">→ assistir o post original</a>
      </div>
      <div class="pt-our">
        <div class="mono on" style="margin-bottom:9px">◆ Versão ${esc(marca)}</div>
        <p class="ang">${esc(p.angulo)}</p>
        <div class="des">
          <div><div class="k">Reels</div><div class="v">${esc(p.desdobra.reels)}</div></div>
          <div><div class="k">Carrossel</div><div class="v">${esc(p.desdobra.carrossel)}</div></div>
          <div><div class="k">Stories</div><div class="v">${esc(p.desdobra.stories)}</div></div>
          <div><div class="k">Estático</div><div class="v">${esc(p.desdobra.estatico)}</div></div>
        </div>
      </div>
    </div>
  </article>`;

  app.innerHTML = `<div class="wrap">
    <div class="hero-client">
      <div class="hero-id">
        ${c.avatar?`<img class="avatar xl" src="${c.avatar}" alt="${esc(c.nome)}">`:''}
        <div>
          <span class="mono mark eyebrow">Cliente</span>
          <h1>${esc(c.nome)}</h1>
          <p class="lead">${esc(c.resumo)}</p>
        </div>
      </div>
      <div class="row">
        <span class="tag">${esc(c.seguidores)} seguidores</span>
        <a class="tag coral" href="${c.perfil}" target="_blank" rel="noopener">${esc(c.arroba)} ↗</a>
      </div>
    </div>

    <div class="layout">
      <nav class="side" id="side">${nav}</nav>
      <div>

        <section class="blk" id="b1">
          ${head('01','Diagnóstico')}
          <div class="nicho"><span class="mono">Nicho</span><div class="v">${esc(c.nicho)}</div></div>
          <div class="pos">
            <span class="mono mark">Posicionamento</span>
            <p class="q">${esc(c.posicionamento)}</p>
          </div>

          <div class="grid-2" style="margin-top:12px">
            <div class="card"><span class="mono">Público</span>
              <dl class="facts" style="margin-top:12px">${c.publico.map(x=>`<dt>${esc(x.t)}</dt><dd>${esc(x.d)}</dd>`).join('')}</dl></div>
            <div class="card"><span class="mono">Signos que usamos</span>
              <dl class="facts" style="margin-top:12px">${c.signos.map(x=>`<dt>${esc(x.t)}</dt><dd>${esc(x.d)}</dd>`).join('')}</dl></div>
          </div>

          <div style="margin:30px 0 12px"><span class="mono mark">Linha editorial · 4 territórios</span></div>
          <div class="ed">${c.linhaEditorial.map(e=>`
            <div class="c">
              <span class="n">${e.n}</span>
              <h4>${esc(e.t)}</h4>
              <div class="d">${esc(e.d)}</div>
              <div class="w">${esc(e.peso)} do volume</div>
              <div class="tm">${e.temas.map(t=>`<span>· ${esc(t)}</span>`).join('')}</div>
            </div>`).join('')}</div>

          <div style="margin:30px 0 12px"><span class="mono mark">Distribuição por canal</span></div>
          <table class="canais">
            <tr><th>Canal</th><th>Papel</th><th>O que entra</th><th>Frequência</th></tr>
            ${c.canais.map(x=>`<tr><td>${esc(x.c)}</td><td>${esc(x.papel)}</td><td>${esc(x.o)}</td><td class="mono">${esc(x.f)}</td></tr>`).join('')}
          </table>
        </section>

        <section class="blk" id="b2">
          ${head('02','Zag','diferenciação radical')}
          ${c.zag?`
          <div class="zagrid">
            <div class="zg zig"><span class="mono">O nicho inteiro faz</span><p>${esc(c.zag.zig)}</p></div>
            <div class="zg zzag"><span class="mono on">O nosso movimento</span><p>${esc(c.zag.zag)}</p></div>
          </div>
          <div class="only">
            <svg width="86" height="16" viewBox="0 0 86 16" aria-hidden="true"><polyline points="2,14 16,2 30,14 44,2 58,14 72,2 84,14" fill="none" stroke="#FE5F55" stroke-width="3"/></svg>
            <p class="q">${esc(c.zag.only)}</p>
            <span class="mono">Onliness statement · uso interno, guia o conteúdo e não vira copy de anúncio</span>
          </div>
          <div class="provas">${c.zag.provas.map(p=>`<span>✓ ${esc(p)}</span>`).join('')}</div>
          `:`<div class="empty">Zag ainda não definido para este cliente.</div>`}
        </section>

        <section class="blk" id="b3">
          ${head('03','Identidade')}
          <div class="logos">${id.logos.map(l=>`
            <div class="l"><img src="${l.img}" alt="${esc(l.t)}" loading="lazy">
              <div class="t">${esc(l.t)}</div><div class="d">${esc(l.d)}</div></div>`).join('')}</div>
          <div class="grid-4" style="margin-top:12px">${id.paleta.map(p=>`
            <div class="sw" style="background:${p.hex}">
              <span style="color:${lum(p.hex)<0.55?'#F1EDE6':'#181818'}">${p.hex}<br>${esc(p.nome)}</span>
            </div>`).join('')}</div>
          <div class="card" style="margin-top:12px"><dl class="facts">
            ${id.tipos.map(t=>`<dt>${esc(t.papel)}</dt><dd><b>${esc(t.nome)}</b></dd>`).join('')}
          </dl></div>
        </section>

        <section class="blk" id="b4">
          ${head('04','Leitura de perfil')}
          <div class="gap" style="margin-bottom:16px"><b>${esc(pa.resumo)}</b></div>
          <div class="diag">${pa.diag.map(d=>`
            <div class="${d.s==='ajustar'?'fix':''}"><div class="k">${esc(d.t)}</div><div class="v">${esc(d.v)}</div></div>`).join('')}</div>

          <div class="grid-2" style="margin-top:26px">
            <div>
              <span class="mono mark">Feed reorganizado</span>
              <p class="lead" style="font-size:14.5px;margin:10px 0 14px">Como o grid deve ficar com a linha editorial aplicada.</p>
              <div class="feedmock">${feed}</div>
              <div class="legenda-feed">${legenda}</div>
            </div>
            <div>
              <span class="mono mark">Acervo · o que produzir</span>
              <p class="lead" style="font-size:14.5px;margin:10px 0 14px">Checklist de produção de imagem.</p>
              <div class="check">${pa.checklist.map(i=>`
                <div class="${i.ok?'done':''}"><span class="bx">${i.ok?'✓':''}</span>
                  <div><div class="t">${esc(i.t)}</div><div class="d">${esc(i.d)}</div></div></div>`).join('')}</div>
            </div>
          </div>
        </section>

        <section class="blk" id="b5">
          ${head('05','O que já funciona','melhores posts, medidos')}
          ${c.melhores?`
          <div class="best">${c.melhores.map(b=>`
            <a class="bp" href="${b.url}" target="_blank" rel="noopener">
              <div class="im"><img src="${b.img}" alt="${esc(b.titulo)}" loading="lazy"><span class="views">${esc(b.metrica)}</span></div>
              <div class="bt">${esc(b.titulo)}</div>
              <p class="why">${esc(b.porque)}</p>
              <span class="lk">→ assistir o post</span>
            </a>`).join('')}</div>
          <p class="mono" style="margin:14px 0 0;color:var(--gray)">Views medidas direto no perfil. O melhor conteúdo aponta o caminho do próximo ciclo.</p>
          `:`<div class="empty">Perfil ainda sem medição.</div>`}
        </section>

        <section class="blk" id="b6">
          ${head('06','Ensaio fotográfico', c.ensaio?'referências e o que fotografar':'')}
          ${c.ensaio?`
          <p class="lead" style="margin-bottom:16px">${esc(c.ensaio.intro)}</p>
          <div class="grid-4">${c.ensaio.atmosfera.map(a=>`<div class="card"><span class="mono">${esc(a.t)}</span><div style="margin-top:8px;font-size:14px">${esc(a.d)}</div></div>`).join('')}</div>
          <div style="margin:28px 0 12px"><span class="mono mark">Moodboard · referências de foto</span></div>
          <div class="mood">${c.ensaio.refs.map(r=>`<a class="mo" href="${r.fonte}" target="_blank" rel="noopener"><img src="${r.img}" alt="${esc(r.t)}" loading="lazy"><span class="cap">${esc(r.t)}</span></a>`).join('')}</div>
          <p class="mono" style="margin:12px 0 0;color:var(--gray)">Referências do Pinterest, apenas para direção de arte. Toque para ver a fonte.</p>
          <div style="margin:28px 0 12px"><span class="mono mark">O que precisamos fotografar</span></div>
          <div class="shots">${c.ensaio.shotlist.map(sh=>{const col=(pa.feedCores&&pa.feedCores[sh.c])||{bg:'#163227'};return `<div class="shot"><span class="dot" style="background:${col.bg}"></span><div><div class="t">${esc(sh.t)}</div><div class="d">${esc(sh.d)}</div></div></div>`;}).join('')}</div>
          `:`<div class="empty">Ensaio ainda não planejado para este cliente.</div>`}
        </section>

        <section class="blk" id="b7">
          ${head('07','Campanha ativa')}
          <div class="card dark">
            <span class="mono mark">${esc(cp.status)}</span>
            <h2 style="margin:12px 0 16px;max-width:22ch">${esc(cp.nome)}</h2>
            <div class="row">${cp.eixos.map(e=>`<span class="tag" style="border-color:rgba(255,255,255,.3);color:#DCE3DE">${esc(e.t)}: ${esc(e.d)}</span>`).join('')}</div>
            <p class="mono" style="margin:20px 0 0;color:#FE5F55">${esc(cp.alerta)}</p>
            <a style="display:inline-block;margin-top:14px;font-family:var(--mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#FE5F55" href="${cp.deck}" target="_blank" rel="noopener">→ abrir apresentação</a>
          </div>
        </section>

        <section class="blk" id="b8">
          ${head('08','Benchmark','perfis acima de 10 mil')}
          <div class="grid-3">${c.benchmark.map(b=>`
            <div class="bm">
              <div class="h"><span class="at">${esc(b.at)}</span><span class="metrica" style="font-size:20px">${esc(b.porte)}</span></div>
              <p>${esc(b.perfil)}</p>
              <p style="color:#181818"><b style="font-weight:500">Mecanismo:</b> ${esc(b.mecanismo)}</p>
              <p><b style="font-weight:500;color:#181818">Leitura:</b> ${esc(b.leitura)}</p>
              <a class="lk" href="${b.url}" target="_blank" rel="noopener">→ ver perfil</a>
            </div>`).join('')}</div>
          <div class="grid-3" style="margin-top:12px">
            <div class="card"><span class="mono on">Em alta</span><ul style="margin:10px 0 0;padding-left:18px;font-size:15px">${s.alta.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>
            <div class="card"><span class="mono">Saturado</span><ul style="margin:10px 0 0;padding-left:18px;font-size:15px">${s.saturado.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>
            <div class="card"><span class="mono">Lacuna nossa</span><ul style="margin:10px 0 0;padding-left:18px;font-size:15px">${s.lacuna.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>
          </div>
        </section>

        <section class="blk" id="b9">
          ${head('09','Pautas', c.pautas.length+' temas · 3 por benchmark')}
          <p class="lead" style="margin-bottom:20px">Cada pauta vem de um post real que performou. À direita, a versão ${esc(marca)} em quatro formatos.</p>
          ${c.pautas.map(pauta).join('')}
          ${c.fixados?`
          <div style="margin:38px 0 6px"><span class="mono mark on">Posts de apresentação · fixados e prioritários</span></div>
          <p class="lead" style="margin-bottom:14px;font-size:15px">Inspirados no perfil da Lara Passos, ficam fixados no topo. Fáceis de produzir: precisam do ensaio e do portfólio.</p>
          ${c.fixados.map(fp=>`<article class="fixed-post">
            <div class="fh"><span class="tag solid">★ fixado</span><span class="t">${esc(fp.tema)}</span></div>
            <p class="o">${esc(fp.papel)}</p>
            <div class="fslides">${fp.slides.map((sl,i)=>`<div><span class="sn">${pad2(i+1)}</span><span>${esc(sl)}</span></div>`).join('')}</div>
            <p class="mono" style="margin-top:12px;color:var(--gray)">Precisa de: ${esc(fp.precisa)}</p>
          </article>`).join('')}
          `:''}
        </section>

        <section class="blk" id="b10">
          ${head('10','Ciclos e peças')}
          ${cy?`<a class="cycle-card" href="#/c/${c.slug}/ciclo/${cy.slug}">
            <div><span class="mono">${esc(cy.periodo)}</span><h3 style="margin-top:6px">${esc(cy.titulo)}</h3></div>
            <div class="row"><span class="tag">${cy.pecas.length} peças</span><span class="mono on">abrir →</span></div>
          </a>`:`<div class="empty">Pautas aprovadas. O primeiro ciclo de produção entra aqui assim que as peças forem desenhadas.</div>`}
        </section>

      </div>
    </div>
  </div>`;

  const links=[...document.querySelectorAll('#side a')];
  links.forEach(a=>a.addEventListener('click',e=>{e.preventDefault();document.getElementById(a.dataset.j).scrollIntoView({block:'start'})}));
  const obs=new IntersectionObserver(en=>{en.forEach(x=>{if(x.isIntersecting){
    links.forEach(a=>a.classList.toggle('act', a.dataset.j===x.target.id))}})},{rootMargin:'-90px 0px -70% 0px'});
  document.querySelectorAll('.blk').forEach(b=>obs.observe(b));
}

/* ============================ CICLO ============================ */
function viewCycle(slug, cyslug){
  const c = find(slug); if(!c || !c.ativo || !c.ciclos || !c.ciclos.length) return viewClient(slug);
  const cy = c.ciclos.find(x => x.slug === cyslug) || c.ciclos[0];
  setCrumbs([{t:'Carteira',href:'#/'},{t:c.apelido||c.nome.split('·')[0].trim(),href:'#/c/'+c.slug},{t:cy.titulo}]);

  const thumb = p => {
    if(p.dir) return `<div class="im"><img src="img/${c.slug}/${p.dir}/01-t.webp" alt="Capa ${esc(p.titulo)}" loading="lazy"></div>`;
    if(p.imgs) return `<div class="im"><img src="${p.imgs[0].replace('.webp','-t.webp')}" alt="Capa ${esc(p.titulo)}" loading="lazy"></div>`;
    return `<div class="im script">roteiro</div>`;
  };
  app.innerHTML = `<div class="wrap">
    <span class="mono mark eyebrow">Ciclo · ${esc(c.apelido||c.nome.split('·')[0].trim())}</span>
    <h1>${esc(cy.titulo)}</h1>
    <p class="lead">${esc(cy.resumo)}</p>
    <div class="row" style="margin-top:16px"><span class="tag">${esc(cy.periodo)}</span><span class="tag">${cy.pecas.length} peças</span><span class="tag coral">${esc(cy.mix)}</span></div>
    <div class="pieces">${cy.pecas.map(p=>`
      <a class="piece" href="#/c/${c.slug}/p/${p.id}">
        ${thumb(p)}
        <div class="cap"><span class="mono">${esc(p.tipo)}</span><div class="t">${esc(p.titulo)}</div>
          <div style="margin-top:9px"><span class="${tagCls(p.cls)}">${esc(p.cls)}</span></div></div>
      </a>`).join('')}</div>
  </div>`;
}

/* ============================ PEÇA ============================ */
async function viewPiece(slug, pid){
  const c = find(slug); if(!c || !c.ativo || !c.ciclos || !c.ciclos.length) return viewClient(slug);
  const cy = c.ciclos[0];
  const p = cy.pecas.find(x => x.id === pid); if(!p) return viewCycle(slug, cy.slug);
  setCrumbs([{t:'Carteira',href:'#/'},{t:c.apelido||c.nome.split('·')[0].trim(),href:'#/c/'+c.slug},
             {t:cy.titulo,href:`#/c/${c.slug}/ciclo/${cy.slug}`},{t:p.titulo}]);

  let visual = '';
  if(p.dir){
    let fig = '';
    for(let i=1;i<=p.n;i++){
      fig += `<figure><img src="img/${c.slug}/${p.dir}/${pad2(i)}.webp" alt="Slide ${i}" loading="lazy"><figcaption>Slide ${pad2(i)}</figcaption></figure>`;
    }
    visual = `<span class="mono mark">Slides</span><div class="slides">${fig}</div>`;
  } else if(p.imgs){
    visual = `<span class="mono mark">Arquivos</span><div class="slides">${p.imgs.map((u,i)=>
      `<figure><img src="${u}" alt="${esc(p.labels[i])}" loading="lazy"><figcaption>${esc(p.labels[i])}</figcaption></figure>`).join('')}</div>`;
  } else {
    visual = `<div class="empty">${esc(p.nota || 'Peça de roteiro, sem arte produzida.')}</div>`;
  }

  app.innerHTML = `<div class="wrap">
    <span class="mono mark eyebrow">${esc(p.tipo)}</span>
    <h1>${esc(p.titulo)}</h1>
    <div class="row" style="margin:14px 0 30px">
      <span class="${tagCls(p.cls)}">${esc(p.cls)}</span>
      <span class="tag">${esc(cy.titulo)} · ${esc(cy.periodo)}</span>
    </div>
    ${visual}
    <div class="grid-2" style="margin-top:34px">
      <div><span class="mono mark">Copy</span><div class="copybox" id="cp" style="margin-top:12px">carregando…</div></div>
      <div><span class="mono mark">Legenda pronta</span><div class="copybox" id="lg" style="margin-top:12px">carregando…</div>
        ${p.compliance?`<div class="compliance" style="margin-top:12px"><b style="font-weight:500">Compliance.</b> ${esc(p.compliance)}</div>`:''}
      </div>
    </div>
  </div>`;

  const load = async (file, el) => {
    try{
      const r = await fetch(`txt/${c.slug}/${file}`);
      document.getElementById(el).textContent = r.ok ? await r.text() : 'Arquivo não encontrado.';
    }catch(e){ document.getElementById(el).textContent = 'Abra o painel por um servidor para carregar os textos.'; }
  };
  if(p.txt){ load(p.txt+'-copy.txt','cp'); load(p.txt+'-leg.txt','lg'); }
}

/* ============================ ROUTER ============================ */
function route(){
  const h = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  window.scrollTo(0,0);
  if(h[0] === 'c' && h[1]){
    if(h[2] === 'ciclo') return viewCycle(h[1], h[3]);
    if(h[2] === 'p')     return viewPiece(h[1], h[3]);
    return viewClient(h[1]);
  }
  viewHome();
}
window.addEventListener('hashchange', route);
route();
