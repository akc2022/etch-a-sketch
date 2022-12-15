

function createGrid () {
  for (let i = 0; i<16; i++) {
    const div = document.createElement('div');
      div.setAttribute('id', i);
    document.getElementById('grid').appendChild(div);
div.classList.add('row');
  }
  for (i=0; i<16; i++){
    for (j=0; j<16; j++)  {
  const div = document.createElement('div');
  div.classList.add('coolDiv');
document.getElementById(i).appendChild(div);

  }
}
}

createGrid();

let divs = document.querySelectorAll('.coolDiv');
for (i=0; i<divs.length; i++) {
  divs[i].addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'black';
  }
)
}

let button = document.querySelector('button');
button.addEventListener('click', () => {
display.removeChild(display.firstElementChild);
let userEntry = prompt('How many squares should be on each side of the grid?')
let grid = document.createElement('div');
grid.setAttribute('id', 'grid');
display.insertBefore(grid, display.firstChild);
while (userEntry > 100 || userEntry<1 || isNaN(userEntry)) { userEntry = prompt ('Please select an integer between 1 and 100');
}
for (let i = 0; i<userEntry; i++) {
  const div = document.createElement('div');
    div.setAttribute('id', i);
  document.getElementById('grid').appendChild(div);
  div.classList.add('row');
}
for (i=0; i<userEntry; i++){
  for (j=0; j<userEntry; j++)  {
const div = document.createElement('div');
div.classList.add('coolDiv');
document.getElementById(i).appendChild(div);
}
}
let divs = document.querySelectorAll('.coolDiv');
for (i=0; i<divs.length; i++) {
  divs[i].addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'black';
  }
)
}
}
)
