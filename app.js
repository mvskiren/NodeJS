
const fs=require('fs');
const os=require('os');
console.log("hello");
fs.appendFileSync('greetings.txt', 'helloworld!');