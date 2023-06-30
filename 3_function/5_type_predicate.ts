/**
 * Type Predicate
 */
function isNumber(input: any): input is number{
    return typeof input === 'number';
}

console.log(isNumber(10));

function isNumberRetBool(input: any): boolean{
    return typeof input === 'number';
} // <- 이렇게 해도되잖아 왜 위에처럼 inNumber로 지정해야하나?
// 밑에 any의 경우 설명
let number: any = 5;

if(isNumberRetBool(number)){
    number; //조건이 성립되면 number로 인식해주면 좋겠는데 위에 any라서 any로 인식되고있음
}

if(isNumber(number)){
    number; //any로지정했어도 조건이 true가 반환되면 안에서 number가 확실히 나오고 타입스크립트가 number타입으로 확실히 인지한다
}

interface Doge{
    name: string;
    age: number;
}

interface Cat{
    name: string;
    breed: string;
}

type DogeOrCat = Doge | Cat;

function isDoge(animal: DogeOrCat): animal is Doge{
    return (animal as Doge).age !== undefined;
}

const doge: DogeOrCat = Math.random() > 0.5 ? {
    name: '도지',
    age: 32,
} : {
    name: '오리',
    breed: '코리안 길냥이'
}

if(isDoge(doge)){
    doge;
}else{
    doge;
}