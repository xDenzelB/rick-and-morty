import { React, useEffect, useState } from 'react';
import './App.css';
import RickList from './RickList';
import { getAllCharacters } from './services/fetch-utils';


export default function RickPage() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 5;

  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const rickAndMorty = await getAllCharacters(from, to);

      setAllCharacters(rickAndMorty);
    }

    fetch();
  }, [page]);
  return <div>
    <h1>Rick and Morty Crisis On Infinite Earths</h1>
    <RickList allCharacters={allCharacters} />
    <div>
      <footer>
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>⬅</button>
        <h2>Current Page {page}</h2>
        <button disabled={page >= 4 } onClick={() => setPage(page + 1)}>Next Page</button>
      </footer>
    </div>
  </div>;
}
