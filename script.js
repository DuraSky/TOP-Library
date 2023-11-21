const myLibrary = [];
let counter = 0;

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

Book.prototype.addBookToLibrary = function(){
    myLibrary.push(`${this.title}, ${this.author}, ${this.pages},${this.read}`);
}

// const testBook = new Book("Hobbit", "J.R.R Tolkien", 467, "read");
// testBook.addBookToLibrary();

function updateDisplay(){
    const content = document.querySelector("#content");
    const para = document.createElement("p");
    const delBtn = document.createElement("button");
    const readBtn = document.createElement("button");
    para.textContent = myLibrary[counter];
    content.appendChild(para);
    para.appendChild(readBtn);
    para.appendChild(delBtn);

    readBtn.innerHTML = "Read/Unread";
    readBtn.addEventListener("click", ()=>{
        console.log(myLibrary[counter]);
    });

    delBtn.innerHTML = "Delete";
    delBtn.addEventListener("click", ()=>{
        myLibrary.splice(counter, 1);
        para.remove(myLibrary);
         if(counter > 0){
             counter--;
         }
    });
};

let bookNameForm = document.querySelector("#book_name");
let authorForm = document.querySelector("#author");
let pagesNumForm = document.querySelector("#pages");
let readForm = document.querySelector("#read");


let btn = document.querySelector("#sButton");
btn.addEventListener("click", ()=>{
    event.preventDefault();

     if(myLibrary.length != 0){
         counter++
     };

    const title = bookNameForm.value;
    const author = authorForm.value;
    const pages = pagesNumForm.value;
    const read = readForm.checked;


    let book = new Book(title, author, pages, read);
    book.addBookToLibrary();
    updateDisplay();
    console.log(myLibrary);
    console.log(counter);

    bookNameForm.value = "";
    authorForm.value = "";
    pagesNumForm.value = "";
    readForm.checked = false;

});



