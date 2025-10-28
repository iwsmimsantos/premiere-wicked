# 💚 Eu na Première de Wicked

Landing page criativa e interativa para o concurso **#EuNaPremiereDeWicked**, demonstrando paixão e dedicação ao universo de Wicked através de storytelling profundo, quiz de personalidade e galeria de momentos.

## ✨ Funcionalidades

- **Storytelling Profundo**: História pessoal conectiva sobre superação, representatividade e amor por Wicked
- **Quiz Interativo**: "Qual personagem de Wicked você é?" com 10 perguntas menos óbvias e compartilhamento social
- **Galeria de Fotos**: 15 fotos da jornada pessoal com Wicked, com lightbox interativo
- **Contador Regressivo**: Contagem até a première (4 de novembro de 2025)
- **Animações**: Bolhas flutuantes e transições suaves
- **Design Temático**: Paleta de cores verde esmeralda e rosa (Elphaba e Glinda)
- **Compartilhamento**: Seção dedicada para compartilhar o site e apoiar

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- Node.js 18+ instalado
- pnpm (gerenciador de pacotes)

### Instalação

1. Clone o repositório:
```bash
git clone <seu-repositorio>
cd wicked_premiere_lp
```

2. Instale as dependências:
```bash
pnpm install
```

3. Inicie o servidor de desenvolvimento:
```bash
pnpm dev
```

4. Abra o navegador em `http://localhost:3000`

### Build para Produção

Para criar a versão otimizada para produção:

```bash
pnpm build
```

Os arquivos estarão na pasta `dist/` e podem ser deployados em qualquer serviço de hospedagem estática (Vercel, Netlify, GitHub Pages, etc.).

## 📁 Estrutura do Projeto

```
wicked_premiere_lp/
├── client/
│   ├── public/
│   │   └── gallery/          # Fotos da jornada Wicked
│   ├── src/
│   │   ├── components/
│   │   │   ├── WickedQuiz.tsx       # Quiz de personalidade
│   │   │   ├── WickedGallery.tsx    # Galeria de fotos
│   │   │   └── CountdownTimer.tsx   # Contador regressivo
│   │   ├── pages/
│   │   │   └── Home.tsx             # Página principal
│   │   ├── App.tsx
│   │   └── index.css                # Estilos globais e tema
│   └── index.html
├── package.json
└── README.md
```

## 🎨 Tecnologias Utilizadas

- **React 19**: Framework JavaScript
- **TypeScript**: Tipagem estática
- **Tailwind CSS 4**: Framework de estilos
- **shadcn/ui**: Componentes UI
- **Vite**: Build tool
- **Wouter**: Roteamento client-side

## 🌈 Paleta de Cores

- **Verde Esmeralda** (`oklch(0.45 0.15 155)`): Representa Elphaba
- **Rosa** (`oklch(0.65 0.2 340)`): Representa Glinda
- **Fundo Gradiente**: Verde escuro → Roxo/Violeta → Rosa escuro

## 📝 Personalização

Para personalizar o conteúdo:

1. **Texto Principal**: Edite `client/src/pages/Home.tsx` (seção de storytelling)
2. **Fotos da Galeria**: Substitua as imagens em `client/public/gallery/`
3. **Data da Première**: Ajuste em `client/src/components/CountdownTimer.tsx`
4. **Cores**: Modifique as variáveis CSS em `client/src/index.css`

## 🚀 Deploy

### Vercel (Recomendado)

1. Instale a CLI da Vercel:
```bash
pnpm add -g vercel
```

2. Faça o deploy:
```bash
vercel
```

### Netlify

1. Conecte seu repositório no Netlify
2. Configure:
   - Build command: `pnpm build`
   - Publish directory: `dist`

### GitHub Pages

1. Instale o pacote gh-pages:
```bash
pnpm add -D gh-pages
```

2. Adicione ao `package.json`:
```json
"scripts": {
  "deploy": "pnpm build && gh-pages -d dist"
}
```

3. Execute:
```bash
pnpm deploy
```

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)

## 🎯 Objetivo

Este projeto foi criado para o concurso **#EuNaPremiereDeWicked** da Universal Pictures Brasil e Wicked Musical BR, demonstrando através de uma landing page interativa e criativa o amor e a paixão pelo universo de Wicked.

## 💚 Contato

Para apoiar e compartilhar:
- Hashtag: `#EuNaPremiereDeWicked`
- Menções: `@wickedmusicalbr` `@universalpicsbr`

---

**Desenvolvido com 💚 para a Première de Wicked: Parte II**

