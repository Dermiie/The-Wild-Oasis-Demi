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

export async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    '/',
    ''
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images//${imageName}`;

  //image path format: https://cobfrvvirenhjnmctrkf.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg

  //create new cabin
  const { data, error } = await supabase
    .from('cabins')
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be created');
  }

  //update image
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
