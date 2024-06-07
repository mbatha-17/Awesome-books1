

document.addEventListener('DOMContentLoaded', () => {
    displayDate();

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

