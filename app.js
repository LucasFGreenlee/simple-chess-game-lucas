const ctx = game.getContext('2d');
game.setAttribute('height', getComputedStyle(game)['height']);
game.setAttribute('width', getComputedStyle(game)['width']);

const board = document.getElementById("ChessBoard");

let white = true

for (let i = 1; i < 64; i++) {
    let square = document.createElement('div')
    square.classList.add('square')
    if (!white) {
        square.classList.add('lightblue')
    }
    white = !white
    if (i % 8 === 0) {
        white = !white
    }
    board.appendChild(square)
}

let b_pawn1;
let b_pawn2;
let b_pawn3;
let b_pawn4;
let b_pawn5;
let b_pawn6;
let b_pawn7;
let b_pawn8;
let b_king;
let b_queen;
let b_bishop1;
let b_bishop2;
let b_knight1;
let b_knight2;
let b_rook1;
let b_rook2;
let w_pawn1 ;
let w_pawn2 ;
let w_pawn3 ;
let w_pawn4 ;
let w_pawn5 ;
let w_pawn6 ;
let w_pawn7 ;
let w_pawn8 ;
let w_king;
let w_queen;
let w_bishop1;
let w_bishop2;
let w_knight1;
let w_knight2;
let w_rook1;
let w_rook2;

class chessPiece {
  constructor(x, y, image, type, team) {
    this.x = x;
    this.y = y;
    this.image = image;
    this.type = type;
    this.team = team;
    this.captured = false;
    this.moved = false;
    this.draggable = true;

    this.render = function () {
      ctx.drawImage(this.x, this.y, this.image, this.type, this.team);
    }
  }
}

let pieces = [
  new chessPiece('x', 'y', "&#" + 9823 + ";", 'Pawn', 'Black'),
  new chessPiece('x', 'y', "&#" + 9823 + ";", 'Pawn', 'Black'),
  new chessPiece('x', 'y', "&#" + 9823 + ";", 'Pawn', 'Black'),
  new chessPiece('x', 'y', "&#" + 9823 + ";", 'Pawn', 'Black'),
  new chessPiece('x', 'y', "&#" + 9823 + ";", 'Pawn', 'Black'),
  new chessPiece('x', 'y', "&#" + 9823 + ";", 'Pawn', 'Black'),
  new chessPiece('x', 'y', "&#" + 9823 + ";", 'Pawn', 'Black'),
  new chessPiece('x', 'y', "&#" + 9823 + ";", 'Pawn', 'Black'),
  new chessPiece('x', 'y', "&#" + 9818 + ";", 'King', 'Black'),
  new chessPiece('x', 'y', "&#" + 9819 + ";", 'Queen', 'Black'),
  new chessPiece('x', 'y', "&#" + 9821 + ";", 'Bishop', 'Black'),
  new chessPiece('x', 'y', "&#" + 9821 + ";", 'Bishop', 'Black'),
  new chessPiece('x', 'y', "&#" + 9822 + ";", 'Knight', 'Black'),
  new chessPiece('x', 'y', "&#" + 9822 + ";", 'Knight', 'Black'),
  new chessPiece('x', 'y', "&#" + 9820 + ";", 'Rook', 'Black'),
  new chessPiece('x', 'y', "&#" + 9820 + ";", 'Rook', 'Black'),
  new chessPiece('x', 'y', "&#" + 9817 + ";", 'Pawn', 'White'),
  new chessPiece('x', 'y', "&#" + 9817 + ";", 'Pawn', 'White'),
  new chessPiece('x', 'y', "&#" + 9817 + ";", 'Pawn', 'White'),
  new chessPiece('x', 'y', "&#" + 9817 + ";", 'Pawn', 'White'),
  new chessPiece('x', 'y', "&#" + 9817 + ";", 'Pawn', 'White'),
  new chessPiece('x', 'y', "&#" + 9817 + ";", 'Pawn', 'White'),
  new chessPiece('x', 'y', "&#" + 9817 + ";", 'Pawn', 'White'),
  new chessPiece('x', 'y', "&#" + 9817 + ";", 'Pawn', 'White'),
  new chessPiece('x', 'y', "&#" + 9812 + ";", 'King', 'White'),
  new chessPiece('x', 'y', "&#" + 9813 + ";", 'Queen', 'White'),
  new chessPiece('x', 'y', "&#" + 9815 + ";", 'Bishop', 'White'),
  new chessPiece('x', 'y', "&#" + 9815 + ";", 'Bishop', 'White'),
  new chessPiece('x', 'y', "&#" + 9816 + ";", 'Knight', 'White'),
  new chessPiece('x', 'y', "&#" + 9816 + ";", 'Knight', 'White'),
  new chessPiece('x', 'y', "&#" + 9814 + ";", 'Rook', 'White'),
  new chessPiece('x', 'y', "&#" + 9814 + ";", 'Rook', 'White')]

for (let i = 0; i < map.length; i++) {
  let tile = document.createElement("div");
  // setting tiles background color
  tile.style.backgroundColor = parseInt((i / 8) + i) % 2 == 0 ? 'white' : 'lightblue';
  // place pieces on the board
  // tile.innerHTML = !map[i] ? "" : "&#"+ (9811+map[i]) +";";

  board.appendChild(tile);
}

