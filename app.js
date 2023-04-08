const ctx = game.getContext('2d');
game.setAttribute('height', getComputedStyle(game)['height']);
game.setAttribute('width', getComputedStyle(game)['width']);

var center = document.createElement('center');
  
// Create a table element
var ChessTable = document.createElement('table');
for (var i = 0; i < 8; i++) {
  
    // Create a row
    var tr = document.createElement('tr');
    for (var j = 0; j < 8; j++) {
  
        // Create a cell
        var td = document.createElement('td');
  
        // If the sum of cell coordinates is even
        // then color the cell white
        if ((i + j) % 2 == 0) {
  
            // Create a class attribute for all white cells
            td.setAttribute('class', 'cell whitecell');
            tr.appendChild(td);
        }
  
        // If the sum of cell coordinates is odd then
        // color the cell black
        else {
  
            // Create a class attribute for all black cells
            td.setAttribute('class', 'cell blackcell');
  
            // Append the cell to its row
            tr.appendChild(td);
        }
    }
  
    // Append the row
    ChessTable.appendChild(tr);
}
center.appendChild(ChessTable);
  
// Modifying table attribute properties
ChessTable.setAttribute('cellspacing', '0');
ChessTable.setAttribute('width', '640px');
document.body.appendChild(center);

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


