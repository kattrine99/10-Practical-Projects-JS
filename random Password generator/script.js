const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const passbox = document.getElementById("passbox");
const LowerCaseEl = document.getElementById("lowerCase"); 
const UperCaseEl = document.getElementById("upperCase"); 
const NumberEl = document.getElementById("numbers"); 
const SymbolsEl = document.getElementById("Symbols");
const GenerateBtn = document.getElementById("getBtn");

const copyIcon = document.getElementById("copyIcon");

const lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|\\;'\":,./?<>";

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input",()=>{
    sliderValue.textContent = inputSlider.value;
});

GenerateBtn.addEventListener("click",()=>{
    passbox.value = generatePassword();
});

function generatePassword(){
    const length = inputSlider.value;
    let characters = "";
    let password = "";

    characters += LowerCaseEl.checked ? lowercaseletters : "";
    characters += UperCaseEl.checked ? uppercaseletters : "";
    characters += NumberEl.checked ? numbers : "";
    characters += SymbolsEl.checked ? symbols : "";

    for(let i=0; i<length; i++){
        password += characters.charAt(Math.floor(Math.random()*characters.length));
        console.log(password);
    }

    return password;
}

copyIcon.addEventListener("click",()=>{
    if (passbox.value != "" || passbox.value.length >=10) {
        navigator.clipboard.writeText(passbox.value);
        copyIcon.innerText="check";

        setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";
        },1000);
    }
});