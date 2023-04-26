let library = []

function Book(name, author, pages, haveRead) {
    this.name = name
    this.author = author
    this.pages = pages
    this.haveRead = haveRead
}


const bookOne = new Book('Harry Potter (1)', 'J.K. Rowling', 223, true)
const bookTwo = new Book('A Game of Thrones', 'George R. R. Martin', 694, true)


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

let display = () => {
    library.forEach((book, index)  => {
            const card = document.createElement('div')

            const button = document.createElement('button')
            button.classList.add('remove-button')
            button.textContent = 'X'
            button.addEventListener('click', function(){
                removeCard(index)
                display()
            })
            card.appendChild(button)

            const para = document.createElement('p')
            para.textContent = `${book.name} by ${book.author}.`
            card.appendChild(para)
            
            const pages = document.createElement('p')
            pages.textContent = `${book.pages} pages.`
            card.appendChild(pages)

 

            card.classList.add('book')

            
            const newDiv = document.createElement('div')
            const newPara = document.createElement('p')
            newPara.textContent = 'Read status:'
            const changeButton = document.createElement('button')
            changeButton.classList.add('change-button')
            changeButton.addEventListener('click', function(){
                changeReadStatus(index)
                display()
            })
            if(book.haveRead == true){
                changeButton.style = 'background-color: green'
            }
            else{
                changeButton.style = 'background-color: red'
            }

            newDiv.appendChild(newPara)
            newDiv.appendChild(changeButton)

            card.appendChild(newDiv)
            

            board.appendChild(card)
        }
    )
    
}

display()


const form = document.querySelector('form')
const buttons = document.querySelector('.buttons')
const addButton = document.querySelector('.add-button')


const hide = () => addButton.addEventListener('click', function(){
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




 function removeCard(index){
    library.splice(index, 1)
    board.innerHTML = ''
    
 }
   
function changeReadStatus(index){
    if (library[index].haveRead == true){
        library[index].haveRead = false
    }
    else{
        library[index].haveRead = true
    }
    board.innerHTML = ''
}

