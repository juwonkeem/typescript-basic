/**
 * Statement and Expression - 함수를 선언하는 두가지 방법
 */

// statement (문장)
function addTwoNumbers(x: number, y: number) {
    return x + y;
}

// expression (표현식)
const addTwoNumbersExp = (x: number, y: number) => {
    return x + y;
}

/**
 * Statement : 하나하나 타입을 다 설정해줘야한다
 */
function add(x: number, y: number) : number{
    return x + y;
}

function subtract(x: number, y: number) : number{
    return x - y;
}

function multiply(x: number, y: number) : number{
    return x * y;
}

function divide(x: number, y: number) : number{
    return x / y;
}

/**
 * Expression  // 함수 선언할 때 더 유용한방법
 */
type CalculationType = (x: number, y: number) => number;

const add2 : CalculationType = function(x, y){
    return x + y;
}

const subtract2 : CalculationType = function(x, y){
    return x - y;
}

const multiply2 : CalculationType = function(x, y){
    return x * y;
}

const divide2 : CalculationType = function(x, y){
    return x / y;
}