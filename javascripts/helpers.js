let currentBudget = 0;

const setTotal = total => {
  const totalContainer = document.getElementById('total');
  return (totalContainer.innerHTML = `${total}`);
};

const getTotal = () => {
  const totalContainer = document.getElementById('total');
  return parseInt(totalContainer.innerHTML);
};

const getAllCheckBoxes = () => {
  return document.querySelectorAll('input[type=checkbox]');
};

const getRemainingBudget = cost => {
  return getTotal() + cost;
};

const setProgressBarHTML = cost => {
  const progressBar = document.getElementById('progress-bar');

  currentBudget += cost;
  const newWidth = currentBudget / getTotal() * 100;
  progressBar.style.width = `${newWidth}%`;
};

const toggleReceipt = (id, cost, name) => {
  const receiptContainer = document.getElementById('receipt');
  const existingReceipt = document.getElementById(id);

  if (existingReceipt) {
    return existingReceipt.remove();
  }

  return (receiptContainer.innerHTML += `
  <div id="${id}">
    <span>$${cost}</span>
    <span>${name}</span>
  </div>`);
};

// ATTACHES A STRING TO WHATEVER ID IS PASSED IN.
const attachStringToElementWithId = (stringOfHtmlElements, id) => {
  const element = document.getElementById(id);
  element.innerHTML = stringOfHtmlElements;
};

module.exports = {
  getAllCheckBoxes,
  getTotal,
  setTotal,
  attachStringToElementWithId,
  getRemainingBudget,
  toggleReceipt,
  setProgressBarHTML,
};
