console.log('running_cal_3');

let numbersArr = [[],[]];
console.log(numbersArr);

let count = 0;
console.log(count);
let sum = 0;
let symbol = '';
let firstSubArrAdded  = '';
let secondSubArrAdded = '';

//clear functions

function forLoopClearArr() {
    for(let i = numbersArr[0].length; i > 0; i--) {
        numbersArr[0].shift()
    };
    for(let k = numbersArr[1].length; k > 0; k--) {
        numbersArr[1].shift();
    };
};
function clearSubArrAdded() {
    firstSubArrAdded = '';
    secondSubArrAdded = '';
};

//

function equalsButton(){ 
    for(let i = 0; i < numbersArr[0].length; i++) {
        firstSubArrAdded += numbersArr[0][i];
        console.log(firstSubArrAdded);
        
    };
    for(let j = 0; j < numbersArr[1].length; j++) {
        secondSubArrAdded += numbersArr[1][j];
        console.log(secondSubArrAdded);
        
    };
    if(symbol === '+') {
        sum = Number(firstSubArrAdded) + Number(secondSubArrAdded);
        console.log(Number(sum.toFixed(2)));
    };
    if(symbol === '-') {
        sum = Number(firstSubArrAdded) - Number(secondSubArrAdded);
        console.log(Number(sum.toFixed(2)));
    };
    if(symbol === '*') {
        sum = Number(firstSubArrAdded) * Number(secondSubArrAdded);
        console.log(Number(sum.toFixed(2)));
    };
    if(symbol === '/') {
        sum = Number(firstSubArrAdded) / Number(secondSubArrAdded);
        console.log(Number(sum.toFixed(2)));
    };
    forLoopClearArr();
    numbersArr[0].push(sum);
    count = 0;
    clearSubArrAdded();
    numbersArr[1];
};


function restrictCount() {
    if(count === 1) {
        count = 0;
    };
};
function addButton() {
    restrictCount();
    //console.log(count);
    symbol = '+';
    count++;
};
function subtractButton() {
    restrictCount();
    symbol = "-";
    count++;
};
function multiplyButton() {
    restrictCount();
    symbol = "*";
    count++;
};
function divideButton() {
    restrictCount();
    symbol = "/";
    count++;
};

console.log(count);

function numberOneButton() {
    numbersArr[count].push('1');
};
function numberTwoButton() {
    numbersArr[count].push('2');
};
function numberThreeButton() {
    numbersArr[count].push('3');
};
function numberFourButton() {
    numbersArr[count].push('4');
};
function numberFiveButton() {
    numbersArr[count].push('5');
};
function numberSixButton() {
    numbersArr[count].push('6');
};
function numberSevenButton() {
    numbersArr[count].push('7');
};
function numberEightButton() {
    numbersArr[count].push('8');
};
function numberNineButton() {
    numbersArr[count].push('9');
};
function numberZeroButton() {
    numbersArr[count].push('0');
};
function periodButton() {
    if(count === 1) {
        numbersArr[count].push('.');
        
    };    
    document.getElementById("button-period").disabled = true;
};


function clearButton() {
    forLoopClearArr();
    clearSubArrAdded();
    count = 0;
    console.log(count);
};

