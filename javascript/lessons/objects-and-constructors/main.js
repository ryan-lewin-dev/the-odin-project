/*
INSTRUCTIONS
Write a constructor for making “book” objects. We will revisit this in the project at the end of this lesson. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book
Put a function into the constructor that can report the book info like so:
book.info() // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
note: it is almost always best to return things rather than putting console.log() directly into the function. In this case, return the info string and log it after the function has been called:
console.log(theHobbit.info());
*/

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;

    this.info = function() {
        return `The ${this.title} by ${this.author}, ${pages} pages, ${status}`
    }
}

const book1 = new Book("Boring Book", "Ryan Lewin", "1", "Read");

console.log(book1.info());