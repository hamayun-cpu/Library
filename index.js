/* eslint-disable no-use-before-define */
const myLibrary = [];
const target = document.getElementById('demo');
const targetbtn = document.getElementById('add-btn');
let targetdisplay = document.getElementById('display');
const alertText = document.getElementById('alertText');
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

function addBookToLibrary(booktitle, author, totalPages, read = true) {
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
      newData.classList.add('col-6');
      newData.classList.add('mb-3');
      newData.classList.add(`${count}`);
      newData.innerHTML = `
        <div class="col-sm bg-success p-4 border-light rounded ${count}">
        <h1 class = 'm-auto text-nowrap'>Title: ${obj.booktitle}</h1>
        <p class = 'mt-2'>Author: ${obj.author}</p>
        <p>Total Pages: ${obj.totalPages}</p>
        <p>Read? <input type="checkbox" id="myCheck"></p>
        <button type='button' class="btn btn-danger del ${count}">Delete Book</button>
        </div>
      `;
      target.appendChild(newData);
    }
    count += 1;
  }
  myLibrary.forEach(obj => myFunction(obj));
  deleteTask();
}

targetbtn.addEventListener('click', (e) => {
  e.preventDefault();
  displayForm();
});

function customAlert() {
  alertText.style.display = 'block';
}

document.querySelector('#bookForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const bookname = document.querySelector('#bookName').value;
  const author = document.querySelector('#authorName').value;
  const pages = document.querySelector('#totalPages').value;
  if (bookname !== '' && author !== '' && pages !== '') {
    addBookToLibrary(bookname, author, pages);
    displayBooks();
    counter += 1;
    targetbtn.style.display = 'block';
    target.style.display = 'flex';
    targetdisplay.style.display = 'none';
    alertText.style.display = 'none';
  } else {
    customAlert();
  }
});

function deleteTask() {
  const edit = document.querySelectorAll('.del');
  edit.forEach((item) => {
    item.addEventListener('click', () => {
      item.parentElement.parentElement.remove();
    });
  });
}
