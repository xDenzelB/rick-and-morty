import React from 'react';
import { Link } from 'react-router-dom';

export default function Rick({ allCharacters }) {
  return (
    <Link to={`/rick/${allCharacters.id}`}>
      <div>
        <img className='rick-img' src={allCharacters.image} />
        <p>{allCharacters.name}</p>
        <p>{allCharacters.status}</p>
      </div>
    </Link>
  );
}
