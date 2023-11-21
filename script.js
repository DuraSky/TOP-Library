const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

Book.prototype.addBookToLibrary = function(){
    myLibrary.push(`${this.title}, ${this.author}, ${this.pages},${this.read}`);
}

const testBook = new Book("Hobbit", "J.R.R Tolkien", 467, "read");
testBook.addBookToLibrary();

function updateDisplay(){
    const content = document.querySelector("#content");
    const para = document.createElement("p");
    para.textContent = myLibrary;
    content.appendChild(para);
};

let bookNameForm = document.querySelector("#book_name");
let authorForm = document.querySelector("#author");
let pagesNumForm = document.querySelector("#pages");
let readForm = document.querySelector("#read");


let btn = document.querySelector("#sButton");
btn.addEventListener("click", ()=>{
    event.preventDefault();

    const title = bookNameForm.value;
    const author = authorForm.value;
    const pages = pagesNumForm.value;
    const read = readForm.checked;


    let book = new Book(title, author, pages, read);
    book.addBookToLibrary();
    updateDisplay();
    console.log(myLibrary);

});

console.log(myLibrary);

