//const gameboard = document.querySelector('.board')
//let white = true



//for (let i = 1; i < 64; i++) {
 //   let square = document.createElement('div')
 //   square.classList.add('square')
 //   if (!white) {
 //       square.classList.add('black')
 //   }
//    white = !white
 //   if (i % 8 === 0) {
 //       white = !white
 //   }
 //   gameboard.appendChild(square)
//}

let board = document.getElementById("ChessBoard");
let map = [
  3, 5, 4, 2, 1, 4, 5, 3,
  6, 6, 6, 6, 6, 6, 6, 6,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,   
  12,12,12,12,12,12,12,12,
  9,11,10, 8, 7,10,11, 9,
];

for (let i=0; i< 64; i++){
  let tile = document.createElement("div");
  tile.style.backgroundColor = parseInt((i / 8) + i) % 2 == 0 ? 'white' : 'lightgray';
  tile.innerHTML = !map[i] ? "" : "&#"+ (9811+map[i]) +";";
  board.appendChild(tile);
}

