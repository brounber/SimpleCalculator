/*==================== querySelector created  ====================*/

const DisplayMain = document.querySelector('.display__main');
const DisplayResults = document.querySelector('.display__results');
const allNumbers = document.querySelectorAll('.button__number');
const allOperations = document.querySelectorAll('.button__operation');
const equalOperations = document.querySelector('.button__equal');
const clearAll = document.querySelector('.button__last-entity-clear');

/*==================== variables created  ====================*/

let disMain = '';
let disSec = '';
let result = null;
let lastOperation = '';
let haveDot = false;

/*==================== 'dot' rule created  ====================*/

allNumbers.forEach( number => {
  number.addEventListener('click', (e)=>{
    if(e.target.innerText === '.' && !haveDot){
      haveDot = true;
    } else if (e.target.innerText === '.' && haveDot){
      return;
    }
    /*==================== input on the screen  ====================*/
    disSec += e.target.innerText;
    DisplayResults.innerText = disSec;
  })
});

/*==================== operations buttons functionality and clear created  ====================*/

allOperations.forEach( operation => {
  operation.addEventListener('click', (e)=> {
    if (!disSec) return;
    haveDot = false;
    const operationName = e.target.innerText;
    if (disMain && disSec && lastOperation){
      mathOperation();

    }else{
      result = parseFloat(disSec);
    }
    clearVar(operationName);
    lastOperation = operationName;
    console.log(result)
  })
});

// from the internet 
function clearVar(name = ''){
  disMain += disSec + ' ' + name + ' ';
  DisplayMain.innerText = disMain;
  DisplayResults.innerText = '';
  disSec = '';
};


/*==================== Mathoperations  created  ====================*/

function mathOperation() {
  if (lastOperation === 'x') {
    result = parseFloat(result) * parseFloat(disSec);
  } else if (lastOperation === '+') {
    result = parseFloat(result) + parseFloat(disSec);
  } else if (lastOperation === '-') {
    result = parseFloat(result) - parseFloat(disSec);
  } else if (lastOperation === '/') {
    result = parseFloat(result) / parseFloat(disSec);
  }else if( lastOperation === '%'){
    result = parseFloat(result) % parseFloat(disSec);
  }
};
/* square root was removed as it was giving errors and could not understadnw hy it owcoiuld not understad the matho*/

/*==================== equal function created  ====================*/


equalOperations.addEventListener('click', ()=> {
  if (!disSec || !disMain) ;
  haveDot = false;
  mathOperation();
  clearVar();
  DisplayResults.innerText = result;
  disSec = result;
  disMain = '';
});

/*====================clear functioncreated  ====================*/

clearAll.addEventListener('click', ()=>{
  disMain = '';
  disSec = '';
  DisplayMain.innerText ='';
  DisplayResults.innerText ='';
  result = '';
});


/*==================== event listener for keys entered ====================*/

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
    e.key === '%' 
  ){
    clickOperation(e.key);
  }
  else if(e.key === '*'){
    clickOperation('x')
  } else if( e.key == "Enter" || e.key === '='){
    clickEqual();
  }

});
function clickButtonEl(key) {
  allNumbers.forEach(button => {
    if (button.innerText === key) {
      button.click();
    }
  })
};
function clickOperation(key){
  allOperations.forEach( operation => {
    if(operation.innerText === key){
      operation.click()
    }
  })
};

/*==================== finaly operations   ====================*/
function clickEqual(){
  equalOperations.click();
};