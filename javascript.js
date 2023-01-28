function getComputerChoice() {
   let choice=Math.floor(Math.random()*100);
   if(choice <=33) {
    choice="Rock";
   }
   else if(choice <=66 && choice>33)
   {
    choice="Paper";
}
else {
    choice="Scissors";
}
return choice;
}


function playRound(playerSelection, computerSelection) {
    let x=0,y=0,z=0;
    if(playerSelection ===computerSelection){
    console.log(`${playerSelection} and ${computerSelection} are equal`);
    
z++;
 }
 else if (playerSelection==="Rock" && computerSelection==="Paper") {
    console.log(`${playerSelection} lost to ${computerSelection}`)
    x++;
 }
 else if (playerSelection==="Rock" && computerSelection==="Scissors") {
    console.log(`${playerSelection} won to ${computerSelection}`)
    y++;
 }
 else if (playerSelection==="Paper" && computerSelection==="Scissors") {
    console.log(`${playerSelection} lost to ${computerSelection}`)
    x++;
 }
 else if (playerSelection==="Paper" && computerSelection==="Rock") {
    console.log(`${playerSelection} won to ${computerSelection}`)
    y++;
 }
 else if (playerSelection==="Scissors" && computerSelection==="Paper") {
    console.log(`${playerSelection} won to ${computerSelection}`)
    y++;
 }
 else if (playerSelection==="Scissors" && computerSelection==="Rock") {
    console.log(`${playerSelection} lost to ${computerSelection}`)
    x++;
 }
 else {
    console.log("Wrong input");
}
    
    if(y>x && y>z) {
        return ++winner;
    }
    }
  

    let winner=0;



function game() {
    for (let i=0;i<5;i++){
        let playerSelection11=prompt("What do you choose?");
  let playerSelection1=playerSelection11.toLowerCase();
  let playerSelection2=playerSelection1.charAt(0).toUpperCase();
  let playerSelection=playerSelection2+playerSelection1.slice(1);
  const computerSelection=getComputerChoice();
  playRound(playerSelection,computerSelection);
}
console.log(`You won ${winner} rounds and lost ${5-winner} rounds`);
    
}
game();
