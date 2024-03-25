const DATA_KEY = 'formData';
(function () {
  const form = document.querySelector('[data-form-survey]');
  const hiddenElements = document.querySelectorAll('.hidden');
  const showButtons = document.querySelectorAll('.showButton');
  const answerButton = document.querySelector('#btnAnswers');
  const answerContainer = document.querySelector('[data-answers-container]');
  const formContainer = document.querySelector('.form-container');

  showButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      hiddenElements[index].style.display = 'block';
    });
  });
  // ___________________________________________

  const createAnswerBlock = (config) => {
    const label = document.createElement('label');
    label.className = 'form-label d-block mb-3 text-primary-emphasis fs-4';
    label.innerHTML = `Відповідь ${config.id}`;
    label.setAttribute('data-id', config.id);

    const input = document.createElement('input');
    input.className = 'form-control answer-input mb-3';
    input.type = 'text';
    input.name = `${config.name}_${config.id}`;
    input.value = config.value;

    label.append(input);
    return label;
  };
  // ___________________________________________
  const answersList = [];

  answerButton.addEventListener('click', (event) => {
    event.preventDefault();

    const answers = {
      id: answersList.length ? answersList.at(-1).id + 1 : 1,
      name: 'answer',
      value: '',
    };
    answersList.push(answers);

    const buildBlock = createAnswerBlock(answers);
    answerContainer.append(buildBlock);
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
      return;
    }

    // ___________________________________________
    const inputs = event.target.querySelectorAll('input');
    const data = {};

    inputs.forEach((input) => {
      data[input.name] = input.value;
    });
    console.log(data);

    form.remove();

    // ___________________________________________
    const container = document.querySelector('[data-content]');

    for (const key in data) {
      const div = document.createElement('div');
      div.className = 'input-group-text';

      const inputCheckbox = document.createElement('input');
      inputCheckbox.type = 'checkbox';
      inputCheckbox.className = 'orm-check-input mt-0';

      const inputText = document.createElement('input');
      inputText.type = 'text';
      inputText.className = 'form-control text-primary-emphasis';
      inputText.value = data[key];

      div.append(inputCheckbox);
      div.append(inputText);
      container.append(div);
    }
  });
}());
