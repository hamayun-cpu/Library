const myLibrary = [];

function Book(name, totalPages) {
  this.name = name;
  this.totalPages = totalPages;
}

function addBookToLibrary(name, totalPages) {
  const book = new Book(name, totalPages);
  myLibrary.push(book);
}

addBookToLibrary('book1', 200);

addBookToLibrary('book2', 250);
