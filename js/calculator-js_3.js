console.log('running_cal_3');

numbersArr = [[],[]];
console.log(numbersArr);

let cont = 0;
let final = 0;
let firstSubArrAdded  = '';
let secondSubArrAdded = '';
function equalsButton() {
    for(let i = 0; i < numbersArr[0].length; i++) {
            firstSubArrAdded += numbersArr[0][i];
            console.log(firstSubArrAdded);
        
    };
    for(let j = 0; j < numbersArr[1].length; j++) {
            secondSubArrAdded += numbersArr[1][j];
            console.log(secondSubArrAdded);
        
    };
    
    addButton();
    subtractButton();
    multiplyButton();
    divideButton();
       
};

function addButton() {
    cont++
    final = (Number(firstSubArrAdded) + Number(secondSubArrAdded));
    console.log(final);
};
function subtractButton() {
    cont++
    final = (Number(firstSubArrAdded) - Number(secondSubArrAdded));
    console.log(final);
};
function multiplyButton() {
    cont++
    final = (Number(firstSubArrAdded) * Number(secondSubArrAdded));
    console.log(final);
};
function divideButton() {
    cont++
    final = (Number(firstSubArrAdded) / Number(secondSubArrAdded));
    console.log(final);
};


function cButton() {
    //numbersArr = numbersArr.splice(2)
    //console.log(numbersArr);
};

function numberOneButton() {
    numbersArr[cont].push('1');
};
function numberTwoButton() {
    numbersArr[cont].push('2');
};
function numberThreeButton() {
    numbersArr[cont].push('3');
};
function numberFourButton() {
    numbersArr[cont].push('4');
};
function numberFiveButton() {
    numbersArr[cont].push('5');
};
function numberSixButton() {
    numbersArr[cont].push('6');
};
function numberSevenButton() {
    numbersArr[cont].push('7');
};
function numberEightButton() {
    numbersArr[cont].push('8');
};
function numberNineButton() {
    numbersArr[cont].push('9');
};
function numberZeroButton() {
    numbersArr[cont].push('0');
};

