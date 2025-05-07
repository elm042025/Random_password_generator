const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = "";
let password2 = "";
let passwordLength = 10;
let password1El = document.getElementById("password1");
let password2El = document.getElementById("password2");
let generateBtn = document.getElementById("generate-btn");

function toggleTheme(){
   document.body.classList.toggle("dark-mode");
}


function newPassword() {
    let password1 = "";
    let password2 = "";
    for (let i = 0; i < passwordLength; i++) {
        password1 += characters[Math.floor(Math.random() * characters.length)];
        password2 += characters[Math.floor(Math.random() * characters.length)];       
    }
    password1El.value = password1;
    password2El.value = password2;
}
window.onload = function () {
  password1El.value = "";
  password2El.value = "";
};

