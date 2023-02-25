'use strict';
console.log('script.js');

// Nusitaikymai
const sketchArea = document.getElementById('container');

function makeGrid(cols, rows) {
  sketchArea.style.setProperty('--grid-cols', cols);
  sketchArea.style.setProperty('--grid-rows', rows);
  for (let i = 0; i < cols * rows; i++) {
    let square = document.createElement('div');
    square.classList.add('oneGridSquare');
    sketchArea.append(square);
    square.addEventListener('mouseover', function colorSquare() {
      square.style.background = '#333';
    });
  }
}

makeGrid(16, 16);
