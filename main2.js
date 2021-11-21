/*==================== querySelector created  ====================*/

const displayResults = document.querySelector('.display__results');
const displayMain = document.querySelector('.display__main');
const numberPad = document.querySelectorAll('.button__number');
const operationPad = document.querySelectorAll('.button__operation');
const equalEl = document.querySelector('.equal');
const clear = document.querySelector('.button__last-entity-clear');

/*==================== variables created  ====================*/
let displayResults = '';
let displayMain = '';
let result = null;
let prevOperation = '';
let haveDot = false;

/*==================== 'dot' rule created  ====================*/

numberPad.forEach( number => {
  number.addEventListener('click', (e)=>{
    if(e.target.innerText === '.' && !haveDot){
      haveDot = true;
    } else if (e.target.innerText === '.' && haveDot){
      return;
    }
    displayMain += e.target.innerText;
    displayMain.innerText = displayMain;
  })
})

/*==================== operations buttons functionality created  ====================*/

operationPad.forEach( operation => {
  operation.addEventListener('click', (e)=> {
    if (!displayMain) return;
    haveDot = false;
    const operationName = e.target.innerText;
    if (displayResults && displayMain && prevOperation){
      mathOperation();

    }else{
      result = parseFloat(displayMain);
    }
    clearVar(operationName);
    prevOperation = operationName;
    console.log(result)
  })
});


function mathOperation() {
  if (prevOperation === 'x') {
    result = parseFloat(result) * parseFloat(displayMain);
  } else if (prevOperation === '+') {
    result = parseFloat(result) + parseFloat(displayMain);
  } else if (prevOperation === '-') {
    result = parseFloat(result) - parseFloat(displayMain);
  } else if (prevOperation === '/') {
    result = parseFloat(result) / parseFloat(displayMain);
  } else if( prevOperation === '%'){
    result = parseFloat(result) % parseFloat(displayMain);
  } 
}

equalEl.addEventListener('click', ()=> {
  if (!displayMain || !displayResults) return;
  haveDot = false;
  mathOperation();
  clearVar();
  displayMain.innerText = result;
  displayMain = result;
  displayResults = '';
})

clear.addEventListener('click', ()=>{
  displayResults = '';
  displayMain = '';
  displayResults.innerText ='';
  displayMain.innerText ='';
  result = '';
});

window.addEventListener('keydown', (e)=>{
  if(
    e.key === '0' ||
    e.key === '1' || 
    e.key === '2' ||
    e.key === '3' ||
    e.key === '4' ||
    e.key === '5' ||
    e.key === '6' ||
    e.key === '7' ||
    e.key === '8' ||
    e.key === '9' ||
    e.key === '.' 
  ){
    clickButtonEl(e.key)
  }else if(
    e.key === '+' ||
    e.key === '-' ||
    e.key === '/' ||
    e.key === '%' ||
    e.key === '√'
  ){
    clickOperation(e.key);
  }
  else if(e.key === '*'){
    clickOperation('x')
    // console.log(e.key)
  } else if( e.key == "Enter" || e.key === '='){
    clickEqual();
  }
  // console.log(e.key)
})

function clickButtonEl(key) {
  numberPad.forEach(button => {
    if (button.innerText === key) {
      button.click();
    }
  })
}
function clickOperation(key){
  operationPad.forEach( operation => {
    if(operation.innerText === key){
      operation.click()
    }
  })
}
function clickEqual(){
  equalEl.click();
}