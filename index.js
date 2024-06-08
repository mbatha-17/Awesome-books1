import { DateTime } from "./modules/luxon.js";

document.addEventListener('DOMContentLoaded', () => {
    const date = document.getElementById('date');
   setInterval(() => {
    date.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
   }, 1000);

    const bookForm = document.getElementById('book-form');
    
    bookForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('text').value;
        const author = document.getElementById('author').value;

        addBook(title, author);
        displayBooks();
    });

    displayBooks();
});

