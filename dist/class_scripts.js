class Library {
  constructor() {
    this.libraries = [];
    this.dataTable = document.querySelector("#tableBody");
    this.inputForm = document.querySelector("#inputForm");
    // this.bookName = document.getElementById("name");
    // this.inputForm.author = document.getElementById("author");
    // this.inputForm.price = document.getElementById("price");
    this.update_record_index = -1;
    this.saveBtn = document.getElementById("saveBtn");
    this.inputForm.multiple_choice = document.querySelectorAll(
      "input[type='checkbox'][name='multiple_choice']"
    );
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
        <td class="w-52 rounded-md border">${item.choice}</td>

        <td class="w-52 rounded-md border">
          <button class="bg-orange-500 rounded" onClick="lib.edit(${idx})">Edit</button>
          <button class="bg-red-600 rounded" onClick="lib.destroy(${idx})">Delete</button>
        </td>
      </tr>`;
      this.dataTable.insertAdjacentHTML("beforeend", rows);
    });
  }
  store() {
    if (
      !this.inputForm.name?.value ||
      !this.inputForm.author?.value ||
      !this.inputForm.price?.value ||
      !this.inputForm.price?.value ||
      !this.inputForm.bookligitimicy?.value ||
      !this.inputForm.multiple_choice?.value
    ) {
      alert("Please fill out the form");
      return;
    }
    const data = {
      bookName: this.inputForm.name.value,
      author: this.inputForm.author.value,
      price: this.inputForm.price.value,
      type: this.inputForm.price.value,
      legalCheck: this.inputForm.bookligitimicy.value,
      choice: this.inputForm.multiple_choice.forEach((item) => {
        if (item.checked === true) {
          this.libraries[item.value] === true;
        } else if (item.checked === false) {
          this.libraries[item.value] === false;
        }
      }),
    };
    if (this.update_record_index > -1) {
      this.libraries.splice(this.update_record_index, 1, data);
      this.saveBtn.innerText = "Save";
      this.update_record_index = -1;
    } else {
      this.libraries.push(data);
    }
    console.log(choice);
    this.index();
    this.inputForm.reset();
  }
  edit(index) {
    this.update_record_index = index;
    const { bookName, author, price, type, legalCheck, choice } =
      this.libraries[index]; //distract object
    this.inputForm.name.value = bookName;
    this.inputForm.author.value = author;
    this.inputForm.price.value = price;
    this.inputForm.price.value = type;
    this.inputForm.bookligitimicy.value = legalCheck;
    this.inputForm.multiple_choice.value = choice;
    this.saveBtn.innerText = "update";

    // this.store();
  }
  destroy(index) {
    if (index > -1) this.libraries.splice(index, 1);
    this.index();
  }
}
const lib = new Library();
