let turnX = 'X';
let turnO = 'O';
let numTurns = 0;
let cells = [];
const history = document.getElementById('history');
const turn = document.getElementById('turn');

function update() {
  cells = [];
  for (let i = 1; i <= 9; i++) {
    cells.push(document.getElementById(`c${i}`).innerText);
  };
  console.log(cells);
};

function func(cell) {
  if (cell.innerText === '' && numTurns <= 9) {
    if (numTurns % 2 === 0) {
      cell.innerText = turnX;
      numTurns++;
      turn.innerText = `Now is ${turnO} turn!`;
      history.innerText += `${cell.id[1]}`;
    } else {
      cell.innerText = turnO;
      numTurns++;
      turn.innerText = `Now is ${turnX} turn!`;
      history.innerText += `${cell.id[1]}`;
    };
  }
  update();
  hasWon();
};

function clearCells() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(`c${i}`).innerHTML = '';
  };
  turnX = 'X';
  turnO = 'O';
  numTurns = 0;
  turn.innerText = `Now is ${turnX} turn!`;
  history.innerText = ``;
  update();
};

function hasWon() {
  if ((cells[0] === cells[1]) && (cells[1] === cells[2]) && cells[0] !== '') {
    turn.innerText = `${cells[0]} won!`
  } else if ((cells[3] === cells[4]) && (cells[4] === cells[5]) && cells[3] !== '') {
    turn.innerText = `${cells[3]} won!`
  } else if ((cells[6] === cells[7]) && (cells[7] === cells[8]) && cells[6] !== '') {
    turn.innerText = `${cells[6]} won!`
  } else if ((cells[0] === cells[4]) && (cells[4] === cells[8]) && cells[0] !== '') {
    turn.innerText = `${cells[0]} won!`
  } else if ((cells[0] === cells[3]) && (cells[3] === cells[6]) && cells[0] !== '') {
    turn.innerText = `${cells[0]} won!`
  } else if ((cells[1] === cells[4]) && (cells[4] === cells[7]) && cells[1] !== '') {
    turn.innerText = `${cells[1]} won!`
  } else if ((cells[2] === cells[5]) && (cells[5] === cells[8]) && cells[2] !== '') {
    turn.innerText = `${cells[2]} won!`
  } else if ((cells[2] === cells[4]) && (cells[4] === cells[6]) && cells[2] !== '') {
    turn.innerText = `${cells[2]} won!`
  } else if (numTurns === 9) {
    turn.innerText = `It's a tie!`
  }
};