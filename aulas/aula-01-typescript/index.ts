import { unique, groupBy, sumBy } from './arrayUtils.js';

interface Produto {
  nome: string;
  categoria: string;
  preco: number;
}

interface Membro {
  id: number;
  nome: string;
  plano: string;
  mensalidade: number;
}

interface Torcedor {
  nome: string;
  time: string;
  pontosFidelidade: number;
}

// --- unique ---
// Remove SKUs duplicados de uma lista de compras
const skus = ['SKU-01', 'SKU-02', 'SKU-01', 'SKU-03', 'SKU-02'];
console.log(unique(skus));
// → ['SKU-01', 'SKU-02', 'SKU-03']

// Remove IDs duplicados de membros que acessaram o sistema
const acessos: number[] = [1, 3, 2, 1, 4, 3];
console.log(unique(acessos));
// → [1, 3, 2, 4]

// --- groupBy ---
// Agrupa produtos por categoria
const catalogo: Produto[] = [
  { nome: 'Notebook',  categoria: 'Eletrônicos', preco: 3500 },
  { nome: 'Celular',   categoria: 'Eletrônicos', preco: 1800 },
  { nome: 'Camiseta',  categoria: 'Roupas',      preco: 59   },
  { nome: 'Tênis',     categoria: 'Roupas',      preco: 299  },
];
console.log(groupBy<Produto, 'categoria'>(catalogo, 'categoria'));
// → { 'Eletrônicos': [{...}, {...}], 'Roupas': [{...}, {...}] }

// Agrupa membros por plano de assinatura
const membros: Membro[] = [
  { id: 1, nome: 'Ana',    plano: 'Premium', mensalidade: 99  },
  { id: 2, nome: 'Bruno',  plano: 'Basic',   mensalidade: 29  },
  { id: 3, nome: 'Carla',  plano: 'Premium', mensalidade: 99  },
  { id: 4, nome: 'Diego',  plano: 'Basic',   mensalidade: 29  },
];
console.log(groupBy<Membro, 'plano'>(membros, 'plano'));
// → { Premium: [{...}, {...}], Basic: [{...}, {...}] }

// --- sumBy ---
// Soma o total de receita dos produtos
console.log(sumBy<Produto, 'preco'>(catalogo, 'preco'));
// → 5658

// Soma os pontos de fidelidade dos torcedores
const torcedores: Torcedor[] = [
  { nome: 'Fábio',   time: 'Flamengo',  pontosFidelidade: 120 },
  { nome: 'Gisele',  time: 'Palmeiras', pontosFidelidade: 85  },
  { nome: 'Heitor',  time: 'Flamengo',  pontosFidelidade: 200 },
];
console.log(sumBy<Torcedor, 'pontosFidelidade'>(torcedores, 'pontosFidelidade'));
// → 405
