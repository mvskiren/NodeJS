console.log("starting noteapp");
const fs=require('fs');

var addtitle=(title,body)=> {
var notes=[];
var note= {
   title,
   body
};

try{
   var checkfile=fs.readFileSync('noteappfile.json');
   notes=JSON.parse(checkfile);
}
catch (e)
{

}
var duplicatesNotes=notes.filter((note) => note.title===title);
if( duplicatesNotes.length===0 )
{
      notes.push(note);
      fs.writeFileSync('noteappfile.json',JSON.stringify(notes));
}
};





//module.exports helps to exports the function and variable values present in this file to accessed by other files 
module.exports =
{
   addtitle
};



























// var age='25';
// var add= (a,b) =>{
//    return a*b;
// };
// module.exports = 
// {
// add,age
// };