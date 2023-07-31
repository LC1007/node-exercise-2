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