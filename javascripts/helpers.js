// ATTACHES A STRING TO WHATEVER ID IS PASSED IN.
const attachStringToElementWithId = (stringOfHtmlElements, id) => {
  const element = document.getElementById(id);
  element.innerHTML = stringOfHtmlElements;
};

module.exports = {
  attachStringToElementWithId,
};
