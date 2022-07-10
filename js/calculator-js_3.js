console.log('running_cal_3');

numbersArr = [[],[]];
console.log(numbersArr);

let count = 0;
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
    count++
    final = (Number(firstSubArrAdded) + Number(secondSubArrAdded));
    console.log(Number(final.toFixed(2)));
};
function subtractButton() {
    count++
    final = (Number(firstSubArrAdded) - Number(secondSubArrAdded));
    console.log(Number(final.toFixed(2)));
};
function multiplyButton() {
    count++
    final = (Number(firstSubArrAdded) * Number(secondSubArrAdded));
    console.log(Number(final.toFixed(2)));
};
function divideButton() {
    count++
    final = (Number(firstSubArrAdded) / Number(secondSubArrAdded));
    console.log(Number(final.toFixed(2)));
};


function cButton() {
    //numbersArr = numbersArr.splice(2)
    //console.log(numbersArr);
};

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
    numbersArr[count].push('.');
};

