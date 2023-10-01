let input=document.getElementById("input");
let listContainer=document.querySelector("ul"); 
let marked = false;
const addTask = ()=>{
if(input.value==""){
    alert("please enter something");
}
 else{
      
    let task = `<li id="list"><img id="markimg" src="./images/unchecked.png">${input.value}<span>&#215;</span></li>`
    listContainer.insertAdjacentHTML("afterbegin",task);
     
}
input.value="";
saveData();

}

listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "IMG"){ 
        if(marked===false){
            e.target.src="./images/checked.png" ; 
            marked=true;
            e.target.parentElement.style.textDecoration="line-through";
            saveData();


        }else if(marked===true) {
            e.target.src="./images/unchecked.png";
            marked=false;
            e.target.parentElement.style.textDecoration="none";
            saveData();
        }

    }else if(e.target.tagName === "SPAN"){
         e.target.parentElement.remove();
         saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();