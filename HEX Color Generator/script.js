const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", updateColor);

function getRandomColor(){
    const letters = "0123456789ABCDEF";
    let color = "#";
    for(let i=0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)];
        console.log(color);
    }
    return color;
}
function darkenColor(color, amount) {
    let usePound = false;

    if (color[0] === "#") {
        color = color.slice(1);
        usePound = true;
    }

    let num = parseInt(color, 16);

    let r = (num >> 16) - amount;
    let g = ((num >> 8) & 0x00FF) - amount;
    let b = (num & 0x0000FF) - amount;

    r = r < 0 ? 0 : r;
    g = g < 0 ? 0 : g;
    b = b < 0 ? 0 : b;

    let darkerColor = (usePound ? "#" : "") + (r << 16 | g << 8 | b).toString(16).padStart(6, '0').toUpperCase();
    
    return darkerColor;
}

function updateColor(){
    const colorBox = document.getElementById("color-box");
    const colorBox1 = document.getElementById("color-box1");
    const colorBox2 = document.getElementById("color-box2");
    const colorText = document.getElementById("colorText");
    const colorText1 = document.getElementById("colorText1");
    const colorText2 = document.getElementById("colorText2");



    const randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor;
    colorText.textContent = randomColor;
    
    colorBox1.style.backgroundColor = darkenColor(randomColor,32);
    colorText1.textContent = darkenColor(randomColor,32);
    colorBox2.style.backgroundColor = darkenColor(randomColor,64);
    colorText2.textContent = darkenColor(randomColor,64);
}