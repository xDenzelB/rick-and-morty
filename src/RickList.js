import React from 'react';
import Rick from './Rick.js';


export default function RickList({ allCharacters }) {
  return (

    <div className='rick-morty'>
      {
        allCharacters.map(character => <Rick key={`${character.id}${character.name}`} character={character} />)
      }
    </div>
  );
}