class Library {
  constructor() {
    this.libraries = [];
    this.dataTable = document.querySelector("#tableBody");
    this.inputForm = document.querySelector("#inputForm");
    this.bookName = document.getElementById("name");
    this.author = document.getElementById("author");
    this.price = document.getElementById("price");
    this.type = document.getElementById("selectBox");
    this.saveBtn = document.getElementById("saveBtn");
    this.update_record_index = -1;
  }

  index() {
    this.dataTable.innerHTML = "";
    this.libraries.forEach((item, idx) => {
      const rows = `<tr class="w-full rounded border">
          <td class="w-52 rounded-md border">${idx + 1}</td>
          <td class="w-52 rounded-md border">${item.bookName}</td>
          <td class="w-52 rounded-md border">${item.author}</td>
          <td class="w-52 rounded-md border">${item.price}</td>
          <td class="w-52 rounded-md border">${item.type}</td>
          <td class="w-52 rounded-md border">${item.legalCheck}</td>
          <td class="w-52 rounded-md border">${item.multiple_choice}</td>
          <td class="w-52 rounded-md border">
            <button class="bg-orange-500 rounded" onClick="lib.edit(${idx})">Edit</button>
            <button class="bg-red-600 rounded" onClick="lib.destroy(${idx})">Delete</button>
          </td>
        </tr>`;
      this.dataTable.insertAdjacentHTML("beforeend", rows);
    });
  }

  store() {
    const selectedCheckboxes = document.querySelectorAll(
      "input[type='checkbox']:checked"
    );
    const multipleChoiceValues = Array.from(selectedCheckboxes).map(
      (checkbox) => checkbox.value
    );

    const legalCheckValue = document.querySelector(
      'input[name="bookligitimicy"]:checked'
    )?.value;

    if (
      !this.bookName.value ||
      !this.author.value ||
      !this.price.value ||
      !legalCheckValue ||
      multipleChoiceValues.length === 0
    ) {
      alert("Please fill out the form");
      return;
    }

    const data = {
      bookName: this.bookName.value,
      author: this.author.value,
      price: this.price.value,
      type: this.type.value,
      legalCheck: legalCheckValue,
      multiple_choice: multipleChoiceValues.join(", "),
    };

    if (this.update_record_index > -1) {
      this.libraries.splice(this.update_record_index, 1, data);
      this.saveBtn.innerText = "Save";
      this.update_record_index = -1;
    } else {
      this.libraries.push(data);
    }

    this.index();
    this.resetForm();
  }

  edit(index) {
    this.update_record_index = index;
    const { bookName, author, price, type, legalCheck, multiple_choice } =
      this.libraries[index];

    this.bookName.value = bookName;
    this.author.value = author;
    this.price.value = price;
    this.type.value = type;

    const legalRadio = document.querySelector(
      `input[name="bookligitimicy"][value="${legalCheck}"]`
    );
    if (legalRadio) legalRadio.checked = true;

    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = multiple_choice.includes(checkbox.value);
    });

    this.saveBtn.innerText = "Update";
  }

  destroy(index) {
    if (index > -1) this.libraries.splice(index, 1);
    this.index();
  }

  resetForm() {
    this.inputForm.reset();
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });

    const radioButtons = document.querySelectorAll(
      'input[name="bookligitimicy"]'
    );
    radioButtons.forEach((radio) => {
      radio.checked = false;
    });
  }
}

const lib = new Library();
