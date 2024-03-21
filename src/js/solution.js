(function () {
  const form = document.querySelector('[data-form-survey]');
  const hiddenElements = document.querySelectorAll('.hidden');
  const showButtons = document.querySelectorAll('.showButton');
  const answerButton = document.querySelector('#btnAnswers');

  showButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      hiddenElements[index].style.display = 'block';
    });
  });
  // ___________________________________________

  const answerContainer = document.querySelector('.answer-container');
  let responses = 1;

  answerButton.addEventListener('click', () => {
    responses++;
    const creatInput = document.createElement('Input');
    creatInput.type = 'text';
    creatInput.className = 'form-control answer-input mb-3';
    answerContainer.appendChild(creatInput);
  });
  // ___________________________________________

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameTitle = event.target.querySelector('.name-title').value;
    const answerInput = event.target.querySelectorAll('.answer-input');

    const errorMassage = document.createElement('div');

    if (nameTitle.trim() === '' || answerInput.length < 2) {
      errorMassage.className = 'massage-title standard mb-5';
      errorMassage.innerHTML = '<strong>Заповніть</strong> назву опитування! Додайти не менше 2-х варіантів відповіді';
      form.prepend(errorMassage);
    }
    // ___________________________________________
    const questions = [];
    const answers = [];
  });
}());
