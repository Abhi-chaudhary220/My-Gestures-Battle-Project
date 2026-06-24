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

if(playerTurn){
    array= ["stone", "paper", "scissor"];
    array.forEach(function(item){
        if(item === "stone"){
            stoneBtn.addEventListener("click", ()=>{
                leftFist.src= "stone.png";
                leftFist.alt= "stone";
            })
        }
    }
    
}