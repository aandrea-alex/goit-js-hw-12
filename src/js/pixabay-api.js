
import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '45097431-2d8d6a9f4785bbcc4049d8cdd';

async function axiosData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
}

function getImages(strForSearch,  pageNumber = 1) {
  const apiParams = {
    key: API_KEY,
    q: encodeURIComponent(strForSearch),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: pageNumber,
    per_page: 15,
  };

  const url = `${API_URL}?${new URLSearchParams(apiParams).toString()}`;
  return new Promise((resolve, reject) => {
    axiosData(url)
      .then(data => {
        if (!data.hits.length) {
          reject(
            'Sorry, there are no images matching your search query. Please, try again!'
          );
        }
        resolve(data.hits);
      })
      .catch(error => {
        reject(`Error fetching images: ${error.message}`);
      });
  });
}

export default getImages;
