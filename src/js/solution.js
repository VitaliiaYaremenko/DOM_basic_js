(function () {
  const form = document.querySelector('[data-form]');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameUser = document.querySelector('#name').value.trim();
    const userEmail = document.querySelector('#email').value.trim();
    const userPassword = document.querySelector('#password').value.trim();

    if (nameUser === '' || userEmail === '' || userPassword === '') {
      document.querySelector('[data-show-message]').textContent = 'Будь ласка, заповніть усі поля!!!';
    } else {
      document.querySelector('[data-show-message]').textContent = 'Реєстрація пройшла успішно!';
      form.reset();
    }
  });
}());
