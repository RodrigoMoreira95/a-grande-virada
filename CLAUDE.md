# A Grande Virada | Copy Tasso Lago

Landing page estática (HTML + CSS, sem frameworks nem build), publicada no GitHub Pages.
Referência visual: `C:\Users\usuario\Desktop\site.svg` (layout 1920px; imagens extraídas dele).

## Estrutura
- `index.html` - conteúdo (pt-BR, HTML semântico, meta tags e Open Graph)
- `style.css` - estilos, mobile first (breakpoint desktop em 900px)
- `assets/` - `hero.jpg`, `copy-tasso-lago.png`, `logo-infinito.png`, `logo-agrande.png`, `logo-virada.png`
- Ícones (calendário, relógio, monitor, mentoria, WhatsApp, presente) são SVG inline no HTML

## Identidade visual
- Fundo: gradiente `#050505` > `#171717` (45%) > `#050505`
- Dourado: `#9A6C31` > `#D8AD62` (50%) > `#F2D58D` (títulos em destaque, botões, bordas, rodapé)
- Texto: `#ECEDEF` (principal), `#BFC0C4` (secundário); texto do botão `#412706`
- Fontes (Google Fonts): Familjen Grotesk (títulos, aproximação da fonte do layout, que estava em curvas) e Inter (corpo)
- Estilo: caixa alta nos títulos, cantos pouco arredondados, cards com borda dourada translúcida

## Regras
- Não inventar conteúdo fora do arquivo base; se faltar algo, perguntar
- Perguntar antes de apagar arquivos ou mexer fora desta pasta
- Manter este arquivo atualizado a cada atividade concluída

## Pendências
- [x] Definir o link dos dois botões: ambos ("Quero descobrir a oferta da Black" e "Quero estar na revelação") apontam para `https://go.tassolago.com/pay/a312fe4a-fe42-41a0-88f1-f192aa7ec42d`
- [ ] Publicar o direcionamento dos botões (`git push`) e confirmar os links no site
- [ ] Instalar e autenticar o GitHub CLI (opcional: `winget install --id GitHub.cli`, depois `gh auth login`)
- [x] Criar o repositório público e fazer o push (`RodrigoMoreira95/a-grande-virada`)
- [x] Ativar o GitHub Pages (branch `main`, raiz): https://RodrigoMoreira95.github.io/a-grande-virada/
- [ ] Trocar `og:image` por URL absoluta: `https://RodrigoMoreira95.github.io/a-grande-virada/assets/copy-tasso-lago.png`

## Histórico de atividades
- 2026-10-26: SSH ed25519 criado e adicionado ao GitHub (usuário RodrigoMoreira95); conexão testada
- 2026-10-26: Análise do `site.svg`; 5 imagens extraídas e otimizadas para `assets/`
- 2026-10-26: Página criada (`index.html`, `style.css`) e revisada em 1440px e 390px
- 2026-10-26: `git init` na branch main e commit inicial
- 2026-10-26: Push para `origin/main`; GitHub Pages ativado e site respondendo (HTTP 200)
- 2026-10-26: Botões do hero e da seção final direcionados ao link de pagamento (commit local, ainda sem push)

## Como editar
- Textos: `index.html`. Cores e espaçamentos: variáveis `:root` no topo de `style.css`
- Visualizar: abrir `index.html` no navegador
- Publicar alterações: `git add . ; git commit -m "mensagem" ; git push`
