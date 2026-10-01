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
    {img:'img/biliart/best/b1.webp', url:'https://www.instagram.com/reel/DYiNhjeBwEY/', metrica:'37,3 mil', titulo:'Bastidor de cirurgia',
     porque:'Bloco cirúrgico real, sem narração e sem promessa. O fascínio pelo bastidor carrega o alcance sozinho: 15 vezes a base de seguidores.'},
    {img:'img/biliart/best/b2.webp', url:'https://www.instagram.com/reel/DZLb803sEWr/', metrica:'31 mil', titulo:'Cirurgia com o colega otorrino',
     porque:'A dupla em ação passa método e parceria. Bastidor com contexto clínico é o formato que fura a bolha do perfil.'},
    {img:'img/biliart/best/b3.webp', url:'https://www.instagram.com/reel/DXe0mkejv-x/', metrica:'4.678', titulo:'Vida pessoal, em viagem',
     porque:'Ele como gente, fora do jaleco, em colab com a @dra.jessicafcuri. O território pessoal sustenta alcance acima da média e prepara a confiança.'}
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
     ref:{url:'https://www.instagram.com/reel/DYxxHTGhQ1t/', metrica:'40,1 mil views',
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
     ref:{url:'https://www.instagram.com/reel/DYihRSmhiCw/', metrica:'37,6 mil views',
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
     ref:{url:'https://www.instagram.com/reel/CwOWwlSBq9e/', metrica:'64 mil views',
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
     ref:{url:'https://www.instagram.com/reel/DHwY1fdBcDa/', metrica:'33 mil views',
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
     ref:{url:'https://www.instagram.com/reel/Dad83NfTtuM/', metrica:'6.931 views',
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
     ref:{url:'https://www.instagram.com/reel/DMYlljVv5Qv/', metrica:'5.935 views',
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
     ref:{url:'https://www.instagram.com/reel/DK20LLgo7T0/', metrica:'4.471 views',
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
     ref:{url:'https://www.instagram.com/reel/DYNU752x1fE/', metrica:'11,4 mil views',
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
    {img:'img/idee/best/b1.webp', url:'https://www.instagram.com/reel/DX65zKZxemA/', metrica:'3.369', titulo:'Ele em cena no consultório',
     porque:'O melhor do perfil é ele mostrando o espaço e o método. Autoridade demonstrada em cena, no lugar de declarada em texto.'},
    {img:'img/idee/best/b2.webp', url:'https://www.instagram.com/reel/DYfaaRtRmHj/', metrica:'1.414', titulo:'Caso orto-cirúrgico',
     porque:'Caso real com rosto e história. É o formato que mais aproxima o público de paciente e dobra a média da conta.'},
    {img:'img/idee/best/b3.webp', url:'https://www.instagram.com/reel/DXusmm5sQYd/', metrica:'1.376', titulo:'Conversa no sofá',
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
    {at:'@odontopediatria.brasil', url:'https://www.instagram.com/odontopediatria.brasil/', porte:'61 mil', perfil:'A maior comunidade de odontopediatria do mundo. Fala com dentista.', mecanismo:'Educação e comunidade para o dentista, não para a família. Conteúdo técnico e institucional.', leitura:'Contraexemplo revelador. O maior perfil do nicho fala com colega. A conversa com o pai e a mãe está aberta e quase ninguém ocupa.'}
  ],
  sintese:{
    alta:['O humano do profissional, o professor-pai','Relatable e sinais que o pai reconhece','A criança e o adolescente com naturalidade'],
    saturado:['Talking head técnico e sério','Conteúdo para colega dentista','Caso clínico solto, sem história'],
    lacuna:['A conversa direta com o pai e a mãe','A hora certa de levar a criança','O medo do aparelho, tratado com calma']
  },

  /* ---------- 07 PAUTAS ---------- */
  pautas:[
    {n:'01', bm:'@larapassosalvim', cls:'Vida pessoal', tema:'Por que virei ortodontista',
     ref:{url:'https://www.instagram.com/reel/DYLB2ERAjIo/', metrica:'16,2 mil views', o:'Contar aos amigos que seria pai. Emoção em primeira pessoa.', porque:'Narrativa emocional pessoal engaja e faz salvar.'},
     angulo:'A história de origem contada com emoção. Pai confia em quem também é pai e professor.',
     desdobra:{reels:'Ele conta o que o fez virar ortodontista, um caso de criança que marcou. Direto na câmera, luz quente. 50s.', carrossel:'A história em capítulos, com fotos antigas.', stories:'Enquete "o que te fez escolher sua profissão?" e a resposta.', estatico:'Foto antiga dele com a frase de origem.'}},
    {n:'02', bm:'@larapassosalvim', cls:'Bastidores', tema:'Vem comigo num dia de consultório',
     ref:{url:'https://www.instagram.com/reel/DZN--mGAwOp/', metrica:'26,8 mil views', o:'Get ready with me, rotina e leveza.', porque:'Bastidor leve aproxima e viraliza mais que conteúdo técnico.'},
     angulo:'Um dia real no consultório, leve, mostrando o ambiente que acolhe a criança.',
     desdobra:{reels:'POV de um dia: a recepção, uma criança chegando sem medo, o escaneamento, o café. 45s.', carrossel:'Um dia na Idée em seis quadros.', stories:'A sequência do dia em tempo real.', estatico:'Foto de bastidor com legenda do momento.'}},
    {n:'03', bm:'@larapassosalvim', cls:'Autoridade', tema:'30 anos, milhares de sorrisos acompanhados',
     ref:{url:'https://www.instagram.com/reel/DYIjOLnAsuS/', metrica:'32,2 mil views', o:'Nascimento da filha. O maior alcance do perfil, e é vida pessoal.', porque:'Um marco humano real alcança mais que qualquer caso clínico.'},
     angulo:'Um marco de trinta anos como marca humana. Sorrisos acompanhados desde criança, contados com emoção.',
     desdobra:{reels:'Linha do tempo dos 30 anos sobre fotos de acervo, voz em off, ritmo calmo. 40s.', carrossel:'Trinta anos de sorrisos, um capítulo por slide.', stories:'Bastidor da rotina com caixinha de pergunta.', estatico:'Retrato dele com a frase sobre por que faz o que faz.'}},
    {n:'04', bm:'@odontologiadicas', cls:'Dúvidas', tema:'Sinais de que seu filho vai precisar de aparelho',
     ref:{url:'https://www.instagram.com/reel/DUMZ5J0DVyA/', metrica:'32,3 mil views', o:'Curiosidade sobre um equipamento novo. Prende pela novidade.', porque:'Curiosidade e "sinais" surpreendem, retêm e fazem comentar.'},
     angulo:'Os sinais que o pai e a mãe deveriam observar na boca do filho, com didática de professor.',
     desdobra:{reels:'Lista rápida de sinais (dente nascendo torto, respira pela boca, ronca, morde errado). Modelo na mão. 40s.', carrossel:'Um sinal por slide, tom acolhedor.', stories:'Quiz "verdadeiro ou falso" sobre a idade de avaliar.', estatico:'Card com o sinal mais comum e a chamada de avaliação.'}},
    {n:'05', bm:'@odontologiadicas', cls:'Dúvidas', tema:'Coisas que todo pai de criança com aparelho vive',
     ref:{url:'https://www.instagram.com/reel/DV4j0FgDcjk/', metrica:'35,7 mil views', o:'Reel de reação coletiva. Nos comentários é só "eu também".', porque:'Reconhecimento coletivo faz o pai marcar outro pai e salvar.'},
     angulo:'Relatable para pais: as cenas que todo pai de criança com aparelho reconhece.',
     desdobra:{reels:'Lista rápida de cenas (esconder o doce, a borrachinha que solta, a escovação de guerra). Áudio em alta. 30s.', carrossel:'Uma cena por slide, com humor leve.', stories:'Enquete "seu filho faz isso?".', estatico:'Card com a cena mais reconhecível.'}},
    {n:'06', bm:'@odontologiadicas', cls:'Bastidores', tema:'Quando a criança tem medo do dentista',
     ref:{url:'https://www.instagram.com/reel/DYqD2JiTHVb/', metrica:'23,9 mil views', o:'A dentista conta quando esteve do outro lado da cadeira, com medo.', porque:'Vulnerabilidade real gera identificação e compartilhamento.'},
     angulo:'O medo da criança, tratado com calma. O pai vê como o filho é acolhido antes de sentar na cadeira.',
     desdobra:{reels:'Ele mostra como recebe uma criança com medo: o tom de voz, o passo a passo, sem pressa. 50s.', carrossel:'Como preparar seu filho para a primeira consulta.', stories:'Caixinha "seu filho tem medo de dentista?".', estatico:'Frase acolhedora entre aspas, sobre fundo azul.'}},
    {n:'07', bm:'@odontopediatria.brasil', cls:'Dúvidas', conv:true, tema:'Qual a idade certa de levar ao ortodontista?',
     ref:{url:'https://www.instagram.com/reel/DJaVjpKSgNp/', metrica:'contraexemplo · 61 mil', o:'"Você leva seu filho ao pediatra só quando ele sente dor?" A pergunta certa, no formato errado: card institucional, sem rosto e sem história.', porque:'A lógica de levar antes da dor é a mesma da ortodontia. Falta gente na tela para a mensagem pegar.'},
     angulo:'Responder direto a pergunta que todo pai faz: a hora certa de levar a criança ao ortodontista.',
     desdobra:{reels:'Ele responde em 40s: a idade recomendada, por que não adiar, o que é avaliado. Chamada para avaliar.', carrossel:'A linha do tempo do sorriso da criança, idade por idade.', stories:'Caixinha "quantos anos tem seu filho?" com orientação.', estatico:'Card "a idade certa de avaliar" com chamada de avaliação.'}},
    {n:'08', bm:'@odontopediatria.brasil', cls:'Autoridade', conv:true, tema:'Depoimento de mãe',
     ref:{url:'https://www.instagram.com/reel/DMgdpIFS8gO/', metrica:'40,4 mil views', o:'Card de Agosto Dourado. Alcança bem, e mesmo assim é arte institucional sem nenhuma família real na tela.', porque:'A prova que convence pai é outra mãe falando, não um card de data comemorativa.'},
     angulo:'Uma mãe contando para outra a transformação do filho. Prova social que fala com quem decide.',
     desdobra:{reels:'Mãe falando em uma frase o que mudou no filho depois do tratamento. Rosto e emoção. 40s.', carrossel:'A jornada da família: a dúvida, a decisão, o resultado.', stories:'Repost de mensagem real de mãe, com autorização por escrito.', estatico:'Depoimento entre aspas, com o primeiro nome e a idade do filho.'}},
    {n:'09', bm:'@odontopediatria.brasil', cls:'Dúvidas', conv:true, tema:'Aparelho ou alinhador para o meu filho?',
     ref:{url:'https://www.instagram.com/reel/DPtT-9YkU7p/', metrica:'25,1 mil views', o:'Ilustração genérica de crianças. Bonito de ver, e não responde a nenhuma decisão prática de quem paga o tratamento.', porque:'A escolha real que o pai enfrenta fica de fora do maior perfil do nicho.'},
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
    {img:'img/malu/best/b1.webp', url:'https://www.instagram.com/reel/DbisYrolfDz/', metrica:'2.761', titulo:'Erros na escovação',
     porque:'Erro comum e demonstração prática. Utilidade imediata faz salvar e alcança 5 vezes a base da conta.'},
    {img:'img/malu/best/b2.webp', url:'https://www.instagram.com/reel/DbSzsDdiNLO/', metrica:'667', titulo:'"Às vezes não acredito"',
     porque:'Reação com emoção real. O rosto dela reagindo já supera a média e mostra o caminho da humanização.'},
    {img:'img/malu/best/b3.webp', url:'https://www.instagram.com/reel/DbEG_4rCXdw/', metrica:'543', titulo:'3 cuidados',
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
    {at:'@lucasguerreiros', url:'https://www.instagram.com/lucasguerreiros/', porte:'91,2 mil', perfil:'"Realismo Dental", artista de lentes em SP, com marca própria de creme e laboratório.', mecanismo:'Personal brand de artista. Resultados ultra-realistas que impressionam, com ele como assinatura.', leitura:'O realismo vira espetáculo quando tem um autor. Para a Malu, o resultado natural dela precisa de rosto e assinatura.'},
    {at:'@maraisafernandadentista', url:'https://www.instagram.com/maraisafernandadentista/', porte:'64 mil', perfil:'Lentes naturais "sem cara de lente", mais de 1.500 casos, interior de SP.', mecanismo:'Antes e depois, naturalidade e volume de prova. Resultado discreto como argumento.', leitura:'A naturalidade vende e o antes e depois é o motor. Ressalva: a audiência dela puxa dentista, então miramos o paciente.'},
    {at:'@drlucasfirmino', url:'https://www.instagram.com/drlucasfirmino/', porte:'603 mil', perfil:'Lentes de porcelana e implantes em escala industrial, mais de 100 mil lentes realizadas.', mecanismo:'Espetáculo e polêmica: "CPI das Lentes" (473 mil), "Homem das Lentes" (304 mil) e reação a casos mal feitos (23,2 mil).', leitura:'Contraexemplo em escala. Alcança milhões pelo show, e deixa aberta a vaga de quem fala de naturalidade com seriedade.'}
  ],
  sintese:{
    alta:['Naturalidade, sem cara de lente','Antes e depois com resultado discreto','O detalhe artesanal do trabalho'],
    saturado:['Lente artificial e exagerada','Promessa genérica de sorriso perfeito','Conteúdo técnico para dentista'],
    lacuna:['A lente natural com rosto e assinatura','Estética e função juntas','O medo do resultado falso, desarmado']
  },

  /* ---------- 07 PAUTAS ---------- */
  pautas:[
    {n:'01', bm:'@lucasguerreiros', cls:'Vida pessoal', tema:'A protesista por trás do sorriso',
     ref:{url:'https://www.instagram.com/reel/DTO7SGvgB9p/', metrica:'2,5 milhões de views', o:'O maior reel dele não tem técnica nenhuma: é a festa da família. Vida pessoal do profissional.', porque:'No nicho de lentes o autor vale tanto quanto o resultado, e o que humaniza o autor é o que mais alcança.'},
     angulo:'Quem é a Maria Luiza e por que escolheu a reabilitação. O rosto da marca antes do dente.',
     desdobra:{reels:'Ela conta, direto na câmera, por que ama devolver sorrisos naturais. 45s, luz quente.', carrossel:'A história dela em capítulos, com bastidor do laboratório.', stories:'Enquete "o que você acha que é uma lente natural?" e a resposta.', estatico:'Retrato dela com uma frase sobre naturalidade.'}},
    {n:'02', bm:'@lucasguerreiros', cls:'Autoridade', tema:'Realismo tem autor',
     ref:{url:'https://www.instagram.com/reel/Dcrh7E8Cwa8/', metrica:'7.319 views', o:'Close do resultado com a assinatura dele gravada na própria imagem.', porque:'A assinatura transforma técnica em desejo e faz o resultado ter dono.'},
     angulo:'O padrão de naturalidade da Malu, com o close do resultado discreto. Ela assina.',
     desdobra:{reels:'Close do antes e depois natural, com ela explicando a escolha da cor. 40s.', carrossel:'O que faz uma lente parecer real, ponto a ponto.', stories:'"Você percebe qual é a lente?" com enquete.', estatico:'Close do sorriso com selo "natural de verdade".'}},
    {n:'03', bm:'@lucasguerreiros', cls:'Bastidores', tema:'O detalhe que ninguém vê',
     ref:{url:'https://www.instagram.com/reel/DccC-b6iylO/', metrica:'31,2 mil views', o:'Macro das lentes na boca, com a textura e o brilho em detalhe.', porque:'O close do "como é feito" prende, encanta e prova cuidado sem precisar de uma palavra.'},
     angulo:'A lente mais fina que parece, o trabalho no milímetro. O artesanato por trás do natural.',
     desdobra:{reels:'A lente fininha na ponta do dedo e a prova na boca. Detalhe e luz. 30s.', carrossel:'Do planejamento à prova, o caminho de uma lente.', stories:'Bastidor da prova em tempo real.', estatico:'Macro da lente com a chamada "no detalhe".'}},
    {n:'04', bm:'@maraisafernandadentista', cls:'Autoridade', tema:'Antes e depois natural',
     ref:{url:'https://www.instagram.com/reel/Daqm4zsNV0P/', metrica:'120 mil views', o:'O maior reel dela, em colab com uma maquiadora local de 23,6 mil: o que ela indica para uma boca limpa.', porque:'Quando a especialista assume opinião, o alcance dispara. O mesmo peso vale ao mostrar o próprio resultado.'},
     angulo:'Relato de caso da Malu, com o resultado que não grita. Discrição como assinatura.',
     desdobra:{reels:'Relato de caso: a queixa, o plano, o resultado natural. Com autorização. 50s.', carrossel:'O caso em etapas, do incômodo ao sorriso discreto.', stories:'Caixinha "o que te incomoda no seu sorriso?".', estatico:'Antes e depois autorizado, com contexto.'}},
    {n:'05', bm:'@maraisafernandadentista', cls:'Dúvidas', tema:'Vai ficar falso?',
     ref:{url:'https://www.instagram.com/reel/Da3c2EDR1wC/', metrica:'14,6 mil views', o:'"A paciente disse que a lente quebrou do nada." Ela encara a objeção de frente, sem defensiva.', porque:'Desarmar o medo com honestidade é o que aproxima o paciente certo.'},
     angulo:'Ela mostra por que a lente natural não fica falsa: cor, formato e proporção do rosto.',
     desdobra:{reels:'Ela compara, sem jargão, o natural e o exagerado. 40s.', carrossel:'Cinco sinais de uma lente natural bem feita.', stories:'"Verdadeiro ou falso" sobre cara de lente.', estatico:'Card "natural x artificial" lado a lado.'}},
    {n:'06', bm:'@maraisafernandadentista', cls:'Autoridade', conv:true, tema:'Voltar a mastigar',
     ref:{url:'https://www.instagram.com/reel/DcwV1_4xu4T/', metrica:'3.624 views', o:'"Doutora, sinto dor quando bate ar nos dentes." A queixa funcional que chega na consulta.', porque:'Função é a porta que a estética sozinha não abre. Estética e função juntas ampliam o público.'},
     angulo:'Reabilitação que devolve a mordida, não só a estética. O depoimento de quem voltou a comer bem.',
     desdobra:{reels:'Depoimento real: comer, sorrir e falar de novo com conforto. Com autorização. 45s.', carrossel:'A jornada da reabilitação, da queixa à função.', stories:'Caixinha "você deixa de comer algo por causa dos dentes?".', estatico:'Depoimento entre aspas, com chamada de avaliação.'}},
    {n:'07', bm:'@drlucasfirmino', cls:'Dúvidas', conv:true, tema:'Olha o que fizeram',
     ref:{url:'https://www.instagram.com/reel/DdCVnodDMrj/', metrica:'23,2 mil views', o:'"Mulher mostra estar fazendo lentes de gel." Ele reage à desinformação do nicho e explica o certo.', porque:'Reagir ao erro alheio alcança e ensina ao mesmo tempo, sem precisar apontar dedo para ninguém.'},
     angulo:'Ela reage ao exagero e ensina o caminho natural, virando o alcance a favor do posicionamento.',
     desdobra:{reels:'Reação a um caso artificial e o que faria diferente. Tom respeitoso. 45s.', carrossel:'Por que a "dentona" acontece e como evitar.', stories:'Enquete "natural ou artificial?" com exemplos.', estatico:'Card educativo sobre o exagero.'}},
    {n:'08', bm:'@drlucasfirmino', cls:'Dúvidas', tema:'Preciso desgastar meus dentes?',
     ref:{url:'https://www.instagram.com/reel/DdCM3X-Chur/', metrica:'@drlucasfirmino · 603 mil', o:'"Mulher faz troca de lentes e o resultado surpreende." Refazer lente é assunto que prende.', porque:'Quem já tem lente e quem teme o desgaste assistem ao mesmo conteúdo. Responder o medo real puxa busca.'},
     angulo:'Ela explica, com honestidade, quando há desgaste e quando quase não há. Sem promessa.',
     desdobra:{reels:'Ela responde direto, com modelo na mão, sobre o desgaste. 40s.', carrossel:'Lente, faceta e o que muda no seu dente.', stories:'Caixinha "qual sua maior dúvida sobre lentes?".', estatico:'Card "mitos sobre desgaste".'}},
    {n:'09', bm:'@drlucasfirmino', cls:'Dúvidas', conv:true, tema:'Quanto dura e como cuidar',
     ref:{url:'https://www.instagram.com/reel/DY75mFbFc4X/', metrica:'473 mil views', o:'"CPI das Lentes": espetáculo puro, com cenário de tribunal. O nicho virou show.', porque:'Alcança meio milhão e não gera confiança clínica. Clareza sobre manutenção faz o caminho oposto e destrava a avaliação.'},
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
/* ============================ SKIN LUMY ============================ */
{
  slug:'skinlumy', ativo:true, apelido:'Skin Lumy',
  nome:'Skin Lumy · Flávia Trapenard', categoria:'Estética facial, corporal e íntima · Vila Olímpia',
  resumo:'Cuidado por inteiro. Mostra o que aplica, começa pelo que é seguro e acompanha até o resultado aparecer.',
  arroba:'@skin_lumy', perfil:'https://www.instagram.com/skin_lumy/',
  seguidores:'2.785', avatar:'img/skinlumy/avatar.webp',
  guia:{href:'guia/skinlumy', t:'Guia de Instagram da Skin Lumy',
        d:'O manual que a Flávia usa: perfil e bio, destaques, as oito linhas de conteúdo com exemplo real, como gravar, stories, a semana e o que não fazer.'},

  /* ---------- 01 DIAGNÓSTICO ---------- */
  nicho:'Clínica de estética facial, corporal e íntima na Vila Olímpia, aberta em setembro de 2026. Quatro linhas: rosto, HIFU, saúde íntima e corpo.',
  posicionamento:'Tratamento estético pensado para cada mulher, do rosto ao íntimo. A paciente sabe o que está sendo aplicado e por quê, começa pelo que é seguro e é acompanhada nos dias seguintes por quem trabalhou nove anos em hospitais nos Estados Unidos.',
  publico:[
    {t:'Quem', d:'Mulheres de 30 a 60 anos, classes A e B, num raio de 3 km da clínica: Vila Olímpia, Itaim, Brooklin, Vila Cordeiro.'},
    {t:'O medo que une', d:'Ficar artificial. Atravessa as quatro pacientes, do rosto ao corpo.'},
    {t:'Momentos', d:'Vontade de ser notada, rotina apertada, o rosto que muda depois dos 45, o corpo depois do parto ou da caneta.'},
    {t:'Quem influencia', d:'A amiga que fez e ficou bem. E quem encaminha: ginecologista, fisioterapeuta pélvica, consultora de amamentação.'}
  ],
  signos:[
    {t:'Luz', d:'Quente e doméstica. Recebe como quem recebe em casa.'},
    {t:'Cor', d:'Terracota, creme e sálvia. Falta uma cor de destaque para furar o feed.'},
    {t:'Ritual', d:'O café coado e o chocolatinho. A chegada é parte do tratamento.'},
    {t:'Prova', d:'A caixa lacrada do produto, mostrada antes de aplicar.'},
    {t:'Gesto', d:'O mapa no espelho: a marcação dos pontos antes da aplicação.'}
  ],
  linhaEditorial:[
    {n:'01', t:'Vida pessoal', peso:'25%', d:'A Flávia fora da sala: o café de toda manhã, o chocolatinho, os nove anos nos Estados Unidos.', porque:'É o que mais alcança hoje no perfil, e o que tira a marca do tom institucional.', temas:['dica com chocolatinho','o café de toda manhã','o que aprendi atendendo mulheres de tantos países','sem filtro']},
    {n:'02', t:'Autoridade', peso:'25%', d:'Análise de caso a cada 15 dias: técnica, critério, evolução e limitação, sem preço.', porque:'Prova dentro das regras do conselho, e o que sustenta preço acima da média.', temas:['análise de caso','o que o HIFU faz embaixo da pele','trajetória em saúde da mulher','quando é caso de cirurgia']},
    {n:'03', t:'Bastidores', peso:'20%', d:'O que eu apliquei hoje: a caixa, o nome do produto e para que serve, sem rosto de paciente.', porque:'Transparência é o traço número um, e ninguém na região conta isso em voz alta.', temas:['a caixa lacrada','o mapa no espelho','a tecnologia explicada','bom dia com café']},
    {n:'04', t:'Dúvidas de paciente', peso:'30%', d:'A dúvida que ela não faz em voz alta, principalmente na saúde íntima.', porque:'87% das mulheres com escape de urina nunca trataram. A demanda existe e quase ninguém fala.', temas:['escape de urina tem tratamento','quantas unidades tem um frasco','por que começar com menos','depois das canetas']}
  ],
  canais:[
    {c:'Reels', papel:'Ser conhecida no bairro', o:'Crenças, bastidor, trajetória, cortes de caso. 1 peça principal por semana.', f:'3 por semana'},
    {c:'Stories', papel:'Rituais', o:'Dica com chocolatinho na quarta, o que apliquei hoje, bom dia com café.', f:'Dias úteis'},
    {c:'Carrossel', papel:'Provar competência', o:'Análise de caso a cada 15 dias, crenças, o que eu aplico.', f:'2 casos por mês'},
    {c:'Estático', papel:'Fixar a marca', o:'Card de crença e foto com o símbolo SL.', f:'2 por semana'},
    {c:'Encaminhamento', papel:'Confiança emprestada', o:'Caso e referência por e-mail para quem indica, mais o jantar científico.', f:'4 profissionais por trimestre'}
  ],

  /* ---------- ZAG ---------- */
  zag:{
    zig:'Na região, quem acolhe costuma ser barato e quem cobra mais costuma ser distante. Clínica de estética esconde o produto, promete resultado e desaparece depois da aplicação.',
    zag:'Premium e acolhedora ao mesmo tempo. Mostra a caixa lacrada antes de aplicar, começa com menos de propósito e manda mensagem no dia seguinte, na semana e no mês.',
    only:'A única clínica da Vila Olímpia que mostra o que aplica, começa pelo que é seguro e acompanha a paciente até o resultado aparecer.',
    provas:['A caixa do produto mostrada e nomeada antes de aplicar','Mensagem de 1, 7 e 30 dias escrita por ela','HIFU íntimo com número medido antes e depois','Nove anos em hospitais nos Estados Unidos']
  },

  /* ---------- melhores posts ---------- */
  melhores:[
    {img:'img/skinlumy/best/b1.webp', url:'https://www.instagram.com/reel/Dc7mEFCOPPE/', metrica:'1.506', titulo:'Sem filtro',
     porque:'O maior reel do perfil é ela sem maquiagem e sem filtro. Transparência, que é o traço número um da marca, já é o que mais alcança. A estratégia não precisa inventar nada: precisa repetir isso de propósito.'},
    {img:'img/skinlumy/best/b2.webp', url:'https://www.instagram.com/reel/DdEfcM2R6WL/', metrica:'1.087', titulo:'A tecnologia explicada',
     porque:'Ela em pé ao lado do aparelho, explicando o que ele faz. Educação com o equipamento em cena prende mais que o talking head solto.'},
    {img:'img/skinlumy/best/b3.webp', url:'https://www.instagram.com/reel/DcysqGIRUKP/', metrica:'1.072', titulo:'O produto na mão',
     porque:'Ela segurando o frasco e falando de uma paciente real. É exatamente o ritual "o que eu apliquei hoje" acontecendo sem querer.'}
  ],

  /* ---------- 02 IDENTIDADE ---------- */
  identidade:{
    logos:[
      {img:'img/skinlumy/avatar.webp', t:'Perfil atual', d:'Hoje o avatar é a foto dela, não o símbolo SL.'}
    ],
    paleta:[
      {hex:'#B9715D', nome:'Terracota'},
      {hex:'#F2E7DC', nome:'Creme'},
      {hex:'#9A9E84', nome:'Sálvia'},
      {hex:'#D9B38C', nome:'Dourado dos raios'}
    ],
    tipos:[
      {papel:'Títulos', nome:'Felix Titling (substituta: Cinzel)'},
      {papel:'Texto', nome:'Montserrat'},
      {papel:'Pendência', nome:'Uma cor de destaque fora do bege, para furar o feed'}
    ]
  },

  /* ---------- 03 LEITURA DE PERFIL ---------- */
  perfilAnalise:{
    resumo:'São 2.785 seguidores e 366 posts, com reels entre 300 e 1.500 views. O conteúdo é generoso e técnico, e a Flávia aparece muito, o que é bom. O problema é embalagem: quase tudo é selfie vertical gravada no carro, em casa ou no corredor, sem a identidade da marca em cena. O símbolo SL não aparece, a paleta terracota e creme não aparece, e o resultado é um feed que poderia ser de qualquer clínica. O maior reel é ela sem filtro, o que confirma onde está a força.',
    diag:[
      {t:'Presença dela', v:'Ela aparece muito e fala bem. Matéria-prima ótima.', s:'ok'},
      {t:'Transparência', v:'O campeão é "sem filtro". O traço da marca já funciona.', s:'ok'},
      {t:'Identidade', v:'Símbolo SL e paleta não aparecem em nenhuma peça.', s:'ajustar'},
      {t:'Produção', v:'Selfie no carro e no corredor. Sem enquadramento fixo.', s:'ajustar'},
      {t:'Vocabulário', v:'"ANTES e DEPOIS" e "boca coração" contrariam o manual.', s:'ajustar'},
      {t:'Saúde íntima', v:'O maior diferencial dela quase não aparece no feed.', s:'ajustar'}
    ],
    feedCores:{
      pes:{bg:'#B9715D', fg:'#F2E7DC', l:'Vida pessoal'},
      aut:{bg:'#9A9E84', fg:'#F2E7DC', l:'Autoridade'},
      bas:{bg:'#3B2B24', fg:'#D9B38C', l:'Bastidores'},
      duv:{bg:'#F2E7DC', fg:'#B9715D', l:'Dúvidas'}
    },
    feedIdeal:[
      {t:'Dúvida', c:'duv'},{t:'Análise de caso', c:'aut'},{t:'O que apliquei', c:'bas'},
      {t:'Pessoal', c:'pes'},{t:'Dúvida', c:'duv'},{t:'Análise de caso', c:'aut'},
      {t:'O que apliquei', c:'bas'},{t:'Dúvida', c:'duv'},{t:'Pessoal', c:'pes'}
    ],
    checklist:[
      {t:'Símbolo SL em toda peça', d:'Canto de todo vídeo e foto. O ícone nasce da repetição.', ok:false},
      {t:'Cor de destaque', d:'Uma cor fora do bege e do marrom, sem ser neon, para furar o feed.', ok:false},
      {t:'Enquadramento fixo', d:'Um lugar da clínica com luz definida para gravar sempre igual.', ok:false},
      {t:'Trocar o vocabulário', d:'"Análise de caso" no lugar de "antes e depois". Sem "boca da moda".', ok:false},
      {t:'A caixa lacrada em vídeo', d:'O ritual "o que eu apliquei hoje", que ninguém na região faz.', ok:false},
      {t:'Acervo do café e do chocolatinho', d:'Os dois rituais já existem na clínica e nunca foram filmados.', ok:false},
      {t:'Portfólio de casos', d:'31 casos já organizados em pastas, com comparativos tratados.', ok:true},
      {t:'Autorização escrita das pacientes', d:'Confirmar com a clínica antes de publicar qualquer caso.', ok:false}
    ]
  },

  /* ---------- ENSAIO ---------- */
  ensaio:{
    intro:'A atmosfera do ensaio da Skin Lumy: premium e acolhedora, no lugar que o mapa de posicionamento aponta como livre. Três atos: o lugar que recebe, a Flávia por perto e a paciente que se reconhece no espelho.',
    atmosfera:[
      {t:'Luz', d:'Quente e doméstica. Luz de janela, nunca luz dura de clínica.'},
      {t:'Paleta', d:'Terracota, creme e sálvia, com o dourado dos raios.'},
      {t:'Ritual', d:'O café coado, a xícara, o chocolatinho. A chegada em cena.'},
      {t:'Pele', d:'Mulher de 30 a 60 com textura real. Nada de pele apagada.'}
    ],
    refs:[
      {img:'img/skinlumy/ref/r01.webp', fonte:'https://www.pinterest.com/pin/50665564555691264/', t:'A sala que acolhe'},
      {img:'img/skinlumy/ref/r02.webp', fonte:'https://www.pinterest.com/pin/14918242512681658/', t:'Recepção creme e terracota'},
      {img:'img/skinlumy/ref/r03.webp', fonte:'https://www.pinterest.com/pin/281543727000845/', t:'Arco quente, calma'},
      {img:'img/skinlumy/ref/r04.webp', fonte:'https://www.pinterest.com/pin/140806233429186/', t:'Mostrar o que aplica'},
      {img:'img/skinlumy/ref/r05.webp', fonte:'https://www.pinterest.com/pin/1030409589797115495/', t:'O café da chegada'},
      {img:'img/skinlumy/ref/r06.webp', fonte:'https://www.pinterest.com/pin/275141858482217845/', t:'Leveza e luz de janela'},
      {img:'img/skinlumy/ref/r07.webp', fonte:'https://www.pinterest.com/pin/573505333887716487/', t:'Se olhar e se gostar'},
      {img:'img/skinlumy/ref/r08.webp', fonte:'https://www.pinterest.com/pin/14144186326796221/', t:'Pele real aos 45'},
      {img:'img/skinlumy/ref/r09.webp', fonte:'https://www.pinterest.com/pin/311803974226088916/', t:'Textura de verdade'}
    ],
    shotlist:[
      {t:'Retrato da Flávia', d:'Meio corpo e close, luz de janela, jaleco com o SL na manga.', c:'pes'},
      {t:'O café coado', d:'A moagem, a água, a xícara com o símbolo. O bom dia da marca.', c:'pes'},
      {t:'A caixa lacrada', d:'Ela mostrando e nomeando o produto antes de aplicar.', c:'bas'},
      {t:'O mapa no espelho', d:'A marcação dos pontos, vista pelo espelho, paciente autorizada.', c:'bas'},
      {t:'A conversa sentada', d:'Antes da maca, sempre. O acolhimento que já existe.', c:'duv'},
      {t:'A clínica em terracota', d:'Recepção e sala com a paleta da marca em cena.', c:'duv'},
      {t:'Pele real de paciente', d:'Mulher de 30 a 60 com textura verdadeira, sem apagar poro.', c:'aut'},
      {t:'O kit de saída', d:'Gloss, bilhete e voucher com o símbolo SL.', c:'aut'}
    ]
  },

  /* ---------- CAMPANHA ---------- */
  campanha:{
    status:'Plataforma aprovada · clínica aberta em set/2026',
    nome:'Para se olhar e se gostar de novo.',
    eixos:[
      {t:'Rosto', d:'descansada, com a sua cara'},
      {t:'Firmeza', d:'o que aparece aos poucos, sem agulha'},
      {t:'Íntima', d:'um assunto íntimo tratado com número e sem constrangimento'}
    ],
    alerta:'Território: cuidado por inteiro (institucional). Slogan: para se olhar e se gostar de novo (público). Foco de campanha: Full Face Botox e HIFU facial.',
    deck:'https://www.instagram.com/skin_lumy/'
  },

  /* ---------- BENCHMARK ---------- */
  benchmark:[
    {at:'interno · @skin_lumy', url:'https://www.instagram.com/reel/Dc7mEFCOPPE/', porte:'1.506 views', perfil:'O próprio reel "sem filtro" da Flávia, numa conta de 2.785.', mecanismo:'Ela sem maquiagem, sem filtro, falando direto. Transparência crua.', leitura:'A prova interna: o traço número um da marca já é o que mais alcança. Falta transformar isso em ritual.'},
    {at:'@mundodoassoalhopelvico', url:'https://www.instagram.com/mundodoassoalhopelvico/', porte:'10,4 mil', perfil:'Dra. Cristiane Carboni, reabilitação do assoalho pélvico, dor pélvica e incontinência.', mecanismo:'Autoridade acadêmica em saúde íntima, com congresso, curso e white paper. Reels de 1 a 2,7 mil.', leitura:'A referência do território íntimo, e também o alerta: ela fala muito com colega. O espaço de falar com a paciente segue aberto. Fisioterapeuta pélvica é quem encaminha para a Skin Lumy.'},
    {at:'@dralais.silveira', url:'https://www.instagram.com/dralais.silveira/', porte:'249 mil', perfil:'Harmonização orofacial em escala, instituto próprio e um método registrado.', mecanismo:'Lifestyle de alto padrão e método com nome próprio. Os maiores reels são viagem e rotina (36,3 mil e 28,1 mil), não procedimento.', leitura:'Contraexemplo do que a Skin Lumy nega: volume, método batizado e vitrine. E ao mesmo tempo mostra que a vida da dona alcança mais que a técnica.'}
  ],
  sintese:{
    alta:['A profissional sem filtro, crua e próxima','Produto e tecnologia mostrados e explicados','Lifestyle da dona, com moderação'],
    saturado:['Antes e depois sem explicação','Promoção e pacote com desconto','Boca da moda e volume máximo'],
    lacuna:['Saúde íntima falada sem vergonha','A caixa lacrada antes de aplicar','O acompanhamento como parte do tratamento']
  },

  /* ---------- PAUTAS ---------- */
  pautas:[
    {n:'01', bm:'interno · @skin_lumy', cls:'Vida pessoal', tema:'Sem filtro, de propósito',
     ref:{url:'https://www.instagram.com/reel/Dc7mEFCOPPE/', metrica:'1.506 views', o:'O maior reel do perfil: ela sem maquiagem e sem filtro, falando direto.', porque:'A transparência que é o traço número um da marca já é o que mais alcança na conta.'},
     angulo:'Virar o acerto em ritual: uma vez por semana ela aparece sem filtro, falando de um assunto que ninguém fala.',
     desdobra:{reels:'Ela sem maquiagem, luz de janela, contando uma verdade do consultório. 40s.', carrossel:'O que ninguém mostra sobre a pele aos 40.', stories:'Caixinha "o que você gostaria de perguntar sem ninguém ouvir?".', estatico:'Retrato real com uma frase dela.'}},
    {n:'02', bm:'interno · @skin_lumy', cls:'Bastidores', tema:'O que eu apliquei hoje',
     ref:{url:'https://www.instagram.com/reel/DcysqGIRUKP/', metrica:'1.072 views', o:'Ela segurando o frasco e falando de uma paciente real.', porque:'O ritual da caixa lacrada já acontece sem querer, e ninguém na região faz isso em voz alta.'},
     angulo:'O ritual diário: a caixa, o nome do produto, para que serve e por que começou com menos. Sem rosto de paciente.',
     desdobra:{reels:'A caixa lacrada aberta na câmera, com o nome e a dose explicados. 30s.', carrossel:'A diferença entre as marcas de toxina.', stories:'Série "o que eu apliquei hoje", nos dias de atendimento.', estatico:'Macro da caixa com o símbolo SL.'}},
    {n:'03', bm:'interno · @skin_lumy', cls:'Autoridade', tema:'A tecnologia que eu escolhi, e por quê',
     ref:{url:'https://www.instagram.com/reel/DdEfcM2R6WL/', metrica:'1.087 views', o:'Ela em pé ao lado do aparelho, explicando o que ele faz.', porque:'Educação com o equipamento em cena prende mais que talking head solto.'},
     angulo:'HIFU explicado de verdade: o que faz embaixo da pele, por que o resultado leva 90 dias e quando é caso de cirurgia.',
     desdobra:{reels:'Ela ao lado do aparelho explicando a camada que o HIFU atinge. 45s.', carrossel:'Por que o resultado do HIFU leva 90 dias.', stories:'Enquete "você sabia que HIFU não é laser?".', estatico:'Card com a crença "o procedimento termina quando o resultado aparece".'}},
    {n:'04', bm:'@mundodoassoalhopelvico', cls:'Dúvidas', tema:'Escape de urina tem tratamento',
     ref:{url:'https://www.instagram.com/reel/DcCN-zpijWk/', metrica:'2.685 views', o:'Projeto de pesquisa em assoalho pélvico, no maior alcance do perfil dela.', porque:'O tema tem demanda enorme e quase nenhuma voz falando com a paciente.'},
     angulo:'56% das brasileiras acima de 40 relatam escape e 87% nunca trataram. Ela fala disso sem vergonha, com o número do medidor.',
     desdobra:{reels:'O que é o HIFU íntimo e para quem serve, em linguagem de paciente. 50s.', carrossel:'Cinco dúvidas que ninguém pergunta em voz alta.', stories:'Caixinha anônima sobre saúde íntima.', estatico:'Card com o dado dos 87%, com fonte.'}},
    {n:'05', bm:'@mundodoassoalhopelvico', cls:'Dúvidas', tema:'Frases que eu mais escuto no consultório',
     ref:{url:'https://www.instagram.com/reel/DbbeugFEsHV/', metrica:'2.264 views', o:'Ela lista as frases que mais ouve das pacientes. Relatable puro.', porque:'Reconhecimento imediato: a paciente se vê na frase e manda para a amiga.'},
     angulo:'As frases que a Flávia mais escuta: "é só um pouquinho", "a minha amiga fez e ficou ótima", "eu não quero parecer feita".',
     desdobra:{reels:'Lista rápida das frases, com a resposta dela em uma linha. 35s.', carrossel:'Uma frase por slide, com o que ela responde.', stories:'Enquete "você já disse alguma dessas?".', estatico:'Card com a frase mais reconhecível.'}},
    {n:'06', bm:'@mundodoassoalhopelvico', cls:'Autoridade', conv:true, tema:'O número que mostra que funcionou',
     ref:{url:'https://www.instagram.com/reel/Dc9qibIuRIe/', metrica:'2.192 views', o:'Bastidor de vida e trabalho, misturando rotina e autoridade técnica.', porque:'Autoridade fica mais leve quando vem junto da pessoa.'},
     angulo:'O medidor de pressão do HIFU íntimo: o número antes e depois da sessão, com retornos em 30, 60 e 90 dias. Ninguém mostra isso.',
     desdobra:{reels:'O medidor em cena, com o número antes e depois. Sem exposição de paciente. 40s.', carrossel:'Como a evolução é medida, sessão por sessão.', stories:'Bastidor do retorno de 30 dias.', estatico:'Card do medidor com chamada de avaliação.'}},
    {n:'07', bm:'@dralais.silveira', cls:'Dúvidas', conv:true, tema:'A conta que não fecha',
     ref:{url:'https://www.instagram.com/reel/DdIBRCdpZGV/', metrica:'11,1 mil views', o:'Ela fala de método próprio e código de conduta, com marca registrada no nome.', porque:'O nicho premia volume e nome próprio. Negar isso em público é território livre.'},
     angulo:'Quantas unidades tem um frasco, e por que botox muito barato tem uma conta que não fecha. Educar uma vez e seguir.',
     desdobra:{reels:'Ela abre a conta do frasco, sem citar concorrente. 45s.', carrossel:'Três perguntas para fazer antes de marcar em qualquer lugar.', stories:'Quiz "quantas unidades você acha que tem um frasco?".', estatico:'Card da crença, sem nome e sem print.'}},
    {n:'08', bm:'@dralais.silveira', cls:'Autoridade', conv:true, tema:'Começar com menos',
     ref:{url:'https://www.instagram.com/reel/DdMGOP-hwar/', metrica:'28,1 mil views', o:'Atendimento e relação com a paciente, no perfil de quem vende volume.', porque:'O medo de ficar artificial atravessa as quatro pacientes dela.'},
     angulo:'Por que ela não faz 2 ml de labial de uma vez. A dose explicada como escolha técnica, não como economia.',
     desdobra:{reels:'Ela explica a decisão da dose, com o mapa no espelho. 40s.', carrossel:'Natural aos 30, aos 45 e aos 60.', stories:'Caixinha "o que te faz ter medo de exagerar?".', estatico:'Card "a gente sempre pode completar depois".'}},
    {n:'09', bm:'@dralais.silveira', cls:'Vida pessoal', tema:'A Flávia fora da sala',
     ref:{url:'https://www.instagram.com/reel/DdhxuRQqAip/', metrica:'36,3 mil views', o:'O maior reel dela é uma viagem. Lifestyle, não procedimento.', porque:'Mesmo num perfil de 249 mil, a vida alcança mais que a técnica.'},
     angulo:'A dica com chocolatinho, o café de toda manhã e os nove anos nos Estados Unidos. Leveza com moderação.',
     desdobra:{reels:'Ela responde uma dúvida com o chocolate do dia na mão. 30s.', carrossel:'O que eu aprendi atendendo mulheres de tantos países.', stories:'Bom dia com café, de segunda a sexta.', estatico:'A xícara com o símbolo SL.'}}
  ],

  /* posts fixados ---------- */
  fixados:[
    {n:'01', tema:'Prazer, Skin Lumy', papel:'Apresenta a clínica e a Flávia. O cartão de visita que o perfil não tem.', precisa:'ensaio e símbolo SL aplicado',
     slides:['Capa: a Flávia e "para se olhar e se gostar de novo"','Quem é: nove anos em hospitais nos Estados Unidos','As quatro linhas: rosto, HIFU, íntima e corpo','O jeito Lumy: mostro o que aplico e acompanho depois','O que você vive aqui: café, conversa sentada, mapa no espelho','Chamada: agende sua avaliação']},
    {n:'02', tema:'Análise de caso', papel:'O ritual da quinzena virado em fixado. A prova dentro das regras do conselho.', precisa:'portfólio de casos com autorização escrita',
     slides:['Capa: "análise de caso"','O que incomodava a paciente','O que foi aplicado, com nome e dose','A evolução, com a mesma luz e o mesmo ângulo','A limitação: o que isso não resolve','Chamada: agende sua avaliação']},
    {n:'03', tema:'Um assunto que ninguém fala', papel:'A saúde íntima como território. Post de posicionamento e captação.', precisa:'ensaio, roteiro dela e o medidor em cena',
     slides:['Capa: "56% das mulheres acima de 40 passam por isso"','O que é o escape de urina, sem rodeio','Por que ninguém trata: 87% nunca procuraram','O que o HIFU íntimo faz','O número medido, antes e depois','Chamada: dá para falar disso aqui']}
  ],

  ciclos:[]
},

/* ============================ JÉSSICA CURI ============================ */
{
  slug:'jessica', ativo:true, apelido:'Jéssica',
  nome:'Dra. Jéssica Curi', categoria:'Bucomaxilo + harmonização · SSA e SP',
  resumo:'Do osso à pele. A cirurgiã que explica o caso antes de qualquer decisão, e diz quando não é caso de mexer.',
  arroba:'@dra.jessicafcuri', perfil:'https://www.instagram.com/dra.jessicafcuri/',
  seguidores:'4.578', avatar:'img/jessica/avatar.webp',

  /* ---------- 01 DIAGNÓSTICO ---------- */
  nicho:'Cirurgia bucomaxilofacial (ATM, ortognática, siso, implante) em Salvador e harmonização orofacial em São Paulo, na Vila Mariana.',
  posicionamento:'A cirurgiã bucomaxilofacial que também harmoniza. Lê o rosto do osso à pele, explica o que está acontecendo e diz o que dá para fazer, o que esperar e quando não é caso de mexer. Em Salvador resolve dor, mordida e respiração. Em São Paulo garante estética natural com critério de cirurgia.',
  publico:[
    {t:'Salvador', d:'Homens e mulheres de 20 a 55 anos com dor na ATM, travamento, mordida que o aparelho não fecha, ronco e apneia.'},
    {t:'São Paulo', d:'Mulheres de 28 a 55 perto da Vila Mariana, e um público masculino que cresce por medo de cirurgia.'},
    {t:'O medo que une', d:'Ficar artificial. Nas duas cidades é a mesma trava.'},
    {t:'Quem influencia', d:'A amiga que fez e ficou bem. A família, na ortognática. O ortodontista e o médico do sono.'}
  ],
  signos:[
    {t:'Luz', d:'Quente e contida. Elegante, sem brilho de vitrine.'},
    {t:'Cor', d:'Dourado, marrom profundo e creme. Paleta ainda a fechar.'},
    {t:'Ícone', d:'A imagem do exame. Tomografia e raio-x são o elemento visual que só ela usa com naturalidade.'},
    {t:'Gesto', d:'A mão traçando a linha do osso, no próprio rosto ou na tela.'},
    {t:'Ritmo', d:'Aula curta de quem domina o assunto, dita sem soberba.'}
  ],
  linhaEditorial:[
    {n:'01', t:'Vida pessoal', peso:'20%', d:'A Jéssica fora da sala, em recortes escolhidos. Ela expõe pouco, por escolha.', porque:'Impede a marca de soar fria sem obrigar ninguém a expor a rotina.', temas:['como escolhi odontologia às cinco da manhã','domingo: silêncio, livro e filme de terror','o cachorro','o que aprendi ensinando']},
    {n:'02', t:'Autoridade', peso:'30%', d:'Caso explicado do osso à pele, com autorização e texto legal. O ritual da quinzena.', porque:'É a prova dentro das regras do conselho, e o que sustenta o preço acima da média.', temas:['caso de ATM com exame','ortognática passo a passo','trecho de aula da Let’s HOF','hospitais e formação']},
    {n:'03', t:'Bastidores', peso:'20%', d:'Dia de cirurgia, preparo, material e equipe, sem paciente identificável.', porque:'Bastidor cirúrgico é o que mais alcança no nicho dela, e mostra rigor.', temas:['dia de hospital','o kit do dia','a anestesia explicada antes','atendimento online de Salvador']},
    {n:'04', t:'Dúvidas de paciente', peso:'30%', d:'A queixa com o nome que o paciente usa, respondida sem jargão.', porque:'Puxa alcance de busca e é a porta de entrada das duas cidades.', temas:['dor de ATM e dor de cabeça','quanto tempo fico afastado','vai ficar artificial?','quando não é caso de mexer']}
  ],
  canais:[
    {c:'Reels', papel:'Alcance e autoridade', o:'Queixa explicada, caso, trecho de aula, bastidor. 1 peça principal por semana.', f:'3 por semana'},
    {c:'Carrossel', papel:'Prova dentro do conselho', o:'Caso explicado a cada 15 dias, crenças, o que a cirurgia resolve.', f:'2 casos por mês'},
    {c:'Stories', papel:'Ritual diário', o:'Pergunta da semana, dia de cirurgia, atendimento online.', f:'Dias úteis'},
    {c:'Estático', papel:'Fixar marca', o:'Card de crença e frase, com CRO da cidade certa.', f:'2 por semana'},
    {c:'Foto', papel:'Acervo', o:'Retrato, exame na tela, bastidor de hospital e pele real.', f:'1 ensaio por trimestre'}
  ],

  /* ---------- ZAG ---------- */
  zag:{
    zig:'No mercado dela, quem explica fala com colega, em aula e congresso. Quem fala com paciente mostra o resultado pronto e para por aí.',
    zag:'Ela explica para o paciente. Avalia do osso à pele, mostra o exame na tela e tem a coragem de dizer quando não é caso de mexer.',
    only:'A única cirurgiã bucomaxilofacial que também harmoniza e explica o caso ao paciente antes de qualquer decisão.',
    provas:['~40% das avaliações viram cirurgia, quatro vezes a média','Formação cirúrgica e estética na mesma pessoa','Opera no Mater Dei e é plantonista do HGE','Já recusa o que não precisa ser feito']
  },

  /* ---------- melhores posts ---------- */
  melhores:[
    {img:'img/jessica/best/b1.webp', url:'https://www.instagram.com/reel/DbOurfPv-6i/', metrica:'3.955', titulo:'O close do resultado',
     porque:'Macro de lábio, sem rosto e sem promessa. O detalhe em close é o que mais alcança no perfil, e cabe nas regras do conselho.'},
    {img:'img/jessica/best/b3.webp', url:'https://www.instagram.com/reel/DY4TbXCO2v0/', metrica:'2.025', titulo:'A equipe no hospital',
     porque:'Bastidor com gente real e estrutura hospitalar. Mesmo padrão que explodiu no perfil do Felipe: bloco cirúrgico prende.'},
    {img:'img/jessica/best/b1.webp', url:'https://www.instagram.com/reel/DbI24rmugK8/', metrica:'2.612', titulo:'"Você é seu projeto mais importante"',
     porque:'Frase forte sobre bastidor. Funciona, e é o formato que ela mais repete: rende alcance médio sem construir território.'}
  ],

  /* ---------- 02 IDENTIDADE ---------- */
  identidade:{
    logos:[
      {img:'img/jessica/avatar.webp', t:'Retrato', d:'Hoje a marca é o rosto dela.'}
    ],
    paleta:[
      {hex:'#C9A227', nome:'Dourado'},
      {hex:'#3A2C20', nome:'Marrom profundo'},
      {hex:'#EDE4D6', nome:'Creme'},
      {hex:'#1A1714', nome:'Quase-preto'}
    ],
    tipos:[
      {papel:'Manual', nome:'Não existe. Marca feita com apoio de IA'},
      {papel:'Prioridade 30 dias', nome:'Paleta e manual mínimo (Nold)'},
      {papel:'Obrigatório na peça', nome:'CRO-BA 16230 · CRO-SP 180773'}
    ]
  },

  /* ---------- 03 LEITURA DE PERFIL ---------- */
  perfilAnalise:{
    resumo:'A distância entre o que ela sabe e o que ela publica é a maior oportunidade do projeto. São 4.578 seguidores e 484 posts, com reels entre 600 e 1.000 views: alcança cerca de 20% da própria base. O feed é bonito e já tem um ar dourado consistente, mas mistura caso e vida pessoal, publica pouca explicação e não tem paleta fechada, então cada peça parece de uma marca diferente.',
    diag:[
      {t:'Alcance', v:'Reels de 600 a 1.000 views. Cerca de 20% da base.', s:'ajustar'},
      {t:'Explicação', v:'Ela explica muito bem na consulta e quase nada no perfil.', s:'ajustar'},
      {t:'Identidade', v:'Sem paleta nem manual. Cada peça sai diferente.', s:'ajustar'},
      {t:'Duas cidades', v:'Salvador e SP disputam o mesmo feed, sem separação clara.', s:'ajustar'},
      {t:'Estética do feed', v:'Dourado e escuro já dão um ar próprio. Boa base.', s:'ok'},
      {t:'Conversão', v:'~40% das avaliações viram cirurgia. Quatro vezes a média.', s:'ok'}
    ],
    feedCores:{
      pes:{bg:'#3A2C20', fg:'#EDE4D6', l:'Vida pessoal'},
      aut:{bg:'#C9A227', fg:'#1A1714', l:'Autoridade'},
      bas:{bg:'#1A1714', fg:'#C9A227', l:'Bastidores'},
      duv:{bg:'#EDE4D6', fg:'#3A2C20', l:'Dúvidas'}
    },
    feedIdeal:[
      {t:'Dúvida', c:'duv'},{t:'Caso explicado', c:'aut'},{t:'Bastidor', c:'bas'},
      {t:'Dúvida', c:'duv'},{t:'Caso explicado', c:'aut'},{t:'Pessoal', c:'pes'},
      {t:'Bastidor', c:'bas'},{t:'Dúvida', c:'duv'},{t:'Autoridade', c:'aut'}
    ],
    checklist:[
      {t:'Paleta e manual mínimo', d:'A prioridade número um dos 30 dias. Sem isso nada se acumula.', ok:false},
      {t:'Exame na tela', d:'Tomografia e raio-x como abertura de todo caso explicado.', ok:false},
      {t:'Retrato de autoridade', d:'Luz quente, tom dourado, com e sem jaleco.', ok:false},
      {t:'Bastidor de hospital', d:'Preparo, material e equipe, sem paciente identificável.', ok:false},
      {t:'Pele real em close', d:'O natural que ela defende, com textura de verdade.', ok:false},
      {t:'Texto legal e CRO', d:'CRO-BA nas peças de Salvador, CRO-SP nas de SP.', ok:false},
      {t:'Banco de casos autorizados', d:'Já existe registro por caso, com autorização assinada.', ok:true},
      {t:'DDD 11 no link da bio', d:'Com os dois atendimentos declarados.', ok:false}
    ]
  },

  /* ---------- ENSAIO ---------- */
  ensaio:{
    intro:'A atmosfera do ensaio da Jéssica traduz o território: do osso à pele. Começa no exame, passa pela cirurgiã e termina na pele real. Elegante e contida, na régua de direção de arte que ela admira, sem trend.',
    atmosfera:[
      {t:'Luz', d:'Quente e contida. Sombra suave, nada de brilho de vitrine.'},
      {t:'Paleta', d:'Dourado, marrom profundo e creme. Elegância sóbria.'},
      {t:'Osso', d:'Tomografia e raio-x como matéria visual da marca.'},
      {t:'Pele', d:'Textura real, sem retoque. O natural que ela defende.'}
    ],
    refs:[
      {img:'img/jessica/ref/r01.webp', fonte:'https://www.pinterest.com/pin/492649954392928/', t:'Autoridade em tom quente'},
      {img:'img/jessica/ref/r02.webp', fonte:'https://www.pinterest.com/pin/844493677027888/', t:'O retrato assinado'},
      {img:'img/jessica/ref/r03.webp', fonte:'https://www.pinterest.com/pin/45739752463761816/', t:'A cirurgiã'},
      {img:'img/jessica/ref/r04.webp', fonte:'https://www.pinterest.com/pin/259801472273840209/', t:'A tomografia, o ícone'},
      {img:'img/jessica/ref/r05.webp', fonte:'https://www.pinterest.com/pin/36521446973657164/', t:'O raio-x do crânio'},
      {img:'img/jessica/ref/r06.webp', fonte:'https://www.pinterest.com/pin/704883779168841635/', t:'O osso e o dourado'},
      {img:'img/jessica/ref/r07.webp', fonte:'https://www.pinterest.com/pin/2674081026772526/', t:'Pele real, luz suave'},
      {img:'img/jessica/ref/r08.webp', fonte:'https://www.pinterest.com/pin/9218374233486516/', t:'O close da pele'},
      {img:'img/jessica/ref/r09.webp', fonte:'https://www.pinterest.com/pin/71916925296273676/', t:'O natural sem retoque'}
    ],
    shotlist:[
      {t:'Retrato da cirurgiã', d:'Meio corpo e close, luz quente, com e sem jaleco.', c:'aut'},
      {t:'O gesto da linha do rosto', d:'A mão traçando o osso, no próprio rosto e na tela.', c:'aut'},
      {t:'O exame na tela', d:'Tomografia e raio-x, a abertura de todo caso explicado.', c:'bas'},
      {t:'Dia de hospital', d:'Preparo, material e equipe. Sem paciente identificável.', c:'bas'},
      {t:'A sacola do dia', d:'O kit entregue no dia da cirurgia, com a identidade nova.', c:'bas'},
      {t:'Pele real em close', d:'Textura de verdade, o natural que ela defende.', c:'duv'},
      {t:'A consulta online', d:'Ela atendendo Salvador de São Paulo. Sustenta o rodízio.', c:'duv'},
      {t:'A Jéssica fora da sala', d:'Livro, silêncio, o cachorro. Recorte, nunca rotina exposta.', c:'pes'}
    ]
  },

  /* ---------- CAMPANHA ---------- */
  campanha:{
    status:'Plataforma aprovada · conteúdo entra em novembro',
    nome:'Entender antes de mexer.',
    eixos:[
      {t:'Salvador', d:'a dor e a função explicadas antes da cirurgia'},
      {t:'São Paulo', d:'o natural que vem de dose medida e lugar certo'},
      {t:'As duas', d:'quem ensina o procedimento faz o procedimento'}
    ],
    alerta:'Território: do osso à pele (institucional). Slogan: entender antes de mexer (público). Uma nunca substitui a outra.',
    deck:'https://www.instagram.com/dra.jessicafcuri/'
  },

  /* ---------- BENCHMARK ---------- */
  benchmark:[
    {at:'@drmanoelroque', url:'https://www.instagram.com/drmanoelroque/', porte:'20,1 mil', perfil:'Médico e cirurgião maxilofacial, São Paulo e Santa Catarina.', mecanismo:'Depoimento de paciente e transformação funcional, medidos em 40,1 mil, 37,6 mil e 64 mil views.', leitura:'Prova que cirurgia de face alcança longe quando a história é do paciente. É o teto que a frente de Salvador persegue.'},
    {at:'@drorionhaas', url:'https://www.instagram.com/drorionhaas/', porte:'10,6 mil', perfil:'Cirurgia do sono, Stanford e PhD PUCRS, Porto Alegre.', mecanismo:'Conteúdo técnico de apneia e ronco explicado com autoridade acadêmica. Reels de 4,4 a 11,4 mil.', leitura:'A referência para a linha de ronco e apneia, que quase ninguém liga à ortognática em Salvador.'},
    {at:'@dralais.silveira', url:'https://www.instagram.com/dralais.silveira/', porte:'249 mil', perfil:'Harmonização orofacial em escala, fundadora de instituto e criadora de um método registrado.', mecanismo:'Lifestyle de alto padrão e método com nome próprio. Os maiores reels são viagem e rotina (36,3 mil e 28,1 mil), não procedimento.', leitura:'Contraexemplo que ensina dos dois lados. O método batizado é exatamente o que a Jéssica nega, e mesmo assim o lifestyle dela prova que rosto e vida alcançam mais que técnica.'}
  ],
  sintese:{
    alta:['Bastidor cirúrgico e estrutura hospitalar','A queixa com o nome que o paciente usa','Close de detalhe, sem rosto e sem promessa'],
    saturado:['Método com nome de profissional','Antes e depois solto, sem explicação','Perfil de harmonização em volume'],
    lacuna:['Explicar o caso para o paciente, não para o colega','A dor de ATM com nome e exame','O ronco ligado à ortognática']
  },

  /* ---------- PAUTAS ---------- */
  pautas:[
    {n:'01', bm:'@drmanoelroque', cls:'Dúvidas', tema:'A dor que ninguém achou',
     ref:{url:'https://www.instagram.com/reel/DYxxHTGhQ1t/', metrica:'40,1 mil views', o:'Depoimento de quem convivia com dor de anos e finalmente teve diagnóstico.', porque:'A dor sem nome é o gatilho emocional mais forte do nicho, e quem dá o nome vira a referência.'},
     angulo:'Ela dá nome ao que a paciente sente: três sinais de que o problema é a articulação, com a tomografia na tela.',
     desdobra:{reels:'Ela lista os três sinais e mostra o exame. Linguagem de paciente, sem jargão. 45s, CRO-BA.', carrossel:'O que é a ATM e por que a dor de cabeça vem junto.', stories:'Caixinha "há quanto tempo você sente essa dor?".', estatico:'Card com a frase "já me disseram que era estresse".'}},
    {n:'02', bm:'@drmanoelroque', cls:'Autoridade', tema:'Caso explicado do osso à pele',
     ref:{url:'https://www.instagram.com/reel/DYihRSmhiCw/', metrica:'37,6 mil views', o:'O dia da cirurgia contado por quem estava lá, com contexto e emoção.', porque:'Caso real com história vence caso clínico solto, e respeita as regras do conselho.'},
     angulo:'O ritual da quinzena: um caso real, camada por camada, com autorização escrita e texto legal.',
     desdobra:{reels:'A queixa, a tomografia, a decisão e o pós. Sem promessa. 60s.', carrossel:'O caso em etapas, começando pelo exame.', stories:'Bastidor do dia, sem paciente identificável.', estatico:'Frame do exame com a chamada do caso.'}},
    {n:'03', bm:'@drmanoelroque', cls:'Dúvidas', tema:'O pós que a internet não mostra',
     ref:{url:'https://www.instagram.com/p/DbB81PTzSiI/', metrica:'post educativo', o:'Hábito banal nomeado como possível sintoma, em linguagem de paciente.', porque:'Reconhecimento imediato: a pessoa se vê na descrição e salva o post.'},
     angulo:'O medo do pós é a maior objeção da ortognática. Ela mostra o primeiro dia de verdade, sem suavizar.',
     desdobra:{reels:'Como é o primeiro dia depois da ortognática, com honestidade. 50s.', carrossel:'O que dói, o que não dói e o que você vai comer na primeira semana.', stories:'Caixinha "o que mais te assusta no pós?".', estatico:'Card com a linha do tempo da recuperação.'}},
    {n:'04', bm:'@drorionhaas', cls:'Dúvidas', tema:'O ronco que ninguém liga à mordida',
     ref:{url:'https://www.instagram.com/reel/DYNU752x1fE/', metrica:'11,4 mil views', o:'Conteúdo de cirurgia do sono explicado com autoridade acadêmica.', porque:'Apneia tem volume de busca e quase ninguém conecta o ronco à estrutura do rosto.'},
     angulo:'37% dos adultos de São Paulo têm apneia, e o Brasil demora 11 meses até o diagnóstico. Ela liga ronco, mordida e ortognática.',
     desdobra:{reels:'O que o ronco faz com o seu sono, e quando a cirurgia entra. 50s.', carrossel:'O exame que mostra o problema, passo a passo.', stories:'Enquete "alguém já reclamou do seu ronco?".', estatico:'Card com o dado dos 37%, com fonte.'}},
    {n:'05', bm:'@drorionhaas', cls:'Bastidores', tema:'Dia de hospital',
     ref:{url:'https://www.instagram.com/reel/DMYlljVv5Qv/', metrica:'5.935 views', o:'A peça impressa que guia a cirurgia, mostrada como objeto de precisão.', porque:'Técnica visível desarma o medo e gera fascínio, sem expor paciente.'},
     angulo:'O bastidor do bloco: preparo, material e equipe. É o formato que mais alcança no nicho e ela já tem o acervo.',
     desdobra:{reels:'Preparo do dia de cirurgia, sem paciente identificável. Som ambiente. 40s.', carrossel:'O que acontece antes de você entrar na sala.', stories:'Sequência do dia de hospital em tempo real.', estatico:'Detalhe do instrumental com o dourado da marca.'}},
    {n:'06', bm:'@drorionhaas', cls:'Autoridade', tema:'Quem ensina o procedimento faz o procedimento',
     ref:{url:'https://www.instagram.com/reel/DK20LLgo7T0/', metrica:'4.471 views', o:'Quem mais está na sala além do cirurgião, explicado com didática de professor.', porque:'Autoridade acadêmica traduzida para o paciente constrói confiança sem soar currículo.'},
     angulo:'Um trecho da aula da Let’s HOF por mês, traduzido para linguagem de paciente.',
     desdobra:{reels:'Um pedaço da aula, com a explicação virada para quem senta na cadeira. 45s.', carrossel:'Três perguntas antes de marcar em qualquer lugar.', stories:'Bastidor do dia de aula.', estatico:'Card "quem ensina faz" com CRO.'}},
    {n:'07', bm:'@dralais.silveira', cls:'Dúvidas', conv:true, tema:'Vai ficar artificial?',
     ref:{url:'https://www.instagram.com/reel/DdIBRCdpZGV/', metrica:'11,1 mil views', o:'Ela fala de código de conduta e de método próprio, com marca registrada no nome.', porque:'É o oposto exato da crença da Jéssica: método com nome de gente. O contraste rende pauta.'},
     angulo:'O natural tem técnica: dose, lugar e produto. E a coragem de dizer quando não é caso de preencher.',
     desdobra:{reels:'Por que eu começo com pouco, e o que muda no resultado. 45s, CRO-SP.', carrossel:'Dose, lugar e produto: o que decide o natural.', stories:'Caixinha "o que te faz ter medo de preencher?".', estatico:'Card da crença "realçar o que você já tem".'}},
    {n:'08', bm:'@dralais.silveira', cls:'Autoridade', conv:true, tema:'Método não tem dono',
     ref:{url:'https://www.instagram.com/reel/DdMGOP-hwar/', metrica:'28,1 mil views', o:'Atendimento e relação com a paciente, no perfil de quem batizou um método com o próprio nome.', porque:'O nicho premia quem cria nome próprio. Negar isso em público é território livre.'},
     angulo:'A crença mais forte dela: o que existe é ciência, e ciência não tem dono. Confronta a ideia, nunca a pessoa.',
     desdobra:{reels:'Por que método com nome de gente não existe. Direto, sem citar ninguém. 40s.', carrossel:'Como saber se a técnica tem evidência.', stories:'Enquete "você já ouviu falar em método com nome de dentista?".', estatico:'Card da crença, sem nome e sem print.'}},
    {n:'09', bm:'@dralais.silveira', cls:'Vida pessoal', tema:'A Jéssica fora da sala',
     ref:{url:'https://www.instagram.com/reel/DdhxuRQqAip/', metrica:'36,3 mil views', o:'O maior reel dela é uma viagem à Itália. Lifestyle, não procedimento.', porque:'Mesmo num perfil de 249 mil, o que mais alcança é a vida, e não a técnica.'},
     angulo:'Recorte escolhido, no limite que ela aceita: como escolheu odontologia às cinco da manhã, o domingo de silêncio e filme de terror.',
     desdobra:{reels:'Ela conta a manhã em que foi fazer a prova sem contar a ninguém. 50s.', carrossel:'A história em capítulos, com fotos de arquivo.', stories:'Bastidor curto, sem falar: estudo, livro, preparo de aula.', estatico:'Retrato com a frase de origem.'}}
  ],

  /* posts fixados ---------- */
  fixados:[
    {n:'01', tema:'Prazer, Dra. Jéssica', papel:'Apresenta a profissional e as duas frentes. O post que a bio não conta.', precisa:'ensaio e paleta definida',
     slides:['Capa: retrato e "entender antes de mexer"','Quem é: cirurgiã bucomaxilofacial que também harmoniza','A formação: Mandic, CED, Sírio-Libanês, Einstein','Onde opera: Mater Dei e Hospital Geral do Estado','Do osso à pele: como é a avaliação','Chamada: WhatsApp da sua cidade']},
    {n:'02', tema:'Caso explicado', papel:'O ritual da quinzena virado em post fixado. A prova dentro das regras do conselho.', precisa:'portfólio de casos com autorização escrita',
     slides:['Capa: "caso explicado"','A queixa, na palavra do paciente','O exame na tela','O que dá para fazer e o que não dá','O resultado com contexto, autorizado','Chamada: agende a sua avaliação · CRO']},
    {n:'03', tema:'Quando eu digo que não é caso de mexer', papel:'A promessa que nenhum concorrente assina. Post de posicionamento e captação.', precisa:'ensaio e roteiro dela',
     slides:['Capa: "às vezes a resposta é não fazer nada"','Por que eu começo pela estrutura','O que o tratamento não resolve','Os casos em que eu recuso','O que você ganha ouvindo um não','Chamada: entender antes de mexer']}
  ],

  ciclos:[]
},

/* ============================ CLÍNICA LK ============================ */
{
  slug:'clinica-lk', ativo:true, apelido:'Clínica LK',
  nome:'Clínica LK', categoria:'Reabilitação oral · desde 1995',
  resumo:'Implante, protocolo e estética. O recomeço de quem quer voltar a mastigar e sorrir.',
  arroba:'@clinicalk', perfil:'https://www.instagram.com/clinicalk/',
  seguidores:'6.549', avatar:'img/clinica-lk/avatar.webp',

  /* ---------- 01 DIAGNÓSTICO ---------- */
  nicho:'Reabilitação oral desde 1995. Implante, prótese protocolo, estética e lentes, no Paraíso, SP.',
  posicionamento:'A clínica que devolve capítulos de vida. Trinta anos de reabilitação oral e uma equipe que trata a prótese como recomeço: voltar a mastigar, rir sem esconder a boca e confiar no próprio rosto. A frente de estética atende a família inteira.',
  publico:[
    {t:'Quem', d:'Adulto maduro, 50 a 75 anos. Os filhos participam da decisão.'},
    {t:'Momento', d:'Perdeu dentes ou usa uma prótese que incomoda. Quer resolver de vez.'},
    {t:'Dor', d:'Não mastiga direito, esconde o sorriso, se sente envelhecido pela boca.'},
    {t:'Trava', d:'Medo de implante, preço, e a dúvida "será que vale a pena na minha idade?".'}
  ],
  signos:[
    {t:'Luz', d:'Quente e digna. O paciente maduro filmado com respeito.'},
    {t:'Cor', d:'Dourado da marca, grafite e off. Sobriedade com calor.'},
    {t:'Rosto', d:'O riso solto de quem voltou a sorrir. Casal, família, abraço.'},
    {t:'Método', d:'Protocolo em macro, GBT, laboratório. Técnica visível.'},
    {t:'Tempo', d:'Desde 1995. A história como prova.'}
  ],
  linhaEditorial:[
    {n:'01', t:'Vida pessoal', peso:'20%', d:'A vida que volta com o sorriso: o churrasco, a foto de família, a gargalhada.', porque:'Reabilitação vende recomeço de vida, e vida é o que alcança.', temas:['a primeira mordida','a foto de família','o riso solto','30 anos de casa']},
    {n:'02', t:'Autoridade', peso:'30%', d:'Resultado de protocolo com história, depoimento maduro, três décadas de casos.', porque:'É o formato que já rende: o melhor reel da casa é um resultado.', temas:['resultado com contexto','depoimento real','desde 1995','a equipe especialista']},
    {n:'03', t:'Bastidores', peso:'20%', d:'O laboratório, o GBT, a prova da prótese, a equipe em sincronia.', porque:'Técnica visível desarma o medo do implante.', temas:['a prótese em macro','o dia da instalação','GBT e limpeza','a equipe em cena']},
    {n:'04', t:'Dúvidas de paciente', peso:'30%', d:'Preço, dor, idade e prazo, respondidos com honestidade.', porque:'A pergunta de preço é um dos maiores reels da casa. Dúvida é demanda.', temas:['quanto custa o protocolo','dói?','tem idade limite?','quanto tempo dura']}
  ],
  canais:[
    {c:'Reels', papel:'Alcance e prova', o:'Depoimento, resultado com história, dúvida respondida. 30 a 60s.', f:'3 por semana'},
    {c:'Carrossel', papel:'Salvamento', o:'Etapas do protocolo, mitos do implante, cuidados.', f:'1 por semana'},
    {c:'Estático', papel:'Posicionamento', o:'Frase de marca, o recomeço, chamada de avaliação.', f:'1 por semana'},
    {c:'Stories', papel:'Relação diária', o:'Bastidor, enquete, caixinha de dúvida, rotina da equipe.', f:'Diário, 3 a 5 telas'},
    {c:'Foto', papel:'Acervo', o:'Paciente maduro rindo, equipe, protocolo em macro.', f:'1 ensaio por trimestre'}
  ],

  /* ---------- ZAG ---------- */
  zag:{
    zig:'Clínicas de implante vendem procedimento: dente novo, aparelho de última geração e promessa de dente em um dia.',
    zag:'A LK devolve capítulos de vida. O churrasco de domingo, a gargalhada na foto, a mordida na maçã. Reabilitação contada por quem voltou a viver.',
    only:'A única clínica que trata reabilitação como recomeço de vida, com trinta anos de história e depoimento real.',
    provas:['O melhor reel da casa é um resultado de protocolo','Depoimentos maduros com rosto e emoção','A pergunta de preço respondida sem rodeio','Três décadas e três gerações atendidas']
  },

  /* ---------- melhores posts ---------- */
  melhores:[
    {img:'img/clinica-lk/best/b1.webp', url:'https://www.instagram.com/reel/DbCQMqMAQX7/', metrica:'13 mil', titulo:'Resultado de Protocolo',
     porque:'Resultado com rosto, história e emoção real. O formato número um da casa: prova que reabilitação vende recomeço.'},
    {img:'img/clinica-lk/best/b2.webp', url:'https://www.instagram.com/reel/DaiVg2VOjA8/', metrica:'2.474', titulo:'Paciente em cena',
     porque:'Gente real na clínica, sem roteiro travado. A espontaneidade aproxima e segura a retenção.'},
    {img:'img/clinica-lk/best/b3.webp', url:'https://www.instagram.com/reel/Da5ct_mOMvu/', metrica:'2.357', titulo:'Estética em cena',
     porque:'A frente jovem também rende: prova que a LK fala com a família inteira, do protocolo à estética.'}
  ],

  /* ---------- 02 IDENTIDADE ---------- */
  identidade:{
    logos:[
      {img:'img/clinica-lk/avatar.webp', t:'Símbolo LK', d:'A marca dourada em círculo, do perfil.'}
    ],
    paleta:[
      {hex:'#C2A24B', nome:'Dourado LK'},
      {hex:'#2E3A48', nome:'Azul-uniforme'},
      {hex:'#23262B', nome:'Grafite'},
      {hex:'#F4F1EA', nome:'Off quente'}
    ],
    tipos:[
      {papel:'Manual da marca', nome:'A receber do cliente'},
      {papel:'Provisório · títulos', nome:'Serif elegante (padrão Nold)'},
      {papel:'Provisório · texto', nome:'Sans limpa (padrão Nold)'}
    ]
  },

  /* ---------- 03 LEITURA DE PERFIL ---------- */
  perfilAnalise:{
    resumo:'A casa tem o que quase ninguém tem: pacientes maduros reais dando depoimento, e o melhor reel é um resultado de protocolo. Falta afiar o fio editorial: o feed mistura frentes e formatos, o texto na tela varia e a marca dourada aparece pouco. Base de 6,5 mil construída desde 1995, pronta para escalar com constância.',
    diag:[
      {t:'Prova', v:'Depoimento maduro real, o ativo mais raro do nicho.', s:'ok'},
      {t:'Formato', v:'Resultado de protocolo já é o campeão da casa.', s:'ok'},
      {t:'Feed', v:'Frentes misturadas sem hierarquia visual.', s:'ajustar'},
      {t:'Identidade', v:'Dourado da marca aparece pouco no conteúdo.', s:'ajustar'},
      {t:'Texto na tela', v:'Tipografia varia a cada post. Padronizar.', s:'ajustar'},
      {t:'CTA', v:'Reels fortes sem chamada clara de avaliação.', s:'ajustar'}
    ],
    feedCores:{
      pes:{bg:'#2E3A48', fg:'#F4F1EA', l:'Vida pessoal'},
      aut:{bg:'#C2A24B', fg:'#23262B', l:'Autoridade'},
      bas:{bg:'#23262B', fg:'#C2A24B', l:'Bastidores'},
      duv:{bg:'#F4F1EA', fg:'#23262B', l:'Dúvidas'}
    },
    feedIdeal:[
      {t:'Depoimento', c:'aut'},{t:'Dúvida', c:'duv'},{t:'Bastidor', c:'bas'},
      {t:'Vida', c:'pes'},{t:'Resultado', c:'aut'},{t:'Dúvida', c:'duv'},
      {t:'Bastidor', c:'bas'},{t:'Depoimento', c:'aut'},{t:'Dúvida', c:'duv'}
    ],
    checklist:[
      {t:'Banco de depoimentos', d:'Pacientes maduros contando o recomeço, com autorização.', ok:true},
      {t:'Casal maduro rindo', d:'O riso solto fora da clínica: café, campo, família.', ok:false},
      {t:'Protocolo em macro', d:'A prótese como objeto de precisão, luz dramática.', ok:false},
      {t:'Equipe em sincronia', d:'Retrato da equipe com calor, longe do institucional.', ok:false},
      {t:'A entrega da prótese', d:'A mão que entrega, o espelho, a primeira reação.', ok:false},
      {t:'Padrão de tipografia', d:'Uma família de texto na tela para todo reel.', ok:false},
      {t:'Rosto da Fabi na casa', d:'A dona em cena, ligando os dois perfis.', ok:false},
      {t:'Fotos horizontais', d:'Para capa, Google e 16:9.', ok:false}
    ]
  },

  /* ---------- ENSAIO ---------- */
  ensaio:{
    intro:'A atmosfera do ensaio da LK: o riso de quem voltou a sorrir, filmado com dignidade e luz quente. Pacientes maduros como protagonistas, equipe com calor humano e o protocolo como objeto de precisão.',
    atmosfera:[
      {t:'Luz', d:'Quente e digna. Fim de tarde, janela, nada de flash frio.'},
      {t:'Elenco', d:'Casal maduro rindo de verdade. A família junto.'},
      {t:'Equipe', d:'Sincronia e acolhimento, longe do institucional duro.'},
      {t:'Detalhe', d:'O protocolo em macro, o dourado da marca.'}
    ],
    refs:[
      {img:'img/clinica-lk/ref/r01.webp', fonte:'https://www.pinterest.com/pin/41728734045213269/', t:'O riso do casal maduro'},
      {img:'img/clinica-lk/ref/r02.webp', fonte:'https://www.pinterest.com/pin/639651953369218388/', t:'Close do riso íntimo'},
      {img:'img/clinica-lk/ref/r03.webp', fonte:'https://www.pinterest.com/pin/748582769359128299/', t:'A cumplicidade no campo'},
      {img:'img/clinica-lk/ref/r04.webp', fonte:'https://www.pinterest.com/pin/142567144448529146/', t:'O abraço do recomeço'},
      {img:'img/clinica-lk/ref/r05.webp', fonte:'https://www.pinterest.com/pin/17592254792353673/', t:'O retrato digno'},
      {img:'img/clinica-lk/ref/r06.webp', fonte:'https://www.pinterest.com/pin/80079699620180469/', t:'A gargalhada solta'},
      {img:'img/clinica-lk/ref/r07.webp', fonte:'https://www.pinterest.com/pin/338755203248941091/', t:'Equipe em tom quente'},
      {img:'img/clinica-lk/ref/r08.webp', fonte:'https://www.pinterest.com/pin/11892386513691884/', t:'O trio que acolhe'},
      {img:'img/clinica-lk/ref/r09.webp', fonte:'https://www.pinterest.com/pin/203928689372852882/', t:'A equipe em casa'}
    ],
    shotlist:[
      {t:'Casal maduro rindo', d:'Fora da clínica: café, campo, varanda. O recomeço em cena.', c:'pes'},
      {t:'Retrato digno do paciente', d:'Close com luz quente, o sorriso restaurado.', c:'aut'},
      {t:'A entrega da prótese', d:'A mão que entrega, o espelho, a primeira reação.', c:'aut'},
      {t:'Protocolo em macro', d:'A prótese como objeto de precisão, fundo escuro.', c:'bas'},
      {t:'Equipe em sincronia', d:'Retrato quente da equipe, sem pose dura.', c:'pes'},
      {t:'GBT e tecnologia', d:'O equipamento em uso, mãos e detalhe.', c:'bas'},
      {t:'O ambiente', d:'Recepção e consultório com a marca dourada presente.', c:'duv'},
      {t:'A Fabi na casa', d:'A dona em cena, ponte entre os dois perfis.', c:'pes'}
    ]
  },

  /* ---------- CAMPANHA ---------- */
  campanha:{
    status:'Proposta · ainda não estruturada',
    nome:'Sorria novamente. O recomeço tem data.',
    eixos:[
      {t:'Frio', d:'a vida que volta com o sorriso'},
      {t:'Médio', d:'medo e preço, respondidos de frente'},
      {t:'Aquecido', d:'depoimento, resultado e avaliação'}
    ],
    alerta:'Mote "sorria novamente" já vive no feed da casa. A campanha organiza o que a clínica já sabe fazer.',
    deck:'https://linktr.ee/clinicalk1995'
  },

  /* ---------- BENCHMARK ---------- */
  benchmark:[
    {at:'@lucasguerreiros', url:'https://www.instagram.com/lucasguerreiros/', porte:'91,2 mil', perfil:'"Realismo Dental", prótese estética com autor e marca própria, SP.', mecanismo:'Resultado ultra-realista com assinatura. O autor vale tanto quanto a técnica.', leitura:'Prótese cresce quando tem rosto e assinatura. A LK tem trinta anos de autoridade para assinar seus resultados.'},
    {at:'@odontologiadicas', url:'https://www.instagram.com/odontologiadicas/', porte:'193 mil', perfil:'Conteúdo de odontologia com relatable e emoção, MG.', mecanismo:'Reação coletiva (35,7 mil), curiosidade e vulnerabilidade. Emoção escala.', leitura:'O gancho emocional serve à LK: o medo do implante e o "voltei a mastigar" são emoção pura. Adaptamos do dentista para o paciente maduro.'},
    {at:'@drlucasfirmino', url:'https://www.instagram.com/drlucasfirmino/', porte:'603 mil', perfil:'Lentes e implantes em escala, mais de 3 mil protocolos, se apresenta como a maior clínica da América Latina.', mecanismo:'Espetáculo e volume. Quando posta institucional, como a visita de representantes, o alcance despenca na hora.', leitura:'Prova os dois lados: o nicho tem audiência gigante, e a vitrine é justamente o que menos engaja. A LK entra pela história de vida.'}
  ],
  sintese:{
    alta:['Depoimento maduro com emoção real','Resultado de protocolo com história','Preço e medo respondidos de frente'],
    saturado:['Aparelho de última geração como pauta','Promessa de dente em um dia','Vitrine institucional sem gente'],
    lacuna:['O recomeço de vida como narrativa','O paciente maduro como protagonista','A família na decisão do implante']
  },

  /* ---------- PAUTAS ---------- */
  pautas:[
    {n:'01', bm:'interno · @clinicalk', cls:'Autoridade', tema:'O protocolo que virou recomeço',
     ref:{url:'https://www.instagram.com/reel/DbCQMqMAQX7/', metrica:'13 mil views', o:'O melhor reel da casa: resultado de protocolo com rosto e história.', porque:'O formato campeão interno merece virar série.'},
     angulo:'Uma série mensal: cada resultado de protocolo contado como capítulo de vida, com autorização.',
     desdobra:{reels:'Depoimento do paciente + o momento do espelho + a vida depois. 50s, luz quente.', carrossel:'O caso em etapas: a chegada, o plano, o dia da entrega, o depois.', stories:'Bastidor do dia da entrega com a reação.', estatico:'Retrato do paciente sorrindo com uma frase do depoimento.'}},
    {n:'02', bm:'interno · @clinicalk', cls:'Dúvidas', conv:true, tema:'Quanto custa um protocolo, de verdade',
     ref:{url:'https://www.instagram.com/reel/Da9B0NJEZTY/', metrica:'1.704 views', o:'"Qual o preço da Prótese Protocolo?" A pergunta de preço já é um dos maiores alcances da casa.', porque:'Dúvida de preço é demanda reprimida. Responder de frente gera confiança.'},
     angulo:'Falar de investimento sem tabu: o que compõe o valor, formas de avaliar, sem prometer número na arte.',
     desdobra:{reels:'A especialista explica o que define o investimento e por que varia. 45s.', carrossel:'O que está incluso num protocolo, etapa por etapa.', stories:'Caixinha "sua maior dúvida sobre implante" respondida.', estatico:'Card "avaliação é o primeiro passo" com chamada. Sem preço na arte.'}},
    {n:'03', bm:'interno · @clinicalk', cls:'Vida pessoal', tema:'A primeira mordida',
     ref:{url:'https://www.instagram.com/reel/DaiVg2VOjA8/', metrica:'2.474 views', o:'Gente real na clínica é o segundo maior alcance da casa.', porque:'A espontaneidade vence o institucional.'},
     angulo:'A vida que volta: a primeira maçã, o churrasco, a foto de família sem esconder o sorriso.',
     desdobra:{reels:'Paciente conta a primeira coisa que comeu depois do protocolo. Riso real. 40s.', carrossel:'"O que você voltaria a comer?" com respostas reais de pacientes.', stories:'Enquete "o que você comeria primeiro?".', estatico:'Foto de comida + frase "a mordida que voltou".'}},
    {n:'04', bm:'@lucasguerreiros', cls:'Autoridade', tema:'Resultado com assinatura',
     ref:{url:'https://www.instagram.com/reel/Dcd6CXeiKDs/', metrica:'20,9 mil views', o:'Antes e depois lado a lado, com a assinatura dele na imagem.', porque:'Assinatura transforma técnica em confiança. O resultado passa a ter autor.'},
     angulo:'A LK assina seus resultados: quem fez, há quantos anos faz, e o padrão da casa desde 1995.',
     desdobra:{reels:'A especialista apresenta um caso e assina: "feito aqui, do jeito LK". 40s.', carrossel:'O padrão LK: o que não abrimos mão em cada protocolo.', stories:'A equipe responde "o que é qualidade em prótese?".', estatico:'Selo "desde 1995" com retrato da equipe.'}},
    {n:'05', bm:'@lucasguerreiros', cls:'Bastidores', tema:'A prótese como obra',
     ref:{url:'https://www.instagram.com/reel/DIzuW-StEBy/', metrica:'1,9 milhão de views', o:'O planejamento do sorriso projetado na tela grande, com o paciente vendo antes de começar.', porque:'Técnica visível desarma o medo e gera fascínio. Quase dois milhões num conteúdo de processo.'},
     angulo:'O protocolo em macro: cerâmica, encaixe, o milímetro. O laboratório como bastidor de obra.',
     desdobra:{reels:'Macro da prótese + as mãos que ajustam + o encaixe final. Sem fala, só som ambiente. 30s.', carrossel:'Do molde à entrega: a jornada de um protocolo.', stories:'Bastidor do laboratório em tempo real.', estatico:'Macro da prótese sobre fundo grafite com o dourado LK.'}},
    {n:'06', bm:'@odontologiadicas', cls:'Dúvidas', tema:'Implante dói? Tem idade limite?',
     ref:{url:'https://www.instagram.com/reel/DV4j0FgDcjk/', metrica:'35,7 mil views', o:'Reação coletiva a um medo comum: os comentários viram "eu também".', porque:'Medo compartilhado é o gancho emocional mais forte do nicho.'},
     angulo:'Os medos reais do implante respondidos de frente, com a honestidade de quem faz há 30 anos.',
     desdobra:{reels:'A especialista responde os três medos mais ouvidos na clínica. 45s.', carrossel:'Um medo por slide, com a resposta honesta.', stories:'"Verdadeiro ou falso" sobre implante.', estatico:'Card "medo é normal, dúvida é bem-vinda" com chamada.'}},
    {n:'07', bm:'@odontologiadicas', cls:'Vida pessoal', conv:true, tema:'Do outro lado da cadeira da LK',
     ref:{url:'https://www.instagram.com/reel/DYqD2JiTHVb/', metrica:'23,9 mil views', o:'A profissional que se mostra vulnerável gera identificação imediata.', porque:'Vulnerabilidade humaniza e viaja longe.'},
     angulo:'A equipe da LK conta o caso que marcou: a entrega que fez a sala chorar. Emoção com autorização.',
     desdobra:{reels:'Uma pessoa da equipe conta o caso inesquecível. Direto na câmera. 50s.', carrossel:'"O dia que não esquecemos": um caso contado pela equipe.', stories:'Caixinha "qual sorriso mudou sua vida?".', estatico:'Frase da equipe entre aspas sobre fundo grafite.'}},
    {n:'08', bm:'@drlucasfirmino', cls:'Bastidores', tema:'Gente no lugar de aparelho',
     ref:{url:'https://www.instagram.com/reel/DdCKZ2pCIg-/', metrica:'contraexemplo · 603 mil', o:'"Recebemos os representantes da maior marca de implantes." Post de vitrine, sem nenhum paciente na tela.', porque:'Até um perfil gigante esfria quando vira institucional. O contraste com gente real é a nossa vantagem.'},
     angulo:'Cada tecnologia da LK aparece com uma pessoa usando e um paciente sentindo a diferença.',
     desdobra:{reels:'GBT em uso: a profissional explica o que o paciente sente de diferente. 40s.', carrossel:'Tecnologia da casa traduzida em benefício, uma por slide.', stories:'Tour pela clínica com a equipe apresentando.', estatico:'Foto de detalhe da tecnologia com legenda humana.'}},
    {n:'09', bm:'@drlucasfirmino', cls:'Autoridade', conv:true, tema:'30 anos, três gerações',
     ref:{url:'https://www.instagram.com/reel/DY-kP2NMGBO/', metrica:'304 mil views', o:'"Homem das Lentes": o dentista virou personagem de quadrinhos para chamar atenção.', porque:'Personagem alcança, história real convence. Tempo de casa é a prova que ninguém copia.'},
     angulo:'A história da LK como argumento de conversão: quem cuidou dos seus pais cuida de você.',
     desdobra:{reels:'Linha do tempo 1995 até hoje, com fotos de época e a equipe atual. 45s.', carrossel:'Trinta anos em capítulos: como a reabilitação evoluiu na casa.', stories:'Enquete "há quanto tempo você conhece a LK?".', estatico:'Peça "desde 1995" com chamada de avaliação.'}}
  ],

  /* posts fixados ---------- */
  fixados:[
    {n:'01', tema:'Bem-vindo à LK', papel:'Apresenta a clínica: 30 anos, equipe e o que fazemos. O cartão de visita do perfil.', precisa:'ensaio da equipe e identidade',
     slides:['Capa: a equipe e "reabilitação oral desde 1995"','Quem somos: a casa e a história','As frentes: implante, protocolo, estética e lentes','O jeito LK: técnica com calor humano','A equipe especialista','Chamada: agende uma avaliação']},
    {n:'02', tema:'Recomeços que acompanhamos', papel:'Casos reais de reabilitação com contexto e autorização. A prova da casa.', precisa:'portfólio de casos e depoimentos autorizados',
     slides:['Capa: "recomeços que acompanhamos"','Um protocolo, antes e depois autorizado','O depoimento de quem voltou a mastigar','Um caso de estética da nova geração','O que todos têm em comum: plano individual','Chamada: o seu recomeço começa na avaliação']},
    {n:'03', tema:'A transformação vai além dos dentes', papel:'O recomeço de vida como argumento. Post de desejo e captação.', precisa:'ensaio, portfólio e um depoimento',
     slides:['Capa: "mais que dentes novos"','O que a boca trava: comer, rir, conviver','A jornada da reabilitação, sem pressa','O depois: a vida que volta','Um depoimento real, com autorização','Chamada: comece o seu recomeço']}
  ],

  ciclos:[]
},

/* ============================ FABI KIM ============================ */
{
  slug:'fabi', ativo:true, apelido:'Fabi',
  nome:'LK · Dra. Fabiana Kim', categoria:'Founder · rosto da clínica',
  resumo:'A dona da LK como pessoa: montanha, viagem e consultório. A ponte humana da clínica.',
  arroba:'@fabiikim', perfil:'https://www.instagram.com/fabiikim/',
  seguidores:'873', avatar:'img/fabi/avatar.webp',

  /* ---------- 01 DIAGNÓSTICO ---------- */
  nicho:'Perfil pessoal da dona da Clínica LK. Vida real, viagem e odontologia na medida certa.',
  posicionamento:'A dentista que vive o que recomenda: saúde, movimento e alegria de viver. O perfil dela é a porta humana da LK: quem conhece a Fabi confia na clínica. Vida pessoal na frente, odontologia como consequência natural.',
  publico:[
    {t:'Quem', d:'Quem chega pela pessoa: seguidores de lifestyle, pacientes e futuros pacientes.'},
    {t:'Momento', d:'Conhece a Fabi antes de conhecer a clínica. A confiança nasce aqui.'},
    {t:'Dor', d:'Desconfia de clínica sem rosto. Quer saber quem vai cuidar.'},
    {t:'Trava', d:'Perfil pessoal sem ponte clara para a LK desperdiça a confiança criada.'}
  ],
  signos:[
    {t:'Luz', d:'Natural e dourada. Montanha, trilha, fim de tarde.'},
    {t:'Cor', d:'Verde musgo, terracota e areia. A paleta do outdoor.'},
    {t:'Corpo', d:'Movimento real: trilha, mochila, vento. Zero pose dura.'},
    {t:'Ponte', d:'O jaleco aparece como parte da vida, sem virar vitrine.'},
    {t:'Tom', d:'Leve e genuíno. A energia de quem vive bem.'}
  ],
  linhaEditorial:[
    {n:'01', t:'Vida pessoal', peso:'40%', d:'Trilha, viagem, esporte e o cotidiano real. O motor do perfil.', porque:'É o que já explode: 110 mil views num reel de trilha.', temas:['trilha e montanha','viagem','rotina real','o que a move']},
    {n:'02', t:'Autoridade', peso:'20%', d:'A dentista por trás da viajante: formação, a LK, o cuidado.', porque:'Converte a confiança pessoal em confiança clínica.', temas:['por que odontologia','a LK por dentro','um caso que marcou','30 anos de casa']},
    {n:'03', t:'Bastidores', peso:'20%', d:'O dia na clínica pelo olhar dela, a equipe, o caminho casa-consultório.', porque:'Liga os dois mundos sem esforço.', temas:['um dia comigo','a equipe','do trekking ao jaleco','a rotina da clínica']},
    {n:'04', t:'Dúvidas de paciente', peso:'20%', d:'A pergunta respondida no tom dela: leve, direto, sem jargão.', porque:'Alcança quem nunca entraria num perfil de clínica.', temas:['saúde e esporte','o que como na trilha','dente e viagem','mitos rápidos']}
  ],
  canais:[
    {c:'Reels', papel:'Alcance', o:'Lifestyle com gancho, POV de trilha, um dia comigo. 20 a 40s.', f:'2 a 3 por semana'},
    {c:'Carrossel', papel:'Narrativa', o:'Fotos de viagem com legenda que conta história.', f:'1 por semana'},
    {c:'Stories', papel:'Relação diária', o:'Rotina real, enquete, bastidor da LK.', f:'Diário'},
    {c:'Colab', papel:'Ponte', o:'Posts em colab com @clinicalk nos conteúdos de clínica.', f:'2 por mês'},
    {c:'Foto', papel:'Acervo', o:'Founder editorial + outdoor. Duas frentes no mesmo ensaio.', f:'1 ensaio por trimestre'}
  ],

  /* ---------- ZAG ---------- */
  zag:{
    zig:'Perfil de dona de clínica vira vitrine institucional: jaleco, procedimento e legenda de manual.',
    zag:'A Fabi é gente primeiro. Montanha, viagem e vida real na frente; a clínica aparece como parte natural da história dela.',
    only:'O único perfil que transforma a vida real da dona em porta de entrada da clínica.',
    provas:['110 mil views num reel de trilha, 126 vezes a base','Feed pessoal autêntico, sem cara de anúncio','A ponte @clinicalk já está na bio','O blueprint Lara Passos validado no nicho']
  },

  /* ---------- melhores posts ---------- */
  melhores:[
    {img:'img/fabi/best/b1.webp', url:'https://www.instagram.com/reel/DbTSTMox6gu/', metrica:'110 mil', titulo:'Ideias de pose na trilha',
     porque:'Colaboração com @diegodavidoff (Saia da Zona, 9,8 mil, expedições). A colab com um perfil de aventura entregou 126 vezes a base dela. A lição não é sorte: cruzar com o nicho outdoor funciona e dá para repetir de propósito, inclusive com a LK.'}
  ],

  /* ---------- 02 IDENTIDADE ---------- */
  identidade:{
    logos:[
      {img:'img/fabi/avatar.webp', t:'Retrato', d:'O rosto é a marca deste perfil.'}
    ],
    paleta:[
      {hex:'#5A6B4F', nome:'Verde musgo'},
      {hex:'#C1663B', nome:'Terracota'},
      {hex:'#EFE7D8', nome:'Areia'},
      {hex:'#2B2B28', nome:'Grafite quente'}
    ],
    tipos:[
      {papel:'Direção', nome:'Sem marca gráfica própria'},
      {papel:'Texto na tela', nome:'Sans leve, minimalista'},
      {papel:'Assinatura', nome:'@fabiikim + ponte @clinicalk'}
    ]
  },

  /* ---------- 03 LEITURA DE PERFIL ---------- */
  perfilAnalise:{
    resumo:'Vinte posts, 873 seguidores e um reel de 110 mil views. O perfil é 100% pessoal: trilha, viagem e amigos, com autenticidade rara. A odontologia não aparece, e é exatamente essa a oportunidade: construir a ponte com a LK sem matar a leveza que faz o perfil funcionar.',
    diag:[
      {t:'Alcance', v:'110 mil num reel de trilha. O motor existe.', s:'ok'},
      {t:'Autenticidade', v:'Feed genuíno, sem cara de marketing.', s:'ok'},
      {t:'Ponte', v:'A LK aparece só na bio. Falta no conteúdo.', s:'ajustar'},
      {t:'Constância', v:'20 posts no total. Ritmo a construir.', s:'ajustar'},
      {t:'Formato', v:'Um único reel. O formato campeão está subusado.', s:'ajustar'},
      {t:'Bio', v:'Sem posicionamento: quem é, o que faz, por quê.', s:'ajustar'}
    ],
    feedCores:{
      pes:{bg:'#5A6B4F', fg:'#EFE7D8', l:'Vida pessoal'},
      aut:{bg:'#C1663B', fg:'#EFE7D8', l:'Autoridade'},
      bas:{bg:'#2B2B28', fg:'#C1663B', l:'Bastidores'},
      duv:{bg:'#EFE7D8', fg:'#2B2B28', l:'Dúvidas'}
    },
    feedIdeal:[
      {t:'Trilha', c:'pes'},{t:'Viagem', c:'pes'},{t:'Bastidor LK', c:'bas'},
      {t:'Dúvida leve', c:'duv'},{t:'Trilha', c:'pes'},{t:'A dentista', c:'aut'},
      {t:'Rotina', c:'pes'},{t:'Dúvida leve', c:'duv'},{t:'Um caso', c:'aut'}
    ],
    checklist:[
      {t:'Acervo de trilha e viagem', d:'Já existe e é bom. Manter vivo.', ok:true},
      {t:'Ensaio founder', d:'Retrato editorial dela: leve, luz quente, sem pose dura.', ok:false},
      {t:'Ela na LK', d:'Jaleco, equipe e cadeira, pelo olhar pessoal.', ok:false},
      {t:'POV do dia', d:'Do treino da manhã ao último paciente.', ok:false},
      {t:'Bio reescrita', d:'Quem é, o que faz, a ponte para a LK.', ok:false},
      {t:'Padrão de reels', d:'Formato replicável do reel de 110 mil.', ok:false},
      {t:'Colab com @clinicalk', d:'Primeiro post em colaboração para cruzar audiências.', ok:false},
      {t:'Destaques', d:'Trilhas · Viagens · LK · Quem sou.', ok:false}
    ]
  },

  /* ---------- ENSAIO ---------- */
  ensaio:{
    intro:'A atmosfera do ensaio da Fabi: duas frentes no mesmo dia. A founder com luz suave e presença, e a vida real em movimento: trilha, vento e fim de tarde. O perfil dela pede verdade, não estúdio.',
    atmosfera:[
      {t:'Luz', d:'Natural e dourada. Manhã na trilha, janela na clínica.'},
      {t:'Paleta', d:'Verde musgo, terracota e areia. Outdoor real.'},
      {t:'Movimento', d:'Trilha, mochila, vento. Zero pose travada.'},
      {t:'Founder', d:'Retrato com presença calma. A dona sem formalidade.'}
    ],
    refs:[
      {img:'img/fabi/ref/r01.webp', fonte:'https://www.pinterest.com/pin/4081455908228526/', t:'Retrato leve, luz suave'},
      {img:'img/fabi/ref/r02.webp', fonte:'https://www.pinterest.com/pin/13299761397016286/', t:'Sorriso natural, tom terroso'},
      {img:'img/fabi/ref/r03.webp', fonte:'https://www.pinterest.com/pin/43276846421328909/', t:'Fundo terracota, presença'},
      {img:'img/fabi/ref/r04.webp', fonte:'https://www.pinterest.com/pin/6473993212901651/', t:'Elegância escura'},
      {img:'img/fabi/ref/r05.webp', fonte:'https://www.pinterest.com/pin/177047829097208857/', t:'A executiva pensativa'},
      {img:'img/fabi/ref/r06.webp', fonte:'https://www.pinterest.com/pin/1105774514787308098/', t:'Trilha com alegria'},
      {img:'img/fabi/ref/r07.webp', fonte:'https://www.pinterest.com/pin/440156563604733712/', t:'Pôr do sol na montanha'},
      {img:'img/fabi/ref/r08.webp', fonte:'https://www.pinterest.com/pin/374924737753844835/', t:'Vento e movimento'},
      {img:'img/fabi/ref/r09.webp', fonte:'https://www.pinterest.com/pin/6051780741583021/', t:'O caminho no outono'}
    ],
    shotlist:[
      {t:'Retrato founder', d:'Meio corpo, luz suave, roupa dela. Presença calma.', c:'aut'},
      {t:'Ela na LK', d:'Jaleco e sorriso, a clínica como casa.', c:'aut'},
      {t:'Trilha em movimento', d:'Caminhando, mochila, vento. A vida real.', c:'pes'},
      {t:'Fim de tarde dourado', d:'Contra-luz na montanha ou parque.', c:'pes'},
      {t:'Com a equipe', d:'A dona entre as pessoas da casa.', c:'bas'},
      {t:'Detalhes do caminho', d:'Bota, mochila, mapa, café. O universo dela.', c:'pes'},
      {t:'Do treino ao jaleco', d:'A transição do dia em duas fotos.', c:'bas'},
      {t:'Retrato próximo', d:'Close com sorriso real para avatar e capa.', c:'duv'}
    ]
  },

  /* ---------- CAMPANHA ---------- */
  campanha:{
    status:'Estratégia de ponte · perfil pessoal → clínica',
    nome:'A vida real de quem cuida do seu sorriso.',
    eixos:[
      {t:'Frio', d:'lifestyle alcança quem não segue clínica'},
      {t:'Médio', d:'o bastidor da LK humaniza'},
      {t:'Aquecido', d:'o caso e a avaliação convertem na LK'}
    ],
    alerta:'Regra de ouro: a leveza vem primeiro. A clínica entra como parte da vida, sem virar vitrine.',
    deck:'https://www.instagram.com/clinicalk/'
  },

  /* ---------- BENCHMARK ---------- */
  benchmark:[
    {at:'@larapassosalvim', url:'https://www.instagram.com/larapassosalvim/', porte:'13,2 mil', perfil:'Ortodontista e creator: vida pessoal na frente, ortodontia como pano de fundo.', mecanismo:'Os maiores reels são pessoais: a filha (32,2 mil), get ready (26,8 mil). A profissão converte quem chegou pela pessoa.', leitura:'O blueprint exato da Fabi. A diferença: a Fabi já provou alcance maior com menos base.'},
    {at:'@lucasguerreiros', url:'https://www.instagram.com/lucasguerreiros/', porte:'91,2 mil', perfil:'Personal brand em odontologia: nome, assinatura e marca própria.', mecanismo:'O autor como marca. Tudo que ele posta carrega o nome e volta para o negócio.', leitura:'O teto do caminho founder: quando a pessoa vira marca, a clínica herda tudo.'},
    {at:'interno · @fabiikim', url:'https://www.instagram.com/reel/DbTSTMox6gu/', porte:'110 mil views', perfil:'O próprio reel de trilha da Fabi, em colab com @diegodavidoff (Saia da Zona, 9,8 mil).', mecanismo:'Formato "ideias de pose", utilidade leve + cenário forte + colab com perfil de aventura. Entregou 126 vezes a base.', leitura:'A prova interna: o motor existe e a colab é o multiplicador. Falta ritmo e ponte com a LK.'}
  ],
  sintese:{
    alta:['Lifestyle com utilidade leve','Vida pessoal que carrega a profissão','POV e "um dia comigo"'],
    saturado:['Perfil de dona como vitrine da clínica','Jaleco e procedimento em tom frio','Legenda institucional'],
    lacuna:['A ponte leve entre vida e clínica','A founder como personagem contínua','O nicho saúde + montanha, quase vazio']
  },

  /* ---------- PAUTAS ---------- */
  pautas:[
    {n:'01', bm:'interno · @fabiikim', cls:'Vida pessoal', tema:'A série que o algoritmo pediu',
     ref:{url:'https://www.instagram.com/reel/DbTSTMox6gu/', metrica:'110 mil views', o:'Poses na trilha, em colab com @diegodavidoff (Saia da Zona, 9,8 mil). Explodiu numa conta de 873 seguidores.', porque:'Formato validado internamente, e a colab foi o multiplicador. Repetir a dupla é o caminho mais curto.'},
     angulo:'Transformar o acerto em série: utilidade leve + cenário forte, uma vez por semana.',
     desdobra:{reels:'"Ideias de pose" em novos cenários: montanha, cidade, viagem. 20 a 30s.', carrossel:'As melhores fotos do cenário com dicas na legenda.', stories:'Bastidor de como fez cada foto.', estatico:'A foto mais forte do cenário.'}},
    {n:'02', bm:'@larapassosalvim', cls:'Vida pessoal', tema:'Um dia comigo, de verdade',
     ref:{url:'https://www.instagram.com/reel/DZN--mGAwOp/', metrica:'26,8 mil views', o:'Get ready with me com rotina real e leveza.', porque:'POV de rotina aproxima e viraliza no nicho.'},
     angulo:'O dia real da Fabi: treino cedo, café, clínica, fim de tarde. A ponte aparece sozinha.',
     desdobra:{reels:'POV do dia completo, do tênis ao jaleco. Cortes rápidos. 30s.', carrossel:'O dia em seis quadros.', stories:'A rotina em tempo real com enquetes.', estatico:'Foto da transição treino → clínica.'}},
    {n:'03', bm:'@larapassosalvim', cls:'Autoridade', tema:'Por que virei dentista',
     ref:{url:'https://www.instagram.com/reel/DYLB2ERAjIo/', metrica:'16,2 mil views', o:'Narrativa emocional em primeira pessoa engaja e faz salvar.', porque:'História de origem converte seguidor em confiança.'},
     angulo:'A história dela com a odontologia e com a LK, contada com emoção e sem institucionalês.',
     desdobra:{reels:'Ela conta a origem: por que odontologia, por que a LK. 45s, luz quente.', carrossel:'A história em capítulos com fotos pessoais.', stories:'Caixinha "o que você quer saber sobre mim?".', estatico:'Retrato dela com uma frase de origem.'}},
    {n:'04', bm:'@larapassosalvim', cls:'Bastidores', tema:'Da trilha para a cadeira',
     ref:{url:'https://www.instagram.com/reel/DYIjOLnAsuS/', metrica:'32,2 mil views', o:'O momento pessoal mais forte é o que mais alcança.', porque:'A vida pessoal carrega; a profissão pega carona.'},
     angulo:'O contraste que define a Fabi: a mesma energia da montanha dentro da clínica.',
     desdobra:{reels:'Transição trilha → clínica no mesmo reel, com match cut. 25s.', carrossel:'Dois mundos, uma pessoa: fotos pareadas.', stories:'Enquete "trilha ou consultório?".', estatico:'Díptico trilha + jaleco.'}},
    {n:'05', bm:'interno · @clinicalk', cls:'Bastidores', tema:'A LK pelos olhos da dona',
     ref:{url:'https://www.instagram.com/reel/DaiVg2VOjA8/', metrica:'2.474 views', o:'Gente real na clínica é o que melhor performa na conta da LK.', porque:'O olhar pessoal da dona humaniza a casa inteira.'},
     angulo:'Tour e bastidor da LK narrados por ela, como quem apresenta a própria casa.',
     desdobra:{reels:'"Deixa eu te mostrar minha clínica": tour informal. 40s, colab com @clinicalk.', carrossel:'Os cantos favoritos dela na LK.', stories:'Um dia na LK pelos stories dela.', estatico:'Ela na recepção, sorrindo.'}},
    {n:'06', bm:'@lucasguerreiros', cls:'Autoridade', conv:true, tema:'Um caso que passou por mim',
     ref:{url:'https://www.instagram.com/reel/DcTvGZwiYen/', metrica:'610 mil views', o:'Ele sozinho em cena, sem procedimento nenhum. A pessoa é o conteúdo.', porque:'Quando o profissional vira personagem, tudo que ele toca herda a audiência.'},
     angulo:'Ela conta um caso da LK que a marcou, com autorização. A conversão acontece no colab.',
     desdobra:{reels:'O caso narrado por ela, com o resultado autorizado. Colab com @clinicalk. 45s.', carrossel:'O caso em etapas, no tom pessoal dela.', stories:'Repost com comentário dela.', estatico:'Frase dela sobre o caso, com chamada de avaliação na LK.'}},
    {n:'07', bm:'@odontologiadicas', cls:'Dúvidas', tema:'Dente de viajante',
     ref:{url:'https://www.instagram.com/reel/DV4j0FgDcjk/', metrica:'35,7 mil views', o:'Curiosidade leve com reação coletiva alcança longe.', porque:'Dúvida no tom lifestyle alcança quem foge de perfil de clínica.'},
     angulo:'Saúde bucal no universo dela: trilha, viagem, garrafa d’água, lanche de mochila.',
     desdobra:{reels:'"O que eu levo na mochila para os dentes" e outros ganchos leves. 30s.', carrossel:'Kit de viagem da dentista viajante.', stories:'Quiz de mitos de viagem e dentes.', estatico:'Flat lay da mochila com o kit.'}},
    {n:'08', bm:'@larapassosalvim', cls:'Vida pessoal', tema:'A viagem como capítulo',
     ref:{url:'https://www.instagram.com/reel/DcrreMxAb9y/', metrica:'13,6 mil views', o:'Um capítulo pessoal da vida dela, com intimidade e sem nenhuma relação com odontologia.', porque:'O feed pessoal sustenta a marca inteira. Momento de vida contado como história cria vínculo, não só like.'},
     angulo:'Cada viagem da Fabi vira capítulo narrado: o lugar, o perrengue, o aprendizado.',
     desdobra:{reels:'Mini-vlog da viagem com narração pessoal. 40s.', carrossel:'A viagem em fotos com legenda-crônica.', stories:'Diário de bordo em tempo real.', estatico:'A foto definitiva da viagem.'}},
    {n:'09', bm:'interno · @clinicalk', cls:'Autoridade', conv:true, tema:'Herdeira dos 30 anos',
     ref:{url:'https://www.instagram.com/reel/DbCQMqMAQX7/', metrica:'13 mil views', o:'O resultado de protocolo é o conteúdo mais forte da LK.', porque:'A história da casa ganha rosto quando a dona assume a narrativa.'},
     angulo:'A Fabi como guardiã da história: os 30 anos da LK contados por quem carrega o nome adiante.',
     desdobra:{reels:'Ela conta a história da LK e o que não muda nunca. Colab. 50s.', carrossel:'A LK em três décadas, pelo olhar dela.', stories:'Caixinha "pergunte sobre a LK".', estatico:'Retrato dela na clínica com "desde 1995" e chamada de avaliação.'}}
  ],

  /* posts fixados ---------- */
  fixados:[
    {n:'01', tema:'Prazer, Fabi', papel:'Apresenta a pessoa: quem é, o que ama, o que faz. O post que a bio não conta.', precisa:'ensaio founder e acervo pessoal',
     slides:['Capa: retrato leve e "dentista, viajante, dona da LK"','Quem sou: montanha, viagem e consultório','Por que odontologia','A LK: a casa que carrego','O que você vai ver por aqui','Chamada: vem junto, segue o perfil']},
    {n:'02', tema:'A LK por dentro', papel:'A clínica apresentada pela dona, em tom pessoal. A ponte oficial.', precisa:'fotos dela na clínica e da equipe',
     slides:['Capa: ela na LK, "minha casa desde sempre"','A história: 30 anos de reabilitação','A equipe pelos olhos dela','O que fazemos: implante, protocolo, estética','Como é ser paciente aqui','Chamada: conheça a LK, link na bio']},
    {n:'03', tema:'Vida de dentista viajante', papel:'O manifesto do perfil: saúde é estilo de vida. Desejo e identificação.', precisa:'acervo de trilha e viagem, já existente',
     slides:['Capa: trilha com "saúde é o que você vive"','A montanha como escola','O que o esporte me ensinou sobre cuidado','O mesmo cuidado na cadeira','A rotina que sustenta tudo','Chamada: segue para acompanhar']}
  ],

  ciclos:[]
}
];
