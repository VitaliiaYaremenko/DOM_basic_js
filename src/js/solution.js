const DATA_KEY = 'formData';

(function () {
  const formPage = () => {
    const form = document.querySelector('[data-form]');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const formInputs = event.target.querySelectorAll('input, select, textarea');
      const InputsData = Array.from(formInputs).reduce((accum, item) => {
        accum[item.name] = item.value;
        return accum;
      }, {});

      for (const key in InputsData) {
        if (InputsData[key] === '') {
          const createMassage = document.createElement('div');
          createMassage.className = 'userMessage standard mb-4 mt-2 text-center';
          createMassage.innerHTML = '<strong>Не отримано дані!</strong> Заповніть форму!';
          form.prepend(createMassage);
          return;
        }
      }
      localStorage.setItem(DATA_KEY, JSON.stringify(InputsData));
      event.target.reset();
      const url = `${window.location.origin}/DOM_basic_js/src/about.html`;
      window.open(url, '_blank');
    });
  };

  const outPutPage = () => {
    const data = JSON.parse(localStorage.getItem(DATA_KEY));
    const dataContent = document.querySelector('[data-content]');

    if (!data) {
      dataContent.innerHTML = 'Дані не передані!';
      return;
    }

    const ul = document.createElement('ul');
    dataContent.append(ul);

    for (const key in data) {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.innerHTML = `<b>${key}</b>: ${data[key]}`;
      ul.append(li);
    }
  };

  if (location.pathname.includes('index.html')) {
    formPage();
  } else if (location.pathname.includes('about.html')) {
    outPutPage();
  }
}());
