const data = require('./data');
const elementsDOM = require('./domElements');

const categoriesConfig = {
  httpMethod: 'GET',
  address: '../db/categories.json',
  onSuccess: elementsDOM.addCheckBoxSections,
  onError: () => { },
};

const moviesConfig = {
  httpMethod: 'GET',
  address: '../db/movieElements.json',
  onSuccess: elementsDOM.createMovieElements,
  onError: () => { },
};

// 1. SEND REQUEST TO CREATE CATEGORIES HTML AND MOVIES HTML
data.request(categoriesConfig);
data.request(moviesConfig);
