enum ContatoCategoria{
    Amigo = "Amigo",
    Trabalho = "Trabalho",
    Familia = "Familia",
    Outro = "Outro"

}

export class Contatos{
    public id: number;
    public nome: string;
    public telefone: string;
    public email: string;
    public categoria: ContatoCategoria;
    public favoritado: boolean;

    /**
     *
     */
    constructor(
        id: number,
        nome: string,
        telefone: string,
        email: string,
        categoria: ContatoCategoria,
        favoritado: boolean
    ) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.categoria = categoria;
        this.favoritado = favoritado;
            
    }

}

class AgendaContatos{
    private contatos: Contatos[] =[];
    private proximoId: number = 1;

    create(dados: Omit<Contatos, "id">): Contatos {
        const novo = new Contatos(
            this.proximoId++,
            dados.nome,
            dados.telefone,
            dados.email,
            dados.categoria,
            dados.favoritado
        );
        this.contatos = [...this.contatos, novo];
        return novo;
    }

    getById(id: number): Contatos | undefined {
        return this.contatos.find((c)=> c.id === id);
    }

    getAll(): Contatos[]{
        return [...this.contatos];
    }

    update(id: number, dados: Partial<Omit<Contatos, "id">>): boolean{
        const existe = this.contatos.some((c)=> c.id === id);
        if(!existe) return false;
        this.contatos = this.contatos.map((c) => c.id === id ? {...c, ...dados} : c);
        return true;
    }

    delete(id: number) : boolean{
        const antes = this.contatos.length;
        this.contatos = this.contatos.filter((c)=> c.id !== id);
        return this.contatos.length !== antes;
    }
}