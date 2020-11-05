//global variables
const name = document.querySelector('#name');
const otherTitle = document.querySelector('#other-title');
const title = document.querySelector('#title');

//put focus on the name element upon loading the window
focusOnLoad = function getFocus() {
  name.focus();
};

window.addEventListener('load', () => {
  focusOnLoad();
});

//Hide other text box
otherTitle.style.display = 'none';

title.addEventListener('click', (e) => {
  if (e.target.value == 'other') {
    otherTitle.style.display = 'block';
  } else {
    otherTitle.style.display = 'none';
  }
});

// T-Shirt Section
const design = document.querySelector('#design');
const shirtColors = document.querySelector('#color');
const selectTheme = document.querySelector('#design option');

const cornflowerblue = document.querySelectorAll('option')[13];
const darkslategrey = document.querySelectorAll('option')[14];
const gold = document.querySelectorAll('option')[15];
const tomato = document.querySelectorAll('option')[16];
const steelblue = document.querySelectorAll('option')[17];
const dimgrey = document.querySelectorAll('option')[18];

shirtColors.style.display = 'none';

design.addEventListener('change', (e) => {
  if (e.target.value == 'Select Theme') {
    shirtColors.style.display = 'none';
    cornflowerblue.style.display = 'none';
    darkslategrey.style.display = 'none';
    gold.style.display = 'none';
    tomato.style.display = 'none';
    steelblue.style.display = 'none';
    dimgrey.style.display = 'none';
  } else if (e.target.value == 'js puns') {
    shirtColors.style.display = 'block';
    cornflowerblue.style.display = 'block';
    darkslategrey.style.display = 'block';
    gold.style.display = 'block';
    tomato.style.display = 'none';
    steelblue.style.display = 'none';
    dimgrey.style.display = 'none';
  } else if (e.target.value == 'heart js') {
    shirtColors.style.display = 'block';
    cornflowerblue.style.display = 'none';
    darkslategrey.style.display = 'none';
    gold.style.display = 'none';
    tomato.style.display = 'block';
    steelblue.style.display = 'block';
    dimgrey.style.display = 'block';
  }
});
