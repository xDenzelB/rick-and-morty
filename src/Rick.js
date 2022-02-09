import React from 'react';
import { Link } from 'react-router-dom';

export default function Rick({ character }) {
  return (
    <Link to={`/rick/${character.id}`}>
      <div>
        <img className='rick-img' src={character.image} />
        <p>{character.name}</p>
        <p>{character.status}</p>
      </div>
    </Link>
  );
}
