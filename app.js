const ctx = game.getContext('2d');
game.setAttribute('height', getComputedStyle(game)['height']);
game.setAttribute('width', getComputedStyle(game)['width']);

const bBishop = document.getElementById('b-Bishop');
const bKnight = document.getElementById('b-Knight');
const bKing = document.getElementById('b-King');
const bPawn = document.getElementById('b-Pawn');
const bQueen = document.getElementById('b-Queen');
const bRook = document.getElementById('b-Rook');
const wBishop = document.getElementById('w-Bishop');
const wKnight = document.getElementById('w-Knight');
const wKing = document.getElementById('w-King');
const wPawn = document.getElementById('w-Pawn');
const wQueen = document.getElementById('w-Queen');
const wRook = document.getElementById('w-Rook');

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
let w_pawn1;
let w_pawn2;
let w_pawn3;
let w_pawn4;
let w_pawn5;
let w_pawn6;
let w_pawn7;
let w_pawn8;
let w_king;
let w_queen;
let w_bishop1;
let w_bishop2;
let w_knight1;
let w_knight2;
let w_rook1;
let w_rook2;

class ChessPiece {
  constructor(x, y, color, width, height) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.width = width;
      this.height = height;
      this.alive = true;

      this.render = function() {
          ctx.fillStyle = this.color;
          ctx.fillRect(this.x, this.y, this.width, this.height);
      }
  }
}

var center = document.createElement('center');

// Create a table element
var ChessTable = document.createElement('table');
for (var i = 0; i < 8; i++) {
  var tr = document.createElement('tr');
  for (var j = 0; j < 8; j++) {
    var td = document.createElement('td');
    if ((i + j) % 2 == 0) {
      td.setAttribute('class', 'cell whitecell');
      tr.appendChild(td);
    }
    else {
      td.setAttribute('class', 'cell blackcell');
      tr.appendChild(td);
    }
  }
  ChessTable.appendChild(tr);
}
center.appendChild(ChessTable);

ChessTable.setAttribute('cellspacing', '0');
ChessTable.setAttribute('width', '640px');
document.body.appendChild(center);

window.addEventListener('DOMContentLoaded', function () {

  b_pawn1 = new ChessPiece(40, 120, "b-Pawn", 35, 35)
  b_pawn2 = new ChessPiece(120, 120, "b-Pawn", 35, 35)
  b_pawn3 = new ChessPiece(200, 120, "b-Pawn", 35, 35)
  b_pawn4 = new ChessPiece(280, 120, "b-Pawn", 35, 35)
  b_pawn5 = new ChessPiece(360, 120, "b-Pawn", 35, 35)
  b_pawn6 = new ChessPiece(440, 120, "b-Pawn", 35, 35)
  b_pawn7 = new ChessPiece(520, 120, "b-Pawn", 35, 35)
  b_pawn8 = new ChessPiece(600, 120, "b-Pawn", 35, 35)
  b_king = new ChessPiece(80, 60, "b-King", 35, 35)
  b_queen = new ChessPiece(360, 60, "b-Queen", 35, 35)
  b_bishop1 = new ChessPiece(200, 60, "b-Bishop", 35, 35)
  b_bishop2 = new ChessPiece(440, 60, "b-Bishop", 35, 35)
  b_knight1 = new ChessPiece(120, 60, "b-Knight", 35, 35)
  b_knight2 = new ChessPiece(520, 60, "b-Knight", 35, 35)
  b_rook1 = new ChessPiece(40, 60, "b-Rook", 35, 35)
  b_rook2 = new ChessPiece(600, 60, "b-Rook", 35, 35)
  w_pawn1 = new ChessPiece(40, 520, "w-Pawn", 35, 35)
  w_pawn2 = new ChessPiece( 120, 520, "w-Pawn", 35, 35)
  w_pawn3 = new ChessPiece(200, 520,  "w-Pawn", 35, 35)
  w_pawn4 = new ChessPiece(280, 520, "w-Pawn", 35, 35)
  w_pawn5 = new ChessPiece(360, 520, "w-Pawn", 35, 35)
  w_pawn6 = new ChessPiece(440, 520, "w-Pawn", 35, 35)
  w_pawn7 = new ChessPiece(520, 520, "w-Pawn", 35, 35)
  w_pawn8 = new ChessPiece(600, 520, "w-Pawn", 35, 35)
  w_king = new ChessPiece(280, 600, "w-King", 35, 35)
  w_queen = new ChessPiece(360, 600, "w-Queen" , 35, 35)
  w_bishop1 = new ChessPiece(200, 600, "w-Bishop", 35, 35)
  w_bishop2 = new ChessPiece(440, 600, "w-Bishop", 35, 35)
  w_knight1 = new ChessPiece(120, 600, "w-Knight", 35, 35)
  w_knight2 = new ChessPiece(520, 600, "w-Knight", 35, 35)
  w_rook1 = new ChessPiece(40, 600, "w-Rook",  35, 35)
  w_rook2 = new ChessPiece(600, 600, "w-Rook",  35, 35)

  const runGame = setInterval(gameLoop, 10);
});

function gameLoop() {

    // clear the canvas
    ctx.clearRect(0, 0, game.width, game.height);
    if (ChessPiece.alive) {
  b_pawn1.render()
  b_pawn2.render()
  b_pawn3.render()
  b_pawn4.render()
  b_pawn5.render()
  b_pawn6.render()
  b_pawn7.render()
  b_pawn8.render()
  b_king.render()
  b_queen.render()
  b_bishop1.render()
  b_bishop2.render()
  b_knight1.render()
  b_knight2.render()
  b_rook1.render()
  b_rook2.render()
  w_pawn1.render()
  w_pawn2.render()
  w_pawn3.render()
  w_pawn4.render()
  w_pawn5.render()
  w_pawn6.render()
  w_pawn7.render()
  w_pawn8.render()
  w_king.render()
  w_queen.render()
  w_bishop1.render()
  w_bishop2.render()
  w_knight1.render()
  w_knight2.render()
  w_rook1.render()
  w_rook2.render()
}
}