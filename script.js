const scoreP1 = document.querySelector('#scoreP1');
const scoreP2 = document.querySelector('#scoreP2');
const gameLimit = document.querySelector('select');
const buttonP1 = document.querySelector('#buttonP1');
const buttonP2 = document.querySelector('#buttonP2');
const buttonReset = document.querySelector('#buttonReset')

let countP1 = 0;
let countP2 = 0;

function endGame() {
  console.log("endGame fired!")
  if (countP1 == gameLimit.value ) {
    scoreP1.classList.add('has-text-success');
    scoreP2.classList.add('has-text-danger');
  } else {
    scoreP1.classList.add('has-text-danger');
    scoreP2.classList.add('has-text-success');
  }
  party.screen();
  buttonP1.disabled = true;
  buttonP2.disabled = true;
}

function resetGame() {
  console.log("resetGame fired!")
  scoreP1.innerText = "0";
  scoreP1.classList.remove('has-text-success', 'has-text-danger');
  buttonP1.disabled = false;
  console.log(buttonP1.disabled)
  countP1 = 0;
  scoreP2.innerText = "0";
  scoreP2.classList.remove('has-text-success', 'has-text-danger');
  buttonP2.disabled = false;
  countP2 = 0;
}

buttonP1.addEventListener('click', function(e) {
  countP1++;
  scoreP1.innerText = countP1;
  if (countP1 == gameLimit.value || countP2 == gameLimit.value) {
    endGame();
  }
});

buttonP2.addEventListener('click', function(e) {
  countP2++;
  scoreP2.innerText = countP2;
  if (countP1 == gameLimit.value || countP2 == gameLimit.value) {
    endGame();
  }
});

buttonReset.addEventListener('click', resetGame);
gameLimit.addEventListener('change', resetGame);