const gameboard = document.querySelector('.board')
let white = true

for (let i = 1; i < 64; i++) {
    let square = document.createElement('div')
    square.classList.add('square')
    if (!white) {
        square.classList.add('black')
    }
    white = !white
    if (i % 8 === 0) {
        white = !white
    }
    gameboard.appendChild(square)
}