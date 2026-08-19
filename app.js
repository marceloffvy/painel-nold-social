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
    const status = c.ativo ? '<span class="tag coral">ciclo ativo</span>'
                 : c.emAnalise ? '<span class="tag">em análise</span>'
                 : '<span class="tag">sem ciclo</span>';
    const right = c.ativo ? `<span class="mono">${c.ciclos[0].pecas.length} peças</span>`
                : c.emAnalise ? '<span class="mono">8 pautas</span>' : '<span class="mono">—</span>';
    const inner = `<span class="mono">${esc(c.categoria)}</span>
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
  setCrumbs([{t:'Carteira', href:'#/'}, {t:c.nome.split('·')[0].trim()}]);

  if(!c.ativo){
    app.innerHTML = `<div class="wrap">
      <span class="mono mark eyebrow">Cliente</span><h1>${esc(c.nome)}</h1>
      <p class="lead">${esc(c.resumo)}</p>
      <div class="empty" style="margin-top:30px">${esc(c.nota || 'Ainda sem ciclo aberto neste painel.')}</div>
    </div>`;
    return;
  }

  const d = c.diagnostico, id = c.identidade, pa = c.perfilAnalise, cp = c.campanha, s = c.sintese;

  const nav = [['b1','Diagnóstico'],['b2','Identidade'],['b3','Leitura de perfil'],['b4','Campanha ativa'],
               ['b5','Benchmark'],['b6','Pautas'],['b7','Ciclos e peças']]
    .map((x,i)=>`<a href="#${x[0]}" data-j="${x[0]}"><i>${pad2(i+1)}</i>${x[1]}</a>`).join('');

  const head = (n,t,sub)=>`<div class="blk-head"><span class="n">${n}</span><h2>${t}</h2><span class="sp"></span>${sub?`<span class="mono">${sub}</span>`:''}</div>`;

  /* pautas */
  const pauta = p => {
    const r = p.ref, o = p.nossa;
    const refImg = `<div class="noimg">Referência externa · abrir no Instagram</div>`;
    const ourImg = o.img ? `<img src="${o.img}" alt="Capa da peça ${esc(p.tema)}" loading="lazy">`
                         : `<div class="noimg">Roteiro · sem arte</div>`;
    return `<article class="pauta">
      <div class="pauta-h">
        <span class="mono">Pauta ${p.n}</span>
        <span class="t">${esc(p.tema)}</span>
        <span class="${tagCls(p.cls)}">${esc(p.cls)}</span>
        <span class="tag">${esc(p.fmt)}</span>
      </div>
      <div class="pauta-b">
        <div class="pane ref">
          <div class="plab">◇ Referência que funciona</div>
          ${refImg}
          <dl class="facts">
            <dt>Perfil</dt><dd><b>${esc(r.at)}</b></dd>
            <dt>O que faz</dt><dd>${esc(r.sinal)}</dd>
            <dt>Por que vai</dt><dd>${esc(r.porque)}</dd>
          </dl>
          <a class="lk" href="${r.url}" target="_blank" rel="noopener">→ ver perfil de referência</a>
          ${r.post ? `<br><a class="lk" href="${r.post}" target="_blank" rel="noopener">→ ${esc(r.postLabel||'ver post')}</a>` : ''}
        </div>
        <div class="pane ours">
          <div class="plab">◆ Versão Biliart</div>
          ${ourImg}
          <dl class="facts">
            <dt>Ângulo</dt><dd>${esc(o.angulo)}</dd>
            <dt>Hook</dt><dd><p class="hook">${esc(o.hook)}</p></dd>
            <dt>CTA</dt><dd>${esc(o.cta)}</dd>
          </dl>
          ${o.peca ? `<a class="lk" href="#/c/${c.slug}/p/${o.peca}">→ abrir peça produzida</a>` : ''}
        </div>
      </div>
    </article>`;
  };

  const cy = c.ciclos[0];

  app.innerHTML = `<div class="wrap">
    <div class="hero-client">
      <div>
        <span class="mono mark eyebrow">Cliente</span>
        <h1>${esc(c.nome)}</h1>
        <p class="lead">${esc(c.resumo)}</p>
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
          <div class="card"><dl class="facts">
            <dt>Quem é</dt><dd>${esc(d.quem)}</dd>
            <dt>Pra quem fala</dt><dd>${esc(d.publico)}</dd>
            <dt>Território</dt><dd>${esc(d.territorio)}</dd>
            <dt>Tom de voz</dt><dd>${esc(d.tom)}</dd>
            <dt>Não pode</dt><dd>${esc(d.proibido)}</dd>
          </dl></div>
        </section>

        <section class="blk" id="b2">
          ${head('02','Identidade')}
          <div class="grid-4">${id.paleta.map(p=>`
            <div class="sw" style="background:${p.hex}">
              <span style="color:${['#52151C','#191915'].includes(p.hex)?'#D1C1B2':'#191915'}">${p.hex}<br>${esc(p.nome)}</span>
            </div>`).join('')}</div>
          <div class="card" style="margin-top:12px"><dl class="facts">
            ${id.tipos.map(t=>`<dt>${esc(t.papel)}</dt><dd><b>${esc(t.nome)}</b></dd>`).join('')}
            <dt>Logos</dt><dd>${esc(id.logos)}</dd>
          </dl></div>
        </section>

        <section class="blk" id="b3">
          ${head('03','Leitura de perfil','como a conta comunica hoje')}
          <div class="card dark" style="margin-bottom:12px">
            <span class="mono mark">Diagnóstico de social</span>
            <p style="margin:12px 0 0;font-size:17px;max-width:70ch">${esc(pa.resumo)}</p>
          </div>
          <div class="grid-2">
            <div class="card">
              <span class="mono">Como comunica</span>
              <ul style="margin:12px 0 0;padding-left:18px;font-size:15px">${pa.comoComunica.map(x=>`<li style="margin-bottom:7px">${esc(x)}</li>`).join('')}</ul>
            </div>
            <div class="card">
              <span class="mono">Organização do feed</span>
              <ul style="margin:12px 0 0;padding-left:18px;font-size:15px">${pa.organizacao.map(x=>`<li style="margin-bottom:7px">${esc(x)}</li>`).join('')}</ul>
            </div>
          </div>
          <div class="card" style="margin-top:12px"><dl class="facts">
            <dt>Atmosfera</dt><dd>${esc(pa.atmosfera)}</dd>
            <dt>Foto de perfil</dt><dd>${esc(pa.fotoPerfil)}</dd>
          </dl></div>

          <div class="grid-2" style="margin-top:12px">
            <div class="card">
              <span class="mono">Acervo de imagem</span>
              <dl class="facts" style="margin-top:12px">
                ${pa.acervo.map(a=>`<dt style="color:${a.s==='falta'?'#FE5F55':'#6D6D6D'}">${a.s}</dt>
                  <dd><b>${esc(a.t)}</b><br><span class="muted" style="font-size:14px">${esc(a.obs)}</span></dd>`).join('')}
              </dl>
            </div>
            <div class="card">
              <span class="mono">Precisa produzir</span>
              <ul style="margin:12px 0 0;padding-left:18px;font-size:15px">${pa.produzir.map(x=>`<li style="margin-bottom:8px">${esc(x)}</li>`).join('')}</ul>
              <div class="chips">${pa.tiposConteudo.map(t=>`<span class="tag">${esc(t.t)}</span>`).join('')}</div>
            </div>
          </div>
          <div class="card" style="margin-top:12px">
            <span class="mono">Tipos de conteúdo</span>
            <dl class="facts" style="margin-top:12px">${pa.tiposConteudo.map(t=>`<dt>${esc(t.t)}</dt><dd>${esc(t.d)}</dd>`).join('')}</dl>
          </div>
        </section>

        <section class="blk" id="b4">
          ${head('04','Campanha ativa')}
          <div class="card dark">
            <span class="mono mark">Mote</span>
            <h2 style="margin:12px 0 6px;max-width:20ch">${esc(cp.nome)}</h2>
            <p style="color:#C9D3CD;max-width:62ch;margin:0 0 20px">${esc(cp.mote)}</p>
            <div class="grid-2">${cp.eixos.map(e=>`<div style="border-top:1px solid #37514400;border-top:1px solid rgba(255,255,255,.18);padding-top:12px">
              <span class="mono">${esc(e.t)}</span><p style="margin:6px 0 0;color:#DCE3DE">${esc(e.d)}</p></div>`).join('')}</div>
            <p class="mono" style="margin:22px 0 0;color:#9FB2A8">${esc(cp.status)}</p>
            <a class="lk" style="display:inline-block;margin-top:14px;font-family:var(--mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#FE5F55" href="${cp.deck}" target="_blank" rel="noopener">→ abrir apresentação da campanha</a>
          </div>
        </section>

        <section class="blk" id="b5">
          ${head('05','Benchmark', c.benchmark.length + ' perfis')}
          <div class="grid-2">${c.benchmark.map(b=>`
            <div class="bm" ${b.anti?'data-anti="1"':''}>
              <div class="h"><span class="at">${esc(b.at)}</span><span class="mono">${esc(b.porte)}</span></div>
              ${b.alerta?'<span class="tag coral">concorrente direto</span>':''}
              ${b.anti?'<span class="tag coral">contraexemplo</span>':''}
              <p>${esc(b.faz)}</p>
              <p style="color:#181818"><b style="font-weight:500">O que extrair:</b> ${esc(b.extrair)}</p>
              <a class="lk" href="${b.url}" target="_blank" rel="noopener">→ ver perfil</a>
            </div>`).join('')}</div>

          <div class="grid-3" style="margin-top:12px">
            <div class="card"><span class="mono on">Em alta</span><ul style="margin:10px 0 0;padding-left:18px;font-size:15px">${s.alta.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>
            <div class="card"><span class="mono">Saturado</span><ul style="margin:10px 0 0;padding-left:18px;font-size:15px">${s.saturado.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>
            <div class="card"><span class="mono">Lacuna nossa</span><ul style="margin:10px 0 0;padding-left:18px;font-size:15px">${s.lacuna.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>
          </div>
        </section>

        <section class="blk" id="b6">
          ${head('06','Pautas', c.pautas.length + ' temas')}
          <p class="lead" style="margin-bottom:20px">De um lado a referência que funcionou lá fora. Do outro, a nossa versão.</p>
          ${c.pautas.map(pauta).join('')}
        </section>

        <section class="blk" id="b7">
          ${head('07','Ciclos e peças')}
          <a class="cycle-card" href="#/c/${c.slug}/ciclo/${cy.slug}">
            <div>
              <span class="mono">${esc(cy.periodo)}</span>
              <h3 style="margin-top:6px">${esc(cy.titulo)}</h3>
            </div>
            <div class="row">
              <span class="tag">${cy.pecas.length} peças</span>
              <span class="tag coral">70/30</span>
              <span class="mono on">abrir →</span>
            </div>
          </a>
        </section>

      </div>
    </div>
  </div>`;

  /* marcar item ativo do menu conforme rolagem */
  const links = [...document.querySelectorAll('#side a')];
  links.forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    document.getElementById(a.dataset.j).scrollIntoView({block:'start'});
  }));
  const obs = new IntersectionObserver(en => {
    en.forEach(x => { if(x.isIntersecting){
      links.forEach(a => a.classList.toggle('act', a.dataset.j === x.target.id));
    }});
  }, {rootMargin:'-90px 0px -70% 0px'});
  document.querySelectorAll('.blk').forEach(b => obs.observe(b));
}

/* ============================ CICLO ============================ */
function viewCycle(slug, cyslug){
  const c = find(slug); if(!c || !c.ativo) return viewHome();
  const cy = c.ciclos.find(x => x.slug === cyslug) || c.ciclos[0];
  setCrumbs([{t:'Carteira',href:'#/'},{t:c.nome.split('·')[0].trim(),href:'#/c/'+c.slug},{t:cy.titulo}]);

  const thumb = p => {
    if(p.dir) return `<div class="im"><img src="img/${c.slug}/${p.dir}/01-t.webp" alt="Capa ${esc(p.titulo)}" loading="lazy"></div>`;
    if(p.imgs) return `<div class="im"><img src="${p.imgs[0].replace('.webp','-t.webp')}" alt="Capa ${esc(p.titulo)}" loading="lazy"></div>`;
    return `<div class="im script">roteiro</div>`;
  };
  app.innerHTML = `<div class="wrap">
    <span class="mono mark eyebrow">Ciclo · ${esc(c.nome.split('·')[0].trim())}</span>
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
  const c = find(slug); if(!c || !c.ativo) return viewHome();
  const cy = c.ciclos[0];
  const p = cy.pecas.find(x => x.id === pid); if(!p) return viewCycle(slug, cy.slug);
  setCrumbs([{t:'Carteira',href:'#/'},{t:c.nome.split('·')[0].trim(),href:'#/c/'+c.slug},
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
