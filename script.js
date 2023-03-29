
//mylibrary array 

let myLibrary = [];


function Book(title, author, pages, isbn, date, read){
  // the constructor... 
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isbn = isbn;
  this.date = date;
  this.read = read;

}

//function that loops through mylibrary array

function render(){
  let libraryEl= document.querySelector(".books-library");
  libraryEl.innerHTML = "";
  for(let i = 0; i < myLibrary.length; i++){
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.innerHTML = `
      <p>${book.title}</p>
      <p>${book.author}</p>
      <p>${book.pages}</p>
      <p>${book.isbn}</p>
      <p>${book.date}</p>
      <p>${book.read}</p>`;
    libraryEl.appendChild(bookEl);
  }
}

function addBookToLibrary() {
  // do stuff here
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let isbn = document.getElementById("isbn").value;
  let date = document.getElementById("date").value;
  let read = document.getElementById("read").checked;
  let newBook = new Book(title, author, pages, isbn, date, read);
  myLibrary.push(newBook);
  render();
}


document.querySelector("#form-book").addEventListener("submit", function(event){
  event.preventDefault();
  addBookToLibrary();
});


