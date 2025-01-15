const inputForm = document.querySelector("#inputForm");
const saveBtn = document.querySelector("#SaveBtn");
const dataTable = document.querySelector("#tableBody");

const library = [];

let globalIndex = -1;

saveBtn.addEventListener("click", dataStore);

function dataStore() {
  const bookName = document.getElementById("name").value;
  const author = document.getElementById("author").value;
  const price = document.getElementById("price").value;
  library.push({ bookName, author, price });

  if (!bookName || !author || !price) {
    alert("please fill out the form");
  } else {
    renderTable();
  }
}
function renderTable() {
  dataTable.innerHTML = "";
  // console.log(library);
  library.forEach(function rowPrint(itm, idx) {
    const rows = `<tr class="w-full rounded border">
  <td class="w-52 rounded-md border">${idx + 1}</td>
  <td class="w-52 rounded-md border">${itm.bookName}</td>
  <td class="w-52 rounded-md border">${itm.author}</td>
  <td class="w-52 rounded-md border">${itm.price}</td>
  <td class="w-52 rounded-md border">
  <button class="bg-orange-500 rounded" onClick="edit('${idx}')">Edit</button>
  <button class="bg-red-600 rounded" onClick="remove()">Delete</button>
  </td>
</tr>`;
    dataTable.insertAdjacentHTML("beforeend", rows);
  });
}

function remove() {
  library.splice(0, 1);
  renderTable();
}

function edit(id) {
  let selectedRow = library[id];
  document.getElementById("name").value = selectedRow.bookName;
  document.getElementById("author").value = selectedRow.author;
  document.getElementById("price").value = selectedRow.price;
  library.splice(id, globalIndex);
  renderTable();
}
