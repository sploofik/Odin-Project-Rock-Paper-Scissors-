  
let playerScore=0;
let computerScore=0; 

function computerPlay(){
  options =git ['Rock', 'Paper', 'Scissors'];
  var index = Math.floor(Math.random()*options.length);
      var selected = options[index].toLowerCase();
      return selected;
  }


function playRound(playerSelection, computerSelection){
  playerSelection=prompt('Please enter your choice').toLowerCase();
  computerSelection=computerPlay();

  if (playerSelection==computerSelection){
      return 'it\'s a tie!';
      }

  else if (playerSelection=='rock' && computerSelection=='paper'){
      computerScore++;
      return 'you lose! paper beats rock.';
      } 

  else if ( playerSelection == 'scissors' && computerSelection == 'rock' ){
      computerScore++;
      return 'you lose! rock beats scissors.';
    }
  else if(playerSelection == 'paper' && computerSelection == 'scissors'){
      computerScore++;
      return 'you lose! scissors beats paper.';
    }
  
  else if (playerSelection == 'rock' && computerSelection=='scissors'){
      playerScore++;
      return 'you win! rock beats scissors.'; }
      
  else if (playerSelection =='paper' && computerSelection=='rock'){
      playerScore++;
      return 'you win! paper beats rock.'; }
      
  else if (playerSelection == 'scissors' && computerSelection=='paper'){
      playerScore++;
      return 'you win! scissors beats paper.'; } 
}



function game(){
  for(let i=1; i<6; i++){
      console.log(playRound());
  }
  if (playerScore==computerScore){
      return 'It\'s a tie! You scored ' + playerScore + ' Computer also scored ' + computerScore +'.';
  }
  else if (playerScore > computerScore){
      return 'Congratulation! you win. You scored ' + playerScore + ', Computer scored ' + computerScore +'.'; 
  }
  else if (computerScore>playerScore){
      return 'Sorry, you lost. You scored ' + playerScore + ' Computer scored ' + computerScore +'.'; 
  }
}
console.log(game());
