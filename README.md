A working chessboard created through vanilla JS:
    
Gameplay:

        Drag and Drop chessboard;
        use your cursor to pick up and place chess pieces

Installation:

        https://simple-chess-game007.netlify.app/
        or, Fork and Clone this REPO to your desktop

This app works as a realistic chessboard, allowing the user to drag and drop any piece anywhere they want on the board, as in real life. It is a two player game made through HTML CSS and Javascript. I found my best way to approach the project was to take everything one step at a time.

A piece of code I am proud of:

        addEventListener("dragstart", function () {})

        addEventListener("dragend", function () {})

        addEventListener("dragover", function (e) {
             e.preventDefault()})

        addEventListener("dragenter", function (e) {
           e.preventDefault()})

        addEventListener("dragleave", function () {})

        addEventListener("drop", function () {})

During this project, I learned how to implement drag and drop mechanics through javascript, as the last game was keyboard movement. I really wanted to learn a new kind of movement, so it was a lot of fun :p

Issues:

I ran into trouble creating rules for each piece's movement, and not taking pieces of your own color. I also ran into trouble displaying a winner, as I cannot have a checkmate without rules. I tried implementing a win factor on taking enemy king but also ran into some issues there. The last issue I had was with testing, I need more practice writing tests.

Plans:

I would like to add:

        -movement rules
        -seperate scores and/ or a graveyard
        -check/ checkmate
        -AI to play against
        -a timer for each player turn
        -cooler CSS