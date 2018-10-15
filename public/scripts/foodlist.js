window.onload = () => {
  const ajaxUrl = '/food.json';
  function responseHandler() {
    const obj = JSON.parse(this.responseText);
    Object.keys(obj).forEach((key) => {
      const listItem = document.createElement('button');
      listItem.classList = 'btn btn-success btn-block';
      listItem.textContent = obj[key].name;
      document.querySelector('.foodlist').appendChild(listItem);
    });
  }

  const request = new XMLHttpRequest();
  request.addEventListener('load', responseHandler);
  request.open('GET', ajaxUrl, true);
  request.send();
};
