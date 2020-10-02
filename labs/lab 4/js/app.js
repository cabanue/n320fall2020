//uncommented code is current interactivity of svg
//changing colors of circles will be used later for indicating who placed 
let circles = document.getElementsByClassName("b")

for(i=0; i < circles.length; i++){
    circles[i].addEventListener("click", placePiece);
}

function placePiece(event){
    event.target.style.fill = "#ad1403";
}

//#ad1403 color for player two: red
//#f7df2a color for player two: yellow

// //will have properties for the spaces(will store circles in array)
// class Grid {


//     //checks for win condition 
//     lines(){

//     }

//     //will clear the spaces to be able to play again 
//     clear(){

//     }
// }
// //will store who the players are, names, and color of piece they chose 
// class Piece {
    
//     //placing the piece on the board
//     place(){

//     }

//     //resets to have new players and change colors for pieces 
//     reset(){

//     }
// }

//store 2 players in an array 

// //will have properties of the name of the player, color they choose for the piece, and will display who wins in top DIV 
// class Player {

// }
