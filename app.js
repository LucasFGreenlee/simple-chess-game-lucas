
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
  constructor(x, y, image, type) {
      this.x = x;
      this.y = y;
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

let main = {

  variables: {
    turn: 'w',
    selectedpiece: '',
    highlighted: [],
    pieces: {
      w_king: {
        position: '7',
        img: '&#9812;',
        captured: false,
        moved: false,
        type: 'w_king'

      },
      w_queen: {
        position: '8',
        img: '&#9813;',
        captured: false,
        moved: false,
        type: 'w_queen'
      },
      w_bishop1: {
        position: '10',
        img: '&#9815;',
        captured: false,
        moved: false,
        type: 'w_bishop'
      },
      w_bishop2: {
        position: '10',
        img: '&#9815;',
        captured: false,
        moved: false,
        type: 'w_bishop'
      },
      w_knight1: {
        position: '11',
        img: '&#9816;',
        captured: false,
        moved: false,
        type: 'w_knight'
      },
      w_knight2: {
        position: '11',
        img: '&#9816;',
        captured: false,
        moved: false,
        type: 'w_knight'
      },
      w_rook1: {
        position: '9',
        img: '&#9814;',
        captured: false,
        moved: false,
        type: 'w_rook'
      },
      w_rook2: {
        position: '9',
        img: '&#9814;',
        captured: false,
        moved: false,
        type: 'w_rook'
      },
      w_pawn1: {
        position: '12',
        img: '&#9817;',
        captured: false,
        type: 'w_pawn',
        moved: false
      },
      w_pawn2: {
        position: '12',
        img: '&#9817;',
        captured: false,
        type: 'w_pawn',
        moved: false
      },
      w_pawn3: {
        position: '12_3',
        img: '&#9817;',
        captured: false,
        type: 'w_pawn',
        moved: false
      },
      w_pawn4: {
        position: '12_4',
        img: '&#9817;',
        captured: false,
        type: 'w_pawn',
        moved: false
      },
      w_pawn5: {
        position: '12_5',
        img: '&#9817;',
        captured: false,
        type: 'w_pawn',
        moved: false
      },
      w_pawn6: {
        position: '12_6',
        img: '&#9817;',
        captured: false,
        type: 'w_pawn',
        moved: false
      },
      w_pawn7: {
        position: '12_7',
        img: '&#9817;',
        captured: false,
        type: 'w_pawn',
        moved: false
      },
      w_pawn8: {
        position: '12_8',
        img: '&#9817;',
        captured: false,
        type: 'w_pawn',
        moved: false
      },

      b_king: {
        position: '1',
        img: '&#9818;',
        captured: false,
        moved: false,
        type: 'b_king'
      },
      b_queen: {
        position: '2',
        img: '&#9819;',
        captured: false,
        moved: false,
        type: 'b_queen'
      },
      b_bishop1: {
        position: '4',
        img: '&#9821;',
        captured: false,
        moved: false,
        type: 'b_bishop'
      },
      b_bishop2: {
        position: '4',
        img: '&#9821;',
        captured: false,
        moved: false,
        type: 'b_bishop'
      },
      b_knight1: {
        position: '5',
        img: '&#9822;',
        captured: false,
        moved: false,
        type: 'b_knight'
      },
      b_knight2: {
        position: '5',
        img: '&#9822;',
        captured: false,
        moved: false,
        type: 'b_knight'
      },
      b_rook1: {
        position: '3',
        img: '&#9820;',
        captured: false,
        moved: false,
        type: 'b_rook'
      },
      b_rook2: {
        position: '3',
        img: '&#9820;',
        captured: false,
        moved: false,
        type: 'b_rook'
      },
      b_pawn1: {
        position: '6',
        img: '&#9823;',
        captured: false,
        type: 'b_pawn',
        moved: false
      },
      b_pawn2: {
        position: '6',
        img: '&#9823;',
        captured: false,
        type: 'b_pawn',
        moved: false
      },
      b_pawn3: {
        position: '6_3',
        img: '&#9823;',
        captured: false,
        type: 'b_pawn',
        moved: false
      },
      b_pawn4: {
        position: '6_4',
        img: '&#9823;',
        captured: false,
        type: 'b_pawn',
        moved: false
      },
      b_pawn5: {
        position: '6_5',
        img: '&#9823;',
        captured: false,
        type: 'b_pawn',
        moved: false
      },
      b_pawn6: {
        position: '6_6',
        img: '&#9823;',
        captured: false,
        type: 'b_pawn',
        moved: false
      },
      b_pawn7: {
        position: '6_7',
        img: '&#9823;',
        captured: false,
        type: 'b_pawn',
        moved: false
      },
      b_pawn8: {
        position: '6_8',
        img: '&#9823;',
        captured: false,
        type: 'b_pawn',
        moved: false
      }

    }
  },
}

let board = document.getElementById("ChessBoard");
//let bpawn1 = 


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
      tile.innerHTML = "&#" + (9823) + ";";
      break;
    case 12: // white pawns
      tile.innerHTML = "&#" + (9817) + ";";
      break;
    case 11:
      tile.innerHTML = "&#" + (9816) + ";";
      break;
    case 10:
      tile.innerHTML = "&#" + (9815) + ";";
      break;
    case 9:
      tile.innerHTML = "&#" + (9814) + ";";
      break;
    case 8:
      tile.innerHTML = "&#" + (9813) + ";";
      break;
    case 7:
      tile.innerHTML = "&#" + (9812) + ";";
      break;
    case 5:
      tile.innerHTML = "&#" + (9822) + ";";
      break;
    case 4:
      tile.innerHTML = "&#" + (9821) + ";";
      break;
    case 3:
      tile.innerHTML = "&#" + (9820) + ";";
      break;
    case 2:
      tile.innerHTML = "&#" + (9819) + ";";
      break;
    case 1:
      tile.innerHTML = "&#" + (9818) + ";";
      break;
    // add all pieces as case statements but dont delete default
    default:

      break;
  }
  board.appendChild(tile);
}

