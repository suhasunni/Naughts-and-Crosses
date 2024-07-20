
document.addEventListener("DOMContentLoaded", function(){
    main()
})


function main(){
    //Game Logic Variables
    var turn = true; //true = player 1's turn, false = player 2's turn
    var gameOver = false;
    var num_turns = 0;


    const player1_name = localStorage.getItem("player1"); 
    const player2_name = localStorage.getItem("player2");
    

    var p1_score = 0;
    var p2_score = 0;

    const x_image = "x.png";
    const o_image = "o.png";

    //turn label
    const lb_game_state = document.querySelector(".game-state");
    lb_game_state.textContent = `${player1_name}'s turn`;
    
    
    //group of square buttons
    const squares = document.querySelectorAll(".square");
    
    //event listener for each button
    squares.forEach(square =>{
        square.addEventListener("click", function(event){
            
            if (turn){
                square.innerHTML = "<img src=\"x.png\" class=\"image\">";
                square.setAttribute("data-status","X");
            }
            else{
                square.innerHTML = "<img src=\"o.png\" class=\"image\">";
                square.setAttribute("data-status","O");
            }
            
            num_turns++;

            gameOver = checkWinner(num_turns, squares);
            console.log(gameOver);

            if (gameOver==true){
                winScreen(turn, lb_game_state, player1_name, player2_name);
            } else {
                //change turn
                turn = !turn

                if (turn){
                    lb_game_state.textContent = `${player1_name}'s turn`;

                } else{
                    lb_game_state.textContent = `${player2_name}'s turn`;
                }
            }
        });
    });

    //reset game button
    const reset_button = document.querySelector(".reset-button");

    reset_button.addEventListener("click",function(event){
        
        index = 0;
    
        squares.forEach(function(square,index){
            
            //change button state to null
            square.dataset.status = index;
            index++;

            //remove button image\
            square.innerHTML = "";

        });






    });

}

function checkWinner(num_turns, squares){

    var board = [];

    //append status of each square to array
    squares.forEach(square => {
        board.push(square.getAttribute("data-status"));
    });

    if(checkThreeInARow(board[0],board[1],board[2]) || checkThreeInARow(board[3],board[4],board[5]) || checkThreeInARow(board[6],board[7],board[8]) //horizontal wins
    || checkThreeInARow(board[0],board[3],board[6]) || checkThreeInARow(board[1],board[4],board[7]) || checkThreeInARow(board[2],board[5],board[8]) //vertical wins
    || checkThreeInARow(board[0],board[4],board[8]) || checkThreeInARow(board[2],board[4],board[6]) //diagonal wins
    ){
        return true;
    }
    else if (num_turns == 9)
        return "draw";

}

function winScreen(turn, lb_game_state, player1_name, player2_name){
    if (turn){
        console.log("player 1 has won!");
        lb_game_state.textContent = `${player1_name} has won!`;
    }
    else if (!turn){
        console.log("player 2 has won!");
        lb_game_state.textContent = `${player2_name} has won!`;
    } 

}

function checkThreeInARow(a,b,c){
    if (a==b && b==c && a==c)
        return true;
    else
        return false; 
}



function resetBoard(turn, squares){

    
}


