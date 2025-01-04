const dataForm = document.querySelector("#dataForm");
const addDataBtn = document.querySelector("#addDataBtn");
const dataTable = document.querySelector("#dataTable");

let collection = [];

addDataBtn.addEventListener("click", () => {
  const name = document.querySelector("#name").value.trim();
  const lastName = document.querySelector("#lastName").value.trim();
  const age = document.querySelector("#age").value.trim();

  if (!name || !lastName || !age) {
    alert("Please fill out all the fields!");
    return;
  }

  collection.push({ name, lastName, age });

  dataForm.reset();

  renderTable();
});

function renderTable() {
  dataTable.innerHTML = "";

  collection.forEach((item, index) => {
    const row = `
      <tr class="border">
        <td class="py-2 px-4 border text-center">${index + 1}</td>
        <td class="py-2 px-4 border text-center">${item.name}</td>
        <td class="py-2 px-4 border text-center">${item.lastName}</td>
        <td class="py-2 px-4 border text-center">${item.age}</td>
        <td class="py-2 px-4 border text-center">
          <button class="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600" onclick="editRow(${index})">Edit</button>
          <button class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600" onclick="deleteRow(${index})">Delete</button>
        </td>
      </tr>
    `;
    dataTable.insertAdjacentHTML("beforeend", row);
  });
}

function deleteRow(index) {
  collection.splice(index, 1);

  renderTable();
}

function editRow(index) {
  const item = collection[index];
  document.querySelector("#name").value = item.name;
  document.querySelector("#lastName").value = item.lastName;
  document.querySelector("#age").value = item.age;

  collection.splice(index, 1);

  renderTable();
}
