'use strict';
console.log('script.js');

// Nusitaikymai
const sketchArea = document.getElementById('container');
const clearBtn = document.getElementById('clearBtn');

function makeGrid(cols, rows) {
  sketchArea.style.setProperty('--grid-cols', cols);
  sketchArea.style.setProperty('--grid-rows', rows);
  for (let i = 0; i < cols * rows; i++) {
    let square = document.createElement('div');
    square.classList.add('oneGridSquare');
    sketchArea.append(square);
    square.addEventListener('mouseover', function colorSquare() {
      const randomColor = 'rgb(' + randomNum(255) + ',' + randomNum(255) + ',' + randomNum(255) + ')';
      square.style.background = randomColor;
    });
  }
}

makeGrid(16, 16);

function clearBoard() {
  sketchArea.innerHTML = '';
  const gridChoice = prompt('How many squares per side? Max 100');
  if (gridChoice <= 100) {
    makeGrid(gridChoice, gridChoice);
  } else {
    alert('Select 100 or less');
  }
}

clearBtn.addEventListener('click', clearBoard);

function randomNum(num) {
  return Math.floor(Math.random() * num + 1);
}
