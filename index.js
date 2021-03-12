const myLibrary = [];

function Book(name, author, totalPages, read) {
  this.name = name;
  this.author = author;
  this.totalPages = totalPages;
  this.read = read;
}

function saveLibrary() {
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function addBookToLibrary(name, author, totalPages, read = false) {
  const book = new Book(name, author, totalPages, read);
  myLibrary.push(book);
  saveLibrary();
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
  const target = document.getElementById('add-btn');
  target.style.display = 'none';
  const target1 = document.getElementById('demo');
  target1.style.display = 'none';
  const target2 = document.getElementById('display');
  target2.style.display = 'block';
}

function displayBooks() {
  const name = document.getElementById('bookName');
  const author = document.getElementById('authorName');
  const pages = document.getElementById('totalPages');
  addBookToLibrary(name, author, pages);

  const target = document.getElementById('add-btn');
  target.style.display = 'block';
  const target1 = document.getElementById('demo');
  target1.style.display = 'block';
  const target2 = document.getElementById('display');
  target2.style.display = 'none';
}

document.getElementById('add-btn').onclick = () => {
  displayForm();
};

document.getElementById('submitButton').onclick = () => {
  displayBooks();
};

display();

const varib = document.getElementById('bookName');
varib.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e);
});