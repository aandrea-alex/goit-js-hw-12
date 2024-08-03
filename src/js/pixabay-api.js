import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '45097431-2d8d6a9f4785bbcc4049d8cdd';

async function getImages(strForSearch, pageNumber = 1) {
  const apiParams = {
    key: API_KEY,
    q: strForSearch,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: pageNumber,
    per_page: 15,
  };

  try {
    const response = await axios.get(API_URL, { params: apiParams });
    const data = response.data;

    if (!data.hits.length) {
      return Promise.reject(
        'Sorry, there are no images matching your search query. Please, try again!'
      );
    }
    return Promise.resolve(data);
  } catch (error) {
    console.error('Error:', error);
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
}

export default getImages;

