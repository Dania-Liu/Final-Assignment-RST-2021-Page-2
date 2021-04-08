// Sets default value.
let firstAnswer = 0

// Connects button that allows users to submit their answers to JavaScript.
document.getElementById('firstSubmit').addEventListener('click', firstSubmit)
// Connects button that allows users to reveal a hint to JavaScript.
document.getElementById('firstHint').addEventListener('click', firstHint)

// Creates function that activates when the user clicks on "Submit" for the first riddle.
function firstSubmit () {
  firstAnswer = document.getElementById('firstAnswer').value
  if (firstAnswer === 'rainbow') {
    document.getElementById('firstOutcome').innerHTML = ('Correct, please proceed.')
  } else {
    document.getElementById('firstOutcome').innerHTML = ('Incorrect, try again.')
  }
}

// Creates function that reveals an image when the user clicks on "Hint" for the first riddle.
function firstHint () {
  document.getElementById('firstPicture').style.display = "block"
}
