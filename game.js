/* Javascript Code of the Maze Game */

// Calling the javascript code from the html file 
window.onload = function () {
    
    // Declaring the variable status + changing the element's content & color
    let status = document.getElementById("status")
    status.innerHTML="Begin by clicking the letter S <br/> Your score is 0 / If you win you get 5 pts / If you lose you get -10 pts"
    status.style.color="red"
    
    // Declaring the variable boundary
    let boundary=document.getElementsByClassName("boundary")

    // Declaring the variable win
    let win = document.getElementById("end")

    // Declaring the variable start
    let start = document.getElementById("start")
    
    
    // Declaring the variable score to track the user score during the game (win ==> +5 / lose ==> -10)
    let score = 0

    // Declaring the variable restart_game to accomplish all conditions upon restarting the game
    let refresh_game = "off"  
    
    // Upon clicking on letter S, the game started by calling the startGame function
    start.onclick = function() {startGame()}

    // Entry to startGame function
    function startGame () {

        // If condition that refreshes the game from zero
        if(refresh_game=="on"){

            // For loop to iterate and get all the divs element inside the maze boundary (walls) and rechange their background color to the initial one "grey"
            for (var i = 0; i < boundary.length-1 ; i++){    
                boundary[i].style.backgroundColor = "grey"; 
            }
            // A message appears saying that the user may start playing again upon clicking the letter S
            // The variable refresh_game is equal to "off" in order to skip the refresh if condition
            status.innerHTML="You must click on letter S to start playing <br/> Your score is 0" 
            refresh_game="off"
            // Upon clicking the letter S, the function startGame is called but now the refresh game condition is false so the else part will occur 
            start.onclick = function() {startGame()} 
        }

        // If the refresh_game is not equal to "on", the game will start
        else{

            // Declaring the variable loser and the variable winner to add conditions corresponding to the game status   
            let loser = "off"    
            let winner = "off"
            
            // For loop to iterate and get all the divs element inside the maze boundary (walls) and rechange their background color to the initial one "grey"
            for (var i = 0; i < boundary.length-1 ; i++){    
                boundary[i].style.backgroundColor = "grey"; 
            }

            // A red colored starting game message appears explainig the game
            status.innerHTML="Game started <br/> Move your mouse from S>>>E without touching the grey walls or going out of the maze boundary"
            status.style.color="red"
        }    
    }
}