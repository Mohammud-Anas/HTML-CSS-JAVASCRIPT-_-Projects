let inputBox = document. querySelector(" .display input");
let btn = document.getElementById("btn");
// let copy =document.querySelector(" #input img");


let passLength = 12;


const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase ="abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols ="!@#$%&*+?<>~-";
let password;

function generatePassword(){
    password ="";
    while(password.length<passLength){
        password += upperCase[Math.floor(Math.random()*upperCase.length)];
        password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
        password += numbers[Math.floor(Math.random()*numbers.length)];
        password += symbols[Math.floor(Math.random()*symbols.length)];
    }
     inputBox.value = password;

}
function copyPassword(){
    inputBox.select();
    document.execCommand("copy");
     
    alert("Password copied successfully");
    inputBox.value ="";

}