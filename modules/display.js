
const listLink = document.querySelector('a[href="#index.html"]');
const addLink = document.querySelector('a[href="#add.html"]');
const contactLink = document.querySelector('a[href="#contact.html"]');
const aboutSection = document.getElementById('about');
const addBookPage = document.getElementById('add-book-page');
const contactSection = document.querySelector('.section');

listLink.addEventListener('click', () => {
    aboutSection.classList.add('active');
    addBookPage.classList.remove('active');
    contactSection.classList.remove('active');
});

addLink.addEventListener('click', () => {
    aboutSection.classList.remove('active');
    addBookPage.classList.add('active');
    contactSection.classList.remove('active');
});

contactLink.addEventListener('click', () => {
  aboutSection.classList.remove('active');
  addBookPage.classList.remove('active');
  contactSection.classList.add('active');
});


