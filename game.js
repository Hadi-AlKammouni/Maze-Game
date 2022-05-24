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
    
    // Declaring time feature variables
    let live_time=document.getElementById("live-timer")
    let last_time=document.getElementById("last-timer")
    let best_time=document.getElementById("best-timer")
    let records = []
    
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

            // Timer starts
            let start_time= Date.now()
            interval = setInterval(function(){
            elapsed_time = Date.now() - start_time    
            live_time.innerHTML=(elapsed_time/1000).toFixed(1)
            },100)

            // Declaring the variable loser and the variable winner to add conditions corresponding to the game status   
            let loser = "off"    
            let winner = "off"
            
            // For loop to iterate and get all the divs element inside the maze boundary (walls) and rechange their background color to the initial one "grey"
            for (var i = 0; i < boundary.length-1 ; i++){    
                boundary[i].style.backgroundColor = "grey"; 
            }

            // A red colored starting game message appears explainig the game
            status.innerHTML="Game started <br/> Move your mouse from S>>>E and click on 'E' without touching the grey walls or going out of the maze boundary"
            status.style.color="red"

            // Two ways to lose👇:

            //1️⃣ First fault that leads the user to lose is going out the boundary maze if & only if the user isn't in the winning & losing state (check the if condition)
            // A message "You lost!" appears with instant score & introducing two choices:
            // Choice 1: continue by clicking letter S again / Choice 2: refresh the game by clicking the blue box
            // This is done to prevent any cheating 😁
            document.getElementById("game").addEventListener("mouseleave", mouseLeave);
            function mouseLeave() {
                if (winner == "off" && loser == "off"){
                    mouseOver()
                    status.innerHTML=`You lost 10 pts!  Your score is ${score} <br/> Click on S if you wanna continue playing / Click on the blue box to refresh the game`
                }
            }

            //2️⃣ Second fault that leads the user to lose is hovering over the walls in the maze zone ==> the function mouseOver will be called
            // Color of walls changes into red
            // A message "You lost!" appears with instant score & introducing two choices: continue or refresh
            for (var i = 0; i < boundary.length-1 ; i++){ 
                boundary[i].addEventListener("mouseover", mouseOver) 
            }
            function mouseOver() {
                for (var i = 0; i < boundary.length-1 ; i++){
                    boundary[i].style.backgroundColor = "red"
                }
                score+=-10
                status.innerHTML=`You lost 10 pts! Your score is ${score} <br/> Click on S if you wanna continue playing / Click on the blue box to restart from 0`
                status.style.color="red"

                //Time is recorded as last duration and timer stops
                records.push((elapsed_time/1000).toFixed(1))
                last_time.innerHTML=records[records.length-1]
                clearInterval(interval);
                
                loser="on" // To do nothing upon clicking on letter E before continuing the game by clicking the letter S again
                // Removing the eventlistener to stop trigerring upon hovering
                for (var i = 0; i < boundary.length-1 ; i++){
                    boundary[i].removeEventListener("mouseover", mouseOver);
                }
                  
            }

            // One way to win👇:

            // If the refresh_game is "off" and the game state isn't losing or winning, then the user may win or lose(game is in progress)
            if (refresh_game == "off" && loser == "off" && winner == "off"){    
                win.onclick = function() {winGame(loser)}
            }
            // Upon clicking letter E, the winGame function is called taking a parameter
            // If the user state is losing(loser="on") or the user state is winning(winner="on"):
            // The user won't be able to click letter E again unless continuing the game or refreshing it
            // Otherwise, a green colored message "You won!" appears with instant score & introducing two choices: 
            // Choice 1: continue by clicking letter S again / Choice 2: refresh the game by clicking the blue box
            function winGame(loser) {
                if (loser=="off" && winner=="off"){
                    score+=5
                    status.innerHTML=`You won 5 pts! Your score is ${score} <br/>  Click on S if you wanna continue playing  / Click on the blue box to start from 0`
                    status.style.color="green"
                    // Enevtlistener is removed to stop trigerring upon hovering over the walls
                    for (var i = 0; i < boundary.length-1 ; i++){
                        boundary[i].removeEventListener("mouseover", mouseOver);
                    }
                    winner = "on" // In order to keep tracking the game state
                }
            }

            // One way to refresh the game from zero👇:

            // The last div element is colored blue
            // Whenever the user decided to refresh the game from zer, upon clicking on the blue box, the function restart is called
            // The score will return to zero + refresh_game variable will be equal to "on" in order to: 
            // Prevent playing again before clicking on letter S / Make sure to turn off any click on letter E & hovering over the walls
            boundary[5].style.backgroundColor = "blue"; 
            boundary[5].onclick= function () {restart()}
            function restart (){
                score=0
                refresh_game = "on"
                startGame() 
            }
        }    
    }
}