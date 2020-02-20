let library = [];
const libraryContent = document.getElementById("library-content");

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBook(title, author, pages, status) {
    const book = new Book(title, author, pages, status);
    library.push(book);
}

addBook("Test Book", "Ryan Lewin", "100", "Read");
addBook("Another Book", "Mavis Hut", "1000", "Unread");
addBook("Boring Book", "Bomba Bomb", "450", "Read");

function printBook(book) {
    let listItem = document.createElement("P");
    listItem.innerHTML = `${book.title}, ${book.author}, ${book.pages}, ${book.status}`;
    libraryContent.appendChild(listItem);
}

library.forEach(printBook);