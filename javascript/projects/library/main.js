let library = [];
const libraryContent = document.getElementById("library-content");

function Book(title, author, pages, status) {
    this.id = library.length;
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

function removeBook(id) {
    libraryContent.innerHTML = "";
    library.splice(id, 1);
    library.forEach(render);
}

function render(book) {
    const card = document.createElement("div");
    card.class = "card";
    card.id = `div${book.id}`;
    libraryContent.appendChild(card);
    const info = document.createElement("p");
    info.innerHTML = `${book.title}, ${book.author}, ${book.pages}, ${book.status}`;
    card.appendChild(info);
    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove Book";
    removeBtn.addEventListener("click", removeBook);
    card.appendChild(removeBtn);
}

const newBookBtn = document.getElementById("new-book-btn");
const newBookForm = document.getElementById("new-book-form");
const submitBookBtn = document.getElementById("submit-book-btn");

newBookBtn.onclick = function () {
    newBookForm.style.display = "block";
    newBookBtn.style.display = "none"
}

submitBookBtn.onclick = function() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const status = document.getElementById("status").value;
    addBook(title, author, pages, status);
    newBookForm.style.display = "none";
    newBookBtn.style.display = "block";
    libraryContent.innerHTML = "";
    library.forEach(render);
}

library.forEach(render);
