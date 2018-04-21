const data = require('./data');

const moviesConfig = {
  httpMethod: 'GET',
  address: '../db/movieElements.json',
  onSuccess: (movieElements) => { console.log(movieElements); },
  onError: () => { },
};

data.request(moviesConfig);

const categoriesConfig = {
  httpMethod: 'GET',
  address: '../db/categories.json',
  onSuccess: (categories) => { console.log(categories); },
  onError: () => { },
};

data.request(categoriesConfig);
