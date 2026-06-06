interface Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string;
}

type UsuarioSemSenha = Omit<Usuario, "senha">;
type UsuarioAtualizacao = Partial<Usuario>;

function exibirUsuario(u: UsuarioSemSenha): void {
    console.log("Informações do usuário:");
    console.log(`ID: ${u.id}`);
    console.log(`Nome: ${u.nome}`);
    console.log(`Email: ${u.email}`);
}

function atualizarUsuario(id: number, dados: UsuarioAtualizacao): void {
    console.log(`Atualizando usuário com id ${id}...`);
    console.log("Dados de atualização:", dados);
}


const perfilPublico: UsuarioSemSenha = {
    id: 1,
    nome: "João Silva",
    email: "joao.silva@example.com"
};

console.log("Exibindo perfil público do usuário:");
exibirUsuario(perfilPublico);

atualizarUsuario(1, { nome: "João S. Silva", email: "joao.silva.updated@example.com" });
atualizarUsuario(1, { senha: "novaSenha123" }); 

console.log("Atualização de senha não é permitida através do tipo UsuarioAtualizacao, pois a propriedade 'senha' é opcional e não pode ser atualizada diretamente.");
