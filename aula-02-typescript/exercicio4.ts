interface Produto {
    nome: string;
    preco: number;
}

function obterPrimeiro<T>(lista: T[]): T {
    if(lista.length === 0) {
        throw new Error("A lista está vazia.");
    }
    return lista[0] as T;
}

const nomes: string[] = ["Alice", "Bruno", "Carlos"];
const primeroNome = obterPrimeiro(nomes); 
console.log("Primeiro nome:", primeroNome);
 
const numeros: number[] = [42, 7, 13, 99];
const primeiroNumero = obterPrimeiro(numeros); 
console.log("Primeiro número:", primeiroNumero);
 
const produtos: Produto[] = [
  { nome: "Notebook", preco: 3500 },
  { nome: "Mouse", preco: 120 },
  { nome: "Teclado", preco: 250 },
];
const primeiroProduto = obterPrimeiro(produtos); 
console.log("Primeiro produto:", primeiroProduto);
console.log(`  → ${primeiroProduto.nome} custa R$ ${primeiroProduto.preco}`);