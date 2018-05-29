const htmlElements = require('./htmlElements');
const helpers = require('./helpers');

let categories;
const { createCheckBox, createCheckBoxSection, } = htmlElements;
const { attachStringToElementWithId, } = helpers;

const addCheckBoxSections = response => {
  categories = response.categories;

  let sections = '';

  // 2. CREATE THE CATEGORIES HTML
  categories.forEach(category => {
    sections += createCheckBoxSection(category.name, category.id);
  });

  // 2.1 CATEGORIES HTML IS ATTACHED TO DOM WITH THE ID CATEGORIES-CONTAINER
  attachStringToElementWithId(sections, 'categories-container');
};

const addCheckBoxesToCategories = movieElements => {
  const organizedCategories = movieElements.reduce(
    (updatedCategories, movie) => {
      const objectArguments = {
        id: movie.id,
        name: movie.name,
        category: movie.categoryId,
        cost: movie.cost,
      };
      // 3.1 CREATE EACH CHECKBOX
      const checkbox = createCheckBox(objectArguments);

      if (Object.prototype.hasOwnProperty.call(updatedCategories, movie.categoryId)) {
        return Object.assign(updatedCategories, {
          [movie.categoryId]: updatedCategories[movie.categoryId] += checkbox,
        });
      }
      // if movie.categoryId doesn't exist, create the new key with movie.categoryId.
      return Object.assign(updatedCategories, { [movie.categoryId]: checkbox, });
    }, {});

  Object.keys(organizedCategories).forEach(key => {
    attachStringToElementWithId(organizedCategories[key], key);
  });
};

const createMovieElements = response => {
  const movieElements = response.movieElements;

  // 3.  TAKE THE MOVIE ELEMENTS, AND CREATE CHECKBOXES FOR ALL OF THEM.
  addCheckBoxesToCategories(movieElements);

  // 4. DISABLE ALL CHECKBOXES

  // 5.  ADD LISTENER TO CHECKBOXES.

};

module.exports = {
  createMovieElements,
  addCheckBoxSections,
};
