// Import a fs module to work with a text file called data.txt
const {writeFile, readFile, appendFile} = require('fs')

// Write content to a data.txt file
const content = 'This is the first attempt'

writeFile('./data.txt', content, (err, data)=>{
    if(!err)
        console.log(data);
    if(err)
        console.log('Please try again later');
})

// Write a second content to data.txt

const contentSec = 'This is the second attempt'

writeFile('./data.txt', contentSec, (err, data)=>{
    if(!err)
        console.log(data);
    if(err)
        console.log('Please try again later');
})

// The second writeFile did override the first writeFile

// Append new content to data.txt

appendFile('./data.txt', 'Hello World 4', (err,data)=>{
    if(!err)
        console.log(data);
    if(err)
        console.log('Please try again later');
})

readFile('./data.txt', 'utf-8', (err,data)=>{
    if(!err)
        console.log(data);
    if(err)
        console.log('Please try again later');
})

// Question 2

const Person = require('./person')

const person1 = new Person('John', 'Doe', 'john@gmail.com')
const person2 = new Person('Matt', 'Mark', 'matt@gmail.com')
const person3 = new Person('Johnny', 'Matt', 'johnny@gmail.com')

console.log(person1);
console.log(person2);
console.log(person3);