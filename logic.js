let messageContainer = document.querySelector(".msg-container");
let message = document.querySelector("#msg");
let gameContainer = document.querySelector(".Game-container");
let game = document.querySelector(".Game");
let leftFist = document.querySelector("#left-fist1");
let rightFist = document.querySelector("#right-fist1");
let playerScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#computer-score");
let symbolsContainer = document.querySelector(".symbols");
let stoneBtn = document.querySelector("#stone");
let paperBtn = document.querySelector("#paper");
let scissorBtn = document.querySelector("#scissor");
let newGameBtn = document.querySelector("#new-btn");


let playerTurn = true;


stoneBtn.addEventListener("click", ()=>{
    if(playerTurn){
        leftFist.src = "stone.png";
        leftFist.alt = "stone";
        playerTurn = false;
        computerMove();
    }
    });

paperBtn.addEventListener("click", ()=>{
    if(playerTurn){
        leftFist.src = "paper.png";
        leftFist.alt = "paper";
        playerTurn = false;
        computerMove();
    }
});

scissorBtn.addEventListener("click", ()=>{
    if(playerTurn){
        leftFist.src = "scissor.png";
        leftFist.alt = "scissor";
        playerTurn = false;
        computerMove();
    }
});


function computerMove(){
    setTimeout(()=>{
    let array = ["stone", "paper", "scissor"];
    let randomChoice = array[Math.floor(Math.random() * array.length)];
    rightFist.src = randomChoice + ".png";
    rightFist.alt = randomChoice;
    playerTurn = true;
},1000);
};

