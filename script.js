player1Dice = Math.floor(Math.random() * 6 + 1)
player2Dice = Math.floor(Math.random() * 6 + 1)

title = document.getElementById('title')    
if(player1Dice > player2Dice){
    title.textContent = "Player 1 wins!"
}
else if(player1Dice < player2Dice){
    title.textContent = "Player 2 wins!"
}
else{
    title.textContent = "Tie!"
}


document.getElementById('player1-dice').textContent = player1Dice
document.getElementById('player2-dice').textContent = player2Dice
