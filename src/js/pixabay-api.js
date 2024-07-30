const API_URL = 'https://pixabay.com/api/';
const API_KEY = '45097431-2d8d6a9f4785bbcc4049d8cdd';

const fetchData = url =>
  new Promise((resolve, reject) =>
    fetch(url)
      .then(response => {
        if (!response.ok) {
          reject(new Error(`HTTP error, status: ${response.status}`));
        }
        return response.json();
      })
      .then(json => resolve(json))
      .catch(error => reject(error))
  );

function getImages(strForSearch) {
  const apiParams = {
    key: API_KEY,
    q: encodeURIComponent(strForSearch),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 20,
  };

  const url = `${API_URL}?${new URLSearchParams(apiParams).toString()}`;
  return new Promise((resolve, reject) => {
    fetchData(url)
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
