/**
 * Problems with Array in JS
 */
const number = [1, '2', 3, '4', 5];

let strings: string[] = ['1', '2', '3'];

// strings.push(1);

let stringsOrNumbersArray: (string | number)[] = [
    1,
    '2',
    3,
    '4',
]

let stringArrNumberArr: string[] | number[] = [
    1,
    2,
    3,
]

stringArrNumberArr = [
    '1', '2', '3',
]

let stringOrNumberArr: string | number[] = [
    1, 2, 3
]

stringOrNumberArr = '3';

let boolsArr = [true, false, true];

boolsArr.push(false);

// boolsArr.push(1);

const onlyString = ['1', '2', '3'];
const onlyNumbers = [1, 2, 3];

for(let i = 0; i < onlyString.length; i++){
    let item = onlyString[i];
}

for(let item of onlyNumbers){

}

let number3 = onlyNumbers[0];

// 타입스크립트는 없어도 number로 인식하기 때문에 undifinde가 안나와서 버그 만들수도있다 주의 !
let number4 = onlyNumbers[9999];