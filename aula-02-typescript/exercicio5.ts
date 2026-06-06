interface ProsBotao {
    titulo: string;
    ativo: boolean;
}

function renderizarBotao({ titulo, ativo = true}: ProsBotao): string {
    return ativo ? `[ ${titulo} ]` : `( ${titulo} )`;
}

console.log(renderizarBotao({ titulo: "Enviar", ativo: true }));
console.log(renderizarBotao({ titulo: "Cancelar", ativo: false }));
console.log(renderizarBotao({ titulo: "Salvar", ativo: true }));
console.log(renderizarBotao({ titulo: "Excluir", ativo: false }));
