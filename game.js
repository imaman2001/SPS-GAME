let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const btn = document.querySelector("#btn");
btn.addEventListener(("click") , () => {
    userScorePara.innerText = "0";
    compScorePara.innerText = "0";
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = "#081b31";
    
});


//rock paper scissor randomly select
const gencompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randId = Math.floor(Math.random(options)*3);
    return options[randId];
};


const gameDraw = () => {
    msg.innerText = "Game Was Draw . Play Again!"
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


const playGame = (userChoice) => {
       // computer turn now
       const compChoice = gencompChoice();

       //Draw game 
       if(userChoice === compChoice){
        gameDraw();
       }   else{
        let userWin = true;
        if(userChoice === "rock"){
            // paper ,scissor 
           userWin = compChoice === "paper" ? false : true ;
        } 
        else if (userChoice === "paper"){
            // scissor , rock  
            userWin = compChoice === "scissors" ? false : true ;
        }
        else {
            //rock , paper
            compChoice === "rock" ? false : true ; 
        }
        showWinner(userWin , userChoice , compChoice);
       }
};

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
