const myLibrary = [];

function Book(name, author, totalPages, read) {
  this.name = name;
  this.author = author;
  this.totalPages = totalPages;
  this.read = read;
}

function addBookToLibrary(name, author, totalPages, read = false) {
  const book = new Book(name, author, totalPages, read);
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
      <p>${obj.author}</p>
      <p>${obj.totalPages}</p>
      <p>${obj.read}</p>
      </div>
    `;

    target.appendChild(newData);
  }

  myLibrary.forEach(myFunction);
}

function displayForm() {
  const target = document.getElementById('btn-primary');
  target.classList.add('d-none');
  const target1 = document.getElementById('container');
  target1.classList.add('d-none');
  const target2 = document.getElementById('display');
  target2.style.display = 'block';
}

addBookToLibrary('book1', 'hamayun', 200);

addBookToLibrary('book2', 'aqib', 250);

addBookToLibrary('book2', 'talha', 250);


display();
