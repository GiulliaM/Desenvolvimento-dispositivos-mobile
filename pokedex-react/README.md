# 🔎 Pokédex

Aplicação web desenvolvida com React, TypeScript e Vite como exercício da Aula 03 da disciplina de Desenvolvimento Mobile.

## 📋 Sobre

A Pokédex permite buscar Pokémons pelo nome consumindo a [PokéAPI](https://pokeapi.co/), exibindo informações como nome, imagem, altura, peso e tipos. É possível buscar vários Pokémons em sequência e marcar favoritos.

## ✨ Funcionalidades

- 🔍 Busca de Pokémons pelo nome via PokéAPI
- 🃏 Exibição em cards individuais com imagem e informações
- ⭐ Favoritar/desfavoritar Pokémons
- 💾 Favoritos salvos no `localStorage`
- 🚫 Prevenção de Pokémons duplicados
- 📋 Log no console ao carregar cada Pokémon

## 🗂️ Estrutura

```
pokedex-react/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Pokedex.tsx
│   │   ├── Pokedex.css
│   │   ├── PokeCard.tsx
│   │   └── PokeCard.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 🚀 Como rodar

```bash
npm install
npm run dev
```

## 🛠️ Tecnologias

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [PokéAPI](https://pokeapi.co/)

## 📚 Conceitos praticados

- Componentes e Props
- `useState` e `useEffect`
- Consumo de API com `fetch`
- Estilização com CSS separado por componente
- Persistência com `localStorage`
