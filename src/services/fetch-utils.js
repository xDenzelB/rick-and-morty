import { client, checkError } from './client';

export async function getAllCharacters(from = 0, to = 5) {
  const response = await client
    .from('rick_mort')
    .select()
    .range(from, to);
    

  return checkError(response);
}

export async function getCharacter(id) {
  const response = await client 
    .from('rick_mort')
    .select()
    .match({ id })
    .single();
        
  return checkError(response);
}