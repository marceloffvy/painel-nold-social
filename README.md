# Painel Nold · Social

Espelho visual do trabalho de social media da Nold. Site estático, sem build.

## Estrutura
- `index.html` — shell
- `styles.css` — design system (verde #163227, off #F6F6F6, coral #FE5F55)
- `data.js` — base de conteúdo (um objeto por cliente)
- `app.js` — router e render
- `img/` — materiais otimizados em WebP
- `txt/` — copies e legendas (espelho das pastas de ciclo)
- `fonts/` — DtHebrinks, Neue Haas Grotesk, IBM Plex Mono (woff2)

## Navegação
Carteira → Cliente (7 blocos) → Ciclo → Peça

## Rodar local
    python3 -m http.server 8777

## Conforto visual
Sem animação, autoplay, piscar ou contraste vibrante.

## Atualizar conteúdo
Editar `data.js`. Para novas peças, otimizar imagens para WebP (largura 1000 e 420 para thumb).
