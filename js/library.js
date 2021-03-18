const myLibrary = [];
const target = document.getElementById('demo');
const targetbtn = document.getElementById('add-btn');
const targetdisplay = document.getElementById('display');
const alertText = document.getElementById('alertText');

export {
  myLibrary, target, targetbtn, targetdisplay, alertText,
};

function Book(booktitle, author, totalPages, read) {
  this.booktitle = booktitle;
  this.author = author;
  this.totalPages = totalPages;
  this.read = read;
}

function saveLibrary() {
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

export function addBookToLibrary(booktitle, author, totalPages, read = true) {
  const book = new Book(booktitle, author, totalPages, read);
  myLibrary.push(book);
  saveLibrary();
}

export function displayForm() {
  targetbtn.style.display = 'none';
  target.style.display = 'none';
  targetdisplay.style.display = 'block';
}

export function customAlert() {
  alertText.style.display = 'block';
}
