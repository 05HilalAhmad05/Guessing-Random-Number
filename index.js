let RandomNumber = Math.floor(Math.random()*100)+1;
let score = 0;

while(true){
    let UserGuess = Number(prompt("Enter a number between 1-100"))
    score++;

    if(isNaN(UserGuess)){
        alert("Only Numbers are allowed")
        continue;
    }

    if(UserGuess>RandomNumber){
        alert("Your guess is high! Try another number")
    }else if(UserGuess<RandomNumber){
        alert("Your Guess is low! try another number")
    }else{
        alert("Congrats! You guess the number in " + score + " tries \n Your score is " + (101 - score))
        break;
    }
}