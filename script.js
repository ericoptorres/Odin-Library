let library = []

function Book(name, author, pages, haveRead) {
    this.name = name
    this.author = author
    this.pages = pages
    this.haveRead = haveRead
}

const bookOne = new Book('Harry Potter (1)', 'J.K. Rowling', 250, true)
const bookTwo = new Book('Askaban', 'J.K. Rowling', 250, true)


library.push(bookOne)
library.push(bookTwo)

let newTitle = document.querySelector('#title')
let newAuthor = document.querySelector('#author')
let newPages = document.querySelector('#pages')


function addBookToLibrary(){
    let title = newTitle.value
    let author = newAuthor.value
    let pages = newPages.value
    let haveRead = getReadValue()
    
    let newBook = new Book(title, author, pages, haveRead)
    library.push(newBook)
}


const board = document.querySelector('.board')

let display = () => library.map(book => {
    
    const card = document.createElement('div')

    const para = document.createElement('p')
    para.textContent = `${book.name} by ${book.author}.`
    card.appendChild(para)
    
    const pages = document.createElement('p')
    pages.textContent = `${book.pages} pages.`
    card.appendChild(pages)

    const haveRead = document.createElement('div')
    haveRead.textContent = book.haveRead
    card.appendChild(haveRead)

    card.classList.add('book')
    board.appendChild(card)
})

display()


const form = document.querySelector('form')
const buttons = document.querySelector('.buttons')
const btn = document.querySelector('button')


const hide = () => btn.addEventListener('click', function(){
    form.classList.toggle('hidden')
    buttons.classList.toggle('visible')
})

hide()

const submit = document.querySelector('.submit')
submit.addEventListener('click', function(e){
    e.preventDefault()
    addBookToLibrary()
    board.innerHTML = ''
    display()
    clearForm()
    form.classList.toggle('hidden')
    buttons.classList.toggle('visible')
})


const clearForm = () => {
    newTitle.value = ''
    newAuthor.value = ''
    newPages.value = ''
}

const getReadValue = () => {
    if(form.querySelector('input[name="read"]:checked').value == 'yes') return true;
    else return false;
  }



