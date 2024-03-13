(function () {
  const ulElement = document.getElementById('ulId');
  console.log(ulElement);

  const allUlChild = ulElement.childNodes;
  console.log(allUlChild);
  // ___________________________

  const { attributes } = ulElement;
  console.log(attributes);

  const attributeValues = [];
  const attributeName = [];

  for (const attribute of attributes) {
    attributeValues.push(attribute.value);
    attributeName.push(attribute.name);
  }
  console.log(attributeValues);
  console.log(attributeName);

  // ___________________________
  const liElements = ulElement.getElementsByTagName('li');
  console.log(liElements);

  const lastLi = ulElement.lastElementChild;
  lastLi.textContent = 'Привіт! Мене звати Віта!';
  console.log(lastLi);

  // ___________________________

  const firstLi = ulElement.firstElementChild;
  firstLi.setAttribute('data-my-name', 'Vita');
  console.log(firstLi);
  // ___________________________

  ulElement.removeAttribute('data-dog-tail');
}());
