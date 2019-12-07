const fs=require('fs');
const os=require('os');
const _=require('lodash');
const user=os.userInfo();
const note=require('./noteapp.js');
console.log("hello");
console.log(_.isString("Kiran"));
fs.appendFileSync('greetings.txt', `Hello ${user.username}! Your are ${note.add(3,5)}.`);