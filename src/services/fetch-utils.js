import { client, checkError } from './client';

export async function getAllCharacters(from = 0, to = 30) {
  const response = await client
    .from('rick_morty')
    .select()
    .range(from, to);

  return checkError(response);
}

export async function getCharacter(id) {
  const response = await client 
    .from('rick_morty')
    .select()
    .match({ id })
    .single();
        
  return checkError(response);
}