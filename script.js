const myLibrary = [];
let paraCounter = 0;
let dataCounter = 0;

class Book{
    constructor(title, author, pages, read, data){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.data = data;
    }

    pushToLibrary(book){
        myLibrary.push({
                 title: this.title,
                 author: this.author,
                 pages: this.pages,
                 read: this.read,
                 data: dataCounter++
             });
             paraCounter++;
    }

    addToDisplay(book){
    const content = document.querySelector("#content");
    const div = document.createElement("div");
    div.setAttribute("data-id", paraCounter -1);
    const delBtn = document.createElement("button");
    delBtn.setAttribute("class", "delBtn");
    const readBtn = document.createElement("button");
    readBtn.setAttribute("class", "readBtn");
    readBtn.setAttribute("data-id",paraCounter -1);
    div.innerHTML = `<h5>Book title:</h5> <p>${this.title}</p> <h5>Author:</h5> <p>${this.author}</p> <h5>Pages:</h5> <p>${this.pages}</p> <h5>Read:</h5> <p>${this.read}</p>`;
    content.appendChild(div);
    div.appendChild(readBtn);
    div.appendChild(delBtn);
    const getDivID = delBtn.parentElement.dataset.id;

    readBtn.innerHTML = "Read/Unread";
    readBtn.addEventListener("click", ()=>{
        for (let i =0; i < myLibrary.length; i++){
            if(myLibrary[i].data == getDivID){
                myLibrary[i].read = !myLibrary[i].read;
                div.innerHTML = `<h5>Book title:</h5> <p>${this.title}</p> <h5>Author:</h5> <p>${this.author}</p> <h5>Pages:</h5> <p>${this.pages}</p> <h5>Read:</h5>` + "<p>" + myLibrary[i].read + "</p>";
                div.appendChild(readBtn);
                div.appendChild(delBtn);
            };          
        };
    console.log(myLibrary);


    delBtn.innerHTML = "Delete";
    delBtn.addEventListener("click", ()=>{
        for (let i =0; i < myLibrary.length; i++){
            if(myLibrary[i].data == getDivID){
                myLibrary.splice(i,1)
                div.remove();
            }         
        };
    console.log(myLibrary)
    });
});
}
};

// class addBookToLibrary extends Book{
//     // myLibrary.push({
//     //     title: this.title,
//     //     author: this.author,
//     //     pages: this.pages,
//     //     read: this.read,
//     //     data: dataCounter++
//     // });
//     // paraCounter++;

   
    
// };



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
    book.pushToLibrary(book);
    book.addToDisplay(book);

    bookNameForm.value = "";
    authorForm.value = "";
    pagesNumForm.value = "";
    readForm.checked = false;
});



