const myLibrary = [];

function Book(name, totalPages) {
  this.name = name;
  this.totalPages = totalPages;
}

function addBookToLibrary(name, totalPages) {
  const book = new Book(name, totalPages);
  myLibrary.push(book);
}

function display() {
  const target = document.getElementById('demo');
  function myFunction(obj) {
    const newData = document.createElement('div');
    newData.classList.add('col-4');
    newData.innerHTML = `
      <div class="col-sm">
      <h1>${obj.name}</h1>
      <p>${obj.totalPages}</p>
      </div>
    `;

    target.appendChild(newData);
  }

  myLibrary.forEach(myFunction);
}

addBookToLibrary('book1', 200);

addBookToLibrary('book2', 250);

addBookToLibrary('book2', 250);

display();
