import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// const API_KEY = 'key=34422207-170011de97ccd8f3047fd820d';
// const page = 1;

// export const fetchApi = async searchName => {
//   const response = await axios.get(
//     `?${API_KEY}&q=${searchName}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
//   );
//   console.log(response.data);
//   return response.data;
// };

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = 'key=34422207-170011de97ccd8f3047fd820d';

const fetchApi = async (searchName, page) => {
  const response = await axios.get(`?${API_KEY}`, {
    params: {
      q: searchName,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page,
    },
  });

  return response.data;
};

export default fetchApi;
