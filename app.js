const bookWindow = document.getElementById("book-window");
const bookName = document.getElementById("name");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const bookRead = document.getElementById("read");
const submit = document.getElementById("submit");

const newBookWinBtn = document.getElementById("new-book-btn");
const bookList = document.getElementById("book-list");

// New book window

newBookWinBtn.addEventListener("click", () => {
  bookWindow.classList.toggle("hidden");
});

// New book

let bookArr = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.createBook = function () {
    const container = document.createElement("div");
    const para = document.createElement("p");
    const bookTitle = document.createTextNode(this.name);
    const bookAuthor = document.createTextNode(this.author);
    const bookPages = document.createTextNode(this.pages);
    const bookRead = document.createTextNode(this.read);
    container.appendChild(bookTitle);
    container.appendChild(bookAuthor);
    container.appendChild(bookPages);
    container.appendChild(bookRead);

    bookList.appendChild(container);
  };
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  book = new Book(
    bookName.value,
    bookAuthor.value,
    bookPages.value,
    bookRead.value
  );
  bookArr.push(book);
  book.createBook();
});
