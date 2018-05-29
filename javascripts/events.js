const helpers = require('./helpers');

const {
  getTotal,
  setTotal,
  getRemainingBudget,
  toggleReceipt,
  getAllCheckBoxes,
} = helpers;

const theSetBudget = 0;

const isCheckBoxCheckedInEachCategory = (categories) => {
  const checkBoxes = helpers.getAllCheckBoxes();
  const allCategories = categories.map(category => category.id);

  for (let i = 0; i < checkBoxes.length; i++) {
    const checkBox = checkBoxes[i];
    if (checkBox.checked) {
      const category = checkBox.dataset.category;
      if (allCategories.includes(category)) {
        allCategories.splice(allCategories.indexOf(category), 1);
      }
    }
  }

  return allCategories.length === 0;
};

const toggleCheckBoxes = () => {
  const checkBoxes = document.querySelectorAll('input[type=checkbox]');

  for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].disabled = !checkBoxes[i].disabled;
  }
};

const addCheckBoxListeners = (categories) => {
  const checkBoxes = getAllCheckBoxes();
  for (let i = 0; i < checkBoxes.length; i++) {
    // 5.1  ADD CHANGTE LISTENER TO EACH CHECKBOX
    checkBoxes[i].addEventListener('change', e => {
      const checkBox = e.target;
      const checkBoxData = checkBox.dataset;
      const name = checkBoxData.name;
      const cost = parseInt(checkBoxData.cost);
      const id = checkBoxData.labelId;

      if (checkBox.checked) {
        const remainingBudget = getRemainingBudget(-cost);
        setTotal(remainingBudget);
        toggleReceipt(id, cost, name);
      } else {

        toggleReceipt(id, cost, name);
        const remainingBudget = getRemainingBudget(cost);
        setTotal(remainingBudget);
      }

      const allChecked = isCheckBoxCheckedInEachCategory(categories);
      const totalBudget = getTotal();

      if (allChecked && totalBudget <= theSetBudget) {
        // show the you an make the movie div
      } else {
        // show the you can't make the movie div.
      }
    });
  }
};

const setBudgetButton = document.getElementById('set-budget');

setBudgetButton.addEventListener('click', e => {
  e.preventDefault();
  const input = document.getElementById('budget-input');

  if (input.value.length > 0) {
    setBudgetButton.disabled = true;
    toggleCheckBoxes();
    helpers.theSetBudget = input.value;
    helpers.setTotal(input.value);
  }
});

module.exports = {
  addCheckBoxListeners,
  toggleCheckBoxes,
};
