interface Livro {
    titulo: string;
    autor: string;
    ano: number;
    disponivel: boolean;
}

const biblioteca: Livro[] = [
    {titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954, disponivel: true},
    {titulo: "1984", autor: "George Orwell", ano: 1949, disponivel: false}, 
    {titulo: "A Guerra dos Tronos", autor: "George R.R. Martin", ano: 1996, disponivel: true},
    {titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1943, disponivel: true},
    {titulo: "O Código Da Vinci", autor: "Dan Brown", ano: 2003, disponivel: false},
    {titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", ano: 1997, disponivel: true},  
    {titulo: "O Hobbit", autor: "J.R.R. Tolkien", ano: 1937, disponivel: true},
    {titulo: "O Alquimista", autor: "Paulo Coelho", ano: 1988, disponivel: false}
];

function listarTitulosDisponiveis(biblioteca: Livro[]): string[] {
    return biblioteca
        .filter((livro: Livro) => livro.disponivel)
        .map((livro: Livro) => livro.titulo);
}

const titulosDisponiveis = listarTitulosDisponiveis(biblioteca);
console.log("Livros disponíveis para empréstimo:");
console.log(titulosDisponiveis);