const createTitle = title => {
  return `<h2><strong>${title}</strong></h2>`;
};

const createCheckBox = props => {
  return `
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <div class="input-group-text">
            ${props.name}
              <input data-label-id="${props.id}" data-cost="${
  props.cost
}" data-name="${props.name}" data-category="${
  props.category
}" type="checkbox" aria-label="Checkbox for following text input">
            </div>
          </div>
        </div>
  `;
};

const createCheckBoxSection = (title, idToAttach) => {
  return `
    <div class="card col-lg-6">
    <div class="card-body text-center">
    <h5 class="card-title">${createTitle(title)}</h5>
    <p class="" id=${idToAttach}></p>
    </div>
    </div>
  `;
};

module.exports = {
  createTitle,
  createCheckBox,
  createCheckBoxSection,
};
