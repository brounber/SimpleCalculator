/*==================== Overall Constant Created ====================*/

const displayMain = document.querySelector('.display__main');
const displayResult = document.querySelector('.display__results');
const numbers = document.querySelectorAll('.button__number');
const operators = document.querySelectorAll('.button__operation');
const equals = document.querySelector('.button__equal');
const clear = document.querySelector('.button__last-entity-clear');


/*==================== Changeable Veriable ====================*/
let disMain = '';
let disResult = null;
let prevOperation = '';
let haveDot = false; 

// created an eventlistener for the numbers to be displayed and also made a rule for the "dot"
numbers.forEach(number => { 
  number.addEventListener('click', (e) => { 
    if (e.target.innerText === '.' && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === '.' && haveDot) {
      return;
    }
    disMain += e.target.innerText;
    displayMain.innerText = disMain;
  })
});

//created an event listener for the operations buttons, making a rule where the operation symbols will not show if there isn't a number already entered 


operators.forEach( operations => {
  operations.addEventListener('click', (e) => {
    if (!disMain) return; 
    haveDot = false;
    const operationName = e.target.innerText;
    if(disMain && prevOperation) {
      mathOperations();
    } else {
      result = parseFloat(disMain);
    }
    console.log(results)
  })
})

