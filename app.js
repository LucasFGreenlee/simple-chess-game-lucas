
let map = [
  3, 5, 4, 2, 1, 4, 5, 3,
  6, 6, 6, 6, 6, 6, 6, 6,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  12, 12, 12, 12, 12, 12, 12, 12,
  9, 11, 10, 8, 7, 10, 11, 9,
];

class chessPiece {
  constructor(image, type) {
      this.image = image;
      this.type = type;
      this.captured = false;
      this.moved = false;
      this.draggable = true;

      this.render = function() {
          ctx.drawImage(this.x, this.y, this.image, this.type);
      }
  }
}

let board = document.getElementById("ChessBoard");
let bPawn = new chessPiece("&#" + 9823 + ";", 'bPawn')
let bKing = new chessPiece("&#" + 9818 + ";", 'bKing')
let bQueen = new chessPiece("&#" + 9819 + ";", 'bQueen')
let bBishop = new chessPiece("&#" + 9821 + ";", 'bBishop')
let bKnight = new chessPiece("&#" + 9822 + ";", 'bKnight')
let bRook = new chessPiece("&#" + 9820 + ";", 'bRook')
let wPawn = new chessPiece("&#" + 9817 + ";", 'wPawn')
let wKing = new chessPiece("&#" + 9812 + ";", 'wKing')
let wQueen = new chessPiece("&#" + 9813 + ";", 'wQueen')
let wBishop = new chessPiece("&#" + 9815 + ";", 'wBishop')
let wKnight = new chessPiece("&#" + 9816 + ";", 'wKnight')
let wRook = new chessPiece("&#" + 9814 + ";", 'wRook')


for (let i = 0; i < map.length; i++) {
  let tile = document.createElement("div");
  // setting tiles background color
  tile.style.backgroundColor = parseInt((i / 8) + i) % 2 == 0 ? 'white' : 'lightblue';
  // place pieces on the board
  // tile.innerHTML = !map[i] ? "" : "&#"+ (9811+map[i]) +";";
  switch (map[i]) {
    case 0:
      break;
    case 6: // black pawns
      bPawn.render()
      break;
    case 12: // white pawns
      wPawn.render()
      break;
    case 11: // white knights
      wKnight.render()
      break;
    case 10: // white bishops
      wBishop.render()
      break;
    case 9: // white rooks
      wRook.render()
      break;
    case 8: // white queen
      wQueen.render()
      break;
    case 7: // white king
     wKing.render()
      break;
    case 5: // black knights
      bKnight.render()
      break;
    case 4: // black bishops
      bBishop.render()
      break;
    case 3: // black rooks
      bRook.render()
      break;
    case 2: // black queen
      bQueen.render()
      break;
    case 1: // black king
      bKing.render()
      break;
    // add all pieces as case statements but dont delete default
    default:

      break;
  }
  board.appendChild(tile);
}

