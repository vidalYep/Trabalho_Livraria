import { useState } from "react";
import { findAll } from "./LivroApi";
import { Card } from "./LivroCard";

export function ListaLivroView() {
  const [livros, setLivros] = useState([]);

  return (
    <main>
      <h1>Lista de Livros</h1>
      <button
        onClick={async () => {
          const livros = await findAll();
          setLivros(livros);
        }}
      >
        Listar
      </button>

      {livros.map((l) => (
        <Card
          title={l.title}
          subtitle={l.subtitle}
          authors={l.authors}
          shelf={l.shelf}
          previewLink={l.previewLink}
        />
      ))}
    </main>
  );
}
