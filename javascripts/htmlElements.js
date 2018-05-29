const createTitle = title => {
  return `<h2>${title}</h2>`;
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
    <div>
      ${createTitle(title)}
      <div id=${idToAttach}>

      </div>
    </div>
  `;
};

module.exports = {
  createTitle,
  createCheckBox,
  createCheckBoxSection,
};
