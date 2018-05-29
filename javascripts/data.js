const request = (config) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', (e) => {
    config.onSuccess(JSON.parse(e.currentTarget.responseText));
  });
  xhr.addEventListener('error', config.onError);
  xhr.open(config.httpMethod, config.address);
  xhr.send();
};

module.exports = {
  request,
};
