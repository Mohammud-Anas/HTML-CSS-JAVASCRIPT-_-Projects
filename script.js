
let addBtn = document. querySelector('#header button');
let notes = document. querySelector('.notes');
const showNotes =()=>{
 notes.innerHTML= localStorage.getItem("data");
}
showNotes();
const saveNotes=()=>{
    localStorage.setItem("data",notes.innerHTML);
}
addBtn.addEventListener('click',()=>{
    let text =`<p id="content" contenteditable="true" spellcheck="false"> <img  src="./images/delete.png" style=":hover{cursor: pointer}"></p>`;
    notes.insertAdjacentHTML("afterbegin", text); 
    saveNotes();
})
 
notes.addEventListener("click", (e)=>{
 if(e.target.tagName=== "IMG"){
    e.target.parentNode.remove();
    saveNotes();
 } else if(e.target.tagName=== "P"){
     allNotes = document.querySelectorAll("#content");
     allNotes.forEach(ele => {
        ele.onkeyup= function(){
            saveNotes();
        }
     });
 }
})
notes.addEventListener("keydown",(event)=>{
    if(e.target.tagName==="P"){
        if(event.key ==="ENTER"){
       notes.execCommand("insertLineBreak");
       event.preventDefault();
        }
    }
    
})

