// Interfaces para tipar a resposta da PokéAPI
interface PokemonType {
  type: { name: string };
}

interface PokemonResponse {
  name: string;
  height: number;  // em decímetros
  weight: number;  // em hectogramas
  types: PokemonType[];
}

async function buscarPokemon(query: string): Promise<void> {
  const url = `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`;

  let response: Response;
  try {
    response = await fetch(url);
  } catch {
    console.error('⚠️ Erro de rede. Tente novamente.');
    process.exit(1);
  }

  if (response.status === 404) {
    console.error('❌ Pokémon não encontrado!');
    process.exit(1);
  }

  const data = (await response.json()) as PokemonResponse;

  const nome = data.name.charAt(0).toUpperCase() + data.name.slice(1);
  const altura = (data.height / 10).toFixed(1);   // dm → m
  const peso   = (data.weight / 10).toFixed(0);   // hg → kg
  const tipos  = data.types.map(t => {
    const tipo = t.type.name;
    return tipo.charAt(0).toUpperCase() + tipo.slice(1);
  }).join(', ');

  console.log(`${nome} – ${altura} m – ${peso} kg – ${tipos}`);
}

const query = process.argv[2];
if (!query) {
  console.error('Uso: npx ts-node pokedex.ts <nome-ou-id>');
  process.exit(1);
}

buscarPokemon(query);
