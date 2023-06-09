


const books = [
{ title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
isAvailable: true },
{ title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
isAvailable: false },
{ title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
1866, isAvailable: true },
{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
isAvailable: false },
{ title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
];


// Write a JavaScript program that performs the following tasks:
// 1. Create a function called getAvailableBooks that returns an array of all available
// books.

let getAvailableBooks=books.filter(function(book){
    return books
   
});
let m=getAvailableBooks.map(function(books){
    return books.title

})
console.log(m);


// 2. Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.

let getBooksByAuthor=books.filter(function(book){
    return books

})
let p=getBooksByAuthor=books.map(function(books){
    return books.author
})

console.log(p)



// 3. Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).
function addNewBook(book){
    let newBook={ title: 'The River and the source', author: 'Margaret Ogola', publicationYear: 1940,
    isAvailable: true }
    books.push(newBook)

}
console.log(newBook)


// 4. Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.
function checkoutBook(title){
    for(let i=0;i<books.length;i++){
        for(let i=0;i<books.length;i++){
            if(isAvailable==false){
                console.log("Book not found")
            }
            else{
                console.log("Book found")
            }
        }
    }
return books
}
console.log(title)

// 5. Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.

function returnBook(title){
    for(let i=0;i<books.length;i++){
        if(isAvailable==true){
            console.log("Book is found in the library")
        }
        else{
            console.log("Book not found in the library");
        }
    }
return books
}
console.log(title)
