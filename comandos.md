## criando o app

- npx create-next-app .
- npm run dev
- prc -> snippets para criar um página
- lrc -> cria um layout

## react icons

- https://react-icons.github.io/react-icons/
- necessário instalar
- npm install react-icons --save

## snipet

- mr -> cria metadata
- lrc -> cria layout
- rafc -> cria um component
- prc- cria pagina de componente

## neste vídeo do Fernando Herrera ensina como copiar a estrutura do json

- https://www.udemy.com/course/nextjs-fh/learn/lecture/30627480#questions/17770448
- Paste Json as code ou (ctrl + shift + v) e da um nome que ele copia a estrutura da área de transferencia

# inicio

- npx create-next-app@latest .

# habilitar turbo pack

- subustitui o webpack e corrige o erro

"scripts": {
"dev": "next dev --turbo",
"build": "next build",
"start": "next start",
"lint": "next lint"
},

## snipet

- mr -> cria metadata
- lrc -> cria layout
- rafc -> cria um component

## atalho

- ctrl + shift + L => seleciona todas as palavras com o mesmo nome, sob o prompt

## instalar icons

- https://www.npmjs.com/package/@primer/octicons-react
- npm i @primer/octicons-react
- Para usar basta pegar o nome do componente ex: <HomeIcon />
- ctrl + . importa campos de uma função

## Gerar build de produção

- "build": "next build", -> constroi a aplicação
- npm run build
- "start": "next start", -> executa a aplicação em modo produção
- npm start -> executa o build

## subindo para o git

- git init
- git add .
- git commit -m "first commit"
- git remote add origin https://github.com/paviotti/next-first-steps.git
- git branch -M main
- git push -u origin main

## deploy em vercel

## cria um docker

- criar um arquivo que se chame .dockerignore
- criar arquivo dockerfile

## configurando

- https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile
- em next.js/examples/with-docker/Dockerfile -> copiar conteúdo
- em next.config.mjs -> const nextConfig = { output: "standalone" };

## criando e executando - Herrera

- para criar a imagem -> docker build -t nextjs-first-steps .
- para rodar -> docker container run -dp 3000:3000 nextjs-first-steps

## comandos do docker - Leonardo

- docker container ps -> lista os containers ativos no momento (processos ativos)
- docker container ps -a -> lista os containers executados anteriormente
- docker container ls -a -> lista
- docker container run --rm xxxxxxx -> remove o container da lista
- docker container run -it nextjs-first-steps -> permite entrar no container
- docker container run --name mydeb -it debian bash -> cria um container debian com nome mydeb (exit sai)
- docker container start -ai mydeb -> start o container no modo interativo
- PARAR -> docker container stop NomeDoContainer

## instalando react icons

- npm i react-icons
- import {FaGoogle} from "react-icons/fa"
- pegar o icone do google: <FaGoogle className="text-white mr-2"/>

## intalando um spinners para loading

- npm install react dash spinners

## instalando o driver mongoose

- npm i mongodb mongoose

## AUTENTICAÇÃO COM AUTH DO GOOGLE

- https://next-auth.js.org/
- https://next-auth.js.org/providers/google
- https://next-auth.js.org/getting-started/example
- criar a página app/api/auth/[...nextauth]/route.js
- criar pagina utils/authOptions.js

## Acesso ao google cloud Auth e instalação

- precisa instalar npm i next-auth

- Entrar no console google cloud
- https://console.cloud.google.com/welcome/new?project=propertypulse-421518
- abrir menu & Services
- abrir Credencials
- criar credencials (+)
- selecionar OAuth client ID

## ssl para variaveis do Auth

- openssl rand -base64 32
- gerou o hash: OCR2HYpkNLKkY8uKI77j4rT3wpXzsynsJ+f9SDs7IdQ=
