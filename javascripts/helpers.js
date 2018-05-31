const updateStatement = ({ message, color, }) => {
  const statement = document.getElementById('statement');
  statement.innerHTML = `<span style="background:${color}; color:#ffffff; padding; font-size:20px;">${message}</span>`;
};

const getStatementProps = (canMakeMovie) => {
  return canMakeMovie ? { message: 'You can make the movie!', color: 'rgba(72, 244, 129, 0.5)', } : { message: "You can't make the movie!", color: 'rgba(244, 72, 72, 0.5)', };
};

const setTotal = total => {
  const totalContainer = document.getElementById('total');
  return (totalContainer.innerHTML = `${total}`);
};

const setTotalColor = (isOverBudget) => {
  const totalContainer = document.getElementById('total');
  totalContainer.style.color = isOverBudget ? 'green' : 'red';
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

const setProgressBarHTML = (currentBudget, theSetBudget, canMakeMovie) => {
  const progressBar = document.getElementById('progress-bar');

  const newWidth = currentBudget / theSetBudget * 100;
  progressBar.style.width = `${newWidth}%`;

  if (!canMakeMovie) {
    return progressBar.style.backgroundColor = '#ff0000';
  }
  return progressBar.style.backgroundColor = '#50C878';
};

const toggleReceipt = (id, cost, name) => {
  const receiptContainer = document.getElementById('receipt');
  const existingReceipt = document.getElementById(id);

  if (existingReceipt) {
    return existingReceipt.remove();
  }

  return (receiptContainer.innerHTML += `
  <div class="total-statement" id="${id}">
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
  setTotalColor,
  getStatementProps,
  getAllCheckBoxes,
  getTotal,
  setTotal,
  attachStringToElementWithId,
  getRemainingBudget,
  toggleReceipt,
  setProgressBarHTML,
  updateStatement,
};
