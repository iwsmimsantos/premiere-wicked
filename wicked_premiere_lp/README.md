# Wicked Premiere Landing Page

Landing page criada para o concurso #EuNaPremiereDeWicked

## 🎭 Funcionalidades

- **Vídeo da História**: YouTube + TikTok
- **Quiz de Personagens**: Descubra qual personagem de Wicked você é
- **Jogo de Memória**: Wicked Memory com cronômetro
- **Compartilhamento Criativo**: Mensagens personalizadas para redes sociais
- **Galeria**: Momentos da jornada Wicked

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte o repositório no Vercel
2. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Deploy!

### Local
```bash
cd client
npm install
npm run dev
```

## 📁 Estrutura

```
wicked_premiere_lp/
├── client/              # Frontend React + Vite
│   ├── src/
│   │   ├── components/  # Componentes reutilizáveis
│   │   ├── pages/       # Páginas
│   │   └── ...
│   ├── public/          # Arquivos estáticos
│   ├── package.json
│   └── vite.config.ts
├── server/              # Backend (opcional)
├── vercel.json          # Configuração do Vercel
└── README.md
```

## 🎯 Tecnologias

- **React** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **Lucide React** (ícones)
- **Wouter** (roteamento)

## 💚 Feito com amor para o concurso Wicked!