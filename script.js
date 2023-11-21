//add book to an array
//display that book on the page
// make sure this now works for multiple books


const myLibrary = [];


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

Book.prototype.addBookToLibrary = function(){
    myLibrary.push(`${this.title} written by ${this.author} has ${this.pages} pages, ${this.read}`);
}


const book1 = new Book("Hobbit", "J.R.R Tolkien", 467, "read");
const book2 = new Book("LoTR", "J.R.R Tolkien", 398, "not read");


book1.addBookToLibrary();
book2.addBookToLibrary();


const content = document.querySelector("#content");
const para = document.createElement("p");
para.textContent = myLibrary;
content.appendChild(para);
