import supabase from './supabase';
import { supabaseUrl } from './supabase';

export default async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  //FORMATTING FUNCTION FOR REUSABILITIES

  //Confirmimg image data to identify if it's creating or editing

  if (!newCabin) {
    console.error('Missing cabin data or image:');
    return;
  }

  console.log(newCabin);

  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    '/',
    ''
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images//${imageName}`;

  //image path format: https://cobfrvvirenhjnmctrkf.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg

  let query = supabase.from('cabins');
  //create new cabin
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  //editing cabin
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq('id', id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error('Supabase Error:', error.message, error.details, error.hint);
    throw new Error('Cabins could not be created');
  }

  //update image

  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);

  //incase of an error uploading image then we proceed to delete created cabin to keep application in sync
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id);

    console.log('error creating cabin');
  }
}

export async function deleteCabin(id) {
  const { error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }
}
