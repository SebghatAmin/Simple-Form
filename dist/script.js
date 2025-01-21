const inputForm = document.querySelector("#inputForm");
const saveBtn = document.querySelector("#SaveBtn");
const dataTable = document.querySelector("#tableBody");

const library = [];
saveBtn.addEventListener("click", dataStore);
function dataStore() {
  const bookName = document.getElementById("name").value;
  const author = document.getElementById("author").value;
  const price = document.getElementById("price").value;

  if (!bookName || !author || !price) {
    alert("Please fill out the form");
    return;
  }
  library.push({ bookName, author, price });
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
let index = 0;
function edit(id) {
  const selectedRow = library[id];
  document.getElementById("name").value = selectedRow.bookName;
  document.getElementById("author").value = selectedRow.author;
  document.getElementById("price").value = selectedRow.price;
  saveBtn.classList.add("hidden");
  updateBtn.classList.remove("hidden");
  index = id;
}

const updateBtn = document.getElementById("update");
function update(index, name, author, price) {
  library[index].bookName = name;
  library[index].author = author;
  library[index].price = price;
  renderTable();
  saveBtn.classList.remove("hidden");
  updateBtn.classList.add("hidden");
  inputForm.reset();
}

updateBtn.addEventListener("click", function () {
  update(
    index,
    document.getElementById("name").value,
    document.getElementById("author").value,
    document.getElementById("price").value
  );
});
