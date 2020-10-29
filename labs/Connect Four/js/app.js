//will have properties for the spaces(will store circles in array)
class Grid {
    constructor(){
        this.spaces =  document.getElementsByClassName("b");
        this.playerWon = 0;
        this.winner = document.getElementById("Winner");
    }


    //checks for win condition 
    //will loop through each of the win conditions for
    //horizontal, vertical, and diagonal 
    win(){
        for( let x=0; x < this.spaces.length; x++){
            if (this.playerWon == 0){
                //checks vertical win condition in each row
                //will check to see first if a circle is within a certain column then will start 
                //from the bottom up and check if there are four in a row that are the same color 
                if(this.spaces[x].getAttribute("cx") == "75"){
                    for (let y = 5; y > 2; y--){
                        if ((this.spaces[y].getAttribute("selected") == "2") && (this.spaces[y-1].getAttribute("selected") == "2") && (this.spaces[y-2].getAttribute("selected") == "2") && (this.spaces[y-3].getAttribute("selected") == "2")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 1 has Won!</h2>";
                            this.stopPlace();
                        } else if ((this.spaces[y].getAttribute("selected") == "3") && (this.spaces[y-1].getAttribute("selected") == "3") && (this.spaces[y-2].getAttribute("selected") == "3") && (this.spaces[y-3].getAttribute("selected") == "3")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 2 has Won!</h2>";
                            this.stopPlace();
                        }
                    }
                }
                else if (this.spaces[x].getAttribute("cx") == "175"){
                    for (let y = 11; y > 8; y--){
                        if ((this.spaces[y].getAttribute("selected") == "2") && (this.spaces[y-1].getAttribute("selected") == "2") && (this.spaces[y-2].getAttribute("selected") == "2") && (this.spaces[y-3].getAttribute("selected") == "2")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 1 has Won!</h2>";
                            this.stopPlace();
                        } else if ((this.spaces[y].getAttribute("selected") == "3") && (this.spaces[y-1].getAttribute("selected") == "3") && (this.spaces[y-2].getAttribute("selected") == "3") && (this.spaces[y-3].getAttribute("selected") == "3")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 2 has Won!</h2>";
                            this.stopPlace();
                        }
                    }
                }
                else if (this.spaces[x].getAttribute("cx") == "275"){
                    for (let y = 17; y > 14; y--){
                        if ((this.spaces[y].getAttribute("selected") == "2") && (this.spaces[y-1].getAttribute("selected") == "2") && (this.spaces[y-2].getAttribute("selected") == "2") && (this.spaces[y-3].getAttribute("selected") == "2")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 1 has Won!</h2>";
                            this.stopPlace();
                        } else if ((this.spaces[y].getAttribute("selected") == "3") && (this.spaces[y-1].getAttribute("selected") == "3") && (this.spaces[y-2].getAttribute("selected") == "3") && (this.spaces[y-3].getAttribute("selected") == "3")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 2 has Won!</h2>";
                            this.stopPlace();
                        }
                    }
                }
                else if (this.spaces[x].getAttribute("cx") == "375"){
                    for (let y = 23; y > 20; y--){
                        if ((this.spaces[y].getAttribute("selected") == "2") && (this.spaces[y-1].getAttribute("selected") == "2") && (this.spaces[y-2].getAttribute("selected") == "2") && (this.spaces[y-3].getAttribute("selected") == "2")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 1 has Won!</h2>";
                            this.stopPlace();
                        } else if ((this.spaces[y].getAttribute("selected") == "3") && (this.spaces[y-1].getAttribute("selected") == "3") && (this.spaces[y-2].getAttribute("selected") == "3") && (this.spaces[y-3].getAttribute("selected") == "3")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 2 has Won!</h2>";
                            this.stopPlace();
                        }
                    }
                }
                else if (this.spaces[x].getAttribute("cx") == "475"){
                    for (let y = 29; y > 26; y--) {
                        if ((this.spaces[y].getAttribute("selected") == "2") && (this.spaces[y-1].getAttribute("selected") == "2") && (this.spaces[y-2].getAttribute("selected") == "2") && (this.spaces[y-3].getAttribute("selected") == "2")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 1 has Won!</h2>";
                            this.stopPlace();
                        } else if ((this.spaces[y].getAttribute("selected") == "3") && (this.spaces[y-1].getAttribute("selected") == "3") && (this.spaces[y-2].getAttribute("selected") == "3") && (this.spaces[y-3].getAttribute("selected") == "3")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 2 has Won!</h2>";
                            this.stopPlace();
                        }
                    }
                } 
                else if (this.spaces[x].getAttribute("cx") == "575"){
                    for (let y = 35; y > 32; y--){
                        if ((this.spaces[y].getAttribute("selected") == "2") && (this.spaces[y-1].getAttribute("selected") == "2") && (this.spaces[y-2].getAttribute("selected") == "2") && (this.spaces[y-3].getAttribute("selected") == "2")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 1 has Won!</h2>";
                            this.stopPlace();
                        } else if ((this.spaces[y].getAttribute("selected") == "3") && (this.spaces[y-1].getAttribute("selected") == "3") && (this.spaces[y-2].getAttribute("selected") == "3") && (this.spaces[y-3].getAttribute("selected") == "3")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 2 has Won!</h2>";
                            this.stopPlace();
                        }
                    }
                }
                else if (this.spaces[x].getAttribute("cx") == "675"){
                    for (let y = 41; y > 38; y--){
                        if ((this.spaces[y].getAttribute("selected") == "2") && (this.spaces[y-1].getAttribute("selected") == "2") && (this.spaces[y-2].getAttribute("selected") == "2") && (this.spaces[y-3].getAttribute("selected") == "2")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 1 has Won!</h2>";
                            this.stopPlace();
                        } else if ((this.spaces[y].getAttribute("selected") == "3") && (this.spaces[y-1].getAttribute("selected") == "3") && (this.spaces[y-2].getAttribute("selected") == "3") && (this.spaces[y-3].getAttribute("selected") == "3")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 2 has Won!</h2>";
                            this.stopPlace();
                        }
                    }
                }

                //check horizontal win condition 
                if(this.spaces[x].getAttribute("cx") == "75"){
                    for (let y = 5; y > -1; y--){
                        if ((this.spaces[y].getAttribute("selected") == "2") && (this.spaces[y+6].getAttribute("selected") == "2") && (this.spaces[y+12].getAttribute("selected") == "2") && (this.spaces[y+18].getAttribute("selected") == "2")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 1 has Won!</h2>";
                            this.stopPlace();
                        } else if ((this.spaces[y].getAttribute("selected") == "3") && (this.spaces[y+6].getAttribute("selected") == "3") && (this.spaces[y+12].getAttribute("selected") == "3") && (this.spaces[y+18].getAttribute("selected") == "3")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 2 has Won!</h2>";
                            this.stopPlace();
                        }
                    }
                }
                else if (this.spaces[x].getAttribute("cx") == "175"){
                    for (let y = 11; y > 5; y--){
                        if ((this.spaces[y].getAttribute("selected") == "2") && (this.spaces[y+6].getAttribute("selected") == "2") && (this.spaces[y+12].getAttribute("selected") == "2") && (this.spaces[y+18].getAttribute("selected") == "2")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 1 has Won!</h2>";
                            this.stopPlace();
                        } else if ((this.spaces[y].getAttribute("selected") == "3") && (this.spaces[y+6].getAttribute("selected") == "3") && (this.spaces[y+12].getAttribute("selected") == "3") && (this.spaces[y+18].getAttribute("selected") == "3")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 2 has Won!</h2>";
                            this.stopPlace();
                        }
                    }
                }
                else if (this.spaces[x].getAttribute("cx") == "275"){
                    for (let y = 17; y > 11; y--){
                        if ((this.spaces[y].getAttribute("selected") == "2") && (this.spaces[y+6].getAttribute("selected") == "2") && (this.spaces[y+12].getAttribute("selected") == "2") && (this.spaces[y+18].getAttribute("selected") == "2")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 1 has Won!</h2>";
                            this.stopPlace();
                        } else if ((this.spaces[y].getAttribute("selected") == "3") && (this.spaces[y+6].getAttribute("selected") == "3") && (this.spaces[y+12].getAttribute("selected") == "3") && (this.spaces[y+18].getAttribute("selected") == "3")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 2 has Won!</h2>";
                            this.stopPlace();
                        }
                    }
                }
                else if (this.spaces[x].getAttribute("cx") == "375"){
                    for (let y = 23; y > 17; y--){
                        if ((this.spaces[y].getAttribute("selected") == "2") && (this.spaces[y+6].getAttribute("selected") == "2") && (this.spaces[y+12].getAttribute("selected") == "2") && (this.spaces[y+18].getAttribute("selected") == "2")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 1 has Won!</h2>";
                            this.stopPlace();
                        } else if ((this.spaces[y].getAttribute("selected") == "3") && (this.spaces[y+6].getAttribute("selected") == "3") && (this.spaces[y+12].getAttribute("selected") == "3") && (this.spaces[y+18].getAttribute("selected") == "3")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 2 has Won!</h2>";
                            this.stopPlace();
                        }
                    }
                }

                //checks diagonal win condition upwards
                if(this.spaces[x].getAttribute("cx") == "75"){
                    for (let y = 5; y > 2; y--){
                        if ((this.spaces[y].getAttribute("selected") == "2") && (this.spaces[y+5].getAttribute("selected") == "2") && (this.spaces[y+10].getAttribute("selected") == "2") && (this.spaces[y+15].getAttribute("selected") == "2")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 1 has Won!</h2>";
                            this.stopPlace();
                        } else if ((this.spaces[y].getAttribute("selected") == "3") && (this.spaces[y+5].getAttribute("selected") == "3") && (this.spaces[y+10].getAttribute("selected") == "3") && (this.spaces[y+15].getAttribute("selected") == "3")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 2 has Won!</h2>";
                            this.stopPlace();
                        }
                    }
                }
                else if (this.spaces[x].getAttribute("cx") == "175"){
                    for (let y = 11; y > 8; y--){
                        if ((this.spaces[y].getAttribute("selected") == "2") && (this.spaces[y+5].getAttribute("selected") == "2") && (this.spaces[y+10].getAttribute("selected") == "2") && (this.spaces[y+15].getAttribute("selected") == "2")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 1 has Won!</h2>";
                            this.stopPlace();
                        } else if ((this.spaces[y].getAttribute("selected") == "3") && (this.spaces[y+5].getAttribute("selected") == "3") && (this.spaces[y+10].getAttribute("selected") == "3") && (this.spaces[y+15].getAttribute("selected") == "3")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 2 has Won!</h2>";
                            this.stopPlace();
                        }
                    }
                }
                else if (this.spaces[x].getAttribute("cx") == "275"){
                    for (let y = 17; y > 14; y--){
                        if ((this.spaces[y].getAttribute("selected") == "2") && (this.spaces[y+5].getAttribute("selected") == "2") && (this.spaces[y+10].getAttribute("selected") == "2") && (this.spaces[y+15].getAttribute("selected") == "2")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 1 has Won!</h2>";
                            this.stopPlace();
                        } else if ((this.spaces[y].getAttribute("selected") == "3") && (this.spaces[y+5].getAttribute("selected") == "3") && (this.spaces[y+10].getAttribute("selected") == "3") && (this.spaces[y+15].getAttribute("selected") == "3")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 2 has Won!</h2>";
                            this.stopPlace();
                        }
                    }
                }
                else if (this.spaces[x].getAttribute("cx") == "375"){
                    for (let y = 23; y > 20; y--){
                        if ((this.spaces[y].getAttribute("selected") == "2") && (this.spaces[y+5].getAttribute("selected") == "2") && (this.spaces[y+10].getAttribute("selected") == "2") && (this.spaces[y+15].getAttribute("selected") == "2")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 1 has Won!</h2>";
                            this.stopPlace();
                        } else if ((this.spaces[y].getAttribute("selected") == "3") && (this.spaces[y+5].getAttribute("selected") == "3") && (this.spaces[y+10].getAttribute("selected") == "3") && (this.spaces[y+15].getAttribute("selected") == "3")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 2 has Won!</h2>";
                            this.stopPlace();
                        }
                    }
                }

                //check diagonal win condition downwards
                if (this.spaces[x].getAttribute("cx") == "375"){
                    for (let y = 23; y > 20; y--){
                        if ((this.spaces[y].getAttribute("selected") == "2") && (this.spaces[y-7].getAttribute("selected") == "2") && (this.spaces[y-14].getAttribute("selected") == "2") && (this.spaces[y-21].getAttribute("selected") == "2")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 1 has Won!</h2>";
                            this.stopPlace();
                        } else if ((this.spaces[y].getAttribute("selected") == "3") && (this.spaces[y-7].getAttribute("selected") == "3") && (this.spaces[y-14].getAttribute("selected") == "3") && (this.spaces[y-21].getAttribute("selected") == "3")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 2 has Won!</h2>";
                            this.stopPlace();
                        }
                    }
                }
                else if (this.spaces[x].getAttribute("cx") == "475"){
                    for (let y = 29; y > 26; y--) {
                        if ((this.spaces[y].getAttribute("selected") == "2") && (this.spaces[y-7].getAttribute("selected") == "2") && (this.spaces[y-14].getAttribute("selected") == "2") && (this.spaces[y-21].getAttribute("selected") == "2")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 1 has Won!</h2>";
                            this.stopPlace();
                        } else if ((this.spaces[y].getAttribute("selected") == "3") && (this.spaces[y-7].getAttribute("selected") == "3") && (this.spaces[y-14].getAttribute("selected") == "3") && (this.spaces[y-21].getAttribute("selected") == "3")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 2 has Won!</h2>";
                            this.stopPlace();
                        }
                    }
                } 
                else if (this.spaces[x].getAttribute("cx") == "575"){
                    for (let y = 35; y > 32; y--){
                        if ((this.spaces[y].getAttribute("selected") == "2") && (this.spaces[y-7].getAttribute("selected") == "2") && (this.spaces[y-14].getAttribute("selected") == "2") && (this.spaces[y-21].getAttribute("selected") == "2")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 1 has Won!</h2>";
                            this.stopPlace();
                        } else if ((this.spaces[y].getAttribute("selected") == "3") && (this.spaces[y-7].getAttribute("selected") == "3") && (this.spaces[y-14].getAttribute("selected") == "3") && (this.spaces[y-21].getAttribute("selected") == "3")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 2 has Won!</h2>";
                            this.stopPlace();
                        }
                    }
                }
                else if (this.spaces[x].getAttribute("cx") == "675"){
                    for (let y = 41; y > 38; y--){
                        if ((this.spaces[y].getAttribute("selected") == "2") && (this.spaces[y-7].getAttribute("selected") == "2") && (this.spaces[y-14].getAttribute("selected") == "2") && (this.spaces[y-21].getAttribute("selected") == "2")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 1 has Won!</h2>";
                            this.stopPlace();
                        } else if ((this.spaces[y].getAttribute("selected") == "3") && (this.spaces[y-7].getAttribute("selected") == "3") && (this.spaces[y-14].getAttribute("selected") == "3") && (this.spaces[y-21].getAttribute("selected") == "3")){
                            this.playerWon = 1;
                            this.winner.innerHTML = "<h2>Player 2 has Won!</h2>";
                            this.stopPlace();
                        }
                    }
                }
            }
        }
    }
    
