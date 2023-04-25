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

// Helper function for creating new text elements
  this.createElement = function (text, className) {
    const para = document.createElement("p");
    para.classList.add(className);
    const textNode = document.createTextNode(text);
    para.appendChild(textNode);
    return para;
  };

// Function for deleting book
  this.deleteBook = function(index) {
    const elementToDelete = document.getElementById(index)
    elementToDelete.remove()
    bookArr.splice(index, 1) 
  }

  this.createBook = function (index) {
    // Container for book
    const container = document.createElement("div");
    container.classList.add("book-container");

    // Delete button
    const deleteBtn = document.createElement("button")
    deleteBtn.appendChild(document.createTextNode("X"))

    // Create elements for book info
    const bookTitle = this.createElement(`${this.name}`, "book-name");
    const bookAuthor = this.createElement(`By: ${this.author}`, "book-author");
    const bookPages = this.createElement(
      `# of pages: ${this.pages}`,
      "book-pages"
    );
    const bookRead = this.createElement(
      `Read: ${this.read === "on" ? "Yes" : "No"}`,
      "book-read"
    );
    const bookReadBtn = document.createElement("button");
    const btnTextNode = document.createTextNode("Read");

    // Event listeners for btns

    bookReadBtn.addEventListener("click", () => {
      container.classList.toggle("read");
    });

    deleteBtn.addEventListener("click", () => {
      this.deleteBook(container.getAttribute("id"))
    })

    // Appending to container
    bookReadBtn.appendChild(btnTextNode);
    container.appendChild(deleteBtn)
    container.appendChild(bookTitle);
    container.appendChild(bookAuthor);
    container.appendChild(bookPages);
    container.appendChild(bookRead);
    container.appendChild(bookReadBtn);

    bookList.appendChild(container);

    // Set html IDs for containers
    container.setAttribute("id", index);
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
  bookArr[bookArr.length - 1].createBook(bookArr.length - 1);
});
