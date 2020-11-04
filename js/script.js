//global variables
const name = document.querySelector('#name');
const optionOther = document.querySelectorAll('option')[5];
const otherTitle = document.querySelector('#other-title');
const title = document.querySelector('#title');

//put focus on the name element upon loading the window
focusMethod = function getFocus() {
  name.focus();
};

window.addEventListener('load', () => {
  focusMethod();
});

//Hide other text box

otherTitle.style.display = 'none';

function showOtherJobRole() {
  otherTitle.style.display = 'block';
}

optionOthertle.addEventListener('click', () => {
  showOtherJobRole();
});
