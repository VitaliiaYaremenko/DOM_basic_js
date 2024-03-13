(function () {
  function createTable() {
    const table = document.createElement('table');

    let addiNumbers = 1;

    for (let i = 0; i < 10; i += 1) {
      const newRow = table.insertRow(i);

      for (let j = 0; j < 10; j += 1) {
        const newCell = newRow.insertCell(j);
        newCell.textContent = addiNumbers++;
      }
    }

    const oldTable = document.querySelector('table');
    if (oldTable) {
      oldTable.remove();
    }

    document.body.appendChild(table);
  }
  createTable();
}());
