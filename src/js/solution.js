(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const btn = document.querySelector('[data-btn-click]');
    const contentDiv = document.querySelector('.content');

    btn.addEventListener('click', (event) => {
      const useEnteredText = textInput.value.trim();
      console.log(event.target);

      const createNewElem = document.createElement('DIV');
      createNewElem.textContent = useEnteredText;

      contentDiv.prepend(createNewElem);
      textInput.value = '';
    });
  });
}());
