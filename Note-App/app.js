const fs=require('fs');
const os=require('os');
const _=require('lodash');

const user=os.userInfo();
const yargs=require('yargs');
const argv=yargs.argv;
var command=argv._[0];


const note=require('./noteapp.js');
console.log("hello");
console.log(_.isString("Kiran"));
console.log(command);
if(command=='list'){
    console.log("listing all commands");
}
else if(command=='add'){
    console.log("entererd")
   note.addtitle(argv.title,argv.body);

}
else{
    console.log("command not recognized");
}
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! Your are ${note.add(3,5)}.`);