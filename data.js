/* ============================================================
   PAINEL NOLD — base de dados
   Espelho do trabalho de social. Um objeto por cliente.
   ============================================================ */

const CLIENTES = [

/* ============================ BILIART ============================ */
{
  slug:'biliart', ativo:true,
  nome:'Biliart · Dr. Luiz Felipe',
  categoria:'Reabilitação oral e facial',
  resumo:'Autoestima e reconexão com o sorriso. Recorte cirúrgico: ortognática, ATM e apneia.',
  arroba:'@drlfmartinho', perfil:'https://www.instagram.com/drlfmartinho/',
  seguidores:'2.432', posts:'184',

  diagnostico:{
    quem:'Cirurgião bucomaxilofacial. Ortognática, ATM e implantes. Hospital Sírio-Libanês. CROSP 127589.',
    publico:'Adulto que já sabe que precisa, mas trava por medo. Indicado pelo ortodontista, ou vivendo o sintoma sem saber que tem nome.',
    territorio:'Reconstrução de confiança. Ciência com sensibilidade. Arquétipo Cuidador.',
    tom:'Calmo, sensível, seguro, elegante, explicativo, humano.',
    proibido:'Promessa de resultado, cura ou prazo · antes e depois sem autorização escrita (CFO) · sensacionalismo clínico · medo como gatilho · preço em peça.'
  },

  identidade:{
    paleta:[
      {hex:'#52151C', nome:'Vinho', uso:'fundo principal'},
      {hex:'#D1C1B2', nome:'Nude', uso:'texto sobre vinho'},
      {hex:'#8E6A5E', nome:'Terracota', uso:'quebra de ritmo'},
      {hex:'#191915', nome:'Quase-preto', uso:'fundo escuro'}
    ],
    tipos:[
      {nome:'Playfair Display', papel:'títulos e destaque'},
      {nome:'Uncut Sans', papel:'subtítulos'},
      {nome:'Geist', papel:'texto corrido'}
    ],
    logos:'Wordmark biliart© (horizontal e vertical), submarca selo b., versões em vinho, ocre, cinza e preto. Logo próprio do Dr. Luiz Felipe (lockup com nome, especialidade e CROSP).'
  },

  /* ---------- LEITURA DE PERFIL — análise de social media ---------- */
  perfilAnalise:{
    resumo:'Um perfil com estética acima da média do nicho e autoridade real, mas que ainda comunica como especialista falando para colegas, não como marca falando para paciente. O acervo visual é curto e desequilibrado: sobra bloco cirúrgico, falta rosto humano em contexto.',
    comoComunica:[
      'Talking head direto na câmera é o formato dominante. Tom professoral e acolhedor, funciona.',
      'Estáticos tipográficos vinho e nude, da campanha, com boa direção de arte.',
      'B-roll de cirurgia escuro e cinematográfico, forte, mas usado quase como assinatura única.',
      'Aparece em podcast e colaborações com outros especialistas, o que constrói autoridade.'
    ],
    organizacao:[
      'O grid não tem ritmo planejado. Peças claras e escuras alternam sem lógica, e o feed lido de longe parece escuro demais.',
      'Conteúdo de lifestyle (neve, Londres, academia) convive com conteúdo clínico sem transição editorial.',
      'Destaques existem mas não organizam a jornada do paciente (Ortognática, Fitness, Fellow).',
      'A bio anuncia três frentes (Ortognática | ATM | Implantes), mas o feed entrega quase só ortognática.'
    ],
    atmosfera:'Escura, cinematográfica, séria, clínica premium. Vinho profundo e preto dominam. Bonito, mas com pouco calor humano e pouca luz.',
    fotoPerfil:'Retrato formal de terno, sério. Passa autoridade e está adequado. Poderia ganhar uma versão mais próxima e com meio sorriso, para reduzir a distância com o paciente que tem medo.',
    acervo:[
      {t:'Retrato de estúdio (jaleco, fundo bege)', s:'temos', obs:'Único retrato utilizável. Já foi usado nas duas artes de convênio.'},
      {t:'B-roll de cirurgia', s:'temos', obs:'Bom volume, mas satura se virar assinatura única.'},
      {t:'Vídeo talking head no consultório', s:'temos', obs:'Existe, porém com luz e enquadramento irregulares entre gravações.'},
      {t:'Ensaio de consultório com paciente', s:'falta', obs:'A cena de acolhimento é o que mais falta. É o que humaniza.'},
      {t:'Fotos de detalhe (mãos, escaneamento, modelo 3D)', s:'falta', obs:'Sustenta o eixo método e planejamento sem depender de rosto.'},
      {t:'Retrato ambientado com a paleta da marca', s:'falta', obs:'Hoje o retrato tem fundo bege que briga com o vinho.'},
      {t:'Fotos horizontais e com respiro', s:'falta', obs:'Necessárias para capas, LinkedIn e materiais 16:9.'}
    ],
    produzir:[
      'Ensaio fotográfico em consultório: ele explicando, ouvindo, escaneando. Luz quente, contexto real.',
      'Retratos novos sobre fundo vinho ou nude da marca, meio corpo e close, com e sem jaleco.',
      'Banco de detalhes: mãos, tomografia na tela, modelo 3D, instrumental limpo e desfocado.',
      'Padronizar a gravação de talking head: mesma luz, mesmo enquadramento, mesmo fundo.',
      'Capa de destaques redesenhada por jornada: Ortognática · ATM · Apneia · Convênio · Recuperação.'
    ],
    tiposConteudo:[
      {t:'Educativo', d:'Nomear sintomas que o paciente normalizou. É o que mais cresce audiência hoje.'},
      {t:'Prova e autoridade', d:'Bastidor cirúrgico, caso do atleta, colaborações. Já existe, precisa de narrativa.'},
      {t:'Humano', d:'A parte mais fraca. Rosto, escuta, acolhimento. É o que falta produzir.'},
      {t:'Conversão', d:'Convênio e avaliação. Deve ficar em 30% do volume, nunca mais.'}
    ]
  },

  campanha:{
    nome:'O perfil que você procura na foto. Construído aqui.',
    deck:'https://biliart-pres.vercel.app/',
    mote:'Nomear o comportamento como sintoma e desmontar o fantasma que trava a decisão.',
    eixos:[
      {t:'Estético', d:'"Você aprendeu a se fotografar de lado." A compensação fotográfica como sintoma.'},
      {t:'Funcional', d:'"Sua dor de cabeça começa na boca." Apneia, ronco, ATM e dor temporal.'}
    ],
    status:'Onda 1 publicada. Os quatro fantasmas (boca amarrada, dormência, cicatriz, convênio) já foram ao ar e não devem ser repetidos.'
  },

  benchmark:[
    {at:'@cirurgia.ortognatica', url:'https://www.instagram.com/cirurgia.ortognatica/', porte:'10,1k · nacional',
     faz:'Antes e depois de perfil, depoimentos, "minimamente invasiva". Autoridade construída por tempo de carreira.',
     extrair:'A prova por transformação funciona, mas o educativo dele engaja pouco. Espaço para educar melhor.'},
    {at:'@instituto_facce', url:'https://www.instagram.com/instituto_facce/', porte:'4k · Brasília',
     faz:'Comportamento como sintoma, apneia e ronco, depoimento cinematográfico. Estética próxima da Biliart.',
     extrair:'O concorrente mais perigoso. Já usa a mecânica da nossa campanha e está à frente em apneia.', alerta:true},
    {at:'@drthiagobucomaxilo', url:'https://www.instagram.com/drthiagobucomaxilo/', porte:'4,2k · Goiânia',
     faz:'Educativo de ATM e DTM, planejamento 3D, recuperação. Porte parecido com o do Felipe.',
     extrair:'Faz ATM, mas cru e com CTA seco. Dá para ocupar o mesmo tema com voz de marca.'},
    {at:'@institutobucomaxilofacial', url:'https://www.instagram.com/institutobucomaxilofacial/', porte:'6,5k · Florianópolis',
     faz:'Grid inteiro de antes e depois (PRE/POST em todo post). Cobre ATM e apneia na bio, mas só mostra resultado.',
     extrair:'Contraexemplo. Prova que a categoria inteira depende de antes e depois, e é por isso que não usar vira diferenciação.', anti:true}
  ],

  sintese:{
    alta:['Comportamento como sintoma','Apneia e ronco no eixo funcional','Depoimento cinematográfico'],
    saturado:['Antes e depois de perfil','Medos genéricos da cirurgia','O clichê "minimamente invasiva"'],
    lacuna:['ATM e DTM como condição própria','Quem acabou de ser indicado pelo ortodontista','Recuperação real semana a semana','Construir desejo sem antes e depois']
  },

  pautas:[
    {n:'01', cls:'educação', fmt:'Carrossel 9 slides', tema:'O estalo e o travamento da mandíbula',
     ref:{at:'@drthiagobucomaxilo', url:'https://www.instagram.com/drthiagobucomaxilo/',
          post:'https://www.instagram.com/p/DbB81PTzSiI/', postLabel:'post de sinal (mastigar de um lado só)',
          sinal:'Educativo de ATM em formato "um sinal por slide", com dúvida real do público.',
          porque:'Alta taxa de salvamento. É dor presente, não desejo futuro.'},
     nossa:{img:'img/biliart/c01/01-t.webp', peca:'c01',
            angulo:'Nomear o sintoma que a pessoa já normalizou, sem drama e com acolhimento.',
            hook:'Sua mandíbula faz barulho e você já nem repara mais.', cta:'Seguir'}},

    {n:'03', cls:'educação', fmt:'Reel · roteiro', tema:'Meu ortodontista falou em cirurgia',
     ref:{at:'lacuna do nicho', url:'https://www.instagram.com/cirurgia.ortognatica/',
          sinal:'Nenhum concorrente fala com quem acabou de ser encaminhado pelo ortodontista.',
          porque:'É a origem das indicações do Felipe e o momento de maior susto do paciente.'},
     nossa:{peca:'r03',
            angulo:'Acolher o susto do encaminhamento e explicar a parceria entre orto e cirurgia.',
            hook:'Seu ortodontista falou "caso cirúrgico" e seu chão sumiu. Respira.', cta:'Seguir'}},

    {n:'04', cls:'alta', fmt:'Carrossel 9 slides', tema:'Apneia e ronco começam na mandíbula',
     ref:{at:'@instituto_facce', url:'https://www.instagram.com/instituto_facce/',
          sinal:'"Apneia do sono grave: mais de 30 episódios por hora" e "você perde o sono com o ronco do seu parceiro".',
          porque:'Tema em alta com concorrente à frente. Ocupar com profundidade, não repetir raso.'},
     nossa:{img:'img/biliart/c04/01-t.webp', peca:'c04',
            angulo:'Conectar posição da mandíbula, via aérea e o cansaço do dia seguinte.',
            hook:'Você dorme a noite toda e ainda acorda cansado.', cta:'Seguir'}},

    {n:'05', cls:'posicionamento', fmt:'Carrossel 9 slides', tema:'Gestos de quem esconde o rosto',
     ref:{at:'@instituto_facce', url:'https://www.instagram.com/instituto_facce/',
          sinal:'"Você esconde o seu sorriso?" e "queixo muito para frente?" como gancho de reconhecimento.',
          porque:'Reconhecimento de comportamento gera identificação imediata e compartilhamento.'},
     nossa:{img:'img/biliart/c05/01-t.webp', peca:'c05',
            angulo:'Comportamentos inéditos, porque "fotografar de lado" já foi publicado e está saturando.',
            hook:'Tem gestos que a gente repete sem nunca ter decidido fazer.', cta:'Seguir'}},

    {n:'06', cls:'educação', fmt:'Carrossel 9 slides', tema:'Recuperação real, semana a semana',
     ref:{at:'@instituto_facce', url:'https://www.instagram.com/instituto_facce/',
          sinal:'"Por que a atividade física após a cirurgia é tão importante." Toca no pós, mas sem linha do tempo.',
          porque:'A dúvida sobre recuperação é o que mais trava quem já decidiu operar.'},
     nossa:{img:'img/biliart/c06/01-t.webp', peca:'c06',
            angulo:'Honestidade acolhedora, com linha do tempo e numeral grande por etapa.',
            hook:'O medo da recuperação costuma ser maior que a recuperação.', cta:'Seguir'}},

    {n:'07', cls:'conversão', fmt:'Carrossel 7 slides', tema:'Checklist de ATM',
     ref:{at:'@drthiagobucomaxilo', url:'https://www.instagram.com/drthiagobucomaxilo/',
          sinal:'"Você sente dor ao mastigar, dor ao abrir e fechar a boca? Agende sua consulta."',
          porque:'Funciona, mas o CTA é seco. Dá para converter com acolhimento em vez de ordem.'},
     nossa:{img:'img/biliart/c07/01-t.webp', peca:'c07',
            angulo:'Checklist com caixinhas numeradas. Converte por reconhecimento, não por pressão.',
            hook:'Faz um teste rápido com a sua mandíbula.', cta:'Avaliação · link na bio'}},

    {n:'08', cls:'conversão', fmt:'Reel · roteiro', tema:'Como saber se o meu caso é cirúrgico',
     ref:{at:'@cirurgia.ortognatica', url:'https://www.instagram.com/cirurgia.ortognatica/',
          sinal:'Talking head "tudo que você precisa saber sobre ortognática" com depoimento e documentação.',
          porque:'É a objeção número um de quem foi indicado e ainda não marcou.'},
     nossa:{peca:'r08',
            angulo:'A avaliação como diagnóstico, deixando explícito que pode concluir por não operar.',
            hook:'Nem todo mundo que acha que precisa, precisa. Vamos descobrir o seu.', cta:'Avaliação · link na bio'}},

    {n:'09', cls:'conversão', fmt:'Estáticos 4:5 e 9:16', tema:'Atendimento por convênio',
     ref:{at:'@dr.henriquecabrini e @drmanoelroque', url:'https://www.instagram.com/dr.henriquecabrini/',
          sinal:'Foto forte, procedimento em manchete, selo compacto com os logos dos convênios e CTA no WhatsApp.',
          porque:'Mecânica de captação já validada no nicho. Remove a objeção de custo.'},
     nossa:{img:'img/biliart/est/mentoplastia-45-t.webp', peca:'e09',
            angulo:'Mesma mecânica, na identidade Biliart. Sem botão desenhado, porque o Meta penaliza.',
            hook:'Mentoplastia · Cirurgia Ortognática', cta:'Selo de convênios'}}
  ],

  ciclos:[{
    slug:'2026-08', titulo:'Sinais que viram rotina', periodo:'Agosto 2026',
    resumo:'Dez peças no sistema visual "Radiografia": alternância de fundo (vinho, nude invertido, preto, terracota) com raio-X e ilustração anatômica. Cada peça com motivo visual próprio.',
    mix:'5 posicionamento, educação e alta · 2 conversão · 2 estáticos de captação',
    pecas:[
      {id:'c01', tipo:'Carrossel · 9 slides', titulo:'ATM', cls:'educação', dir:'c01', n:9,
       txt:'c01', compliance:'Sem promessa de cura. Slide 8 deixa claro que nem todo caso é cirúrgico. CRO na assinatura.'},
      {id:'c04', tipo:'Carrossel · 9 slides', titulo:'Apneia e ronco', cls:'alta', dir:'c04', n:9,
       txt:'c04', compliance:'Apneia é diagnóstico multiprofissional. Não afirmar que a cirurgia cura. Validar com o Dr. Luiz Felipe.'},
      {id:'c05', tipo:'Carrossel · 9 slides', titulo:'Comportamentos', cls:'posicionamento', dir:'c05', n:9,
       txt:'c05', compliance:'Sem antes e depois. Ilustração de linha, nunca paciente identificável.'},
      {id:'c06', tipo:'Carrossel · 9 slides', titulo:'Recuperação', cls:'educação', dir:'c06', n:9,
       txt:'c06', compliance:'Prazos apresentados como média. Sem prazo absoluto de cura.'},
      {id:'c07', tipo:'Carrossel · 7 slides', titulo:'Checklist ATM', cls:'conversão', dir:'c07', n:9,
       txt:'c07', compliance:'Sem preço, sem promessa. CRO na peça de fecho.'},
      {id:'r03', tipo:'Reel · roteiro', titulo:'Indicação do ortodontista', cls:'educação', txt:'r03',
       compliance:'"Pode ser cirúrgico". Sem promessa de resultado. Ênfase na parceria orto e cirurgia.',
       nota:'Roteiro e legenda prontos. Foto do Dr. Luiz Felipe já na pasta, pronto para gravar.'},
      {id:'r08', tipo:'Reel · roteiro', titulo:'Meu caso é cirúrgico', cls:'conversão', txt:'r08',
       compliance:'Deixa explícito que a avaliação pode concluir por não operar (ética CFO).',
       nota:'Roteiro e legenda prontos. Foto do Dr. Luiz Felipe já na pasta, pronto para gravar.'},
      {id:'e09', tipo:'Estáticos · 4 arquivos', titulo:'Convênios', cls:'conversão', txt:'e09',
       imgs:['img/biliart/est/mentoplastia-45.webp','img/biliart/est/ortognatica-45.webp',
             'img/biliart/est/mentoplastia-916.webp','img/biliart/est/ortognatica-916.webp'],
       labels:['Mentoplastia 4:5','Ortognática 4:5','Mentoplastia 9:16','Ortognática 9:16'],
       compliance:'Sem botão desenhado (regra Meta). Convênios confirmados: Unimed, Amil, Alice, Porto, Bradesco Saúde e SulAmérica.'}
    ]
  }]
},

/* ============================ IDÉE ============================ */
{
  slug:'idee', ativo:false, emAnalise:true,
  nome:'Idée · Dr. Roberto', categoria:'Ortodontia · alinhadores',
  resumo:'Previsibilidade e discrição. Campanha "Nunca é tarde" em captação.',
  arroba:'@robertosimonetti_ortodontia', perfil:'https://www.instagram.com/robertosimonetti_ortodontia/',
  seguidores:'3.096', posts:'687',
  nota:'Diagnóstico e benchmark já feitos no chat. Oito pautas propostas, aguardando aprovação para entrar aqui.'
},

/* ====================== DEMAIS (sem ciclo) ====================== */
{slug:'delabela', nome:'Delabela', categoria:'Clínica boutique', resumo:'Sofisticação, status e autoestima.'},
{slug:'odontogon', nome:'OdontoGON', categoria:'Check-up 360°', resumo:'Confiança e clareza. Multidisciplinar.'},
{slug:'maxfocos', nome:'MaxFocos', categoria:'Educação para dentistas', resumo:'Método e aprovação. Mentoria e residência.'},
{slug:'marcelo-tavares', nome:'Marcelo Tavares', categoria:'Próteses e implantes', resumo:'Excelência técnica, segurança e resolução.'},
{slug:'clinica-lk', nome:'Clínica LK', categoria:'Protocolo e prótese', resumo:'Controle técnico interno, laboratório próprio.'}
];
