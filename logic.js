let messageContainer = document.querySelector(".msg-container");
let message = document.querySelector("#msg");
let gameContainer = document.querySelector(".Game-container");
let game = document.querySelector(".Game");
let leftFist = document.querySelector("#left-fist1");
let rightFist = document.querySelector("#right-fist1");
// let playerScore = document.querySelector("#player-score");
// let computerScore = document.querySelector("#computer-score"); I will add this feature later
let symbolsContainer = document.querySelector(".symbols");
let stoneBtn = document.querySelector("#stone");
let paperBtn = document.querySelector("#paper");
let scissorBtn = document.querySelector("#scissor");
let newGameBtn = document.querySelector("#new-btn");


let playerTurn = true;
// plSc = 0;
// coSc = 0; Will make this later


stoneBtn.addEventListener("click", ()=>{
    if(playerTurn){
        leftFist.src = "stone.png";
        leftFist.alt = "stone";
        playerTurn = false;
        computerMove("stone");
        
    }
    });

paperBtn.addEventListener("click", ()=>{
    if(playerTurn){
        leftFist.src = "paper.png";
        leftFist.alt = "paper";
        playerTurn = false;
        computerMove("paper");
        
    }
});

scissorBtn.addEventListener("click", ()=>{
    if(playerTurn){
        leftFist.src = "scissor.png";
        leftFist.alt = "scissor";
        playerTurn = false;
        computerMove("scissor");
        
    }
});


function computerMove(playerChoice){
    setTimeout(()=>{
    let array = ["stone", "paper", "scissor"];
    let randomChoice = array[Math.floor(Math.random() * array.length)];
    rightFist.src = randomChoice + ".png";
    rightFist.alt = randomChoice;
    checkWinner(playerChoice, randomChoice);
    playerTurn = true;
},1000);
};

function checkWinner(playerChoice, computerChoice){
    setTimeout(()=>{
        messageContainer.removeAttribute("hidden");
    if (playerChoice === computerChoice){
        message.innerText = "😟Tie Play Again😟";
    }
    else if(playerChoice === "stone" && computerChoice === "paper"){
        message.innerText = "Computer Wins😄";
    }
    else if(playerChoice === "paper" && computerChoice === "scissor"){
        message.innerText = "Computer Wins😄";
    }
    else if(playerChoice === "scissor" && computerChoice === "stone"){
        message.innerText = "Computer Wins😄";
        coSc++;
        computerScore.innerText = coSc;
    }
    else if(playerChoice === "stone" && computerChoice === "scissor"){
        message.innerText = "You Win🎉";
    }
    else if(playerChoice === "paper" && computerChoice === "stone"){
        message.innerText = "You Win🎉";
    }   
    else if(playerChoice === "scissor" && computerChoice === "paper"){
        message.innerText = "You Win🎉";
        // plSc++;
        // playerScore.innerText = plSc; Will make this later
    }
    
    
    },1000);
};

function newGame(){
    newGameBtn.addEventListener("click", ()=>{
        messageContainer.setAttribute("hidden", true);
        playerTurn = true;
        leftFist.src = "Left Fist image.png";
        leftFist.alt = "left-fist";
        rightFist.src = "Right Fist image.png";
        rightFist.alt = "right-fist";
    })
};
newGame();



//A Custom built Gesture Battle Game with Custom UI//

//Finally Game is Ready//

