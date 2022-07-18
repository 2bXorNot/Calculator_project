console.log('running_cal_3');


let numbersArr = [[],[]];
console.log(numbersArr);

let count = 0; let contador = 0; console.log(count); let sum = 0; let symbol = ''; let firstSubArrAdded  = ''; let secondSubArrAdded = '';

//

const subArrLoops = () => {for(let i = 0; i < numbersArr[0].length; i++){firstSubArrAdded += numbersArr[0][i];console.log(firstSubArrAdded);}; for(let j = 0; j < numbersArr[1].length; j++){secondSubArrAdded += numbersArr[1][j];console.log(secondSubArrAdded);};};

// Clear: for loop and empty strings

const forLoopClearArr = () => {for(let i = numbersArr[0].length; i > 0; i--){numbersArr[0].shift()}; for(let k = numbersArr[1].length; k > 0; k--){numbersArr[1].shift();};};
const clearSubArrAdded = () => {firstSubArrAdded = ''; secondSubArrAdded = '';};

// Operations

const sumAddition = () => {sum = Number(firstSubArrAdded) + Number(secondSubArrAdded); console.log(Number(sum.toFixed(2)));};
const sumSubtraction = () => {sum = Number(firstSubArrAdded) - Number(secondSubArrAdded); console.log(Number(sum.toFixed(2)));};
const sumMultiplication = () => {sum = Number(firstSubArrAdded) * Number(secondSubArrAdded); console.log(Number(sum.toFixed(2)));};
const sumDivision = () => {sum = Number(firstSubArrAdded) / Number(secondSubArrAdded); console.log(Number(sum.toFixed(2)));};

// Limits to counters

const restrictCount = () => {if(count === 1) {count = 0;};};
const contadorOperationButton = () => {if(contador === 2) {subArrLoops();};};

//

const equalsButton = () => {subArrLoops(); if(symbol === '+' ){sumAddition();}; if(symbol === '-'){sumSubtraction();}; if(symbol === '*'){sumMultiplication();}; if(symbol === '/'){sumDivision();};forLoopClearArr();numbersArr[0].push(sum);count = 0;clearSubArrAdded();numbersArr[1]};

const addButton = () => {restrictCount();symbol = '+';count++;contador++;contadorOperationButton();sumAddition();clearSubArrAdded();forLoopClearArr();numbersArr[0].push(sum);numbersArr[1];};
const subtractButton = () => {restrictCount(); symbol = "-"; count++; contador++; contadorOperationButton(); sumSubtraction();clearSubArrAdded();};
const multiplyButton = () => {restrictCount();symbol = "*";count++;contador++;subArrLoops();sumMultiplication();clearSubArrAdded();};
const divideButton = () => {restrictCount();symbol = "/";count++;contador++;console.log(contador);subArrLoops();sumDivision();clearSubArrAdded();};


const numberOneButton = () => {numbersArr[count].push('1');};
const numberTwoButton = () => {numbersArr[count].push('2');};
const numberThreeButton = () => {numbersArr[count].push('3');};
const numberFourButton = () => {numbersArr[count].push('4');};
const numberFiveButton = () => {numbersArr[count].push('5');};
const numberSixButton = () => {numbersArr[count].push('6');};
const numberSevenButton = () => {numbersArr[count].push('7');};
const numberEightButton = () => {numbersArr[count].push('8');};
const numberNineButton = () => {numbersArr[count].push('9');};
const numberZeroButton = () => {numbersArr[count].push('0');};
const periodButton = () => {if(count === 1){numbersArr[count].push('.');};document.getElementById("button-period").disabled = true;};

const clearButton = () => {forLoopClearArr();count = 0;console.log(count);clearSubArrAdded();};
