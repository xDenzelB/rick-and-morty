import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import { getCharacter } from './services/fetch-utils';
export default function RickDetail() {

  const [character, setCharacter] = useState({});
  const matching = useRouteMatch();

  useEffect(() => {
    async function fetch() {
      const rick = await getCharacter(matching.params.id);

      setCharacter(rick);
    }

    fetch();
  }, [matching.params.id]);

  function handleRickAndMortyClick() {
    window.location.href = character.link;
  }
  return (
    <>
      <Link to='/'>Home</Link>
      <div className='character-detail' onClick={handleRickAndMortyClick}>
        <div className='character-data'>
          <h2>{character.name}</h2>
          <p>{character.status}</p>
          <img className='character-img' src={character.image} />
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <p>{character.origin}</p>
          <p>{character.location}</p>

        </div>

      </div>
    </>
  );
}
