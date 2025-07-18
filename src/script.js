const display = document.getElementById("display");

function appendValue(value){
    display.value=display.value+value;
}


function calculate(){
    display.value = eval(display.value)
}


function clearDisplay(){
    display.value = ""
}


var status = document.getElementById("status")
count=0;
function Clicker(){
    count=count+1;
   document.getElementById('status').innerHTML = `${count}`
}


var guessdisplay = document.getElementById('guessdisplay')
var secretnumber = Math.floor((Math.random()*100)+1)
function handleSubmit(){
    let value = guessdisplay.value
    if (value > secretnumber){
        document.getElementById('guess').innerHTML = 'Too high!'
    }
    else if (value < secretnumber){
        document.getElementById('guess').innerHTML = 'Too low!'
    }
    else{
        document.getElementById('guess').innerHTML = `You have guessed it! The number was ${secretnumber}`
    }
}

function submitAnswers(){
    
    var ans1= document.getElementById("ans1").value
    var ans2= document.getElementById("ans2").value
    var ans3= document.getElementById("ans3").value
    var a1 = ans1.toLowerCase().replace(/\s/g, '');
    var a2 = ans2.toLowerCase().replace(/\s/g, '');
    var a3 = ans3.toLowerCase().replace(/\s/g, '');
    var score = 0;
     if (a1 === "c" || a1 === "c." || a1 === "barackobama") {
        score++;
    }

    if (a2 === "b" || a2 === "b." || a2 === "-33") {
        score++;
    }

    if (a3 === "d" || a3 === "d." || a3 === "morocco") {
        score++;
    }

    alert("Your score: " + score);
}