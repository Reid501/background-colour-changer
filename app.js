body = document.querySelector('body');
colourName = document.querySelector('h2');
button = document.querySelector('.button');

hexBreakdown = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

randomNumber = () => {
   return Math.floor(Math.random() * hexBreakdown.length);
}

button.addEventListener('click', () => {
    hex = '#'
    for (let i = 0; i < 6; i++){
        hex += hexBreakdown[randomNumber()];
    }
    body.style.backgroundColor = hex;
    colourName.innerHTML = hex;
    colourName.style.color = hex;
})
