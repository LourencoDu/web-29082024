const users = [];

function adicionar() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if(name && email) {
    users.push({ name, email });
    renderizarTabela();
  }
}

function renderizarTabela() { 
  const tableTbody = document.querySelector("#users-table tbody");
  tableTbody.innerHTML = "";

  users.forEach((user, index) => {
    const newRow = document.createElement("tr");

    const idColumn = document.createElement("td");
    idColumn.textContent = index + 1;

    const nameColumn = document.createElement("td");
    nameColumn.textContent = user.name;

    const emailColumn = document.createElement("td");
    emailColumn.textContent = user.email;

    newRow.appendChild(idColumn);
    newRow.appendChild(nameColumn);
    newRow.appendChild(emailColumn);

    tableTbody.appendChild(newRow);
  })
}