const inputForm = document.getElementById("inputForm");
const tableBody = document.getElementById("tableBody");
const SaveBtn = document.getElementById("SaveBtn");

const Collection = [];

SaveBtn.addEventListener("click", Sherower);

function Sherower() {
  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;
  const age = document.getElementById("age").value;
  //   console.log(name, lastName, age);
  Collection.push({ name, lastName, age });
}

tableBody.addEventListener("beforeend", renderTable);

function renderTable() {
  rows = `  <tr class="border w-full">
            <td class="border w-52">#.01</td>
            <td class="border w-52">Sebghat</td>
            <td class="border w-52">Amin</td>
            <td class="border w-52">30</td>
            <td class="border w-52">
              <button class="bg-neutral-600">Edit</button>
              <button class="bg-neutral-600">Delete</button>
            </td>
          </tr>`;
}

// function Test() {
//   SaveBtn.addEventListener("click", () => {
//     const row = inputForm.querySelectorAll("input").value;
//     const col = row.Collection.map(function (val) {
//       return {
//         row: val,
//         row: val,
//         row: val,
//       };
//     });

//     console.log(col);
//   });
// }
