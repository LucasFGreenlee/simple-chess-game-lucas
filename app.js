const boardArray = []; 
let pieceBeingMoved;
let whiteScore = 0;
let blackScore = 0;
const score = document.getElementById('score');

// defines the color of each square
function squareColor(e, i) {
  if ((i >= 0 && i <= 7) || (i >= 16 && i <= 23) || (i >= 32 && i <= 39) || (i >= 48 && i <= 55)) {
    return i % 2 === 0 ? e.style.backgroundColor = "white" : e.style.backgroundColor = "lightblue";
  }
  if ((i >= 8 && i <= 15) || (i >= 24 && i <= 31) || (i >= 40 && i <= 47) || (i >= 56 && i <= 63)) {
    return i % 2 !== 0 ? e.style.backgroundColor = "white" : e.style.backgroundColor = "lightblue";
  }
}

// puts squares onto the board
function renderSquares() {
  let numOfSquares = 0;
  const ChessBoard = document.querySelector(".ChessBoard")
  while (numOfSquares < 64) {
    const chessSquare = document.createElement("div")
    chessSquare.classList.add("chessSquare")
    boardArray.push(chessSquare)
    numOfSquares += 1;
  }
  boardArray.forEach((e, i) => {
    squareColor(e, i)
    })
  boardArray.forEach((e) => {
    return ChessBoard.append(e)
  }) 
  return true
}

renderSquares()

// creates div's for each piece
function createPieces(boardArray) {
  let pieces = 0
  const whitePieces = []
  const blackPieces = []
  while (pieces < 16) {
    const whitePiece = document.createElement("div")
    whitePiece.classList.add("whitePiece")
    whitePiece.setAttribute("draggable", "true")
    whitePiece.setAttribute('color', 'white')
    whitePieces.push(whitePiece)
    const blackPiece = document.createElement("div")
    blackPiece.classList.add("blackPiece")
    blackPiece.setAttribute("draggable", "true")
    blackPiece.setAttribute("color", 'black')
    blackPieces.push(blackPiece)
    pieces += 1
  }
  determineChessPieceById(whitePieces, blackPieces)
  renderPieces(whitePieces, blackPieces, boardArray)
  moveWhitePieces(whitePieces, boardArray)
  moveBlackPieces(blackPieces, boardArray)
 
}

createPieces(boardArray)



// assigns each piece a ID
function determineChessPieceById(whitePieces, blackPieces) {
  whitePieces.map((e, i) => {
    switch (true) {
      case i < 8: return e.setAttribute("id", "pawn" + (i + 1))
      break;
      case i === 8: return e.setAttribute("id", "rook" + (i + 1))
      break;
      case i === 9: return e.setAttribute("id", "knight" + (i + 1))
      break;
      case i === 10: return e.setAttribute("id", "bishop" + (i + 1))
      break;
      case i === 11: return e.setAttribute("id", "queenWhite")
      break;
      case i === 12: return e.setAttribute("id", "kingWhite")
      break;
      case i === 13: return e.setAttribute("id", "bishop" + (i + 1))
      break;
      case i === 14: return e.setAttribute("id", "knight" + (i + 1))
      break;
      case i === 15: return e.setAttribute("id", "rook" + (i + 1))
      break;
    }
  })
  blackPieces.map((e, i) => {
    switch (true) {
      case i === 0: return e.setAttribute("id", "rook" + (i + 1))
      break;
      case i === 1: return e.setAttribute("id", "knight" + (i + 1))
      break;
      case i === 2: return e.setAttribute("id", "bishop" + (i + 1))
      break;
      case i === 3: return e.setAttribute("id", "queenBlack")
      break;
      case i === 4: return e.setAttribute("id", "kingBlack")
      break;
      case i === 5: return e.setAttribute("id", "bishop" + (i + 1))
      break;
      case i === 6: return e.setAttribute("id", "knight" + (i + 1))
      break;
      case i === 7: return e.setAttribute("id", "rook" + (i + 1))
      break;
      case i > 7: return e.setAttribute("id", "pawn" + (i + 1))
    }
  })
}



// renders pieces onto the board
function renderPieces(whitePieces, blackPieces, boardArray) {
  boardArray.slice(0, 16).forEach((square, i) => {
    square.append(blackPieces[i])
  })
  boardArray.slice(48).forEach((square, i) => {
    square.append(whitePieces[i])
  })
}

// moves white pieces -- credit to https://www.youtube.com/watch?v=C22hQKE_32c for the drag and drop
function moveWhitePieces(whitePieces, boardArray) {
  whitePieces.map((piece) => {
    piece.addEventListener("dragstart", function () {
      pieceBeingMoved = piece
    })
    piece.addEventListener("dragend", function () {
    })
  })
  boardArray.forEach((square) => {
    square.addEventListener("dragover", function (e) {
      e.preventDefault()
    })
    square.addEventListener("dragenter", function (e) {
      e.preventDefault()
  
    })
    square.addEventListener("dragleave", function () {
      square.className = "chessSquare"
    })
    square.addEventListener("drop", function (e) {
      if (!square.children[0]) {
        square.append(pieceBeingMoved)
        square.className = "chessSquare"
      } else if (square.children[0]) {
        square.removeChild(square.children[0])
        square.append(pieceBeingMoved)
        square.className = "chessSquare"
      }
    })
  })
}
// moves black pieces -- credit to https://www.youtube.com/watch?v=C22hQKE_32c for the drag and drop
function moveBlackPieces(blackPieces, boardArray) {
  blackPieces.map((piece) => {
    piece.addEventListener("dragstart", function () {
      pieceBeingMoved = piece
    })
    piece.addEventListener("dragend", function () {
    })
  })
  boardArray.forEach((square) => {
    square.addEventListener("dragover", function (e) {
      e.preventDefault()
      console.log('drag over')
    })
    square.addEventListener("dragenter", function (e) {
      e.preventDefault()
      console.log('drag enter')
    })
    square.addEventListener("dragleave", function () {
      console.log('drag leave')
    })
    square.addEventListener("drop", function (e) {
      console.log(e.target.className)
      if (e.target.className === 'chessSquare') {
        console.log('normal move')
      } else {
        if (pieceBeingMoved.className !== e.target.className) {
          console.log('take enemy')
          let newScore = Number(score.textContent) + 1;
        score.textContent = newScore;
          console.log('score', blackScore);
        } else {
          console.log('illegal move')
        }
      }
    /*  if (!square.children[0]) {
        square.append(pieceBeingMoved)
        console.log('drop')
      } else if (square.children[0]) {
        square.removeChild(square.children[0])
        square.append(pieceBeingMoved)
        square.className = "chessSquare"
        console.log('drop')
      } */
    })
  })
}

