const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const randomColorButton = document.getElementById('button');

function backgroundGen() {
    document.body.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value} )`
    document.querySelector('h3').textContent = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
}

function randomHexColor() {
    let hexColor = '';
    for (i=0; i<3; i++) {
        let randomHex = (Math.floor(Math.random()*256)).toString(16);
        if (randomHex.length === 1 ) {
        randomHex = "0" + randomHex;
        }
        hexColor = hexColor + randomHex;
    }
    return '#' + hexColor;
}

color1.addEventListener('input', backgroundGen);
color2.addEventListener('input',  backgroundGen);

randomColorButton.addEventListener('click', () => {
    color1.value = randomHexColor();
    color2.value = randomHexColor();
    backgroundGen();
})
