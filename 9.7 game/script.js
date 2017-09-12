var newGameBtn = document.getElementById('js-newGameButton');

var pickRock = document.getElementById('js-playerPick_rock');
var pickPaper = document.getElementById('js-playerPick_paper');
var pickScissors = document.getElementById('js-playerPick_scissors');

var newGameElem = document.getElementById('js-newGameElement');
var resultsElem = document.getElementById('js-resultsTableElement');

var playerPointsElem = document.getElementById('js-playerPoints');
var playerNameElem = document.getElementById('js-playerName');
var computerPointsElem = document.getElementById('js-computerPoints');

var pickElem = document.getElementById('js-playerPickElement');
var winnerElem = document.getElementById('js-winnerAnnouncement');
var playerPickElem = document.getElementById('js-playerPick');
var computerPickElem = document.getElementById('js-computerPick');

var playerResultElem = document.getElementById('js-playerResult');
var computerResultElem = document.getElementById('js-computerResult');

var gameState = 'notStarted'; // started //ended
var player = {
  name: '',
  score: 0
};
var computer = {
  score: 0
};

newGameBtn.addEventListener('click', newGame);

pickRock.addEventListener('click', function () {playerPick('rock');});
pickPaper.addEventListener('click', function () {playerPick('paper');});
pickScissors.addEventListener('click', function () {playerPick('scissors');});

function setGameElements () {
  switch (gameState) {
    case 'started':
      newGameElem.style.display = 'none';
      pickElem.style.display = 'block';
      resultsElem.style.display = 'block';
      winnerElem.style.display = 'none';
      break;
    case 'ended':
      newGameBtn.innerText = 'Once again?';
      newGameElem.style.display = 'block';
      pickElem.style.display = 'none';
      winnerElem.style.display = 'block';
      break;
    /* falls through */
    case 'notStarted':
    /* falls through */
    default:
      newGameElem.style.display = 'block';
      pickElem.style.display = 'none';
      resultsElem.style.display = 'none';
      winnerElem.style.display = 'none';
  }
}

function setGameStatus (state) {
  gameState = state;
  setGameElements();
}

function newGame () {
  player.name = prompt('Enter your name, please', 'Johnny Bravo');
  if (player.name) {
    player.score = computer.score = 0;
    setGameStatus('started');

    playerNameElem.innerHTML = player.name;
    setGamePoints();
  }
}

function getComputerPick () {
  var possiblePicks = ['rock', 'paper', 'scissors'];
  return possiblePicks[Math.floor(Math.random() * 3)];
}

function playerPick (playerPick) {
  var computerPick = getComputerPick();

  playerPickElem.innerHTML = playerPick;
  computerPickElem.innerHTML = computerPick;

  checkRoundWinner(playerPick, computerPick);
}

function checkRoundWinner (playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  var winnerIs = 'player';

  if (playerPick == computerPick) {
    winnerIs = 'none';
  } else if (
    (computerPick == 'rock' && playerPick == 'scissors') ||
    (computerPick == 'scissors' && playerPick == 'paper') ||
    (computerPick == 'paper' && playerPick == 'rock') ||
    (c)
  ) {
    winnerIs = 'computer';
  }

  if (winnerIs == 'player') {
    playerResultElem.innerHTML = 'Win!';
    player.score++;
  } else if (winnerIs == 'computer') {
    computerResultElem.innerHTML = 'Win!';
    computer.score++;
  } else {
   computerResultElem.innerHTML = playerResultElem.innerHTML = 'Deuce!';
  }

  setGamePoints();
  checkGameWinner();
}

function setGamePoints () {
  playerPointsElem.innerHTML = player.score;
  computerPointsElem.innerHTML = computer.score;
}

function checkGameEnd (limit) {
  return player.score == limit ? player.name :
    computer.score == limit ? 'computer' :
      null;
}

function checkGameWinner () {
  var winner = checkGameEnd(10);
  if (winner != null) {
    winnerElem.innerHTML = 'And the winner is: ' + winner.toUpperCase();
    setGameStatus('ended');
  }
}

// READY
setGameElements();
