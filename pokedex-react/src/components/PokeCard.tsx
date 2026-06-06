import React, { useState, useEffect } from "react";
import "./PokeCard.css";

export type PokemonData = {
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

type PokeCardProps = {
  pokemon: PokemonData;
};

export default function PokeCard({ pokemon }: PokeCardProps) {
  const [isFavorito, setIsFavorito] = useState(() => {
    const favoritos = JSON.parse(
      localStorage.getItem("favoritos") || "[]"
    );

    return favoritos.includes(pokemon.name);
  });

  useEffect(() => {
    const nomeFormatado =
      pokemon.name.charAt(0).toUpperCase() +
      pokemon.name.slice(1);

    console.log(
      `Pokémon ${nomeFormatado} carregado com sucesso!`
    );
  }, [pokemon]);

  // Desafio extra: salvar favoritos
  useEffect(() => {
    const favoritos = JSON.parse(
      localStorage.getItem("favoritos") || "[]"
    );

    if (isFavorito) {
      if (!favoritos.includes(pokemon.name)) {
        favoritos.push(pokemon.name);
      }

      localStorage.setItem(
        "favoritos",
        JSON.stringify(favoritos)
      );
    } else {
      const novosFavoritos = favoritos.filter(
        (nome: string) => nome !== pokemon.name
      );

      localStorage.setItem(
        "favoritos",
        JSON.stringify(novosFavoritos)
      );
    }
  }, [isFavorito, pokemon.name]);

  const alternarFavorito = () => {
    setIsFavorito(!isFavorito);
  };

  return (
    <div className="pokecard-box">
      <h3 className="pokecard-name">
        {pokemon.name.charAt(0).toUpperCase() +
          pokemon.name.slice(1)}

        {isFavorito && (
          <span className="pokecard-star">⭐</span>
        )}
      </h3>

      {pokemon.sprites.front_default && (
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokecard-image"
        />
      )}

      <div className="pokecard-info">
        <p>
          <strong>Altura:</strong>{" "}
          {pokemon.height * 10} cm
        </p>

        <p>
          <strong>Peso:</strong>{" "}
          {pokemon.weight / 10} kg
        </p>

        <p>
          <strong>Tipos:</strong>{" "}
          {pokemon.types
            .map((t) => t.type.name)
            .join(" / ")}
        </p>
      </div>

      <button
        className={`pokecard-fav-button ${
          isFavorito ? "is-fav" : ""
        }`}
        onClick={alternarFavorito}
      >
        {isFavorito
          ? "Remover dos Favoritos"
          : "Adicionar aos Favoritos"}
      </button>
    </div>
  );
}