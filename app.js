const fs=require('fs');
const os=require('os');
const _=require('lodash');
const yargs=require('yargs');
const user=os.userInfo();
const command=process.argv[2];
const note=require('./noteapp.js');
console.log("hello");
console.log(_.isString("Kiran"));
console.log(command);
if(command=='list'){
    console.log("listing all commands");
}
else if(command=='add'){
    console.log("kisting all commands");
}
else{
    console.log("command not recognized");
}
fs.appendFileSync('greetings.txt', `Hello ${user.username}! Your are ${note.add(3,5)}.`);