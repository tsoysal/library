// form dialog
const dialog = document.querySelector('dialog');

// form
const form = document.querySelector('form')

// Submit button
const submitBtn = document.querySelector('#submit');

// form inputs
const inputs = document.querySelectorAll('.input');

// Books container
const booksContainer = document.querySelector('.books-container');

// My Library array
const myLibrary = [];

// Event listeners
form.addEventListener('submit', handleSubmit);

function handleSubmit(e){
    e.preventDefault();
    addBookToLibrary();
    dialog.close();
}

function Book(name, author, page, isRead) {
    this.name = name;
    this.author = author;
    this.pages = page;
    this.isRead = isRead;
}

function addBookToLibrary() {
    // Create new book object with the input values
    let newBook = new Book(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].checked);
    // Add new book object to myLibrary array
    myLibrary.push(newBook);
    displayBooks(newBook);
}

function displayBooks() {
    let bookCards = '';

    myLibrary.forEach((book, index) => {
        bookCards += `<div class="book"}>
                <h3>${book.name}</h3>
                <p>${book.author}</p>
                <p>${book.pages}</p>
                <button onclick="handleRead(${index})">${(book.isRead ? "Readed!": "Not Readed!")}</button>
                <button onclick="handleDelete(${index})">delete</button>
            </div>`;
    });

    booksContainer.innerHTML = bookCards;
}

function handleDelete(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

function handleRead(index) {
   myLibrary[index].isRead = !(myLibrary[index].isRead);
   displayBooks();
}