console.log("JavaScript is connected!");
const attemptsText = document.querySelector("#attempts");
const guessInput = document.querySelector("#guessInput");
const guessButton = document.querySelector("#guessButton");
const message = document.querySelector("#message");
const secretNumber=Math.floor(Math.random()*100)+1;
let attempts = 0;
guessButton.addEventListener('click',function(){
const guess=Number(guessInput.value);
attempts=attempts+1;
attemptsText.textContent='Attempts:'+ attempts;
console.log('new guess:',guess);
if(guess<secretNumber){
    message.textContent='too low';
}else if(guess>secretNumber){
    message.textContent='too high';
}else{
    message.textContent='Ate and left no crumbs! Correct Guess';
}
});