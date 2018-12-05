
var guess = null;

var message = document.getElementById("message");
var value = Math.floor(Math.random() * 100);
var guessCount = 0;
var guessLimit = 1;


var guessLimit = 10;
console.log(value);

setNumber = (g) => {
    guess = parseInt(g.value);
}

check = (numberOfGuesses) => {
    console.log("Hello ==>>", numberOfGuesses)
    if (numberOfGuesses > guessLimit) {
        message.innerHTML = "too many guesses";
        return false;
        // document.getElementById("guessButton").disabled = true;
    }
        return true;
}

check = (numberOfGuesses) => {};
generateList = (arrayOfGuesses) => {
    return arrayOfGuesses.map((g) => {
       return "<li>" + g + "</li>"
    })
    var newList = []
    for(i = 0; i < arrayOfGuesses.length; i++) {
        elem = arrayOfGuesses[i]
        newList.push("<li>" + elem + "<li>")
    }
    return newList;
}

submit = () => {
    guess.push(guess)
    document.getElementById("guesses").innerHTML = generateList(guesses).join(" ") 
    // aboce special note for something with three steps...
    if (guess === value) {
        message.innerHTML = "success";
        value = Math.floor(Math.random() * 100);
        guessCount = 0;
    } else if (guess < value) {
        message.innerHTML = "too low";
        guessCount = guessCount + 1;
    } else  {
        message.innerHTML = "too high";
        guessCount = guessCount + 1;
    }
}
