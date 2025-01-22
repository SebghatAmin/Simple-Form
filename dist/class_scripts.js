class Library {
  constructor() {
    this.libraries = [];
    this.dataTable = document.querySelector("#tableBody");
    this.bookName = document.getElementById("name");
    this.author = document.getElementById("author");
    this.price = document.getElementById("price");
    this.inputForm = document.querySelector("#inputForm");
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
        <td class="w-52 rounded-md border">
          <button class="bg-orange-500 rounded" onClick="lib.edit(${idx})">Edit</button>
          <button class="bg-red-600 rounded" onClick="lib.destroy(${idx})">Delete</button>
        </td>
      </tr>`;
      this.dataTable.insertAdjacentHTML("beforeend", rows);
    });
  }
  store() {
    if (!this.bookName?.value || !this.author?.value || !this.price?.value) {
      alert("Please fill out the form");
      return;
    }
    const data = {
      bookName: this.bookName.value,
      author: this.author.value,
      price: this.price.value,
    };
    if (this.update_record_index > -1) {
      this.libraries.splice(this.update_record_index, 1, data);
      this.update_record_index = -1;
    } else {
      this.libraries.push(data);
    }
    this.index();
    this.inputForm.reset();
  }
  edit(index) {
    this.update_record_index = index;
    const { bookName, author, price } = this.libraries[index];
    this.bookName.value = bookName;
    this.author.value = author;
    this.price.value = price;
  }
  destroy(index) {
    if (index > -1) this.libraries.splice(index, 1);
    this.index();
  }
}
const lib = new Library();
