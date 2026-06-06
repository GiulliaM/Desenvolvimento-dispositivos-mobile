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
  public email?: string;
  public categoria: ContatoCategoria;
  public favoritado: boolean;

  constructor(
    id: number,
    nome: string,
    telefone: string,
    email: string | undefined,
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
  private contatos: Contatos[] = [];
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
    return this.contatos.find((c) => c.id === id);
  }

  getAll(): Contatos[]{
    return [...this.contatos];
  }

  update(id: number, dados: Partial<Omit<Contatos, "id">>): boolean{
    const existe = this.contatos.some((c) => c.id === id);
    if(!existe) return false;
    this.contatos = this.contatos.map((c) => c.id === id ? {...c, ...dados} : c);
    return true;
  }

  delete(id: number): boolean{
    const antes = this.contatos.length;
    this.contatos = this.contatos.filter((c) => c.id !== id);
    return this.contatos.length !== antes;
  }
}

function extrairCampos<T, K extends keyof T>(lista: T[], campo: K): T[K][] {
  return lista.map((item) => item[campo]);
}

const CATEGORIAS_VALIDAS = Object.values(ContatoCategoria) as string[];

function validarCategoria(valor: string): valor is ContatoCategoria {
  return CATEGORIAS_VALIDAS.indexOf(valor) !== -1;
}

const agenda = new AgendaContatos();

function renderizarLista(): void {
  const ul = document.getElementById("lista") as HTMLUListElement;
  ul.innerHTML = "";

  agenda.getAll().forEach((contato) => {
    const li = document.createElement("li");

    const info = document.createElement("div");
    info.className = "info";
    info.innerHTML = `
      <span>${contato.nome}</span>
      <span class="categoria">${contato.categoria} · ${contato.telefone}</span>
    `;

    const btnFav = document.createElement("button");
    btnFav.className = "estrela" + (contato.favoritado ? " favoritado" : "");
    btnFav.addEventListener("click", () => {
      agenda.update(contato.id, { favoritado: !contato.favoritado });
      renderizarLista();
    });

    li.appendChild(info);
    li.appendChild(btnFav);
    ul.appendChild(li);
  });
}

agenda.create({ nome: "Ana Lima",    telefone: "11 99999-1111", email: "ana@email.com", categoria: ContatoCategoria.Trabalho, favoritado: false });
agenda.create({ nome: "Bruno Costa", telefone: "21 98888-2222", email: undefined,       categoria: ContatoCategoria.Amigo,    favoritado: true  });
agenda.create({ nome: "Carla Souza", telefone: "31 97777-3333", email: undefined,       categoria: ContatoCategoria.Familia,  favoritado: false });

renderizarLista();

const form = document.getElementById("form-contato") as HTMLFormElement;
const erroCategoria = document.getElementById("erro-categoria") as HTMLElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fd = new FormData(form);
  const categoriaRaw = fd.get("categoria") as string;

  if (!validarCategoria(categoriaRaw)) {
    erroCategoria.textContent = `Categoria inválida: "${categoriaRaw}"`;
    erroCategoria.style.display = "block";
    return;
  }
  erroCategoria.style.display = "none";

  const email = (fd.get("email") as string).trim();

  agenda.create({
    nome:      (fd.get("nome")     as string).trim(),
    telefone:  (fd.get("telefone") as string).trim(),
    email:     email || undefined,
    categoria: categoriaRaw,
    favoritado: false,
  });

  renderizarLista();
  form.reset();
});

const btnExtrair = document.getElementById("btn-extrair") as HTMLButtonElement;
const tabelaSaida = document.getElementById("tabela-saida") as HTMLElement;

btnExtrair.addEventListener("click", () => {
  const contatos = agenda.getAll();
  const nomes     = extrairCampos(contatos, "nome");
  const telefones = extrairCampos(contatos, "telefone");

  console.log("Nomes:",     nomes);
  console.log("Telefones:", telefones);

  tabelaSaida.innerHTML = `
    <table>
      <thead><tr><th>#</th><th>Nome</th><th>Telefone</th><th>Categoria</th></tr></thead>
      <tbody>
        ${contatos.map((c, i) => `
          <tr>
            <td>${i + 1}</td>
            <td>${c.nome}</td>
            <td>${c.telefone}</td>
            <td>${c.categoria}</td>
          </tr>`).join("")}
      </tbody>
    </table>`;
  tabelaSaida.style.display = "block";
});
