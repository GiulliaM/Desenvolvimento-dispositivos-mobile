type Sucesso = {tipo: "sucesso"; dados: string[]};
type Erro = {tipo: "erro"; mensagem: string};
type Resultado = Sucesso | Erro;

function exibirResultado(r: Resultado): void {
    if (r.tipo === "sucesso") {
        console.log("Sucesso!! Dados recebidos:");
        r.dados.forEach((dado) => console.log(dado));
    } else {
        console.log("Erro!! Mensagem:");
        console.log(r.mensagem);
    }
}

const resultadoSucesso: Resultado = {
    tipo: "sucesso",
dados: ["Informação recebida", "Informação processada", "Relatorio gerado com sucesso!"]
};

const resultadoErro: Resultado = {
    tipo: "erro",
    mensagem: "Ocorreu um erro ao processar os dados."
};

console.log("Exibindo resultado de sucesso:");
exibirResultado(resultadoSucesso);

console.log("Exibindo resultado de erro:");
exibirResultado(resultadoErro);