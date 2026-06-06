import { unique, groupBy, sumBy } from './arrayUtils.js';

// --- unique ---
// Remove duplicatas de números
console.log(unique([1, 2, 2, 3, 3, 3]));
// → [1, 2, 3]

// Remove duplicatas de strings
console.log(unique(['banana', 'maçã', 'banana', 'uva']));
// → ['banana', 'maçã', 'uva']

// --- groupBy ---
// Agrupa produtos por categoria
const produtos = [
  { nome: 'Notebook', categoria: 'Eletrônicos' },
  { nome: 'Celular',  categoria: 'Eletrônicos' },
  { nome: 'Camisa',   categoria: 'Roupas' },
];
console.log(groupBy(produtos, 'categoria'));
// → { 'Eletrônicos': [{...}, {...}], 'Roupas': [{...}] }

// Agrupa pessoas por cidade
const pessoas = [
  { nome: 'Ana',    cidade: 'SP' },
  { nome: 'Bruno',  cidade: 'RJ' },
  { nome: 'Carla',  cidade: 'SP' },
];
console.log(groupBy(pessoas, 'cidade'));
// → { SP: [{...}, {...}], RJ: [{...}] }

// --- sumBy ---
// Soma os preços dos produtos
const itens = [
  { produto: 'Livro', preco: 49.9 },
  { produto: 'Caneta', preco: 5.5 },
  { produto: 'Mochila', preco: 120.0 },
];
console.log(sumBy(itens, 'preco'));
// → 175.4

// Soma os pontos dos jogadores
const jogadores = [
  { nome: 'Player1', pontos: 30 },
  { nome: 'Player2', pontos: 45 },
  { nome: 'Player3', pontos: 25 },
];
console.log(sumBy(jogadores, 'pontos'));
// → 100
