const inputForm = document.getElementById("inputForm");
const tableBody = document.getElementById("tableBody");
const SaveBtn = document.getElementById("SaveBtn");

const customers = [];
SaveBtn.addEventListener("click", store);

/**
 * @description function index used for generate rows on table based on cu
 * customers array
 */
function index() {
  tableBody.innerHTML = ""; // delete all rows before iteration
  customers.forEach(function listing(details, idx) {
    console.log(details);
    tableBody.innerHTML += `<tr class="border w-full">
            <td class="border w-52">${idx + 1}</td>
            <td class="border w-52">${details.name}</td>
            <td class="border w-52">${details.lastName}</td>
            <td class="border w-52">${details.age}</td>
            <td class="border w-52">
              <button class="bg-neutral-600" onclick="edit(${idx})">Edit</button>
              <button class="bg-neutral-600">Delete</button>
            </td>
          </tr>`;
    // tableBody.insertAdjacentHTML("beforeend", rows);
  });
}
function store() {
  const fname = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;
  const age = document.getElementById("age").value;
  customers.push({ name: fname, lastName, age });
  console.log(customers);

  // inputForm.reset();
  index();
}
function edit(index) {
  console.log("first", index);
}
