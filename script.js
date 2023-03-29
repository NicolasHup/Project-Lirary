
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

  //Creates a div for a card that contains form infor about the created book
    let bookEl = document.createElement("div");
    bookEl.innerHTML = `
      <p>Title: ${book.title}</p>
      <p>Autor: ${book.author}</p>
      <p>Pages:${book.pages}</p>
      <p>ISBN : ${book.isbn}</p>
      <p>Date :${book.date}</p>
      <p>${book.read ? "Read" : "Not Yet Read"}</p>
      <input type="submit" value="Delete">`;
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


