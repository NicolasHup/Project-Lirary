
// collecting data from form

let myLibrary = [{
  title: 'Book1',
  author: 'me',
  pages: 25,
  isbn: 'dsfde342424',
  date: '2022-04-15',
  read: true
},
{
  title: 'Book2',
  author: 'you',
  pages: 2588,
  isbn: 'dsfde342424',
  date: '2022-04-15',
  read: false
}];


function Book(title, author, pages, isbn, date, read){
  // the constructor... 
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isbn = isbn;
  this.date = date;
  this.read = read;

}

function render(){
  let libraryBook = document.getElementById("library");
  for(let i = 0; i < myLibrary.length; i++){
    console.log(myLibrary[i]);
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


