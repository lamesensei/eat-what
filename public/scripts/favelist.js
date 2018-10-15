window.onload = () => {
  const ajaxUrl = '/food/fave.json';
  function responseHandler() {
    const obj = JSON.parse(this.responseText);
    Object.keys(obj).forEach((key) => {
      const listItem = document.createElement('button');
      listItem.classList = 'btn btn-success btn-block';
      listItem.textContent = obj[key].name;
      document.querySelector('.favelist').appendChild(listItem);
    });
  }

  const request = new XMLHttpRequest();
  request.addEventListener('load', responseHandler);
  request.open('GET', ajaxUrl, true);
  request.send();
};
