//Starting the game
function startGame(){
    for(var i = 1; i <= 9; i++){
        clearBox(i);
    }

    document.turn = 'X'
    document.winner = null;
    setMessage(document.turn + " get's to start.");
}
 
//Set message such as winner, tie game or click on empty box
function setMessage(msg){
    document.getElementById("message").innerText = msg;
}

//Check the next move
function nextMove(square){
    if(document.winner != null){
        setMessage(document.turn + " already won.");
    } else if(checkTie() == 9){
        setMessage("It is already a Tie!");
    }else if(square.innerText == ''){
        square.innerText = document.turn;
        switchTurn();
    } else{
        setMessage("Pick another square.");
    }
}

//Switch turn between player 'X' and play 'O'
function switchTurn(){
    if(checkForWinner(document.turn)){
        setMessage("Congrats " + document.turn + ", you won!")
        document.winner = document.turn;
    } else if(document.turn == 'X'){
        document.turn = 'O';
        setMessage("It's " + document.turn + "'s turn.");
        if(checkTie() == 9)
            setMessage("It is a Tie!");
    } else{
        document.turn = 'X';
        setMessage("It's " + document.turn + "'s turn.");
        if(checkTie() == 9)
            setMessage("It is a Tie!");
    }
}

//Check whether there is any of this move on the current grid to win the game
function checkForWinner(move){
    var result = false;
    if(checkRow(1,2,3, move)||
        checkRow(4,5,6, move)||
        checkRow(7,8,9, move)||
        checkRow(1,4,7, move)||
        checkRow(2,5,8, move)||
        checkRow(3,6,9, move)||
        checkRow(1,5,9, move)||
        checkRow(3,5,7, move)){
            result = true;
    }
    return result;
}

//Check each of the row whether there is any same row
function checkRow(a, b, c, move){
    var result = false;
    if(getBox(a) == move && getBox(b) == move && getBox(c) == move){
        result = true;
    }
    return result;
}

//Get the grid box id number
function getBox(number){
    return document.getElementById("s" + number).innerText;
}

//Clear the grid box text to empty
function clearBox(number){
    document.getElementById("s" + number).innerText = "";
}

//Check whether the game is tie
function checkTie(){
    var count = 0;
    for(var i = 1; i <= 9; i++){
        if(document.getElementById("s" + i).innerText != ""){
            count++;
        }
    }
    return count;
}
