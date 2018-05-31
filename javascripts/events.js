const helpers = require('./helpers');

const {
  getStatementProps,
  setTotal,
  getRemainingBudget,
  toggleReceipt,
  getAllCheckBoxes,
  setProgressBarHTML,
  updateStatement,
  setTotalColor,
} = helpers;

let theSetBudget = 0;
let currentBudget = 0;

const updateCurrentBudget = (cost) => {
  return currentBudget += cost;
};

const getBudget = () => {
  return currentBudget;
};

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

const isOverBudget = () => {
  return currentBudget <= theSetBudget;
};

const isMovieMakeable = (categories) => {
  return isCheckBoxCheckedInEachCategory(categories) && currentBudget <= theSetBudget;
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

      /*
//       5.2 When I check a checkbox:
//         -the cost is added to the progress bar to animate it.
//         -the remaining budget is calculated by subtracting the cost from the total budget.
//         -the setTotal updates the remaining budet in the UI.
//         -the item is added to the receipt.
//
//       */
      if (checkBox.checked) {
        const remainingBudget = getRemainingBudget(-cost);

        toggleReceipt(id, cost, name);
        updateCurrentBudget(cost);
        const canMakeMovie = isMovieMakeable(categories);
        setTotal(remainingBudget, canMakeMovie);
        setProgressBarHTML(currentBudget, theSetBudget, isOverBudget());
        setTotalColor(isOverBudget());
        updateStatement(getStatementProps(canMakeMovie));
      } else {

        /*
         5.3 If the checkbox is unchecked:
         -I decrease the progress bar by the cost of the unchecked item.
         -I remove the existing receipt.
         -I calculate the remaining budget and update the total in the UI.

       */

        toggleReceipt(id, cost, name);
        const remainingBudget = getRemainingBudget(cost);

        updateCurrentBudget(-cost);
        const canMakeMovie = isMovieMakeable(categories);
        setTotal(remainingBudget, canMakeMovie);
        setTotalColor(isOverBudget());
        setProgressBarHTML(currentBudget, theSetBudget, isOverBudget());
        updateStatement(getStatementProps(canMakeMovie));
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
    theSetBudget = parseInt(input.value);
    helpers.setTotal(input.value);
  }
});

module.exports = {
  updateCurrentBudget,
  getBudget,
  addCheckBoxListeners,
  toggleCheckBoxes,
};
