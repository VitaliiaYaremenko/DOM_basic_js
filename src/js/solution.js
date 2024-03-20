(function () {
  const form = document.querySelector('#form');
  const ulItem = document.querySelector('#dataUserList');
  const dataFormKey = 'formData';

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formElements = event.target.querySelectorAll('input, select, textarea');
    const formData = Array.from(formElements).reduce((accum, item) => {
      accum[item.name] = item.value;
      return accum;
    }, {});

    for (const key in formData) {
      if (formData[key] === '') {
        const createMassage = document.createElement('div');
        createMassage.className = 'userMessage standard mb-4 mt-2 text-center';
        createMassage.innerHTML = '<strong>Не отримано дані!</strong> Заповніть форму!';
        form.prepend(createMassage);
        return;
      }
    }

    localStorage.setItem(dataFormKey, JSON.stringify(formData));
    window.location.href = 'about.html';
    // ______
  });
}());