    //makes it so people can't keep placing after someone wins
    stopPlace(){
        for (let i=0; i<this.spaces.length; i++){
            this.spaces[i].removeEventListener("click", placePiece)
        }
    }
}

let grid = new Grid()
//will store who the players are, names, and color of piece they chose 
class Piece {
    constructor(){
        this.p1 = new Player("Bob", "#ad1403")
        this.p2 = new Player("John", "#f7df2a");
        this.turn = 1;
    }
    
    //placing the piece on the board
    place(event){
        if (event.target.getAttribute("cx") == "75") {
            for (let y = 5; y > -1; y--) {
                if (grid.spaces[y].getAttribute("selected") == "1") {
                    if (this.turn % 2 == 0) {
                        grid.spaces[y].style.fill = this.p2.color;
                        grid.spaces[y].setAttribute("selected", "3");
                        this.turn++;
                        grid.win();
                    } else {
                        grid.spaces[y].style.fill = this.p1.color;
                        grid.spaces[y].setAttribute("selected", "2");
                        this.turn++;
                        grid.win();
                    }
                    break;
                }
            }
        } else if (event.target.getAttribute("cx") == "175") {
            for (let y = 11; y > 5; y--) {
                if (grid.spaces[y].getAttribute("selected") == "1") {
                    if (this.turn % 2 == 0) {
                        grid.spaces[y].style.fill = this.p2.color;
                        grid.spaces[y].setAttribute("selected", "3");
                        this.turn++;
                        grid.win();
                    } else {
                        grid.spaces[y].style.fill = this.p1.color;
                        grid.spaces[y].setAttribute("selected", "2");
                        this.turn++;
                        grid.win();
                    }
                    break;
                }
            }
        } else if (event.target.getAttribute("cx") == "275") {
            for (let y = 17; y > 11; y--) {
                if (grid.spaces[y].getAttribute("selected") == "1") {
                    if (this.turn % 2 == 0) {
                        grid.spaces[y].style.fill = this.p2.color;
                        grid.spaces[y].setAttribute("selected", "3");
                        this.turn++;
                        grid.win();
                    } else {
                        grid.spaces[y].style.fill = this.p1.color;
                        grid.spaces[y].setAttribute("selected", "2");
                        this.turn++;
                        grid.win();
                    }
                    break;
                }
            }
        } else if (event.target.getAttribute("cx") == "375") {
            for (let y = 23; y > 17; y--) {
                if (grid.spaces[y].getAttribute("selected") == "1") {
                    if (this.turn % 2 == 0) {
                        grid.spaces[y].style.fill = this.p2.color;
                        grid.spaces[y].setAttribute("selected", "3");
                        this.turn++;
                        grid.win();
                    } else {
                        grid.spaces[y].style.fill = this.p1.color;
                        grid.spaces[y].setAttribute("selected", "2");
                        this.turn++;
                        grid.win();
                    }
                    break;
                }
            }
        } else if (event.target.getAttribute("cx") == "475") {
            for (let y = 29; y > 23; y--) {
                if (grid.spaces[y].getAttribute("selected") == "1") {
                    if (this.turn % 2 == 0) {
                        grid.spaces[y].style.fill = this.p2.color;
                        grid.spaces[y].setAttribute("selected", "3");
                        this.turn++;
                        grid.win();
                    } else {
                        grid.spaces[y].style.fill = this.p1.color;
                        grid.spaces[y].setAttribute("selected", "2");
                        this.turn++;
                        grid.win();
                    }
                    break;
                }
            }
        } else if (event.target.getAttribute("cx") == "575") {
            for (let y = 35; y > 29; y--) {
                if (grid.spaces[y].getAttribute("selected") == "1") {
                    if (this.turn % 2 == 0) {
                        grid.spaces[y].style.fill = this.p2.color;
                        grid.spaces[y].setAttribute("selected", "3");
                        this.turn++;
                        grid.win();
                    } else {
                        grid.spaces[y].style.fill = this.p1.color;
                        grid.spaces[y].setAttribute("selected", "2");
                        this.turn++;
                        grid.win();
                    }
                    break;
                }
            }
        } else if (event.target.getAttribute("cx") == "675") {
            for (let y = 41; y > 35; y--) {
                if (grid.spaces[y].getAttribute("selected") == "1") {
                    if (this.turn % 2 == 0) {
                        grid.spaces[y].style.fill = this.p2.color;
                        grid.spaces[y].setAttribute("selected", "3");
                        this.turn++;
                        grid.win();
                    } else {
                        grid.spaces[y].style.fill = this.p1.color;
                        grid.spaces[y].setAttribute("selected", "2");
                        this.turn++;
                        grid.win();
                    }
                    break;
                }
            }
        }
    }
}

//will have properties of the name of the player, color they choose for the piece, and will display who wins in top DIV 
class Player {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }

    // displayWinner(){

    // }
}

let piece = new Piece();

for(i=0; i < grid.spaces.length; i++){
    grid.spaces[i].addEventListener("click", placePiece);
}

function placePiece(event){
    piece.place(event);
}