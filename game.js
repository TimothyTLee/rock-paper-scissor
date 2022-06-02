let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score_board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const options = ['r', 'p', 's'];
    let randomNumber = Math.floor(Math.random() *3);
    return options [randomNumber];
}

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "scissors";
}
function completeRound(userChoice, computerChoice, results){
    
    let result_p = document.querySelector('.result p');
    
    switch(results){
        case 'win': 
            userScore++;
            userScore_span.innerHTML = userScore;
            result_p.innerHTML = `User's ${convertToWord(userChoice)} beats Computer's ${convertToWord(computerChoice)}. You win!`
            break;
        case 'lost':
            computerScore++;
            computerScore_span.innerHTML = userScore;
            result_p.innerHTML = `User's ${convertToWord(userChoice)} loses to Computer's ${convertToWord(computerChoice)}. you lost.`
            break;
        case 'draw':
            result_p.innerHTML = `User's ${convertToWord(userChoice)} draws to Computer's ${convertToWord(computerChoice)}. try again!`
            break;
    
    }   

}

function game(userChoice) {
    let computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){

        case"rs":
        case "pr":
        case "sp":
            completeRound(userChoice,computerChoice,'win');
            break;

        case "rp":
        case "ps":
        case "sr":
            completeRound(userChoice, computerChoice,'lost');
            break;

        case "rr":
        case "pp":
        case "ss":
            completeRound(userChoice, computerChoice,'draw');
            break;
    }

}

function main(){

    rock_div.addEventListener('click', function(){
    console.log("You clicked on Rock");
    game('r');
    })

    paper_div.addEventListener('click', function(){
    console.log("You clicked on Paper");
    game('p');
    })

    scissors_div.addEventListener('click', function(){
    console.log("You clicked on Scissors");
    game('s');

    })
}

main();