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
    const randomNumber = Math.floor(Math.random() *3);
    return options [randomNumber];
}

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "scissors";
}
function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord ="user".font-size(3).sub();
    const smallComputerWord = "computer".font-size(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} "beats" ${convertToWord(computerChoice)}${SmallComputerWord}."Winner!"`;

}
function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord ="user".font-size(3).sub();
    const smallComputerWord = "computer".font-size(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} "loses" ${convertToWord(computerChoice)}${SmallComputerWord}."Lost!"`;
}

function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    const smallUserWord ="user".font-size(3).sub();
    const smallComputerWord = "computer".font-size(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} "equals" ${convertToWord(computerChoice)}${SmallComputerWord}."Draw. Try again!"`;
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){

        case"rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;

        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }

}

function main(){

    rock_div.addEventListener('click', function(){
    console.log("You clicked on Rock");
    })

    paper_div.addEventListener('click', function(){
    console.log("You clicked on Paper");
    })

    scissors_div.addEventListener('click', function(){
    console.log("You clicked on Scissors");
    })
}

main();