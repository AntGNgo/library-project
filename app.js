const bookWindow = document.getElementById("book-window");
const closeBookWin = document.getElementById("close-book-window");
const bookName = document.getElementById("name");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const bookRead = document.getElementById("read");
const submit = document.getElementById("submit");

const darkOverlay = document.getElementById("dark-overlay");
const newBookWinBtn = document.getElementById("new-book-btn");
const bookList = document.getElementById("book-list");

// New book window

newBookWinBtn.addEventListener("click", () => {
  darkOverlay.classList.toggle("darkened");
  bookWindow.classList.toggle("hidden");
});

// New book

let bookArr = [];

class Book {
  constructor(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  // Helper function for creating new text elements
  createElement = function (text, className) {
    const para = document.createElement("p");
    if (className) {
      para.classList.add(className);
    }
    const textNode = document.createTextNode(text);
    para.appendChild(textNode);
    return para;
  };

  // Function for deleting book
  deleteBook = function (index) {
    const elementToDelete = document.getElementById(index);
    elementToDelete.remove();
    bookArr.splice(index, 1);
  };

  createBook = function (index) {
    // Container for book
    const container = document.createElement("div");
    container.classList.add("book-container");

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("X"));

    // Create elements for book info
    const bookTitle = this.createElement(`${this.name}`, "book-name");
    const bookAuthor = this.createElement(`By: ${this.author}`, "book-author");
    const bookPages = this.createElement(
      `# of pages: ${this.pages}`,
      "book-pages"
    );
    const bookRead = this.createElement(
      `Read: ${this.read.checked ? "Yes" : "No"}`,
      "book-read"
    );

    const bookReadBtn = document.createElement("button");
    const btnTextNode = document.createTextNode("Read");

    // Event listeners for btns

    bookReadBtn.addEventListener("click", () => {
      container.classList.toggle("read");
      if (container.classList.contains("read")) {
        bookRead.textContent = `Read: Yes`;
      } else {
        bookRead.textContent = `Read: No`;
      }
    });

    deleteBtn.addEventListener("click", () => {
      this.deleteBook(container.getAttribute("id"));
    });

    // Appending to container
    bookReadBtn.appendChild(btnTextNode);
    container.appendChild(deleteBtn);
    container.appendChild(bookTitle);
    container.appendChild(bookAuthor);
    container.appendChild(bookPages);
    container.appendChild(bookRead);
    container.appendChild(bookReadBtn);

    bookList.appendChild(container);

    // Set html IDs for containers
    container.setAttribute("id", index);

    // Set read style onto container
    if (this.read.checked) {
      container.classList.add("read");
    }
  };
}

closeBookWin.addEventListener("click", () => {
  bookName.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
  bookRead.checked = false;
  darkOverlay.classList.toggle("darkened");
  bookWindow.classList.toggle("hidden");
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    bookName.value !== "" &&
    bookAuthor.value !== "" &&
    parseInt(bookPages.value) > 0
  ) {
    book = new Book(
      bookName.value,
      bookAuthor.value,
      bookPages.value,
      bookRead
    );
    bookArr.push(book);
    bookArr[bookArr.length - 1].createBook(bookArr.length - 1);
    darkOverlay.classList.toggle("darkened");
    bookWindow.classList.toggle("hidden");
    bookName.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
    bookRead.checked = false;
  }
});
