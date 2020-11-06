//global variables
const name = document.querySelector('#name');
const otherTitle = document.querySelector('#other-title');
const title = document.querySelector('#title');
const activity = document.querySelector('.activities');

//put focus on the name element upon loading the window
focusOnLoad = function getFocus() {
  name.focus();
};

window.addEventListener('load', () => {
  focusOnLoad();
});

//Hide other text box in Job Role
otherTitle.style.display = 'none';

title.addEventListener('click', (e) => {
  if (e.target.value == 'other') {
    otherTitle.style.display = 'block';
  } else {
    otherTitle.style.display = 'none';
  }
});

//------------------------------T-Shirt Section----------------------------------//
const design = document.querySelector('#design');
const shirtColors = document.querySelector('#shirt-colors');
const selectTheme = document.querySelector('#design option');
const colors = document.querySelector('#color');

const cornflowerblue = document.querySelectorAll('option')[13];
const darkslategrey = document.querySelectorAll('option')[14];
const gold = document.querySelectorAll('option')[15];
const tomato = document.querySelectorAll('option')[16];
const steelblue = document.querySelectorAll('option')[17];
const dimgrey = document.querySelectorAll('option')[18];

const JSPuns = [cornflowerblue, darkslategrey, gold];
const ihearjs = [tomato, steelblue, dimgrey];

shirtColors.style.display = 'none';

function reset() {
  colors.selectedIndex = '-1';
}

design.addEventListener('change', (e) => {
  if (e.target.value == 'Select Theme') {
    shirtColors.style.display = 'none';
  } else if (e.target.value == 'js puns') {
    shirtColors.style.display = 'block';
    reset();
    cornflowerblue.style.display = 'block';
    darkslategrey.style.display = 'block';
    gold.style.display = 'block';
    tomato.style.display = 'none';
    steelblue.style.display = 'none';
    dimgrey.style.display = 'none';
  } else if (e.target.value == 'heart js') {
    shirtColors.style.display = 'block';
    reset();
    cornflowerblue.style.display = 'none';
    darkslategrey.style.display = 'none';
    gold.style.display = 'none';
    tomato.style.display = 'block';
    steelblue.style.display = 'block';
    dimgrey.style.display = 'block';
  }
});

//---------------------Activity Section------------------------------//

// Create a total cost element
let totalCost = 0;
const input = document.querySelectorAll('input');

const h4 = document.createElement('h4');
h4.innerHTML = `Total cost of your activities: $${totalCost}`;
activity.appendChild(h4);

const clickedActivity = document.querySelectorAll('.activities input');

//Event listener added to the
activity.addEventListener('change', () => {
  // const clickedActivity = document.querySelectorAll('.activities input');
  let cost = input.getAttribute('[data-cost]');
  console.log(cost);
});
