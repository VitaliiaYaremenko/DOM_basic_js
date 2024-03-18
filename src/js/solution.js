(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#form-survey');

    const toggleButtons = document.querySelectorAll('.toggleButton');
    const btnSave = document.querySelector('#btn-save');

    toggleButtons.forEach((button) => {
      button.addEventListener('click', function () {
        const toggleId = this.getAttribute('data-toggle-id');
        const hiddenElement = document.querySelector(`.${toggleId}`);
        if (hiddenElement) {
          hiddenElement.classList.toggle('hidden');
        }
      });
    });

    const inputName = document.querySelector('#exampleFormControlTextarea1').value;
    const inputQuestion = document.querySelector('#exampleFormControlTextarea2').value;
    const inputAnswers = document.querySelector('#exampleFormControlTextarea3').value;

    btnSave.addEventListener('click', (event) => {
      const inspectTitle = document.querySelector('#exampleFormControlTextarea1').value.trim();
      if (inspectTitle === '') {
        alert('Заповніть назву опитування');
        event.preventDefault();
      }
    });
  });
}());
