import React, { useState } from "react";
import "./Pokedex.css";
import PokeCard from "./PokeCard";

// Definindo o tipo com base no json para simplificar a implementação
type Pokemon = {
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string | null;
  };
  types: Array<{
    type: { name: string };
  }>;
};

export default function Pokedex() {
  const [nome, setNome] = useState("");
  const [carregando, setCarregando] = useState(false);

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [erro, setErro] = useState("");

  const buscarPokemon = async () => {
    if (!nome.trim()) return;

    setCarregando(true);
    setErro("");

    try {
      const resposta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nome.toLowerCase()}`
      );
      if (!resposta.ok) throw new Error("Pokémon não encontrado");

      // Convertemos o JSON dizendo ao TS que ele tem formato Pokemon 
      const dados: Pokemon = await resposta.json();

        const jaExiste = pokemons.some((p) => p.name === dados.name);
      if (jaExiste) {
        setErro("Esse Pokémon já foi adicionado! 😅");
        return;
      }

     setPokemons((anteriores) => [...anteriores, dados]);
     setNome("");
    } catch {
      setErro("Pokémon não encontrado 😢");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="pokedex-container">
      <h2 className="pokedex-title">🔎 Pokédex</h2>

      <input
        className="pokedex-input"
        type="text"
        placeholder="Digite o nome do Pokémon"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <button className="pokedex-button" onClick={buscarPokemon}>
        Buscar
      </button>

      {carregando && <p className="pokedex-loading">Carregando...</p>}
      {erro && <p className="pokedex-error">{erro}</p>}

      {pokemons.map((pokemon) => (
        <PokeCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}