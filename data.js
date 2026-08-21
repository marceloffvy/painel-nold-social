/* ============================================================
   PAINEL NOLD — base de dados
   Ordem: nicho → posicionamento → público → linha editorial →
   canais → identidade → perfil → campanha → benchmark → pautas → ciclos
   ============================================================ */

const CLIENTES = [

/* ============================ BILIART ============================ */
{
  slug:'biliart', ativo:true, apelido:'Felipe',
  nome:'Biliart · Dr. Luiz Felipe',
  categoria:'Cirurgia bucomaxilofacial',
  resumo:'Ortognática e ATM. Autoestima e reconexão com o sorriso.',
  arroba:'@drlfmartinho', perfil:'https://www.instagram.com/drlfmartinho/',
  seguidores:'2.443', posts:'185', avatar:'img/biliart/avatar.webp',
  logo:'img/biliart/marca/felipe-claro.webp', selo:'img/biliart/marca/selo-claro.webp',

  /* ---------- 01 DIAGNÓSTICO ---------- */
  nicho:'Cirurgia bucomaxilofacial focada em ortognática e ATM.',

  posicionamento:'O cirurgião que trata a mandíbula como estrutura, não como estética. Para o adulto que convive com dor, ronco ou um rosto que o incomoda, e já desistiu de procurar resposta. Único porque une hospital de ponta, planejamento digital e uma escuta que não apressa a decisão.',

  publico:[
    {t:'Quem', d:'Adulto de 25 a 50 anos, maioria mulher, classe média e alta.'},
    {t:'Estado', d:'Já sabe que precisa. Trava por medo, custo ou descrença.'},
    {t:'Dores', d:'Estalo e travamento, dor sem diagnóstico, ronco, perfil que incomoda.'},
    {t:'Objeção', d:'"É caro", "é arriscado", "já tentei de tudo".'}
  ],

  signos:[
    {t:'Luz', d:'Quente e baixa. Sombra viva, nunca luz chapada de clínica.'},
    {t:'Cor', d:'Vinho profundo, nude, preto. Nada de branco hospitalar.'},
    {t:'Corpo', d:'Rosto em repouso, mão no queixo, perfil. Gesto contido.'},
    {t:'Ciência', d:'Raio-X, planejamento 3D, guia cirúrgica. Precisão visível.'},
    {t:'Ritmo', d:'Pausado. Sem corte nervoso, sem trilha de urgência.'}
  ],

  /* ---------- LINHA EDITORIAL ---------- */
  linhaEditorial:[
    {n:'01', t:'Vida pessoal', peso:'20%',
     d:'O homem por trás do cirurgião. Rotina, esporte, viagem, família.',
     porque:'Aproxima e gera identificação. Quem opera precisa ser gente antes de ser técnico.',
     temas:['Rotina de plantão','Esporte e disciplina','Bastidor de congresso','O que o formou']},
    {n:'02', t:'Autoridade', peso:'30%',
     d:'Depoimento, reconhecimento, comentário de paciente, resultado com contexto.',
     porque:'É o que mais converte no nicho. Prova social vence argumento técnico.',
     temas:['Depoimento no dia da cirurgia','Comentário real respondido','Caso com contexto funcional','Reconhecimento e formação']},
    {n:'03', t:'Bastidores', peso:'25%',
     d:'Bloco cirúrgico, planejamento 3D, equipe, tecnologia.',
     porque:'Fascínio e transparência. Mostra que existe método, não improviso.',
     temas:['Planejamento digital','Guia cirúrgica impressa','A equipe em sincronia','O dia da cirurgia por dentro']},
    {n:'04', t:'Dúvidas de paciente', peso:'25%',
     d:'A pergunta que chega no direct, respondida sem jargão.',
     porque:'Puxa alcance orgânico e alimenta o funil. Toda dúvida é uma pauta.',
     temas:['Estalo e travamento','Convênio cobre?','É o meu caso?','Como é a recuperação']}
  ],

  canais:[
    {c:'Reels', papel:'Alcance e autoridade', o:'Depoimento, bastidor, dúvida respondida. 30 a 60s, rosto na tela.', f:'3 por semana'},
    {c:'Carrossel', papel:'Salvamento', o:'Educação em blocos: sinais, etapas, checklist.', f:'1 por semana'},
    {c:'Estático', papel:'Posicionamento e captação', o:'Frase de marca, procedimento, convênio.', f:'1 por semana'},
    {c:'Stories', papel:'Relação diária', o:'Rotina, enquete, caixinha de dúvida, bastidor cru.', f:'Diário, 3 a 5 telas'},
    {c:'Foto', papel:'Acervo', o:'Retrato, consultório, detalhe de mão e tela.', f:'1 ensaio por trimestre'}
  ],

  /* ---------- ZAG · diferenciação radical ---------- */
  zag:{
    zig:'O nicho vende cirurgia como estética: antes e depois, bisturi como espetáculo, resultado prometido em legenda.',
    zag:'O cirurgião de estrutura. Função, respiração e dor tratadas com planejamento digital, hospital de ponta e uma escuta que não apressa.',
    only:'O único bucomaxilo que constrói o rosto a partir da função, com o bastidor aberto e a decisão sem pressa.',
    provas:['Bastidor cirúrgico real, e os 37 mil views provam','Dúvida funcional respondida sem jargão','Planejamento 3D visível em tela','Recuperação contada com honestidade']
  },

  /* ---------- melhores posts (medidos no perfil) ---------- */
  melhores:[
    {img:'img/biliart/best/b1.webp', url:'https://www.instagram.com/drlfmartinho/reel/DYiNhjeBwEY/', metrica:'37,3 mil', titulo:'Bastidor de cirurgia',
     porque:'Bloco cirúrgico real, sem narração e sem promessa. O fascínio pelo bastidor carrega o alcance sozinho: 15 vezes a base de seguidores.'},
    {img:'img/biliart/best/b2.webp', url:'https://www.instagram.com/drlfmartinho/reel/DZLb803sEWr/', metrica:'31 mil', titulo:'Cirurgia com o colega otorrino',
     porque:'A dupla em ação passa método e parceria. Bastidor com contexto clínico é o formato que fura a bolha do perfil.'},
    {img:'img/biliart/best/b3.webp', url:'https://www.instagram.com/drlfmartinho/reel/DXe0mkejv-x/', metrica:'4.678', titulo:'Vida pessoal, em viagem',
     porque:'Ele como gente, fora do jaleco. O território pessoal sustenta alcance acima da média e prepara a confiança.'}
  ],

  /* ---------- 02 IDENTIDADE ---------- */
  identidade:{
    paleta:[
      {hex:'#52151C', nome:'Vinho'}, {hex:'#D1C1B2', nome:'Nude'},
      {hex:'#8E6A5E', nome:'Terracota'}, {hex:'#191915', nome:'Quase-preto'}
    ],
    tipos:[{nome:'Playfair Display', papel:'títulos'},{nome:'Uncut Sans', papel:'subtítulos'},{nome:'Geist', papel:'texto'}],
    logos:[
      {img:'img/biliart/marca/felipe-claro.webp', t:'Lockup Dr. Luiz Felipe', d:'Nome, especialidade e CROSP'},
      {img:'img/biliart/marca/biliart-claro.webp', t:'Wordmark Biliart', d:'Marca da clínica'},
      {img:'img/biliart/marca/felipe-selo.webp', t:'Selo lfm.', d:'Assinatura do cirurgião'},
      {img:'img/biliart/marca/selo-claro.webp', t:'Selo b.', d:'Submarca Biliart'}
    ]
  },

  /* ---------- 03 LEITURA DE PERFIL ---------- */
  perfilAnalise:{
    resumo:'Comunica como especialista falando com colegas, não como marca falando com paciente. Estética boa, acervo curto.',
    diag:[
      {t:'Formato', v:'Talking head domina. Funciona, mas sozinho cansa.', s:'ok'},
      {t:'Feed', v:'Sem ritmo. Escuro demais lido de longe.', s:'ajustar'},
      {t:'Bio x entrega', v:'Promete ATM e implantes, entrega só ortognática.', s:'ajustar'},
      {t:'Atmosfera', v:'Cinematográfica e séria. Falta calor humano.', s:'ajustar'},
      {t:'Foto de perfil', v:'Retrato formal. Serve, mas distante.', s:'ok'},
      {t:'Destaques', v:'Não organizam a jornada do paciente.', s:'ajustar'}
    ],
    feedCores:{
      aut:{bg:'#52151C', fg:'#D1C1B2', l:'Autoridade'},
      duv:{bg:'#D1C1B2', fg:'#52151C', l:'Dúvidas'},
      bas:{bg:'#191915', fg:'#D1C1B2', l:'Bastidores'},
      pes:{bg:'#8E6A5E', fg:'#F6EFE8', l:'Pessoal'}
    },
    feedIdeal:[
      {t:'Depoimento', c:'aut'},{t:'Dúvida', c:'duv'},{t:'Bastidor', c:'bas'},
      {t:'Dúvida', c:'duv'},{t:'Pessoal', c:'pes'},{t:'Depoimento', c:'aut'},
      {t:'Bastidor', c:'bas'},{t:'Dúvida', c:'duv'},{t:'Autoridade', c:'aut'}
    ],
    checklist:[
      {t:'Ensaio em consultório', d:'Ele explicando, ouvindo, escaneando. Luz quente.', ok:false},
      {t:'Retratos sobre fundo da marca', d:'Meio corpo e close, com e sem jaleco.', ok:false},
      {t:'Banco de detalhes', d:'Mãos, tomografia na tela, guia 3D, instrumental.', ok:false},
      {t:'Padrão de gravação', d:'Mesma luz, enquadramento e fundo em todo talking head.', ok:false},
      {t:'Capas de destaque', d:'Por jornada: Ortognática · ATM · Apneia · Convênio.', ok:false},
      {t:'Fotos horizontais', d:'Para capa, LinkedIn e 16:9.', ok:false},
      {t:'Retrato de estúdio', d:'Usado nas artes de convênio.', ok:true},
      {t:'B-roll cirúrgico', d:'Volume bom, satura se virar assinatura única.', ok:true}
    ]
  },

  /* ---------- 04 ENSAIO FOTOGRÁFICO ---------- */
  ensaio:{
    intro:'A atmosfera do ensaio do Dr. Luiz Felipe: cinematográfica, séria e masculina, no tom vinho da marca. Abaixo, referências de foto. Ao lado, o que precisamos fotografar.',
    atmosfera:[
      {t:'Luz', d:'Quente e baixa. Sombra viva, nada de branco hospitalar.'},
      {t:'Gesto', d:'Contido. Mão no queixo, rosto em repouso, perfil.'},
      {t:'Cor', d:'Vinho, nude e quase-preto. Fundo escuro.'},
      {t:'Ciência', d:'Tomografia, guia 3D, instrumental. Precisão visível.'}
    ],
    refs:[
      {img:'img/biliart/ref/r01.webp', fonte:'https://www.pinterest.com/pin/199495458490752570/', t:'Bastidor cirúrgico, luz de foco'},
      {img:'img/biliart/ref/r02.webp', fonte:'https://www.pinterest.com/pin/402861129191864415/', t:'Retrato de autoridade, fundo escuro'},
      {img:'img/biliart/ref/r03.webp', fonte:'https://www.pinterest.com/pin/2322237302937946/', t:'Força e contenção'},
      {img:'img/biliart/ref/r04.webp', fonte:'https://www.pinterest.com/pin/49398927160250717/', t:'Planejamento: exame na tela'},
      {img:'img/biliart/ref/r05.webp', fonte:'https://www.pinterest.com/pin/561964859773104535/', t:'O detalhe nas mãos'},
      {img:'img/biliart/ref/r06.webp', fonte:'https://www.pinterest.com/pin/7318418142238762/', t:'Retrato sóbrio, luz quente'},
      {img:'img/biliart/ref/r07.webp', fonte:'https://www.pinterest.com/pin/70016969204558387/', t:'Editorial masculino, gesto contido'},
      {img:'img/biliart/ref/r08.webp', fonte:'https://www.pinterest.com/pin/83527768085608407/', t:'O tom vinho da marca'},
      {img:'img/biliart/ref/r09.webp', fonte:'https://www.pinterest.com/pin/25684660372387472/', t:'Contemplação, ciência na mesa'}
    ],
    shotlist:[
      {t:'Retrato do cirurgião', d:'Meio corpo e close, luz quente e baixa, gesto contido.', c:'aut'},
      {t:'Bloco cirúrgico', d:'Bastidor com a luz de foco, a equipe em sincronia.', c:'bas'},
      {t:'Planejamento 3D', d:'Tomografia na tela, guia cirúrgica, mão no queixo.', c:'bas'},
      {t:'O detalhe nas mãos', d:'Instrumental, guia impressa, o objeto do procedimento.', c:'aut'},
      {t:'Perfil e mandíbula', d:'Rosto em repouso, o perfil que ele trata.', c:'pes'},
      {t:'Retrato editorial vinho', d:'Fundo da marca, o tom vinho, terno.', c:'aut'},
      {t:'Consultório sério', d:'O ambiente, a tela do planejamento ao fundo.', c:'bas'},
      {t:'Depoimento em vídeo', d:'Paciente no dia da cirurgia, luz quente, rosto na tela.', c:'duv'}
    ]
  },

  /* ---------- 05 CAMPANHA ---------- */
  campanha:{
    nome:'O perfil que você procura na foto. Construído aqui.',
    deck:'https://biliart-pres.vercel.app/',
    status:'No ar desde julho. Onda 1 publicada.',
    eixos:[{t:'Estético', d:'Comportamento como sintoma.'},{t:'Funcional', d:'ATM, apneia e dor.'}],
    alerta:'Os quatro fantasmas (boca amarrada, dormência, cicatriz, convênio) já foram ao ar. Não repetir.'
  },

  /* ---------- 05 BENCHMARK (perfis +10k, dados reais) ---------- */
  benchmark:[
    {at:'@drmanoelroque', url:'https://www.instagram.com/drmanoelroque/', porte:'20,1k',
     perfil:'Médico e cirurgião maxilofacial. São Paulo e Santa Catarina.',
     mecanismo:'Depoimento de paciente e antes/depois. Os três maiores reels dele são isso.',
     leitura:'Prova social crua vence produção sofisticada. Os comentários viram consultório.'},
    {at:'@cirurgia.ortognatica', url:'https://www.instagram.com/cirurgia.ortognatica/', porte:'10,1k',
     perfil:'Fernando Morando, +20 anos, ortognática minimamente invasiva.',
     mecanismo:'Alerta clínico e carona em assunto do momento.',
     leitura:'O reel de 33 mil views gerou comentário de intenção de compra direta.'},
    {at:'@drorionhaas', url:'https://www.instagram.com/drorionhaas/', porte:'10,6k',
     perfil:'Stanford Sleep Surgery, PhD PUCRS. Porto Alegre.',
     mecanismo:'Tecnologia, precisão e equipe. Alta autoridade acadêmica.',
     leitura:'Audiência mais profissional que paciente. Aproveitar o mecanismo, não o público.'}
  ],

  sintese:{
    alta:['Depoimento de paciente em vídeo','ATM e dor orofacial','Bastidor de tecnologia'],
    saturado:['Antes e depois solto','Talking head genérico','Jargão de "minimamente invasiva"'],
    lacuna:['ATM com voz de marca','Quem foi indicado pelo ortodontista','Recuperação semana a semana']
  },

  /* ---------- 06 PAUTAS (3 por benchmark, de posts reais) ---------- */
  pautas:[
    {n:'01', bm:'@drmanoelroque', cls:'autoridade',
     ref:{url:'https://www.instagram.com/drmanoelroque/reel/DYxxHTGhQ1t/', metrica:'40,1 mil views',
          o:'Depoimento da paciente Gabriela sobre ATM.',
          porque:'Os comentários viraram desabafo coletivo: "sofro há 7 anos", "já usei placa, botox e nada resolveu", "a boca trava todo dia". Dor real, público desassistido.'},
     tema:'O depoimento de quem convivia com dor de ATM',
     angulo:'Paciente real contando o antes, sem roteiro decorado. O Felipe só escuta e traduz o que aconteceu.',
     desdobra:{
       reels:'Paciente fala à câmera por 40s sobre como era conviver com a dor. Corte para o Felipe explicando em uma frase o que foi feito. Sem música dramática.',
       carrossel:'Os 6 sinais que essa paciente ignorou por anos. Um por slide, com a fala dela como legenda.',
       stories:'3 telas: a frase mais forte do depoimento em tipografia · caixinha "você sente algum desses?" · print de comentário real respondido.',
       estatico:'Card com a frase do paciente entre aspas sobre fundo vinho, assinatura do Felipe embaixo.'
     }},

    {n:'02', bm:'@drmanoelroque', cls:'autoridade',
     ref:{url:'https://www.instagram.com/drmanoelroque/reel/DYihRSmhiCw/', metrica:'37,6 mil views',
          o:'Depoimento do paciente Fabrízio no dia da cirurgia, ligado a apneia.',
          porque:'Depoimento gravado no dia gera tensão e verdade. Conecta estética com respiração.'},
     tema:'O dia da cirurgia contado por quem estava lá',
     angulo:'Não é o médico dizendo que vai dar certo. É o paciente dizendo por que decidiu.',
     desdobra:{
       reels:'Paciente antes de entrar, uma frase. Bastidor da equipe. Paciente no pós, uma frase. 50s.',
       carrossel:'A linha do tempo de um dia de cirurgia, hora a hora, com foto de bastidor.',
       stories:'Sequência ao vivo do dia: chegada, preparo, equipe, primeira palavra no pós.',
       estatico:'Retrato do paciente com a frase "eu só queria dormir e acordar descansado".'
     }},

    {n:'03', bm:'@drmanoelroque', cls:'duvidas',
     ref:{url:'https://www.instagram.com/drmanoelroque/reel/CwOWwlSBq9e/', metrica:'64 mil views',
          o:'Antes e depois de ortognática, o maior alcance do perfil.',
          porque:'Transformação visual ainda é o que mais viraliza. Mas é o que a Biliart não faz sem autorização.'},
     tema:'A transformação sem mostrar o rosto de ninguém',
     angulo:'Virar a limitação em diferencial: mostrar a mudança pelo planejamento 3D, não pelo rosto do paciente.',
     desdobra:{
       reels:'Tela do software girando o crânio em 3D, do antes ao planejado. Narração explicando o que muda na função.',
       carrossel:'O que muda além do rosto: mordida, respiração, sono, dor. Um por slide, com render 3D.',
       stories:'Enquete "você acha que ortognática é estética ou função?" e depois a resposta.',
       estatico:'Render 3D do perfil ósseo com a frase "o que muda por dentro".'
     }},

    {n:'04', bm:'@cirurgia.ortognatica', cls:'duvidas',
     ref:{url:'https://www.instagram.com/cirurgia.ortognatica/reel/DHwY1fdBcDa/', metrica:'33 mil views',
          o:'Caso de retrabalho por falha de outro profissional.',
          porque:'Gerou comentários de intenção de compra: "em breve agendarei uma consulta", "preciso de uma ortognática".'},
     tema:'Por que algumas cirurgias precisam ser refeitas',
     angulo:'Falar de critério sem atacar colega. O foco é o que perguntar antes de escolher, não quem errou.',
     desdobra:{
       reels:'As 5 perguntas que você deveria fazer antes de marcar uma ortognática. Direto na câmera, 50s.',
       carrossel:'Checklist do que avaliar no cirurgião: formação, hospital, planejamento, acompanhamento.',
       stories:'Caixinha de pergunta "o que te deixa insegura em marcar?" e respostas em sequência.',
       estatico:'Frase "a primeira cirurgia é a mais fácil de acertar" sobre fundo vinho.'
     }},

    {n:'05', bm:'@cirurgia.ortognatica', cls:'duvidas',
     ref:{url:'https://www.instagram.com/cirurgia.ortognatica/reel/Dad83NfTtuM/', metrica:'6.931 views',
          o:'Explica ortognática usando o caso do Vini Jr.',
          porque:'Carona em assunto do momento. Traz público que nunca buscaria o tema sozinho.'},
     tema:'Ortognática em rosto conhecido',
     angulo:'Usar caso público já noticiado para explicar o procedimento, sempre com a ressalva de que cada anatomia é única.',
     desdobra:{
       reels:'Análise técnica e respeitosa de um perfil público que passou por ortognática. 45s.',
       carrossel:'O que a imprensa chamou de harmonização e o que era de fato cirurgia óssea.',
       stories:'Print da notícia, depois a explicação em 2 telas.',
       estatico:'Card comparando o que é cirurgia óssea e o que é preenchimento.'
     }},

    {n:'06', bm:'@cirurgia.ortognatica', cls:'duvidas',
     ref:{url:'https://www.instagram.com/p/DbB81PTzSiI/', metrica:'post educativo',
          o:'"Mastigar sempre do mesmo lado pode parecer apenas um hábito."',
          porque:'Nomear um hábito banal como possível sintoma. Mecânica de reconhecimento.'},
     tema:'Hábitos que parecem manias e são sintoma',
     angulo:'Já é o território da Biliart. Estender com hábitos que a campanha ainda não citou.',
     desdobra:{
       reels:'Cinco hábitos que você tem e não sabe por quê. Ritmo seco, um a cada 6s.',
       carrossel:'Um hábito por slide, com ilustração de linha anatômica.',
       stories:'Enquete por hábito: "você faz isso?" com resultado revelado no fim.',
       estatico:'Card tipográfico com o hábito mais reconhecível.'
     }},

    {n:'07', bm:'@drorionhaas', cls:'bastidores',
     ref:{url:'https://www.instagram.com/drorionhaas/reel/DMYlljVv5Qv/', metrica:'5.935 views',
          o:'Guias cirúrgicas impressas em 3D: "o planejamento vira realidade".',
          porque:'Fascínio por precisão. Objeto físico é mais concreto que discurso de tecnologia.'},
     tema:'A peça impressa que guia a cirurgia',
     angulo:'Mostrar o objeto na mão. O plano deixa de ser promessa e vira peça física.',
     desdobra:{
       reels:'Macro da guia saindo da impressora, indo para a mão, sendo posicionada. Narração curta.',
       carrossel:'Do escaneamento à guia: 5 etapas do planejamento digital.',
       stories:'Bastidor cru da impressão 3D em timelapse.',
       estatico:'Foto macro da guia sobre fundo vinho com a frase "seu plano, impresso".'
     }},

    {n:'08', bm:'@drorionhaas', cls:'bastidores',
     ref:{url:'https://www.instagram.com/drorionhaas/reel/DK20LLgo7T0/', metrica:'4.471 views',
          o:'"Cirurgia ortognática é sinônimo de trabalho conjunto." Apresenta a equipe.',
          porque:'Mostrar time reduz o medo. O paciente entende que não depende de uma pessoa só.'},
     tema:'Quem mais está na sala além do cirurgião',
     angulo:'Apresentar a equipe pelo nome e função. Segurança vem de estrutura, não de herói.',
     desdobra:{
       reels:'Cada profissional se apresenta em uma frase, cortes rápidos. 40s.',
       carrossel:'A sala por dentro: quem faz o quê, um por slide.',
       stories:'Bastidor do preparo da sala antes do paciente entrar.',
       estatico:'Foto da equipe com a frase "ninguém opera sozinho".'
     }},

    {n:'09', bm:'@drorionhaas', cls:'pessoal',
     ref:{url:'https://www.instagram.com/drorionhaas/reel/DYNU752x1fE/', metrica:'11,4 mil views',
          o:'Curso internacional de cirurgia na Cidade do México.',
          porque:'Formação contínua vira autoridade percebida, mesmo com público leigo.'},
     tema:'Onde o cirurgião vai estudar',
     angulo:'Congresso e formação contados de forma humana, não como currículo.',
     desdobra:{
       reels:'Bastidor de viagem e congresso com narração pessoal do que ele foi buscar.',
       carrossel:'O que eu trouxe de novo desse congresso para os meus pacientes.',
       stories:'Sequência da viagem em tempo real, com bastidor de aula.',
       estatico:'Foto no evento com a frase "o que aprendi lá volta pra cá".'
     }}
  ],

  /* posts de apresentação · fixados e prioritários (Felipe não usa casos clínicos) */
  fixados:[
    {n:'01', tema:'Prazer, Dr. Luís Felipe', papel:'Apresenta o cirurgião. O primeiro post que o paciente vê ao chegar no perfil.', precisa:'ensaio do cirurgião e identidade',
     slides:['Capa: retrato e a especialidade','Quem é: hospital de ponta, planejamento digital','A filosofia: a mandíbula como estrutura','Para quem: dor, ronco, o perfil que incomoda','O método: 3D e guia cirúrgica','Chamada: avalie o seu caso']},
    {n:'02', tema:'A transformação vai além da estética', papel:'Fala da transformação do paciente, por função e autoestima. Post de captação.', precisa:'ensaio e um depoimento (sem antes e depois sem autorização escrita)',
     slides:['Capa: "mais que um perfil novo"','O incômodo funcional e estético','O planejamento em 3D','O depois: função e autoestima','Um depoimento real, com autorização','Chamada: comece a sua']}
  ],

  /* ---------- 07 CICLOS ---------- */
  ciclos:[{
    slug:'2026-08', titulo:'Sinais que viram rotina', periodo:'Agosto 2026',
    resumo:'Sistema visual "Radiografia": alternância de fundo com raio-X e ilustração anatômica.',
    mix:'5 educação e posicionamento · 2 conversão · 2 estáticos',
    pecas:[
      {id:'c01', tipo:'Carrossel · 9 slides', titulo:'ATM', cls:'educação', dir:'c01', n:9, txt:'c01',
       compliance:'Sem promessa de cura. Slide 8 diz que nem todo caso é cirúrgico. CRO na assinatura.'},
      {id:'c04', tipo:'Carrossel · 9 slides', titulo:'Apneia e ronco', cls:'alta', dir:'c04', n:9, txt:'c04',
       compliance:'Apneia é diagnóstico multiprofissional. Não afirmar cura.'},
      {id:'c05', tipo:'Carrossel · 9 slides', titulo:'Comportamentos', cls:'posicionamento', dir:'c05', n:9, txt:'c05',
       compliance:'Sem antes e depois. Ilustração de linha, nunca paciente identificável.'},
      {id:'c06', tipo:'Carrossel · 9 slides', titulo:'Recuperação', cls:'educação', dir:'c06', n:9, txt:'c06',
       compliance:'Prazos como média. Sem prazo absoluto de cura.'},
      {id:'c07', tipo:'Carrossel · 7 slides', titulo:'Checklist ATM', cls:'conversão', dir:'c07', n:9, txt:'c07',
       compliance:'Sem preço, sem promessa. CRO na peça de fecho.'},
      {id:'r03', tipo:'Reel · roteiro', titulo:'Indicação do ortodontista', cls:'educação', txt:'r03',
       compliance:'"Pode ser cirúrgico". Ênfase na parceria orto e cirurgia.',
       nota:'Roteiro e legenda prontos. Foto do Dr. Luiz Felipe na pasta.'},
      {id:'r08', tipo:'Reel · roteiro', titulo:'Meu caso é cirúrgico', cls:'conversão', txt:'r08',
       compliance:'Deixa explícito que a avaliação pode concluir por não operar.',
       nota:'Roteiro e legenda prontos. Foto do Dr. Luiz Felipe na pasta.'},
      {id:'e09', tipo:'Estáticos · 4 arquivos', titulo:'Convênios', cls:'conversão', txt:'e09',
       imgs:['img/biliart/est/mentoplastia-45.webp','img/biliart/est/ortognatica-45.webp',
             'img/biliart/est/mentoplastia-916.webp','img/biliart/est/ortognatica-916.webp'],
       labels:['Mentoplastia 4:5','Ortognática 4:5','Mentoplastia 9:16','Ortognática 9:16'],
       compliance:'Sem botão desenhado (regra Meta). Convênios: Unimed, Amil, Alice, Porto, Bradesco Saúde, SulAmérica.'}
    ]
  }]
},

/* ============================ IDÉE ============================ */
{
  slug:'idee', ativo:true, apelido:'Roberto',
  nome:'Idée · Dr. Roberto Simonetti', categoria:'Ortodontia e alinhadores',
  resumo:'Ortodontia para a família, da criança ao adulto. O professor experiente que olha para a pessoa antes do dente.',
  arroba:'@robertosimonetti_ortodontia', perfil:'https://www.instagram.com/robertosimonetti_ortodontia/',
  seguidores:'3.097', avatar:'img/idee/avatar.webp',

  /* ---------- 01 DIAGNÓSTICO ---------- */
  nicho:'Ortodontia para a família, do primeiro aparelho da criança ao alinhador do adulto.',
  posicionamento:'O ortodontista de confiança da família, com trinta anos de estrada. Cuida do sorriso em todas as fases, da primeira avaliação da criança ao alinhador do adulto, e olha para a pessoa antes de olhar para o dente. A sobriedade de quem já viu de tudo e explica sem pressa.',
  publico:[
    {t:'Quem', d:'A família. O pai e a mãe que escolhem por confiança, e o adulto que cuida do próprio sorriso.'},
    {t:'Momento', d:'Chegou a hora de cuidar do sorriso, do filho ou do próprio.'},
    {t:'Dor', d:'Quer um profissional experiente e de confiança para tratar a família toda.'},
    {t:'Trava', d:'Cansou de indicação sem critério. Quer seriedade e alguém que explique.'}
  ],
  signos:[
    {t:'Luz', d:'Natural e limpa, um pouco mais fria. Janela e sombra macia.'},
    {t:'Cor', d:'Azul profundo e dourado. Sóbrio e elegante.'},
    {t:'Presença', d:'O professor experiente, olhar que escuta. Gesto contido.'},
    {t:'Alcance', d:'Sorrisos de todas as idades, da criança ao adulto.'},
    {t:'Ritmo', d:'Calmo e maduro. O tempo de quem tem estrada.'}
  ],
  linhaEditorial:[
    {n:'01', t:'Vida pessoal', peso:'22%', d:'O homem por trás do ortodontista. Pai, professor, trinta anos de história.', porque:'Aproxima e gera identificação. Pai confia em quem também é pai.', temas:['por que virei ortodontista','rotina de professor','30 anos de profissão','valores de família']},
    {n:'02', t:'Autoridade', peso:'28%', d:'Depoimento de famílias, caso com contexto em qualquer idade, reconhecimento.', porque:'Prova social é o que mais converte. Uma família indica para outra.', temas:['depoimento de família','antes e depois autorizado','caso de adolescente e adulto','mestrado e 30 anos']},
    {n:'03', t:'Bastidores', peso:'20%', d:'O consultório sóbrio, o escaneamento, o cuidado em cada fase.', porque:'Mostra método e seriedade. Tira a insegurança antes da primeira consulta.', temas:['a primeira visita','o escaneamento 3D','o cuidado em cada idade','o ambiente e a equipe']},
    {n:'04', t:'Dúvidas de paciente', peso:'30%', d:'A pergunta que o pai e a mãe fazem, respondida sem jargão.', porque:'Puxa alcance orgânico de busca e é a porta de entrada da família.', temas:['qual a idade certa?','meu filho precisa de aparelho?','aparelho ou alinhador?','e se ele não cuidar?']}
  ],
  canais:[
    {c:'Reels', papel:'Alcance e proximidade', o:'Dúvida de pai e mãe, bastidor acolhedor, depoimento. 30 a 60s, rosto na tela.', f:'3 por semana'},
    {c:'Carrossel', papel:'Salvamento', o:'Idade certa, etapas do tratamento, aparelho ou alinhador.', f:'1 por semana'},
    {c:'Estático', papel:'Posicionamento e captação', o:'Frase para a família, avaliação, convênio.', f:'1 por semana'},
    {c:'Stories', papel:'Relação diária', o:'Rotina, enquete de mãe, caixinha de dúvida, bastidor cru.', f:'Diário, 3 a 5 telas'},
    {c:'Foto', papel:'Acervo', o:'Criança e adolescente, família, o professor, consultório acolhedor.', f:'1 ensaio por trimestre'}
  ],

  /* ---------- ZAG · diferenciação radical ---------- */
  zag:{
    zig:'Ortodontia no Instagram fala com colega dentista, em tom técnico, e trata alinhador como produto de vitrine.',
    zag:'O professor da família. Trinta anos de estrada, olha a pessoa antes do dente e acompanha o sorriso da infância à vida adulta.',
    only:'A única ortodontia que acompanha a família inteira com a calma de um professor de trinta anos.',
    provas:['Caso real contado como história, o melhor do perfil','Dúvida de pai e mãe respondida sem pressa','O professor que aparece como gente','Sorrisos de todas as idades no mesmo feed']
  },

  /* ---------- melhores posts (medidos no perfil) ---------- */
  melhores:[
    {img:'img/idee/best/b1.webp', url:'https://www.instagram.com/robertosimonetti_ortodontia/reel/DX65zKZxemA/', metrica:'3.369', titulo:'Ele em cena no consultório',
     porque:'O melhor do perfil é ele mostrando o espaço e o método. Autoridade demonstrada em cena, no lugar de declarada em texto.'},
    {img:'img/idee/best/b2.webp', url:'https://www.instagram.com/robertosimonetti_ortodontia/reel/DYfaaRtRmHj/', metrica:'1.414', titulo:'Caso orto-cirúrgico',
     porque:'Caso real com rosto e história. É o formato que mais aproxima o público de paciente e dobra a média da conta.'},
    {img:'img/idee/best/b3.webp', url:'https://www.instagram.com/robertosimonetti_ortodontia/reel/DXusmm5sQYd/', metrica:'1.376', titulo:'Conversa no sofá',
     porque:'A entrevista dá ritmo e tira o peso do talking head solo. Bom molde para as dúvidas de pais em dupla.'}
  ],

  /* ---------- 02 IDENTIDADE ---------- */
  identidade:{
    logos:[
      {img:'img/idee/marca/idee-branco.webp', t:'Assinatura', d:'Marca principal, versão clara.'},
      {img:'img/idee/marca/lockup-azul.webp', t:'Lockup completo', d:'Símbolo e nome juntos.'},
      {img:'img/idee/marca/simbolo-azul.webp', t:'Símbolo', d:'Ícone para avatar e selo.'},
      {img:'img/idee/marca/reduzido-azul.webp', t:'Reduzida', d:'Para aplicações pequenas.'}
    ],
    paleta:[
      {hex:'#3C405B', nome:'Azul profundo'},
      {hex:'#C69C6C', nome:'Dourado'},
      {hex:'#2B2B33', nome:'Grafite'},
      {hex:'#EDE7DC', nome:'Areia clara'}
    ],
    tipos:[
      {papel:'Títulos', nome:'Avenir Next Heavy'},
      {papel:'Texto', nome:'Avenir Next DemiBold'},
      {papel:'Apoio e labels', nome:'Avenir Next Regular'}
    ]
  },

  /* ---------- 03 LEITURA DE PERFIL ---------- */
  perfilAnalise:{
    resumo:'Autoridade real de trinta anos, mas o perfil conversa com colega de profissão, não com o pai e a mãe. Os reels são quase todos ele sozinho falando para a câmera, e o alcance fica entre 277 e 700 views. O feed mistura paciente, mentoria e formatura, e a família que procura por ele se perde no caminho.',
    diag:[
      {t:'Formato', v:'Talking head sério domina. Ele sozinho, pouco ritmo.', s:'ajustar'},
      {t:'Alcance', v:'Reels de 277 a 700 views. Ainda não escala.', s:'ajustar'},
      {t:'Público', v:'Fala com colega dentista, não com o pai e a mãe.', s:'ajustar'},
      {t:'Feed', v:'Mistura paciente, mentoria e formatura. Sem foco.', s:'ajustar'},
      {t:'Foto de perfil', v:'Retrato sério. Serve, dá para aproximar.', s:'ok'},
      {t:'Base', v:'Muitos casos de criança e adolescente. Matéria-prima ótima.', s:'ok'}
    ],
    feedCores:{
      pes:{bg:'#3C405B', fg:'#EDE7DC', l:'Vida pessoal'},
      aut:{bg:'#C69C6C', fg:'#2B2B33', l:'Autoridade'},
      bas:{bg:'#2B2B33', fg:'#C69C6C', l:'Bastidores'},
      duv:{bg:'#EDE7DC', fg:'#3C405B', l:'Dúvidas'}
    },
    feedIdeal:[
      {t:'Dúvida', c:'duv'},{t:'Autoridade', c:'aut'},{t:'Pessoal', c:'pes'},
      {t:'Bastidor', c:'bas'},{t:'Dúvida', c:'duv'},{t:'Autoridade', c:'aut'},
      {t:'Pessoal', c:'pes'},{t:'Dúvida', c:'duv'},{t:'Bastidor', c:'bas'}
    ],
    checklist:[
      {t:'Depoimento de mãe e pai', d:'Uma família contando a transformação do filho, com autorização.', ok:false},
      {t:'Ensaio do professor com crianças', d:'Atendendo, ouvindo, tirando o medo. Luz clara.', ok:false},
      {t:'Escaneamento e a tela 3D', d:'A câmera intraoral e o antes e depois no monitor.', ok:false},
      {t:'Sorriso do adolescente', d:'Antes e depois autorizado, com naturalidade.', ok:false},
      {t:'Separar a conta de mentoria', d:'Formatura e curso de dentista saem do feed de família.', ok:false},
      {t:'Padrão de gravação', d:'Mesma luz, enquadramento e fundo em todo talking head.', ok:false},
      {t:'Retratos sobre fundo da marca', d:'Azul e dourado, meio corpo e close, com e sem jaleco.', ok:false},
      {t:'Fotos horizontais', d:'Para capa, LinkedIn e 16:9.', ok:false}
    ]
  },

  /* ---------- 04 ENSAIO FOTOGRÁFICO ---------- */
  ensaio:{
    intro:'A atmosfera do ensaio do Dr. Roberto: sóbria e sofisticada, luz natural e a elegância discreta de quem cuida da família há trinta anos, da criança ao adulto. Referências masculinas inspiradas no mood do perfil da Lara Passos. Abaixo, as fotos. Ao lado, o que fotografar.',
    atmosfera:[
      {t:'Luz', d:'Natural e limpa. Janela e sombra macia, um toque mais fria.'},
      {t:'Paleta', d:'Neutros sóbrios com azul e dourado. Quiet luxury.'},
      {t:'Presença', d:'O professor experiente. Olhar que escuta, gesto contido.'},
      {t:'Alcance', d:'A família toda, da criança ao adulto. Sem infantilizar.'}
    ],
    refs:[
      {img:'img/idee/ref/r01.webp', fonte:'https://www.pinterest.com/pin/158400111892346729/', t:'Luz de janela, sobriedade'},
      {img:'img/idee/ref/r02.webp', fonte:'https://www.pinterest.com/pin/52072939437860384/', t:'O professor experiente'},
      {img:'img/idee/ref/r03.webp', fonte:'https://www.pinterest.com/pin/54254370507840461/', t:'Próximo, olhando para a pessoa'},
      {img:'img/idee/ref/r04.webp', fonte:'https://www.pinterest.com/pin/322781498316627205/', t:'Elegância discreta'},
      {img:'img/idee/ref/r05.webp', fonte:'https://www.pinterest.com/pin/37084396931797250/', t:'O tempo de quem tem estrada'},
      {img:'img/idee/ref/r06.webp', fonte:'https://www.pinterest.com/pin/232850243247266490/', t:'O olhar que escuta'},
      {img:'img/idee/ref/r07.webp', fonte:'https://www.pinterest.com/pin/225250418858996525/', t:'Sofisticação sem esforço'},
      {img:'img/idee/ref/r08.webp', fonte:'https://www.pinterest.com/pin/844493672789084/', t:'Autoridade sóbria'},
      {img:'img/idee/ref/r09.webp', fonte:'https://www.pinterest.com/pin/372602569194234859/', t:'A confiança de trinta anos'}
    ],
    shotlist:[
      {t:'Retrato do professor', d:'Meio corpo e close, luz de janela. Sóbrio e elegante.', c:'pes'},
      {t:'O olhar que escuta', d:'Em consulta, atento à pessoa antes do dente.', c:'bas'},
      {t:'A família reunida', d:'Da criança ao adulto, o ortodontista de todas as fases.', c:'aut'},
      {t:'Escaneamento e a tela 3D', d:'A câmera intraoral e o planejamento no monitor.', c:'bas'},
      {t:'Sorrisos de cada idade', d:'Adolescente e adulto, com naturalidade e autorização.', c:'aut'},
      {t:'O consultório sóbrio', d:'O ambiente limpo e sério, a cara da marca.', c:'duv'},
      {t:'Detalhes da marca', d:'Alinhador na mão, azul e dourado, os materiais.', c:'aut'},
      {t:'Bastidor com experiência', d:'Um dia de trabalho, a estrada em ação.', c:'bas'}
    ]
  },

  /* ---------- 05 CAMPANHA ---------- */
  campanha:{
    status:'No ar · frente adulta, hoje secundária',
    nome:'Nunca é tarde para corrigir. Tarde é continuar adiando.',
    eixos:[
      {t:'Frio', d:'desperta desejo e discrição'},
      {t:'Médio', d:'quebra a objeção da idade'},
      {t:'Aquecido', d:'autoridade, prova e avaliação'}
    ],
    alerta:'O posicionamento do perfil passou a conversar com a família. Esta campanha vira a frente adulta e secundária.',
    deck:'https://idee-nunca-e-tarde.vercel.app/'
  },

  /* ---------- 06 BENCHMARK ---------- */
  benchmark:[
    {at:'@larapassosalvim', url:'https://www.instagram.com/larapassosalvim/', porte:'13,2 mil', perfil:'Ortodontista e creator, entre o Rio e Juiz de Fora.', mecanismo:'Vida pessoal e leveza de creator. Os maiores reels são pessoais: a filha (32,2 mil), um get ready (26,8 mil) e o anúncio aos amigos (16,2 mil).', leitura:'Quem cresce no nicho humaniza primeiro. Para o Roberto, é o professor-pai que aproxima, não o técnico.'},
    {at:'@odontologiadicas', url:'https://www.instagram.com/odontologiadicas/', porte:'193 mil', perfil:'Andréa Figueiredo, conteúdo de odontologia, Minas Gerais.', mecanismo:'Relatable e curiosidade. Reels de 35,7 mil (reação coletiva), 32,3 mil (curiosidade) e o "do outro lado da cadeira" (23,9 mil).', leitura:'O gancho "eu também" e "sinais" faz o pai marcar e salvar. A audiência dela é de dentista, então viramos o gancho para a mãe e o pai.'},
    {at:'@odontopediatria.brasil', url:'https://www.instagram.com/odontopediatria.brasil/', porte:'61,1 mil', perfil:'A maior comunidade de odontopediatria do mundo. Fala com dentista.', mecanismo:'Educação e comunidade para o dentista, não para a família. Conteúdo técnico e institucional.', leitura:'Contraexemplo revelador. O maior perfil do nicho fala com colega. A conversa com o pai e a mãe está aberta e quase ninguém ocupa.'}
  ],
  sintese:{
    alta:['O humano do profissional, o professor-pai','Relatable e sinais que o pai reconhece','A criança e o adolescente com naturalidade'],
    saturado:['Talking head técnico e sério','Conteúdo para colega dentista','Caso clínico solto, sem história'],
    lacuna:['A conversa direta com o pai e a mãe','A hora certa de levar a criança','O medo do aparelho, tratado com calma']
  },

  /* ---------- 07 PAUTAS ---------- */
  pautas:[
    {n:'01', bm:'@larapassosalvim', cls:'Vida pessoal', tema:'Por que virei ortodontista',
     ref:{url:'https://www.instagram.com/larapassosalvim/reel/DYLB2ERAjIo/', metrica:'16,2 mil views', o:'Contar aos amigos que seria pai. Emoção em primeira pessoa.', porque:'Narrativa emocional pessoal engaja e faz salvar.'},
     angulo:'A história de origem contada com emoção. Pai confia em quem também é pai e professor.',
     desdobra:{reels:'Ele conta o que o fez virar ortodontista, um caso de criança que marcou. Direto na câmera, luz quente. 50s.', carrossel:'A história em capítulos, com fotos antigas.', stories:'Enquete "o que te fez escolher sua profissão?" e a resposta.', estatico:'Foto antiga dele com a frase de origem.'}},
    {n:'02', bm:'@larapassosalvim', cls:'Bastidores', tema:'Vem comigo num dia de consultório',
     ref:{url:'https://www.instagram.com/larapassosalvim/reel/DZN--mGAwOp/', metrica:'26,8 mil views', o:'Get ready with me, rotina e leveza.', porque:'Bastidor leve aproxima e viraliza mais que conteúdo técnico.'},
     angulo:'Um dia real no consultório, leve, mostrando o ambiente que acolhe a criança.',
     desdobra:{reels:'POV de um dia: a recepção, uma criança chegando sem medo, o escaneamento, o café. 45s.', carrossel:'Um dia na Idée em seis quadros.', stories:'A sequência do dia em tempo real.', estatico:'Foto de bastidor com legenda do momento.'}},
    {n:'03', bm:'@larapassosalvim', cls:'Autoridade', tema:'30 anos, milhares de sorrisos acompanhados',
     ref:{url:'https://www.instagram.com/larapassosalvim/reel/DYIjOLnAsuS/', metrica:'32,2 mil views', o:'Nascimento da filha. O maior alcance do perfil, e é vida pessoal.', porque:'Um marco humano real alcança mais que qualquer caso clínico.'},
     angulo:'Um marco de trinta anos como marca humana. Sorrisos acompanhados desde criança, contados com emoção.',
     desdobra:{reels:'Linha do tempo dos 30 anos sobre fotos de acervo, voz em off, ritmo calmo. 40s.', carrossel:'Trinta anos de sorrisos, um capítulo por slide.', stories:'Bastidor da rotina com caixinha de pergunta.', estatico:'Retrato dele com a frase sobre por que faz o que faz.'}},
    {n:'04', bm:'@odontologiadicas', cls:'Dúvidas', tema:'Sinais de que seu filho vai precisar de aparelho',
     ref:{url:'https://www.instagram.com/odontologiadicas/reel/DUMZ5J0DVyA/', metrica:'32,3 mil views', o:'Curiosidade sobre um equipamento novo. Prende pela novidade.', porque:'Curiosidade e "sinais" surpreendem, retêm e fazem comentar.'},
     angulo:'Os sinais que o pai e a mãe deveriam observar na boca do filho, com didática de professor.',
     desdobra:{reels:'Lista rápida de sinais (dente nascendo torto, respira pela boca, ronca, morde errado). Modelo na mão. 40s.', carrossel:'Um sinal por slide, tom acolhedor.', stories:'Quiz "verdadeiro ou falso" sobre a idade de avaliar.', estatico:'Card com o sinal mais comum e a chamada de avaliação.'}},
    {n:'05', bm:'@odontologiadicas', cls:'Dúvidas', tema:'Coisas que todo pai de criança com aparelho vive',
     ref:{url:'https://www.instagram.com/odontologiadicas/reel/DV4j0FgDcjk/', metrica:'35,7 mil views', o:'Reel de reação coletiva. Nos comentários é só "eu também".', porque:'Reconhecimento coletivo faz o pai marcar outro pai e salvar.'},
     angulo:'Relatable para pais: as cenas que todo pai de criança com aparelho reconhece.',
     desdobra:{reels:'Lista rápida de cenas (esconder o doce, a borrachinha que solta, a escovação de guerra). Áudio em alta. 30s.', carrossel:'Uma cena por slide, com humor leve.', stories:'Enquete "seu filho faz isso?".', estatico:'Card com a cena mais reconhecível.'}},
    {n:'06', bm:'@odontologiadicas', cls:'Bastidores', tema:'Quando a criança tem medo do dentista',
     ref:{url:'https://www.instagram.com/odontologiadicas/reel/DYqD2JiTHVb/', metrica:'23,9 mil views', o:'A dentista conta quando esteve do outro lado da cadeira, com medo.', porque:'Vulnerabilidade real gera identificação e compartilhamento.'},
     angulo:'O medo da criança, tratado com calma. O pai vê como o filho é acolhido antes de sentar na cadeira.',
     desdobra:{reels:'Ele mostra como recebe uma criança com medo: o tom de voz, o passo a passo, sem pressa. 50s.', carrossel:'Como preparar seu filho para a primeira consulta.', stories:'Caixinha "seu filho tem medo de dentista?".', estatico:'Frase acolhedora entre aspas, sobre fundo azul.'}},
    {n:'07', bm:'@odontopediatria.brasil', cls:'Dúvidas', conv:true, tema:'Qual a idade certa de levar ao ortodontista?',
     ref:{url:'https://www.instagram.com/odontopediatria.brasil/', metrica:'contraexemplo · 61,1 mil', o:'A maior comunidade responde ao dentista, não à mãe e ao pai.', porque:'A dúvida número um dos pais fica sem uma resposta simples.'},
     angulo:'Responder direto a pergunta que todo pai faz: a hora certa de levar a criança ao ortodontista.',
     desdobra:{reels:'Ele responde em 40s: a idade recomendada, por que não adiar, o que é avaliado. Chamada para avaliar.', carrossel:'A linha do tempo do sorriso da criança, idade por idade.', stories:'Caixinha "quantos anos tem seu filho?" com orientação.', estatico:'Card "a idade certa de avaliar" com chamada de avaliação.'}},
    {n:'08', bm:'@odontopediatria.brasil', cls:'Autoridade', conv:true, tema:'Depoimento de mãe',
     ref:{url:'https://www.instagram.com/odontopediatria.brasil/', metrica:'contraexemplo · institucional', o:'O perfil mostra números e técnica, não histórias de família.', porque:'A prova que convence pai é outra mãe, não um selo.'},
     angulo:'Uma mãe contando para outra a transformação do filho. Prova social que fala com quem decide.',
     desdobra:{reels:'Mãe falando em uma frase o que mudou no filho depois do tratamento. Rosto e emoção. 40s.', carrossel:'A jornada da família: a dúvida, a decisão, o resultado.', stories:'Repost de mensagem real de mãe, com autorização por escrito.', estatico:'Depoimento entre aspas, com o primeiro nome e a idade do filho.'}},
    {n:'09', bm:'@odontopediatria.brasil', cls:'Dúvidas', conv:true, tema:'Aparelho ou alinhador para o meu filho?',
     ref:{url:'https://www.instagram.com/odontopediatria.brasil/', metrica:'contraexemplo · técnico', o:'A comunidade discute técnica de aparelho para o dentista.', porque:'A escolha prática que o pai enfrenta fica de fora.'},
     angulo:'A decisão que o pai enfrenta, sem jargão. Aqui o alinhador aparece, sem ser o foco.',
     desdobra:{reels:'Ele compara em 45s: quando cada um serve, prazo e cuidado. Chamada para avaliar.', carrossel:'Aparelho ou alinhador para adolescente, ponto a ponto.', stories:'Enquete "seu filho usaria aparelho ou alinhador?".', estatico:'Card comparativo simples com chamada de avaliação.'}}
  ],

  /* posts de apresentação · fixados e prioritários (inspirados no perfil da Lara) */
  fixados:[
    {n:'01', tema:'Prazer, Dr. Roberto', papel:'Apresenta o profissional. O primeiro post que a família vê ao chegar no perfil.', precisa:'ensaio do professor e identidade',
     slides:['Capa: retrato e "ortodontia da família há 30 anos"','Quem é: mestrado, professor, experiência','A filosofia: olhar para a pessoa antes do dente','Para quem: da criança ao adulto, a família toda','O método: escaneamento e planejamento','Chamada: agende uma avaliação']},
    {n:'02', tema:'Casos que acompanhei', papel:'Mostra casos clínicos reais, com contexto e autorização. Prova de resultado.', precisa:'portfólio de casos autorizados',
     slides:['Capa: "casos que acompanhei"','Um caso de criança, antes e depois autorizado','Um caso de adolescente','Um caso de adulto','O que eles têm em comum','Chamada: o seu caso também tem caminho']},
    {n:'03', tema:'A transformação vai além do sorriso', papel:'Fala da transformação do paciente. Post de desejo e captação.', precisa:'ensaio, portfólio e um depoimento',
     slides:['Capa: "mais que dentes alinhados"','A insegurança de antes','A jornada do tratamento','O depois: confiança para sorrir','Um depoimento real, com autorização','Chamada: comece a sua']}
  ],

  ciclos:[{
    slug:'2026-08-apresentacao', titulo:'Posts de apresentação', periodo:'Agosto 2026',
    resumo:'Os três carrosséis fixados do topo do perfil, diagramados na identidade Idée. As zonas de foto entram do ensaio e do portfólio.',
    mix:'3 fixados · a diagramação está pronta, faltam as fotos',
    pecas:[
      {id:'apres1', tipo:'Carrossel fixado · 6 slides', titulo:'Prazer, Dr. Roberto', cls:'posicionamento', dir:'apres1', n:6, txt:'apres1',
       compliance:'Sem promessa de resultado. CRO na assinatura da marca.'},
      {id:'apres2', tipo:'Carrossel fixado · 6 slides', titulo:'Casos que acompanhei', cls:'posicionamento', dir:'apres2', n:6, txt:'apres2',
       compliance:'Antes e depois só com autorização escrita do paciente. Sem preço. Cada caso é individual.'},
      {id:'apres3', tipo:'Carrossel fixado · 6 slides', titulo:'A transformação vai além do sorriso', cls:'conversão', dir:'apres3', n:6, txt:'apres3',
       compliance:'Transformação por depoimento autorizado. Sem promessa de resultado padrão.'}
    ]
  }]
},

/* ============================ MARIA LUIZA (BILIART) ============================ */
{
  slug:'malu', ativo:true, apelido:'Malu',
  nome:'Biliart · Dra. Maria Luiza', categoria:'Lentes de porcelana e prótese',
  resumo:'Reabilitação estética e funcional. Lentes naturais, sem cara de lente.',
  arroba:'@dra.malumartinho', perfil:'https://www.instagram.com/dra.malumartinho/',
  seguidores:'569', avatar:'img/malu/avatar.webp',

  /* ---------- 01 DIAGNÓSTICO ---------- */
  nicho:'Lentes de porcelana e prótese. Reabilitação estética e funcional do sorriso, dentro da Biliart.',
  posicionamento:'A protesista das lentes que ninguém percebe: naturalidade que respeita o rosto e função que devolve a mordida. Para quem quer melhorar o sorriso sem o exagero artificial. Dentro da Biliart, estética e função caminham juntas, com o cuidado de quem escuta antes de planejar.',
  publico:[
    {t:'Quem', d:'Adulto de 30 a 55 anos, homem e mulher, que se incomoda com o sorriso ou perdeu função.'},
    {t:'Momento', d:'Quer melhorar a estética, ou precisa reabilitar dentes gastos, quebrados ou ausentes.'},
    {t:'Dor', d:'Tem medo do resultado artificial, a "dentona", ou já não mastiga bem.'},
    {t:'Trava', d:'"Vai ficar falso?", "vou perder muito dente?", "será que dura?".'}
  ],
  signos:[
    {t:'Luz', d:'Natural e limpa, levemente quente. Realça a textura real do dente.'},
    {t:'Cor', d:'Nude, marfim e o vinho da Biliart. Elegante e sóbrio.'},
    {t:'Corpo', d:'Sorriso natural em close, a mão que segura a lente fininha.'},
    {t:'Método', d:'Prova, planejamento do sorriso, o antes e o depois discreto.'},
    {t:'Ritmo', d:'Cuidadoso e detalhista. O tempo de quem trabalha no milímetro.'}
  ],
  linhaEditorial:[
    {n:'01', t:'Vida pessoal', peso:'20%', d:'A pessoa por trás da protesista. Quem é e por que escolheu a reabilitação.', porque:'Humaniza e aproxima, essencial para uma conta em construção.', temas:['quem é a Malu','por que reabilitação','rotina de laboratório','o que a move']},
    {n:'02', t:'Autoridade', peso:'30%', d:'Relato de caso, depoimento e o resultado natural com contexto.', porque:'Prova social converte e mostra o padrão de naturalidade dela.', temas:['relato de caso','antes e depois autorizado','voltar a mastigar','o padrão natural']},
    {n:'03', t:'Bastidores', peso:'25%', d:'O laboratório, a prova da lente, o detalhe do trabalho manual.', porque:'O "como é feito" encanta e mostra o cuidado artesanal.', temas:['a lente fininha','a prova','o detalhe da cor','o passo a passo']},
    {n:'04', t:'Dúvidas de paciente', peso:'25%', d:'Fica falso? Precisa desgastar? Dura quanto? A pergunta respondida sem jargão.', porque:'Puxa alcance de busca e desarma o medo do resultado artificial.', temas:['fica falso?','precisa desgastar?','dura quanto?','resina ou porcelana?']}
  ],
  canais:[
    {c:'Reels', papel:'Alcance e autoridade', o:'Antes e depois, prova de lente, dúvida, bastidor de laboratório. 30 a 60s.', f:'3 por semana'},
    {c:'Carrossel', papel:'Salvamento', o:'Natural e artificial, etapas, cuidados com a lente.', f:'1 por semana'},
    {c:'Estático', papel:'Posicionamento', o:'Frase de marca, resultado, chamada de avaliação.', f:'1 por semana'},
    {c:'Stories', papel:'Relação diária', o:'Bastidor da prova, caixinha de dúvida, rotina do laboratório.', f:'Diário, 3 a 5 telas'},
    {c:'Foto', papel:'Acervo', o:'Retrato dela, laboratório, close de sorriso natural.', f:'1 ensaio por trimestre'}
  ],

  /* ---------- ZAG · diferenciação radical ---------- */
  zag:{
    zig:'Lentes viralizam pelo exagero: dentões brancos, transformação chocante, sorriso de outdoor igual em todo mundo.',
    zag:'Naturalidade radical. Lentes que ninguém percebe, função que volta e um resultado que respeita o rosto de cada um.',
    only:'A única protesista que assina o sorriso que parece que sempre foi seu, com estética e mastigação juntas.',
    provas:['Educação simples que já rende, 2,7 mil no melhor reel','Natural e artificial mostrados lado a lado','O artesanato da lente em macro','Relato de caso com a função de volta']
  },

  /* ---------- melhores posts (medidos no perfil) ---------- */
  melhores:[
    {img:'img/malu/best/b1.webp', url:'https://www.instagram.com/dra.malumartinho/reel/DbisYrolfDz/', metrica:'2.761', titulo:'Erros na escovação',
     porque:'Erro comum e demonstração prática. Utilidade imediata faz salvar e alcança 5 vezes a base da conta.'},
    {img:'img/malu/best/b2.webp', url:'https://www.instagram.com/dra.malumartinho/reel/DbSzsDdiNLO/', metrica:'667', titulo:'"Às vezes não acredito"',
     porque:'Reação com emoção real. O rosto dela reagindo já supera a média e mostra o caminho da humanização.'},
    {img:'img/malu/best/b3.webp', url:'https://www.instagram.com/dra.malumartinho/reel/DbEG_4rCXdw/', metrica:'543', titulo:'3 cuidados',
     porque:'Lista curta e prática. Formato de checklist rende salvamento e é fácil de repetir com constância.'}
  ],

  /* ---------- 02 IDENTIDADE (guarda-chuva Biliart) ---------- */
  identidade:{
    logos:[
      {img:'img/biliart/marca/biliart-claro.webp', t:'Biliart', d:'Marca da clínica'},
      {img:'img/biliart/marca/selo-claro.webp', t:'Selo b.', d:'Submarca Biliart'}
    ],
    paleta:[
      {hex:'#52151C', nome:'Vinho'}, {hex:'#D1C1B2', nome:'Nude'},
      {hex:'#8E6A5E', nome:'Terracota'}, {hex:'#EFE7DA', nome:'Marfim'}
    ],
    tipos:[{papel:'títulos', nome:'Playfair Display'},{papel:'subtítulos', nome:'Uncut Sans'},{papel:'texto', nome:'Geist'}]
  },

  /* ---------- 03 LEITURA DE PERFIL ---------- */
  perfilAnalise:{
    resumo:'Conta nova (569 seguidores, 42 posts) com bom conteúdo clínico e educativo, mas ainda sem posicionamento afiado nem rosto forte. Os reels são talking head com título serifado e alcance baixo. A marca da Biliart aparece, a camada de identidade própria dela ainda não.',
    diag:[
      {t:'Formato', v:'Talking head com título serifado. Correto, pouco ritmo.', s:'ajustar'},
      {t:'Alcance', v:'Conta nova, alcance baixo. Base a construir.', s:'ajustar'},
      {t:'Posicionamento', v:'Fala de vários temas. Falta cravar "lente natural".', s:'ajustar'},
      {t:'Feed', v:'Educativo e clínico. Bonito, mas ainda genérico.', s:'ajustar'},
      {t:'Identidade', v:'Usa a Biliart. A camada própria dela falta.', s:'ajustar'},
      {t:'Prova', v:'Tem relato de caso e resultado. Matéria-prima boa.', s:'ok'}
    ],
    feedCores:{
      pes:{bg:'#8E6A5E', fg:'#F6EFE8', l:'Vida pessoal'},
      aut:{bg:'#52151C', fg:'#D1C1B2', l:'Autoridade'},
      bas:{bg:'#191915', fg:'#D1C1B2', l:'Bastidores'},
      duv:{bg:'#D1C1B2', fg:'#52151C', l:'Dúvidas'}
    },
    feedIdeal:[
      {t:'Autoridade', c:'aut'},{t:'Bastidor', c:'bas'},{t:'Dúvida', c:'duv'},
      {t:'Pessoal', c:'pes'},{t:'Autoridade', c:'aut'},{t:'Dúvida', c:'duv'},
      {t:'Bastidor', c:'bas'},{t:'Autoridade', c:'aut'},{t:'Dúvida', c:'duv'}
    ],
    checklist:[
      {t:'Retrato da Maria Luiza', d:'Meio corpo e close, luz quente. O rosto da marca.', ok:false},
      {t:'Bastidor de laboratório', d:'A lente fininha na mão, a prova, o detalhe manual.', ok:false},
      {t:'Antes e depois autorizado', d:'Resultado natural, com autorização por escrito.', ok:false},
      {t:'Close de sorriso natural', d:'A textura real do dente, sem exagero.', ok:false},
      {t:'Camada de identidade própria', d:'Definir a sub-marca dela dentro da Biliart.', ok:false},
      {t:'Padrão de gravação', d:'Mesma luz, fundo e enquadramento nos reels.', ok:false},
      {t:'Depoimento em vídeo', d:'Paciente contando a função e a estética recuperadas.', ok:false},
      {t:'Fotos horizontais', d:'Para capa, LinkedIn e 16:9.', ok:false}
    ]
  },

  /* ---------- 04 ENSAIO FOTOGRÁFICO ---------- */
  ensaio:{
    intro:'A atmosfera do ensaio da Malu: luz quente de fim de tarde, o artesanato da lente em macro e o sorriso com textura real. O contraponto visual ao exagero artificial do nicho.',
    atmosfera:[
      {t:'Luz', d:'Quente e suave. Pele e textura de verdade, nada de flash duro.'},
      {t:'Paleta', d:'Marfim, nude e o vinho Biliart. Elegância discreta.'},
      {t:'Macro', d:'A lente na pinça, o milímetro, o gesto artesanal.'},
      {t:'Sorriso', d:'Natural, com textura de dente real. Zero outdoor.'}
    ],
    refs:[
      {img:'img/malu/ref/r01.webp', fonte:'https://www.pinterest.com/pin/985231165229797/', t:'Retrato elegante, luz quente'},
      {img:'img/malu/ref/r02.webp', fonte:'https://www.pinterest.com/pin/774124931473011/', t:'A profissional, leve e próxima'},
      {img:'img/malu/ref/r03.webp', fonte:'https://www.pinterest.com/pin/2392606047743324/', t:'Perfil sóbrio no consultório'},
      {img:'img/malu/ref/r04.webp', fonte:'https://www.pinterest.com/pin/453948837466090521/', t:'A lente em macro, o milímetro'},
      {img:'img/malu/ref/r05.webp', fonte:'https://www.pinterest.com/pin/170362798401766378/', t:'Porcelana como escultura'},
      {img:'img/malu/ref/r06.webp', fonte:'https://www.pinterest.com/pin/4081455907860394/', t:'O pincel e o modelo'},
      {img:'img/malu/ref/r07.webp', fonte:'https://www.pinterest.com/pin/703756188604195/', t:'O trabalho na mão'},
      {img:'img/malu/ref/r08.webp', fonte:'https://www.pinterest.com/pin/26529085300862809/', t:'Sorriso com textura real'},
      {img:'img/malu/ref/r09.webp', fonte:'https://www.pinterest.com/pin/7810999350236203/', t:'Luz de fim de tarde, natural'}
    ],
    shotlist:[
      {t:'Retrato da Malu', d:'Meio corpo e close, luz quente. O rosto da naturalidade.', c:'pes'},
      {t:'A lente em macro', d:'Na pinça e na ponta do dedo. A finura vira prova.', c:'bas'},
      {t:'A prova na boca', d:'O encaixe, o teste de cor, o ajuste fino.', c:'bas'},
      {t:'Bastidor de laboratório', d:'Pincel, modelo e cerâmica. O artesanato em cena.', c:'bas'},
      {t:'Sorriso natural em close', d:'Textura de dente de verdade, com autorização.', c:'aut'},
      {t:'Antes e depois discreto', d:'A transformação que respeita o rosto.', c:'aut'},
      {t:'A conversa de planejamento', d:'Ela desenhando o sorriso com o paciente.', c:'duv'},
      {t:'Detalhes da marca', d:'Marfim, nude e vinho. O universo Biliart.', c:'pes'}
    ]
  },

  /* ---------- 05 CAMPANHA (proposta) ---------- */
  campanha:{
    status:'Proposta · ainda não no ar',
    nome:'O sorriso que parece que sempre foi seu.',
    eixos:[
      {t:'Frio', d:'desmistifica a cara de lente'},
      {t:'Médio', d:'naturalidade e função juntas'},
      {t:'Aquecido', d:'relato de caso e avaliação'}
    ],
    alerta:'Ângulo central: naturalidade. O gancho é ser o oposto do exagero artificial que viraliza por choque.',
    deck:'https://www.biliart.com.br/marialuiza-protesista'
  },

  /* ---------- 06 BENCHMARK ---------- */
  benchmark:[
    {at:'@lucasguerreiros', url:'https://www.instagram.com/lucasguerreiros/', porte:'90,7 mil', perfil:'"Realismo Dental", artista de lentes em SP, com marca própria de creme e laboratório.', mecanismo:'Personal brand de artista. Resultados ultra-realistas que impressionam, com ele como assinatura.', leitura:'O realismo vira espetáculo quando tem um autor. Para a Malu, o resultado natural dela precisa de rosto e assinatura.'},
    {at:'@maraisafernandadentista', url:'https://www.instagram.com/maraisafernandadentista/', porte:'62,7 mil', perfil:'Lentes naturais "sem cara de lente", mais de 1.500 casos, interior de SP.', mecanismo:'Antes e depois, naturalidade e volume de prova. Resultado discreto como argumento.', leitura:'A naturalidade vende e o antes e depois é o motor. Ressalva: a audiência dela puxa dentista, então miramos o paciente.'},
    {at:'padrão "cara de lente"', url:'https://www.instagram.com/explore/tags/lentedecontatodental/', porte:'tendência viral', perfil:'A onda de lentes artificiais e exageradas que viraliza pelo choque ("olha o que fizeram").', mecanismo:'Choque e polêmica. Alcança muito e constrói um desejo equivocado.', leitura:'Contraexemplo perfeito. O gancho da Malu é ser o oposto: natural, no lugar do exagero.'}
  ],
  sintese:{
    alta:['Naturalidade, sem cara de lente','Antes e depois com resultado discreto','O detalhe artesanal do trabalho'],
    saturado:['Lente artificial e exagerada','Promessa genérica de sorriso perfeito','Conteúdo técnico para dentista'],
    lacuna:['A lente natural com rosto e assinatura','Estética e função juntas','O medo do resultado falso, desarmado']
  },

  /* ---------- 07 PAUTAS ---------- */
  pautas:[
    {n:'01', bm:'@lucasguerreiros', cls:'Vida pessoal', tema:'A protesista por trás do sorriso',
     ref:{url:'https://www.instagram.com/lucasguerreiros/', metrica:'90,7 mil seguidores', o:'Ele cresce como artista, com nome e assinatura no realismo.', porque:'No nicho de lentes, o autor vale tanto quanto o resultado.'},
     angulo:'Quem é a Maria Luiza e por que escolheu a reabilitação. O rosto da marca antes do dente.',
     desdobra:{reels:'Ela conta, direto na câmera, por que ama devolver sorrisos naturais. 45s, luz quente.', carrossel:'A história dela em capítulos, com bastidor do laboratório.', stories:'Enquete "o que você acha que é uma lente natural?" e a resposta.', estatico:'Retrato dela com uma frase sobre naturalidade.'}},
    {n:'02', bm:'@lucasguerreiros', cls:'Autoridade', tema:'Realismo tem autor',
     ref:{url:'https://www.instagram.com/lucasguerreiros/', metrica:'referência de realismo', o:'Resultados ultra-realistas assinados por ele.', porque:'A assinatura transforma técnica em desejo.'},
     angulo:'O padrão de naturalidade da Malu, com o close do resultado discreto. Ela assina.',
     desdobra:{reels:'Close do antes e depois natural, com ela explicando a escolha da cor. 40s.', carrossel:'O que faz uma lente parecer real, ponto a ponto.', stories:'"Você percebe qual é a lente?" com enquete.', estatico:'Close do sorriso com selo "natural de verdade".'}},
    {n:'03', bm:'@lucasguerreiros', cls:'Bastidores', tema:'O detalhe que ninguém vê',
     ref:{url:'https://www.instagram.com/lucasguerreiros/', metrica:'processo que encanta', o:'O trabalho artesanal da lente vira conteúdo.', porque:'O bastidor do "como é feito" prende e mostra cuidado.'},
     angulo:'A lente mais fina que parece, o trabalho no milímetro. O artesanato por trás do natural.',
     desdobra:{reels:'A lente fininha na ponta do dedo e a prova na boca. Detalhe e luz. 30s.', carrossel:'Do planejamento à prova, o caminho de uma lente.', stories:'Bastidor da prova em tempo real.', estatico:'Macro da lente com a chamada "no detalhe".'}},
    {n:'04', bm:'@maraisafernandadentista', cls:'Autoridade', tema:'Antes e depois natural',
     ref:{url:'https://www.instagram.com/maraisafernandadentista/', metrica:'62,7 mil seguidores', o:'Antes e depois com resultado discreto é o motor do perfil.', porque:'A transformação natural é a prova mais forte.'},
     angulo:'Relato de caso da Malu, com o resultado que não grita. Discrição como assinatura.',
     desdobra:{reels:'Relato de caso: a queixa, o plano, o resultado natural. Com autorização. 50s.', carrossel:'O caso em etapas, do incômodo ao sorriso discreto.', stories:'Caixinha "o que te incomoda no seu sorriso?".', estatico:'Antes e depois autorizado, com contexto.'}},
    {n:'05', bm:'@maraisafernandadentista', cls:'Dúvidas', tema:'Vai ficar falso?',
     ref:{url:'https://www.instagram.com/maraisafernandadentista/', metrica:'ângulo "sem cara de lente"', o:'O medo do resultado artificial é a dúvida número um.', porque:'Desarmar o medo é o que aproxima o paciente certo.'},
     angulo:'Ela mostra por que a lente natural não fica falsa: cor, formato e proporção do rosto.',
     desdobra:{reels:'Ela compara, sem jargão, o natural e o exagerado. 40s.', carrossel:'Cinco sinais de uma lente natural bem feita.', stories:'"Verdadeiro ou falso" sobre cara de lente.', estatico:'Card "natural x artificial" lado a lado.'}},
    {n:'06', bm:'@maraisafernandadentista', cls:'Autoridade', conv:true, tema:'Voltar a mastigar',
     ref:{url:'https://www.instagram.com/maraisafernandadentista/', metrica:'transformação como prova', o:'A transformação vende, e a função é o diferencial da Malu.', porque:'Estética e função juntas ampliam o público.'},
     angulo:'Reabilitação que devolve a mordida, não só a estética. O depoimento de quem voltou a comer bem.',
     desdobra:{reels:'Depoimento real: comer, sorrir e falar de novo com conforto. Com autorização. 45s.', carrossel:'A jornada da reabilitação, da queixa à função.', stories:'Caixinha "você deixa de comer algo por causa dos dentes?".', estatico:'Depoimento entre aspas, com chamada de avaliação.'}},
    {n:'07', bm:'padrão "cara de lente"', cls:'Dúvidas', conv:true, tema:'Olha o que fizeram',
     ref:{url:'https://www.instagram.com/explore/tags/lentedecontatodental/', metrica:'padrão viral do nicho', o:'Vídeos de lentes exageradas viralizam pelo choque.', porque:'A polêmica alcança, mas constrói o desejo errado.'},
     angulo:'Ela reage ao exagero e ensina o caminho natural, virando o alcance a favor do posicionamento.',
     desdobra:{reels:'Reação a um caso artificial e o que faria diferente. Tom respeitoso. 45s.', carrossel:'Por que a "dentona" acontece e como evitar.', stories:'Enquete "natural ou artificial?" com exemplos.', estatico:'Card educativo sobre o exagero.'}},
    {n:'08', bm:'padrão "cara de lente"', cls:'Dúvidas', tema:'Preciso desgastar meus dentes?',
     ref:{url:'https://www.instagram.com/explore/tags/lentedecontatodental/', metrica:'medo recorrente', o:'O medo de "lixar" os dentes trava muita gente.', porque:'Responder o medo real puxa busca e confiança.'},
     angulo:'Ela explica, com honestidade, quando há desgaste e quando quase não há. Sem promessa.',
     desdobra:{reels:'Ela responde direto, com modelo na mão, sobre o desgaste. 40s.', carrossel:'Lente, faceta e o que muda no seu dente.', stories:'Caixinha "qual sua maior dúvida sobre lentes?".', estatico:'Card "mitos sobre desgaste".'}},
    {n:'09', bm:'padrão "cara de lente"', cls:'Dúvidas', conv:true, tema:'Quanto dura e como cuidar',
     ref:{url:'https://www.instagram.com/explore/tags/lentedecontatodental/', metrica:'decisão de compra', o:'Durabilidade e cuidado são a última dúvida antes de decidir.', porque:'Clareza sobre manutenção destrava a avaliação.'},
     angulo:'Ela mostra a manutenção real e convida para uma avaliação, sem promessa de prazo absoluto.',
     desdobra:{reels:'Rotina de cuidado da lente em 5 passos rápidos. 40s.', carrossel:'Como fazer sua lente durar, hábito a hábito.', stories:'Quiz de cuidados com a lente.', estatico:'Card de manutenção com chamada de avaliação.'}}
  ],

  /* posts de apresentação · fixados e prioritários */
  fixados:[
    {n:'01', tema:'Prazer, Dra. Maria Luiza', papel:'Apresenta a profissional. O primeiro post que o paciente vê ao chegar no perfil.', precisa:'ensaio da Malu e identidade',
     slides:['Capa: retrato e "lentes naturais e prótese"','Quem é: protesista da Biliart, CROSP 173121','A filosofia: naturalidade que respeita o rosto','Para quem: estética sem exagero e função de volta','O método: prova e planejamento do sorriso','Chamada: agende uma avaliação']},
    {n:'02', tema:'Relato de caso', papel:'Mostra um caso real, com contexto e autorização. Prova de naturalidade.', precisa:'portfólio de casos autorizados',
     slides:['Capa: "relato de caso"','A queixa do paciente','O planejamento do sorriso','A prova das lentes','O depois natural, autorizado','Chamada: o seu caso também tem caminho']},
    {n:'03', tema:'A transformação vai além da estética', papel:'Fala da transformação por estética e função. Post de desejo e captação.', precisa:'ensaio, portfólio e um depoimento',
     slides:['Capa: "mais que um sorriso bonito"','O incômodo estético e funcional','A jornada da reabilitação','O depois: sorrir e mastigar com naturalidade','Um depoimento real, com autorização','Chamada: comece a sua']}
  ],

  ciclos:[]
},

{slug:'delabela', nome:'Delabela', categoria:'Clínica boutique', resumo:'Sofisticação, status e autoestima.'},
{slug:'odontogon', nome:'OdontoGON', categoria:'Check-up 360°', resumo:'Confiança e clareza. Multidisciplinar.'},
{slug:'maxfocos', nome:'MaxFocos', categoria:'Educação para dentistas', resumo:'Método e aprovação.'},
{slug:'marcelo-tavares', nome:'Marcelo Tavares', categoria:'Próteses e implantes', resumo:'Excelência técnica e resolução.'},
{slug:'clinica-lk', nome:'Clínica LK', categoria:'Protocolo e prótese', resumo:'Controle técnico interno.'}
];
