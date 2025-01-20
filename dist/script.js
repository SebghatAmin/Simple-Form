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

  if (!bookName || !author || !price) {
    alert("Please fill out the form");
    return;
  }

  if (globalIndex > -1) {
    library[globalIndex] = { bookName, author, price };
    globalIndex = -1;
    saveBtn.textContent = "Save";
  } else {
    library.push({ bookName, author, price });
  }

  inputForm.reset();
  renderTable();
}

function renderTable() {
  dataTable.innerHTML = "";

  library.forEach((item, idx) => {
    const rows = `<tr class="w-full rounded border">
      <td class="w-52 rounded-md border">${idx + 1}</td>
      <td class="w-52 rounded-md border">${item.bookName}</td>
      <td class="w-52 rounded-md border">${item.author}</td>
      <td class="w-52 rounded-md border">${item.price}</td>
      <td class="w-52 rounded-md border">
        <button class="bg-orange-500 rounded" onClick="edit(${idx})">Edit</button>
        <button class="bg-red-600 rounded" onClick="remove(${idx})">Delete</button>
      </td>
    </tr>`;
    dataTable.insertAdjacentHTML("beforeend", rows);
  });
}

function remove(idx) {
  library.splice(idx, 1);
  renderTable();
}

function edit(idx) {
  const selectedRow = library[idx];
  document.getElementById("name").value = selectedRow.bookName;
  document.getElementById("author").value = selectedRow.author;
  document.getElementById("price").value = selectedRow.price;
  globalIndex = idx;
  saveBtn.textContent = "Update";
}
