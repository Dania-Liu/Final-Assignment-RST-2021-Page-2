// Sets default value.
let firstAnswer = 0

// Connects button that allows users to submit their answers to JavaScript.
document.getElementById('first-submit').addEventListener('click', firstSubmit)
// Connects button that allows users to reveal a hint to JavaScript.
document.getElementById('first-hint').addEventListener('click', firstHint)

// Creates function that activates when the user clicks on "Submit" for the first riddle.
function firstSubmit () {
  firstAnswer = document.getElementById('first-answer').value
  if (firstAnswer === 'rainbow') {
    document.getElementById('first-outcome').innerHTML = ('Correct, please proceed.')
  } else {
    document.getElementById('first=outcome').innerHTML = ('Incorrect, try again.')
  }
}

// Creates function that reveals an image when the user clicks on "Hint" for the first riddle.
function firstHint () {
  document.getElementById('first-picture').style.display = 'block'
}
