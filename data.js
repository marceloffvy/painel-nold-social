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

  /* ---------- 04 CAMPANHA ---------- */
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
  resumo:'Ortodontia adulta com alinhadores. O professor que planeja o sorriso. Campanha "Nunca é tarde".',
  arroba:'@robertosimonetti_ortodontia', perfil:'https://www.instagram.com/robertosimonetti_ortodontia/',
  seguidores:'3.095',

  /* ---------- 01 DIAGNÓSTICO ---------- */
  nicho:'Ortodontia adulta com alinhadores. Aparelho fixo e mentoria para dentistas como frentes de apoio.',
  posicionamento:'O ortodontista que planeja o sorriso como um arquiteto planeja uma obra: estrutura, tempo e previsibilidade. Para o adulto que acha que já passou da idade ou que alinhador é coisa de adolescente. Trinta anos de clínica, mestrado e um método que mostra o resultado antes de começar.',
  publico:[
    {t:'Quem', d:'Adulto de 30 a 55 anos, maioria mulher, classe média e alta.'},
    {t:'Momento', d:'Se incomoda com os dentes há anos e vai adiando a decisão.'},
    {t:'Dor', d:'Dente torto ou recidiva de tratamento antigo. Vergonha de sorrir em foto.'},
    {t:'Trava', d:'Acha que passou da idade, que aparelho é de adolescente, que não tem tempo.'}
  ],
  signos:[
    {t:'Luz', d:'Clara e sofisticada. Diurna e natural, longe da clínica fria.'},
    {t:'Cor', d:'Azul profundo e dourado. Elegância sóbria.'},
    {t:'Corpo', d:'Sorriso adulto real e o gesto de confiança de quem decidiu.'},
    {t:'Método', d:'Escaneamento, planejamento digital, o depois previsto na tela.'},
    {t:'Ritmo', d:'Sereno e didático. O tempo de quem explica com calma.'}
  ],
  linhaEditorial:[
    {n:'01', t:'O professor humano', peso:'25%', d:'A pessoa por trás de trinta anos de carreira. História, rotina e o porquê de ainda ensinar.', porque:'Humaniza a autoridade e é o que mais gera alcance no nicho.', temas:['origem','rotina','30 anos','a família de sorrisos']},
    {n:'02', t:'Nunca é tarde', peso:'30%', d:'Quebra da idade e do rótulo de adolescente. O adulto tem vez.', porque:'É a maior dor do público e o território menos ocupado pelos concorrentes.', temas:['mito da idade','antes de adiar','depois dos 40','autoestima']},
    {n:'03', t:'Discrição e transformação', peso:'25%', d:'O alinhador que ninguém percebe e a mudança do sorriso com história.', porque:'Gera desejo sem soar como anúncio.', temas:['ninguém vê','no dia a dia','a jornada','resultado com contexto']},
    {n:'04', t:'Dúvidas de paciente', peso:'20%', d:'Quanto tempo, se dói e o que fazer depois que o dentista falou.', porque:'Puxa alcance orgânico de busca e alimenta o funil.', temas:['quanto tempo','dói?','higiene','manutenção']}
  ],
  canais:[
    {c:'Reels', papel:'Alcance e humanização', o:'Talking head leve, relatable, depoimento e bastidor.', f:'3x por semana'},
    {c:'Carrossel', papel:'Salvamento', o:'Mitos da idade, etapas do alinhador, dúvidas.', f:'1x por semana'},
    {c:'Estático', papel:'Campanha', o:'Nunca é tarde, mote e chamada de avaliação.', f:'1x por semana'},
    {c:'Stories', papel:'Relação diária', o:'Bastidor, enquete, caixinha e dia a dia da clínica.', f:'diário, 3 a 5 telas'},
    {c:'Foto', papel:'Acervo', o:'Retrato claro, consultório, escaneamento e sorriso adulto.', f:'1 ensaio/trimestre'}
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
    resumo:'Autoridade real de trinta anos, mas o perfil conversa com colega de profissão, não com paciente. Os reels são quase todos ele sozinho falando para a câmera, e o alcance fica entre 277 e 700 views. O feed mistura paciente, mentoria e formatura, e o público se perde no caminho.',
    diag:[
      {t:'Formato', v:'Talking head sério domina. Ele sozinho, pouco ritmo.', s:'ajustar'},
      {t:'Alcance', v:'Reels de 277 a 700 views. Ainda não escala.', s:'ajustar'},
      {t:'Feed', v:'Mistura paciente com mentoria e formatura de dentista.', s:'ajustar'},
      {t:'Atmosfera', v:'Sóbria e distante. Falta calor e leveza.', s:'ajustar'},
      {t:'Foto de perfil', v:'Retrato sério. Serve, dá para aproximar.', s:'ok'},
      {t:'Campanha', v:'Nunca é tarde já está no ar. Boa direção.', s:'ok'}
    ],
    feedCores:{
      pro:{bg:'#3C405B', fg:'#EDE7DC', l:'Professor humano'},
      obj:{bg:'#C69C6C', fg:'#2B2B33', l:'Nunca é tarde'},
      dis:{bg:'#2B2B33', fg:'#C69C6C', l:'Discrição'},
      duv:{bg:'#EDE7DC', fg:'#3C405B', l:'Dúvidas'}
    },
    feedIdeal:[
      {t:'Professor', c:'pro'},{t:'Nunca é tarde', c:'obj'},{t:'Discrição', c:'dis'},
      {t:'Dúvida', c:'duv'},{t:'Nunca é tarde', c:'obj'},{t:'Professor', c:'pro'},
      {t:'Discrição', c:'dis'},{t:'Dúvida', c:'duv'},{t:'Nunca é tarde', c:'obj'}
    ],
    checklist:[
      {t:'Depoimento de paciente adulto', d:'Antes de decidir e depois de tratar. Rosto, voz e história.', ok:false},
      {t:'Ensaio do professor humano', d:'Sorrindo, ouvindo, na aula e no consultório. Luz clara.', ok:false},
      {t:'Escaneamento e planejamento', d:'A câmera intraoral, o 3D na tela, o depois previsto.', ok:false},
      {t:'Discrição no dia a dia', d:'O alinhador na mão e na boca, sem ninguém perceber.', ok:false},
      {t:'Separar a conta de mentoria', d:'Formatura e curso de dentista saem do feed de paciente.', ok:false},
      {t:'Padrão de gravação', d:'Mesma luz, enquadramento e fundo em todo talking head.', ok:false},
      {t:'Retratos sobre fundo da marca', d:'Azul e dourado, meio corpo e close, com e sem jaleco.', ok:false},
      {t:'Fotos horizontais', d:'Para capa, LinkedIn e 16:9.', ok:false}
    ]
  },

  /* ---------- 04 CAMPANHA ---------- */
  campanha:{
    status:'No ar · captação por alinhadores',
    nome:'Nunca é tarde para corrigir. Tarde é continuar adiando.',
    eixos:[
      {t:'Frio', d:'desperta desejo e discrição'},
      {t:'Médio', d:'quebra a objeção da idade'},
      {t:'Aquecido', d:'autoridade, prova e avaliação'}
    ],
    alerta:'Persona-âncora: a adulta que parou de aparecer sorrindo nas fotos.',
    deck:'https://idee-nunca-e-tarde.vercel.app/'
  },

  /* ---------- 05 BENCHMARK ---------- */
  benchmark:[
    {at:'@larapassosalvim', url:'https://www.instagram.com/larapassosalvim/', porte:'13,2 mil', perfil:'Ortodontista e creator, entre o Rio e Juiz de Fora.', mecanismo:'Vida pessoal e leveza de creator. Os maiores reels são pessoais: a filha (32,2 mil), um get ready (26,8 mil) e o anúncio aos amigos (16,2 mil).', leitura:'Quem cresce no nicho humaniza primeiro. A ortodontia entra como pano de fundo, não como gancho.'},
    {at:'@odontologiadicas', url:'https://www.instagram.com/odontologiadicas/', porte:'193 mil', perfil:'Andréa Figueiredo, conteúdo de odontologia, Minas Gerais.', mecanismo:'Relatable, curiosidade e vulnerabilidade. Reels de 35,7 mil (reação coletiva), 32,3 mil (curiosidade de equipamento) e o "do outro lado da cadeira" (23,9 mil).', leitura:'Emoção e curiosidade escalam. A ressalva: a audiência dela é de dentista, então adaptamos o gancho para o paciente.'},
    {at:'@smilleralinhadores', url:'https://www.instagram.com/smilleralinhadores/', porte:'15,9 mil', perfil:'Marca de alinhador invisível, comunicação voltada a dentistas.', mecanismo:'Alinhador tratado como produto e número. Reels entre 790 e 5,7 mil views, sem rosto e sem história.', leitura:'Contraexemplo útil. Produto sem gente e sem narrativa não constrói audiência de paciente.'}
  ],
  sintese:{
    alta:['Vida pessoal e o humano do profissional','Relatable e curiosidade que geram save','Transformação de sorriso contada com história'],
    saturado:['Talking head técnico e sério','Alinhador como produto para dentista','Caso clínico solto, sem narrativa'],
    lacuna:['O adulto que acha que passou da idade','O professor gente, além do técnico','A discrição do alinhador no dia a dia']
  },

  /* ---------- 06 PAUTAS ---------- */
  pautas:[
    {n:'01', bm:'@larapassosalvim', cls:'posicionamento', tema:'O marco humano por trás dos 30 anos',
     ref:{url:'https://www.instagram.com/larapassosalvim/reel/DYIjOLnAsuS/', metrica:'32,2 mil views', o:'Nascimento da filha. O maior alcance do perfil, e é vida pessoal.', porque:'Um momento humano real alcança mais que qualquer caso clínico.'},
     angulo:'Roberto abre um marco pessoal no lugar de um caso clínico. A autoridade fica perto quando ele aparece como gente.',
     desdobra:{reels:'Ele narra um marco de vida (uma turma que formou, um neto, trinta anos de profissão) sobre fotos de acervo, voz em off, ritmo calmo. 40s.', carrossel:'A linha do tempo de trinta anos de sorrisos, um capítulo por slide.', stories:'Bastidor do dia a dia sem edição, com caixinha de pergunta.', estatico:'Retrato dele com uma frase pessoal sobre por que faz o que faz.'}},
    {n:'02', bm:'@larapassosalvim', cls:'alcance', tema:'Vem comigo num dia de consultório',
     ref:{url:'https://www.instagram.com/larapassosalvim/reel/DZN--mGAwOp/', metrica:'26,8 mil views', o:'Get ready with me a caminho de ser madrinha. Rotina e leveza.', porque:'Bastidor leve aproxima e viraliza mais que conteúdo técnico.'},
     angulo:'O contraste com o talking head sério: um dia real, leve, com o professor como pessoa.',
     desdobra:{reels:'POV do dia dele: chegada, café, um paciente, a aula. Música em alta, cortes leves. 45s.', carrossel:'Um dia na Idée em seis quadros.', stories:'A sequência do dia em tempo real.', estatico:'Foto de bastidor com legenda do momento.'}},
    {n:'03', bm:'@larapassosalvim', cls:'posicionamento', tema:'Por que virei ortodontista',
     ref:{url:'https://www.instagram.com/larapassosalvim/reel/DYLB2ERAjIo/', metrica:'16,2 mil views', o:'Contar aos amigos que seria pai. Emoção compartilhada em primeira pessoa.', porque:'Narrativa emocional em primeira pessoa engaja e faz salvar.'},
     angulo:'A história de origem contada com emoção, no lugar do currículo.',
     desdobra:{reels:'Ele conta a pessoa ou o caso que o fez escolher a ortodontia. Direto na câmera, luz quente. 50s.', carrossel:'A história em capítulos, com fotos antigas.', stories:'Enquete "o que te fez escolher sua profissão?" e a resposta dele.', estatico:'Foto antiga dele com a frase de origem.'}},
    {n:'04', bm:'@odontologiadicas', cls:'alcance', tema:'Coisas que todo adulto que esconde o sorriso faz',
     ref:{url:'https://www.instagram.com/odontologiadicas/reel/DV4j0FgDcjk/', metrica:'35,7 mil views', o:'Reel de reação coletiva. Nos comentários é só "eu também".', porque:'Reconhecimento coletivo faz marcar amigo e salvar.'},
     angulo:'Relatable puro dentro do território da campanha: os hábitos de quem trava por causa dos dentes.',
     desdobra:{reels:'Lista rápida de hábitos (rir de boca fechada, foto sempre de lado, a mão na frente). Áudio em alta, ritmo seco. 30s.', carrossel:'Um hábito por slide, tom acolhedor.', stories:'Enquete por hábito, "você faz isso?".', estatico:'Card com o hábito mais reconhecível.'}},
    {n:'05', bm:'@odontologiadicas', cls:'posicionamento', tema:'Quando quem cuida também teve vergonha de sorrir',
     ref:{url:'https://www.instagram.com/odontologiadicas/reel/DYqD2JiTHVb/', metrica:'23,9 mil views', o:'A dentista conta quando esteve do outro lado da cadeira, com medo.', porque:'Vulnerabilidade real gera identificação e compartilhamento.'},
     angulo:'Roberto, ou um paciente, conta a insegurança que veio antes da decisão. Baixa a guarda de quem assiste.',
     desdobra:{reels:'Depoimento honesto sobre o incômodo com o próprio sorriso, antes da solução. Direto na câmera. 50s.', carrossel:'A jornada emocional de quem decide se cuidar depois de adulto.', stories:'Caixinha "o que te trava para cuidar do sorriso?".', estatico:'Uma frase de vulnerabilidade entre aspas, sobre fundo azul.'}},
    {n:'06', bm:'@odontologiadicas', cls:'alcance', tema:'A máquina que mostra seu sorriso pronto antes de começar',
     ref:{url:'https://www.instagram.com/odontologiadicas/reel/DUMZ5J0DVyA/', metrica:'32,3 mil views', o:'Curiosidade sobre um equipamento novo visto numa feira.', porque:'Curiosidade sobre tecnologia surpreende, retém e faz comentar.'},
     angulo:'A mesma curiosidade virada para o paciente: o escaneamento que projeta o resultado antes do tratamento.',
     desdobra:{reels:'Ele passa a câmera intraoral e o sorriso final aparece no 3D na tela, com a reação do paciente. 40s.', carrossel:'Como funciona o planejamento digital, do escaneamento ao resultado previsto.', stories:'"Verdadeiro ou falso" sobre alinhador e tecnologia.', estatico:'Print do 3D com a chamada "seu depois, antes de começar".'}},
    {n:'07', bm:'@smilleralinhadores', cls:'conversão', tema:'O alinhador que ninguém percebe',
     ref:{url:'https://www.instagram.com/smilleralinhadores/reel/DbB7I5lgoAH/', metrica:'5,7 mil views', o:'Reel de produto do alinhador, comunicação para dentista.', porque:'Contraexemplo: o produto sozinho, sem rosto, trava o alcance de paciente.'},
     angulo:'A discrição vira desejo quando aparece uma pessoa real usando no dia a dia, no lugar do produto na embalagem.',
     desdobra:{reels:'Paciente falando, rindo e bebendo água com o alinhador, e a pergunta "deu para ver?". 30s.', carrossel:'Cinco situações do dia em que ninguém percebe o alinhador.', stories:'Close do alinhador na boca com enquete "você notaria?".', estatico:'Retrato sorrindo com selo "discreto de verdade".'}},
    {n:'08', bm:'@smilleralinhadores', cls:'conversão', tema:'A prova que fala com paciente',
     ref:{url:'https://www.instagram.com/smilleralinhadores/', metrica:'"+10 mil dentistas confiam"', o:'A prova social da marca é medida em dentistas, não em pacientes.', porque:'Contraexemplo: a prova precisa ser traduzida para quem senta na cadeira.'},
     angulo:'Nossa prova é o adulto que voltou a sorrir. Depoimento e resultado com contexto, no lugar do número técnico.',
     desdobra:{reels:'Sequência de três pacientes adultos dizendo em uma frase o que mudou depois do tratamento. 40s.', carrossel:'Uma transformação contada em jornada: a trava, a decisão, o depois.', stories:'Repost de mensagem real de paciente, com autorização por escrito.', estatico:'Depoimento entre aspas, com o primeiro nome e a idade.'}},
    {n:'09', bm:'@smilleralinhadores', cls:'conversão', tema:'Tenho 50 anos, ainda dá tempo?',
     ref:{url:'https://www.instagram.com/smilleralinhadores/', metrica:'nicho B2B', o:'A marca fala de produto e deixa a objeção da idade de fora.', porque:'Contraexemplo: a maior dúvida do paciente adulto fica sem resposta.'},
     angulo:'O gancho central da campanha: o adulto de 40, 50 ou 60 tem vez, com prazo e previsibilidade na mesa.',
     desdobra:{reels:'Ele responde direto "tenho 50 anos, ainda dá?" com um caso real e o tempo médio de tratamento. 45s.', carrossel:'Três mitos sobre corrigir os dentes depois dos 40.', stories:'Caixinha "qual a sua idade e o seu medo?" respondida por ele.', estatico:'Peça da campanha "Nunca é tarde" com chamada de avaliação.'}}
  ],

  ciclos:[]
},

{slug:'delabela', nome:'Delabela', categoria:'Clínica boutique', resumo:'Sofisticação, status e autoestima.'},
{slug:'odontogon', nome:'OdontoGON', categoria:'Check-up 360°', resumo:'Confiança e clareza. Multidisciplinar.'},
{slug:'maxfocos', nome:'MaxFocos', categoria:'Educação para dentistas', resumo:'Método e aprovação.'},
{slug:'marcelo-tavares', nome:'Marcelo Tavares', categoria:'Próteses e implantes', resumo:'Excelência técnica e resolução.'},
{slug:'clinica-lk', nome:'Clínica LK', categoria:'Protocolo e prótese', resumo:'Controle técnico interno.'}
];
