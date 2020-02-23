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

// function removeBook(id) {
//     libraryContent.innerHTML = "";
//     library.splice(id, 1);
//     library.forEach(render);
// }

function render(book) {
    const card = document.createElement("div");
    card.className = "card-content";
    card.id = `div${book.id}`;
    libraryContent.appendChild(card);
    const info = document.createElement("p");
    info.className = "title is-5"
    info.innerHTML = `${book.title} by ${book.author}, ${book.pages} Pages | ${book.status}`;
    card.appendChild(info);
    const removeBtn = document.createElement("button");
    removeBtn.className = "button is-danger is-outlined";
    removeBtn.innerHTML = "Remove Book";
    removeBtn.onclick = function() {
        libraryContent.innerHTML = "";
        library.splice(book.id, 1);
        library.forEach(render);
    }
    card.appendChild(removeBtn);
    const statusBtn = document.createElement("button");
    statusBtn.className = "button is-success is-outlined";
    statusBtn.innerHTML = "Change Status";
    statusBtn.onclick = function() {
        if(book.status === "Read") {
            book.status = "Unread";
        } else {
            book.status = "Read";
        }
        libraryContent.innerHTML = "";
        library.forEach(render);
    }
    card.appendChild(statusBtn);
}

const newBookBtn = document.getElementById("new-book-btn");
const newBookForm = document.getElementById("new-book-form");
const submitBookBtn = document.getElementById("submit-book-btn");
const close = document.getElementById("close");

close.onclick = function() {
    newBookForm.style.display = "none";
    newBookBtn.style.display = "block"
}

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

// const close = document.getElementById("close");
// close.onclick = function() {
//     newBookForm.display = "none";
// }

// const closeFormBtns = document.getElementsByClassName("close-form");
// closeFormBtns.onclick = function() {
//     newBookForm.style.display = "none";
// }

library.forEach(render);
