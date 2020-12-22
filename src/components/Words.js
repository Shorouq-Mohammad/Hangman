const words = [
    {
        word: 'THIS',
        hint: 'the object that called (invoked) the function'
    },
    {
        word: 'DOM',
        hint: 'it is a representation of our HTML document'
    },
    {
        word: 'CALLBACK',
        hint: 'function that is passed to another function as a variable'
    },
    {
        word: 'SYNCHRONOUS',
        hint: 'code that executes one line at a time'
    },
    {
        word: 'CLOSURE',
        hint: 'inner function that has access to the outer (enclosing) function’s variables.'
    },
    {
        word: 'MODULE',
        hint: 'way to compartmentalize our code into separate, independent blocks'
    },
    {
        word: 'AGNOSTIC',
        hint: 'not dependent on any particular programming language.'
    },
    {
        word: 'API',
        hint: 'a set of protocols that defines how software components should interact'
    },
    {
        word: 'AJAX',
        hint: 'set of web development techniques we use to create asynchronous web apps'
    },
    {
        word: 'CLASS',
        hint: 'blueprint for how subsequent objects should be and behave.'
    },
    {
        word: 'STATIC',
        hint: 'available at the class-level'
    },
    {
        word: 'SINGLETON',
        hint: 'design pattern that restricts the instantiation of a class to one object'
    },
    {
        word: 'PROTOTYPE',
        hint: 'child object has a reference to all of its inherited methods through it'
    },
    {
        word: 'NODEJS',
        hint: 'JavaScript runtime environment'
    },
    {
        word: 'SERVER',
        hint: 'physical machine that serves data, files, images, videos, etc'
    },
    {
        word: 'CRUD',
        hint: 'get/post/put/delete'
    },
    {
        word: 'MIDDLEWARE',
        hint: 'functions that can run in the middle of our request-response cycle.'
    },
    {
        word: 'PROMISE',
        hint: 'object representing the eventual completion or failure of an asynchronous operation.'
    },
    {
        word: 'DATABASE',
        hint: 'a place to store data persistently'
    },
    {
        word: 'QUEUE',
        hint: 'FIFO'
    },
    {
        word: 'REACT',
        hint: 'JS library for building User Interfaces'
    },
    {
        word: 'DONE',
        hint: 'best activity in the kernel lessons'
    }
    
]

function randomWord(){
    return words[Math.floor(Math.random()*(words.length -1))]
} 

export default randomWord 
