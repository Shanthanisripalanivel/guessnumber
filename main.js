var msg1=document.getElementById("message1");
var msg2=document.getElementById("message2");
var msg3=document.getElementById("message3");

var answer = Math.floor(Math.random()*100) + 1;
var no_of_guesses = 0;
var guessed_nums = [];

function play(){
   
    var user_guess=document.getElementById("guess").value;
    if(user_guess < 1 || user_guess > 100){
        alert("please enter a button from 1to100");
    }
    else{
        guessed_nums.push(user_guess);
        no_of_guesses+= 1;

        if(user_guess < answer){

            msg1.textContent=("your guess is two low.");
            msg2.textContent=("no.of.guesses: " + no_of_guesses);
            msg3.textContent=("guessed number are: "+guessed_nums);

        }else if(user_guess > answer){

            msg1.textContent=("your guess is two high");
            msg2.textContent=("no.of.guesses:"+ no_of_guesses);
            msg3.textContent=("guessed number are:"+guessed_nums);
        
        }else if(user_guess==answer){

            msg1.textContent=("yahoo you are win");
            msg2.textContent=("no.of.guesses:"+ answer);
            msg3.textContent=("you guesses it in"+no_of_guesses+"guesses");
            document.getElementById("guess_button").disabled=true;
        }
    }
    }
