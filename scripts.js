let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
var startButton = document.createElement('button');
startButton.innerText = 'Click this button to start a new game!';
document.getElementById('game-over-lbl').appendChild(startButton);
startButton.addEventListener('click', (initialEvent) => (initialEvent.target.hidden = true));

// use the value stored in the nextPlayer variable to indicate who the next player is
let playerIndicator = document.querySelector('b');
let playerText = 'Next Player: ';
playerIndicator.innerText = playerText;

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    for(let i = 0; i < 9; i++){
        let cellID = 'c' + (i+1);
        var newButton = document.getElement('button');
        document.getElementById(cellID).appendChild(newButton);
    }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver() === true)
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        document.getElementById("h1").innerHTML = "Game Over";
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
   let lbl = document.getElementById('game-over-lbl');
   newHeader.innerText = 'Game Over';
   lbl.appendChild(newHeader);
}
