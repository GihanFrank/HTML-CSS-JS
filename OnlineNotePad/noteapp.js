var titlesT;
var titles=new Array();
var textBody= new Array();
var temp1=document.getElementById('noteTitle').addEventListener('keyup', tempSave);
function tempSave(e){
    titlesT=e.target.value;
    console.log(titlesT);
}
var form=document.getElementById('addNote').addEventListener('submit',textSaver);
function textSaver(e){
    titles[e]=titlesT;
    e.preventDefault();

}




// var textInput=document.getElementById('noteBody');
// textInput.addEventListener('keyup', userText);
// function userText(e){
// textBody[e]=e.target.value;
//     console.log(textBody); 
// }
console.log(titlesT);
console.log(titles)