let arr=["Rock","Paper","Scissors"];
function computerPlay(){
    return arr[Math.floor(Math.random()*arr.length)];
}
 

function playRound(computerPlay){
    let computerSelection= computerPlay();
    let playerSelection = prompt("Please choose Rock,Paper or Scissors");
    playerSelection=playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1);

    if(computerSelection==="Rock" && playerSelection==="Paper"){
        return("You won! Paper beats Rock");
    }
    else if(computerSelection==="Rock" && playerSelection==="Scissors"){
        return("You lose! Rock beats Scissors");
    }
    else if(computerSelection==="Paper" && playerSelection==="Scissors"){
        return("You won! Scissors beats Paper");
    }
    else if(computerSelection==="Paper" && playerSelection==="Rock"){
        return("You lose! Paper beats Rock");
    }
    else if(computerSelection==="Scissors" && playerSelection==="Rock"){
        return("You won! Rock beats Scissors");
    }
    else if(computerSelection==="Scissors" && playerSelection==="Paper"){
        return("You lose! Scissors beats Paper");
    }
}

function game(){
    for(let i=0; i<5; i++){
        console.log(playRound(computerPlay));
    }
}