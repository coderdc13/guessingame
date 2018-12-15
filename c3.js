

var guess = null
var message = document.getElementById("message")
var value = Math.floor(Math.random() * 100);
console.log("Value: ", value)
var guessCount = 0;
var guessLimit = 13;
console.log(value)
setNumber = (g) => {
    guess = parseInt(g.value)
}
check = (numberOfGuesses) => {
    if (numberOfGuesses >= guessLimit) {
    message.innerHTML = "too many guesses"
    return false
  }
  return true
}
reset = () => {
    guessCount = 0
  guess = 0
  value = Math.floor(Math.random() * 100)
  console.log("Value: ", value)
  document.getElementById("guess").value = ""
  document.getElementById("message").innerHTML = ""
}
submit = () => {
  if (check(guessCount)) {
    if (guess === value) {
      message.innerHTML = "success"
      value = Math.floor(Math.random() * 100);
      console.log("Value: ", value)
      guessCount = 0
    } else if (guess < value) {
      message.innerHTML = "too low"
      guessCount = guessCount + 1
    } else {
      message.innerHTML = "too high"
      guessCount = guessCount + 1
    }
  }
}