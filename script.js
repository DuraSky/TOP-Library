const myLibrary = [];
let counter = 0;
let paraCounter = 0;
let dataCounter = 0;

function Book(title, author, pages, read, data){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.data = data;
};

Book.prototype.addBookToLibrary = function(){
    myLibrary.push({
        title: this.title,
        author: this.author,
        pages: this.pages,
        read: this.read,
        data: dataCounter++
    });
    paraCounter++;
};

//  Book.prototype.changeRead = function(){
//      //find para with correct id and change html
    

// };


Book.prototype.updateDisplay = function(){
    const content = document.querySelector("#content");
    const para = document.createElement("p");
    para.setAttribute("data-id", paraCounter -1);
    const delBtn = document.createElement("button");
    const readBtn = document.createElement("button");
    readBtn.setAttribute("data-id",paraCounter -1);
    para.textContent = `Book title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${this.read}`;
    content.appendChild(para);
    para.appendChild(readBtn);
    para.appendChild(delBtn);
    let thisButtonId = readBtn.getAttribute("data-id");
    let thisParaId = para.getAttribute("data-id");

    const getParaID = delBtn.parentElement.dataset.id;
    
    readBtn.innerHTML = "Read/Unread";
    readBtn.addEventListener("click", ()=>{

        // for (let i =0; i < myLibrary.length; i++){
        //     if(myLibrary[i].data == getParaID){
        //         if(this.read == false){
        //             read.value = true;
        //         }else if(this.read == true){
        //             read.value = false;
        //         }

        //     }
        //     console.log(myLibrary);
            
        };
      
});

    delBtn.innerHTML = "Delete";
    delBtn.addEventListener("click", ()=>{

        for (let i =0; i < myLibrary.length; i++){
            if(myLibrary[i].data == getParaID){
                myLibrary.splice(i,1)
                para.remove();
            }         
        };
    console.log(myLibrary)
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
    book.updateDisplay();
    // console.log(myLibrary);
    console.log("this is basic counter: " + counter);

    bookNameForm.value = "";
    authorForm.value = "";
    pagesNumForm.value = "";
    readForm.checked = false;

});



