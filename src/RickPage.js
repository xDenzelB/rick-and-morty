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
    <h2>Current Page {page}</h2>

    <div>
      <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous Page</button>
      <button onClick={() => setPage(page + 1)}>Previous Page</button>
    </div>
    <RickList allCharacters={allCharacters} />
  </div>;
}
