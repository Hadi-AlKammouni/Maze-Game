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

    
}