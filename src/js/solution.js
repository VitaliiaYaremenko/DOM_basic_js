(function () {
  const generateList = (array) => {
    const ul = document.createElement('ul');

    array.forEach((item) => {
      const li = document.createElement('li');
      let childElement;

      if (Array.isArray(item)) {
        childElement = (generateList(item));
      } else {
        childElement = (document.createTextNode(item));
      }
      li.appendChild(childElement);
      ul.appendChild(li);
    });
    return ul;
  };
  document.body.appendChild(generateList([1, 2, 3]));
  document.body.appendChild(generateList([1, 2, [1.1, 1.2, ['1.2.1', '1.2.2'], 1.3], 3]));
}());
