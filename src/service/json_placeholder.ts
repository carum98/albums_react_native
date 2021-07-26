import axios from 'axios';

export default async function getData() {
  try {
    const {data} = await axios.get(
      'https://jsonplaceholder.typicode.com/albums',
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
