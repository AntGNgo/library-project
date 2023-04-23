// New book window
const newBookWinBtn = document.getElementById('');

// New book
const bookName = document.getElementById('name');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const bookRead = document.getElementById('read');
const submit = document.getElementById('submit');

bookList = [];

function Book(name, author, pages, read) {
	this.name = name;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

submit.addEventListener('click', (e) => {
	e.preventDefault();
	book = new Book(
		bookName.value,
		bookAuthor.value,
		bookPages.value,
		bookRead.value
	);
	bookList.push(book);
	console.log('clicked');
});
