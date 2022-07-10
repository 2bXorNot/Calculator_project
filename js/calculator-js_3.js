console.log('running_cal_3');

numbersArr = [[],[]];
console.log(numbersArr);

let cont = 0;
let final = 0;
let firstSubArrAdded  = '';
let secondSubArrAdded = '';
function equalsButton() {
    for(let i = 0; i < numbersArr[0].length; i++) {
        for(let k = 0; k < numbersArr[0][i]; k++) {
            firstSubArrAdded += numbersArr[0][k];
            console.log(firstSubArrAdded);
        };
    };
    for(let j = 0; j < numbersArr[1].length; j++) {
        for(let p = 0; p < numbersArr[1][j].length; p++) {
            secondSubArrAdded += numbersArr[1][p];
            console.log(secondSubArrAdded);
        };
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
}
function numberThreeButton() {
    numbersArr[cont].push('3');
}
console.log(final);




