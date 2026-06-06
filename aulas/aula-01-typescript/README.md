# Aula 01 – Aquecimento em TypeScript

Esta aula cobriu os fundamentos de TypeScript por meio de exercícios práticos:

## Conteúdo

### 1. Funções Utilitárias (`arrayUtils.js` / `arrayUtils.ts`)
Implementação e migração para TypeScript das funções:
- **`unique`** – remove duplicatas de um array usando `Set`
- **`groupBy`** – agrupa objetos de um array por uma chave específica
- **`sumBy`** – soma os valores numéricos de uma chave em um array de objetos

### 2. Migração JS → TS com Genéricos e Interfaces (`index.ts`)
- Uso de genéricos (`<T>`, `<T, K>`) para tipagem flexível e reutilizável
- Criação de interfaces TypeScript (`Produto`, `Membro`, `Torcedor`)
- Comparação entre a versão JavaScript e a versão TypeScript tipada

### 3. CLI com PokéAPI (`pokedex.ts`)
- Aplicação de linha de comando que consulta a [PokéAPI](https://pokeapi.co/)
- Uso de `fetch`, `async/await` e tipagem da resposta da API com interfaces
- Tratamento de erros (404 e falha de rede)

## Como executar

```bash
npm install
# Executar exemplos de arrayUtils
npx ts-node index.ts
# Consultar um Pokémon
npx ts-node pokedex.ts pikachu
```
