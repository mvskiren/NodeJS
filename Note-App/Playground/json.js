//  // JSON.stringify() use case
// var obj ={
//  name: 'kiran'
// };
// var stringObj= JSON.stringify(obj);   // JSON.stringify() used to convert obj format to json string format -(server to client viceversa)
// console.log(typeof stringObj);
// console.log(stringObj);


// // JSON.parse() use case

// var person='{"name" :"kiran","age" :21}';  // JSON.parse() used to convert json string format to object format -(server to client viceversa)
// var originalperson=JSON.parse(person);
// console.log(originalperson);
// console.log(typeof originalperson);



// below code intends to make use of file system methods ReadfileSync and readfileSync(inorder to acess and r/w operation on files)

const fs=require('fs');
var originalemp={
    name: 'kiran',
    age : 20
}
var emp=JSON.stringify(originalemp);     
fs.writeFileSync('note.json', emp);        //fs.writeFileSync
var noteapp=fs.readFileSync('note.json');  //fs.readFileSync
var note=JSON.parse(noteapp);