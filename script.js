const shelf = document.querySelector('.shelf');
const nameInput = document.getElementById('name');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInput = document.getElementById('readed');
const submitBtn = document.getElementById('addBtn');

const myLibrary = [];

function Book(name, author, page, hasRead) {
    this.name = name;
    this.author = author;
    this.page = page;
    this.hasRead = (hasRead ? "Readed" : "Not read yet");
}

submitBtn.addEventListener('click', () => {
    addBookToLibrary(nameInput.value, authorInput.value, pagesInput.value, readInput.checked);
});

function addBookToLibrary(name, author, page, hasRead) {
    const newBook = new Book(name, author, page, hasRead);
    myLibrary.push(newBook);
    createElements(newBook);
    addEvents();
}

function removeBookFromLibrary(node) {
    const index = myLibrary.findIndex(book => {
        return book.name === node.firstChild.textContent;
    });
    myLibrary.splice(index, 1);
    shelf.removeChild(node);
}

function createElements(book) {
    const newBook = document.createElement('div');
    newBook.classList.add("book");
    newBook.innerHTML = `<h3 class="book-name">${book.name}</h3>
                             <p class="book-author">${book.author}</p>
                             <p class="book-pages">${book.page}</p>
                             <button class="read">${book.hasRead}</button>
                             <button class="deleteBtn">Delete</button>`;
    shelf.appendChild(newBook);
}

function addEvents() {
    // Delete items
    let deleteBtn = document.querySelectorAll('.deleteBtn');
    let length = deleteBtn.length;
    deleteBtn[length - 1].addEventListener('click', (e) => {
        removeBookFromLibrary(e.target.parentNode);
    });

    // Change Read status
    let hasReadbtn = document.querySelectorAll('.read');
    let length2 = hasReadbtn.length;
    hasReadbtn[length2 - 1].addEventListener('click', (e) => {
        if (e.target.textContent == "Readed") {
            e.target.textContent = "Not read yet";
        } else {
            e.target.textContent = "Readed";
        }
    })
}

