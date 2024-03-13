(function () {
  const checkNumber = () => {
    const inputNumber = document.getElementById('numberEnter').value;
    const result = (inputNumber % 2 === 0) ? 'Число парне' : 'Число не парне';

    alert(result);
  };

  document.getElementById('checkBtn').addEventListener('click', checkNumber);
}());
