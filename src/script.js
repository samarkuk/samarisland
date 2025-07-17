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