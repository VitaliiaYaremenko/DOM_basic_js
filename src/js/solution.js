(function () {
  const parentEl = document.getElementById('ulId');
  console.log(parentEl);

  const allChildren = parentEl.childNodes;
  console.log(allChildren);

  for (const node of allChildren) {
    console.log(node);
  }

  const liElem = Array.from(parentEl.children);
  console.log(liElem);

  const textLi = liElem.map((li) => li.textContent.trim());
  console.log(textLi);
}());
