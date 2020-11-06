//global variables
const name = document.querySelector('#name');
const otherTitle = document.querySelector('#other-title');
const title = document.querySelector('#title');
const activity = document.querySelector('.activities');
const design = document.querySelector('#design');
const payment = document.querySelector('#payment');

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

//Event listener added to the
activity.addEventListener('click', (e) => {
  if (e.target.checked) {
    let cost = e.target.getAttribute('data-cost');
    let cost1 = parseInt(cost);
    totalCost += cost1;
    const printCost = document.createElement('h4');
    activity.appendChild(printCost);
    printCost.innerHTML = `Total: $${totalCost}`;
  }
});

//--------------------------Payment Section--------------------------------
const paymentMethod = document.querySelector('#payment option');
const creditCardText = document.querySelector('#credit-card');
const PayPalText = document.querySelector('#paypal');
const BitcoinText = document.querySelector('#bitcoin');

payment.addEventListener('click', (e) => {
  paymentMethod.style.display = 'none';

  if (e.target.value == 'credit card') {
    creditCardText.style.display = 'block';
    PayPalText.style.display = 'none';
    BitcoinText.style.display = 'none';
  } else if (e.target.value == 'paypal') {
    PayPalText.style.display = 'block';
    creditCardText.style.display = 'none';
    BitcoinText.style.display = 'none';
  } else if (e.target.value == 'bitcoin') {
    BitcoinText.style.display = 'block';
    creditCardText.style.display = 'none';
    PayPalText.style.display = 'none';
  }
});
