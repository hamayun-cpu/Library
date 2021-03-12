const myLibrary = [];
const target = document.getElementById('demo');
const targetbtn = document.getElementById('add-btn');
const targetdisplay = document.getElementById('display');
let counter = 0;

function Book(booktitle, author, totalPages, read) {
  this.booktitle = booktitle;
  this.author = author;
  this.totalPages = totalPages;
  this.read = read;
}

function saveLibrary() {
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function addBookToLibrary(booktitle, author, totalPages, read = false) {
  const book = new Book(booktitle, author, totalPages, read);
  myLibrary.push(book);
  saveLibrary();
}

function displayForm() {
  targetbtn.style.display = 'none';
  target.style.display = 'none';
  targetdisplay.style.display = 'block';
}

function displayBooks() {
  let count = 0;
  function myFunction(obj) {
    if (count >= counter) {
      const newData = document.createElement('div');
      newData.classList.add('col-4');
      newData.classList.add('mb-3');
      newData.innerHTML = `
        <div class="col-sm bg-success p-4 border-light rounded">
        <h1 class = 'w-fit-content m-auto'>${obj.booktitle}</h1>
        <p class = 'mt-2'>${obj.author}</p>
        <p>${obj.totalPages}</p>
        <p>${obj.read}</p>
        </div>
      `;
      target.appendChild(newData);
    }
    count += 1;
  }
  myLibrary.forEach(obj => myFunction(obj));
}

targetbtn.addEventListener('click', (e) => {
  e.preventDefault();
  displayForm();
});

document.querySelector('#bookForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const bookname = document.querySelector('#bookName').value;
  const author = document.querySelector('#authorName').value;
  const pages = document.querySelector('#totalPages').value;
  if (bookname !== '' && author !== '' && pages !== '') {
    addBookToLibrary(bookname, author, pages);
    displayBooks(counter);
    counter += 1;
    targetbtn.style.display = 'block';
    target.style.display = 'flex';
    targetdisplay.style.display = 'none';
  } else {
    alert('Book Title, Author Name and Total Pages must be filled out');
  }
});
