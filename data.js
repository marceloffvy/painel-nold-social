/* ============================================================
   PAINEL NOLD — base de dados
   Ordem: nicho → posicionamento → público → linha editorial →
   canais → identidade → perfil → campanha → benchmark → pautas → ciclos
   ============================================================ */

const CLIENTES = [

/* ============================ BILIART ============================ */
{
  slug:'biliart', ativo:true,
  nome:'Biliart · Dr. Luiz Felipe',
  categoria:'Cirurgia bucomaxilofacial',
  resumo:'Ortognática e ATM. Autoestima e reconexão com o sorriso.',
  arroba:'@drlfmartinho', perfil:'https://www.instagram.com/drlfmartinho/',
  seguidores:'2.432', posts:'184',
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
  slug:'idee', ativo:true,
  nome:'Idée · Dr. Roberto Simonetti', categoria:'Ortodontia e alinhadores',
  resumo:'Ortodontia da família, da criança ao adulto. O ortodontista que conversa com o pai e a mãe.',
  arroba:'@robertosimonetti_ortodontia', perfil:'https://www.instagram.com/robertosimonetti_ortodontia/',
  seguidores:'3.095',

  /* ---------- 01 DIAGNÓSTICO ---------- */
  nicho:'Ortodontia da família. Crianças e adolescentes no centro, alinhador do adulto como frente de apoio.',
  posicionamento:'O ortodontista de confiança da família, que acompanha o sorriso desde criança. Conversa com o pai e a mãe que não sabem a hora certa de levar o filho, trata o medo do aparelho com paciência e explica cada passo. Trinta anos de clínica e mestrado, do primeiro aparelho ao alinhador do adulto.',
  publico:[
    {t:'Quem', d:'Mãe e pai de 30 a 50 anos que decidem pelo filho. E o adulto que ainda quer alinhar.'},
    {t:'Momento', d:'Percebeu o dente torto do filho ou ouviu do dentista que precisa avaliar.'},
    {t:'Dor', d:'Não sabe a idade certa, teme o custo e o tempo, o filho tem medo de aparelho.'},
    {t:'Trava', d:'"Será que já é hora?", "vai doer?", "e se ele não cuidar direito?".'}
  ],
  signos:[
    {t:'Luz', d:'Clara e acolhedora. Natural e diurna, longe da clínica fria.'},
    {t:'Cor', d:'Azul profundo e dourado. Sério, mas caloroso.'},
    {t:'Corpo', d:'Criança e adolescente sorrindo, a mão do pai no ombro, o professor atento.'},
    {t:'Método', d:'Escaneamento, o antes e o depois, o acompanhamento ao longo do tempo.'},
    {t:'Ritmo', d:'Calmo e didático. O tempo de quem explica para a família.'}
  ],
  linhaEditorial:[
    {n:'01', t:'Vida pessoal', peso:'22%', d:'O homem por trás do ortodontista. Pai, professor, trinta anos de história.', porque:'Aproxima e gera identificação. Pai confia em quem também é pai.', temas:['por que virei ortodontista','rotina de professor','30 anos de profissão','valores de família']},
    {n:'02', t:'Autoridade', peso:'28%', d:'Depoimento de pais, caso de criança e adolescente com contexto, reconhecimento.', porque:'Prova social é o que mais converte. Mãe indica para outra mãe.', temas:['depoimento de mãe','antes e depois autorizado','caso de adolescente','mestrado e 30 anos']},
    {n:'03', t:'Bastidores', peso:'20%', d:'O consultório que acolhe a criança, o escaneamento, como se trata o medo.', porque:'Mostra método e cuidado. Tira o medo antes da primeira consulta.', temas:['a primeira visita','o escaneamento 3D','como acalmamos o medo','o ambiente e a equipe']},
    {n:'04', t:'Dúvidas de paciente', peso:'30%', d:'A pergunta que o pai e a mãe fazem, respondida sem jargão.', porque:'Puxa alcance orgânico de busca e é a porta de entrada da família.', temas:['qual a idade certa?','meu filho precisa de aparelho?','aparelho ou alinhador?','e se ele não cuidar?']}
  ],
  canais:[
    {c:'Reels', papel:'Alcance e proximidade', o:'Dúvida de pai e mãe, bastidor acolhedor, depoimento. 30 a 60s, rosto na tela.', f:'3 por semana'},
    {c:'Carrossel', papel:'Salvamento', o:'Idade certa, etapas do tratamento, aparelho ou alinhador.', f:'1 por semana'},
    {c:'Estático', papel:'Posicionamento e captação', o:'Frase para a família, avaliação, convênio.', f:'1 por semana'},
    {c:'Stories', papel:'Relação diária', o:'Rotina, enquete de mãe, caixinha de dúvida, bastidor cru.', f:'Diário, 3 a 5 telas'},
    {c:'Foto', papel:'Acervo', o:'Criança e adolescente, família, o professor, consultório acolhedor.', f:'1 ensaio por trimestre'}
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
    intro:'A atmosfera que queremos capturar num ensaio: calor, família e o cuidado de quem acompanha o sorriso desde criança. Abaixo, referências de foto. Ao lado, o que precisamos fotografar.',
    atmosfera:[
      {t:'Luz', d:'Natural e clara. Manhã e janela, nada de flash duro.'},
      {t:'Emoção', d:'Proximidade real. Colo, mão no ombro, riso solto.'},
      {t:'Cor', d:'Azul e dourado da marca, madeira e tons quentes.'},
      {t:'Elenco', d:'Criança, adolescente, pai e mãe. O professor junto.'}
    ],
    refs:[
      {img:'img/idee/ref/r01.webp', fonte:'https://www.pinterest.com/pin/300122762680689726/', t:'Atmosfera humana, sem pose'},
      {img:'img/idee/ref/r02.webp', fonte:'https://www.pinterest.com/pin/35114072092361242/', t:'Tirar o medo: profissional e criança'},
      {img:'img/idee/ref/r03.webp', fonte:'https://www.pinterest.com/pin/714594665870460246/', t:'A família junta, leve'},
      {img:'img/idee/ref/r04.webp', fonte:'https://www.pinterest.com/pin/686728643161136226/', t:'Os pais no consultório'},
      {img:'img/idee/ref/r05.webp', fonte:'https://www.pinterest.com/pin/563653709645473134/', t:'Rotina em casa: pai e filho'},
      {img:'img/idee/ref/r06.webp', fonte:'https://www.pinterest.com/pin/7388786883150317/', t:'Luz suave, colo e cuidado'},
      {img:'img/idee/ref/r07.webp', fonte:'https://www.pinterest.com/pin/136796907427320338/', t:'Acolhimento na cadeira'},
      {img:'img/idee/ref/r08.webp', fonte:'https://www.pinterest.com/pin/865183778432146761/', t:'Luz quente, momento de família'},
      {img:'img/idee/ref/r09.webp', fonte:'https://www.pinterest.com/pin/763360205637522670/', t:'A conversa com a mãe'}
    ],
    shotlist:[
      {t:'Retrato do professor', d:'Meio corpo e close, luz clara, com e sem jaleco. Olhar acolhedor.', c:'pes'},
      {t:'O professor com a criança', d:'Atendendo, ouvindo, tirando o medo. Sorriso real.', c:'bas'},
      {t:'A conversa com os pais', d:'Ele explicando o plano para o pai e a mãe.', c:'duv'},
      {t:'Escaneamento e a tela 3D', d:'A câmera intraoral e o antes e depois no monitor.', c:'bas'},
      {t:'Sorriso do adolescente', d:'Antes e depois autorizado, com naturalidade.', c:'aut'},
      {t:'Família no ambiente', d:'A recepção que acolhe, o consultório que não assusta.', c:'pes'},
      {t:'Detalhes da marca', d:'Alinhador na mão, azul e dourado, os materiais.', c:'aut'},
      {t:'Bastidor leve', d:'Um dia no consultório, a equipe, o café.', c:'bas'}
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

  ciclos:[]
},

{slug:'delabela', nome:'Delabela', categoria:'Clínica boutique', resumo:'Sofisticação, status e autoestima.'},
{slug:'odontogon', nome:'OdontoGON', categoria:'Check-up 360°', resumo:'Confiança e clareza. Multidisciplinar.'},
{slug:'maxfocos', nome:'MaxFocos', categoria:'Educação para dentistas', resumo:'Método e aprovação.'},
{slug:'marcelo-tavares', nome:'Marcelo Tavares', categoria:'Próteses e implantes', resumo:'Excelência técnica e resolução.'},
{slug:'clinica-lk', nome:'Clínica LK', categoria:'Protocolo e prótese', resumo:'Controle técnico interno.'}
];
