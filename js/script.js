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
