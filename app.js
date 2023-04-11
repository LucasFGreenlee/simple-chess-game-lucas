const ctx = game.getContext('2d');
game.setAttribute('height', getComputedStyle(game)['height']);
game.setAttribute('width', getComputedStyle(game)['width']);

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
  constructor(image, width, height, x, y, type, team,) {
    this.image = image;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.type = type;
    this.team = team;
    this.captured = false;
    this.moved = false;
    this.draggable = true;

    this.render = function () {
      ctx.drawImage(this.image, this.width, this.height, this.x, this.y, this.type, this.team);
     
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

  b_pawn1 = new ChessPiece("img/blackPawn.png", 35, 35,  40, 120, 'Pawn', 'Black')
  b_pawn2 = new ChessPiece("img/blackPawn.png", 35, 35, 120, 120, 'Pawn', 'Black')
  b_pawn3 = new ChessPiece("img/blackPawn.png", 35, 35, 200, 120, 'Pawn', 'Black')
  b_pawn4 = new ChessPiece("img/blackPawn.png", 35, 35, 280, 120, 'Pawn', 'Black')
  b_pawn5 = new ChessPiece("img/blackPawn.png", 35, 35, 360, 120, 'Pawn', 'Black')
  b_pawn6 = new ChessPiece("img/blackPawn.png", 35, 35, 440, 120, 'Pawn', 'Black')
  b_pawn7 = new ChessPiece("img/blackPawn.png", 35, 35, 520, 120, 'Pawn', 'Black')
  b_pawn8 = new ChessPiece("img/blackPawn.png", 35, 35, 600, 120, 'Pawn', 'Black')
  b_king = new ChessPiece( 'img/blackKing.png', 35, 35, 280, 60, 'King', 'Black')
  b_queen = new ChessPiece('img/blackQueen.png', 35, 35, 360, 60, 'Queen', 'Black')
  b_bishop1 = new ChessPiece("img/blackBishop.png" ,35, 35, 200, 60,'Bishop', 'Black')
  b_bishop2 = new ChessPiece("img/blackBishop.png" ,35, 35, 440, 60, 'Bishop', 'Black')
  b_knight1 = new ChessPiece("img/blackHorse.png" ,35, 35, 120, 60, 'Knight', 'Black')
  b_knight2 = new ChessPiece("img/blackHorse.png" ,35, 35, 520, 60, 'Knight', 'Black')
  b_rook1 = new ChessPiece("img/blackRook.png" ,35, 35, 40, 60, 'Rook', 'Black')
  b_rook2 = new ChessPiece("img/blackRook.png" ,35, 35, 600, 60, 'Rook', 'Black')
  w_pawn1 = new ChessPiece("img/whitePawn.png" ,35, 35, 40, 520, 'Pawn', 'White')
  w_pawn2 = new ChessPiece("img/whitePawn.png" ,35, 35, 120, 520, 'Pawn', 'White')
  w_pawn3 = new ChessPiece("img/whitePawn.png" ,35, 35, 200, 520, 'Pawn', 'White')
  w_pawn4 = new ChessPiece("img/whitePawn.png" ,35, 35, 280, 520, 'Pawn', 'White')
  w_pawn5 = new ChessPiece("img/whitePawn.png" ,35, 35, 360, 520, 'Pawn', 'White')
  w_pawn6 = new ChessPiece("img/whitePawn.png", 35, 35, 440, 520, 'Pawn', 'White')
  w_pawn7 = new ChessPiece("img/whitePawn.png" ,35, 35, 520, 520, 'Pawn', 'White')
  w_pawn8 = new ChessPiece("img/whitePawn.png" ,35, 35, 600, 520, 'Pawn', 'White')
  w_king = new ChessPiece("img/whiteKing.png" ,35, 35, 280, 600, 'King', 'White')
  w_queen = new ChessPiece("img/whiteQueen.png" ,35, 35, 360, 600, 'Queen', 'White')
  w_bishop1 = new ChessPiece("img/whiteBishop.png" ,35, 35, 200, 600, 'Bishop', 'White')
  w_bishop2 = new ChessPiece("img/whiteBishop.png" ,35, 35, 440, 600, 'Bishop', 'White')
  w_knight1 = new ChessPiece("img/whiteHorse.png" ,35, 35, 120, 600, 'Knight', 'White')
  w_knight2 = new ChessPiece("img/whiteHorse.png" ,35, 35, 520, 600, 'Knight', 'White')
  w_rook1 = new ChessPiece("img/whiteRook.png" ,35, 35, 40, 600, 'Rook', 'White')
  w_rook2 = new ChessPiece("img/whiteRook.png" ,35, 35, 600, 600, 'Rook', 'White')

  const runGame = setInterval(gameLoop, 10);
});

function gameLoop() {
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