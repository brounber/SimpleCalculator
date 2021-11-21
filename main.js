const displayMain = document.querySelector('.display__main');
const displayResult = document.querySelector('.display__results');
const numbers = docuemnt.querySelector('.button__number');
const operators = document.querySelector('.button__operation');
const equals = document.querySelector('.button__equal');
const clear = document.querySelector('button__last-entity-clear');

let displayMain = '';
let displayResult = null;
let lastOperation = '';
let haveDot = false; 

