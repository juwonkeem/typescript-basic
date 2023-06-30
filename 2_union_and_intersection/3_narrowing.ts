/**
 * Narrowing
 * 
 * Narrowing은 Union 타입에서 더욱 구체적인 타입으로
 * 논리적으로 유추 할 수 있게 되는걸 의미한다.
 */
// let numberOrString: number | string = 'Code Factory';
// numberOrString;

// const decimal = 12.3278;
// console.log(decimal.toFixed(2));

// numberOrString.toFixed();

/**
 * Narrowing 종류
 * 
 * 1) Assignment Narrowing
 * 2) typeof Narrowing
 * 3) Truthiness Narrowing
 * 4) Equality Narrowing
 * 5) in operator narrowing
 * 6) instanceof narrowing
 * 7) discrimated union narrowing (차별된 유니언 내로잉)
 * 8) exhaustiveness checking
 */

// (1) Assignment Narrowing
// 특정 값을 할당해서 내로잉
let numbOrString: number | string = '아이유';

numbOrString.toString();

// (2) typeof narrowing
numbOrString = Math.random() > 0.5 ? 1123 : '아이유';

if (typeof numbOrString === 'string') {
    numbOrString;
} else {
    numbOrString;
}

// (3) Truthiness Narrowing
let nullOrString: null | string[] = Math.random() > 0.5 ? null : ['아이유', '레드벨벳'];

//만약에 이 값이 null 이면 false로 본다
if (nullOrString) {
    nullOrString;
} else {
    nullOrString;
}

// (4) Equality Narrowing
let numbOrString2: number | string = Math.random() > 0.5 ?
    1123 : '아이유';
let stringOrBool2: string | boolean = Math.random() > 0.5 ?
    '아이브' : true;

if (numbOrString2 === stringOrBool2) {
    numbOrString2;
    stringOrBool2;
} else {
    numbOrString2;
    stringOrBool2;
}

let numberOrStringOrNull: number | string | null = Math.random() > 0.5 ?
    1123 : Math.random() > 0.5 ? '안유진' : null;

if (typeof numberOrStringOrNull === 'number') {
    numberOrStringOrNull;
} else {
    numberOrStringOrNull;
}

// (5) in operator narrowing
interface Human {
    name: string;
    age: number;
}

interface Dog {
    name: string;
    type: string;
}

let human: Human = {
    name: '안유진',
    age: 23,
}

let dog: Dog = {
    name: '오리',
    type: 'Yorkshire Terrier',
}

let humanOrDog: Human | Dog = Math.random() > 0.5 ?
    human : dog;

if ('type' in humanOrDog) {
    humanOrDog;
} else {
    humanOrDog;
}

// (6) instanceof narrowing
let dateOrString: Date | string = Math.random() > 0.5 ?
    new Date() : '코드팩토리';

if (dateOrString instanceof Date) {
    dateOrString;
} else {
    dateOrString;
}

// (7) Discriminated Union Narrowing
interface Animal {
    type: 'dog' | 'human';
    height?: number; //human인경우에만 넣게
    // 강아지의 종
    breed?: string;
}

let animal: Animal = Math.random() > 0.5 ?
    {
        type: 'human',
        height: 177,
    } : {
        type: 'dog',
        breed: 'Yorkshire Terrier',
    };

if (animal.type === 'human') {
    animal.height;
} else {
    animal.breed;
    animal.height; // optional (?.) 이기 때문에 뒤에 undifinde가 붙는다
}

interface Human2 {
    type: 'human';
    height: number;
}

interface Dog2 {
    type: 'dog',
    breed: string;
}

interface Fish2{
    type: 'fish';
    length: number;
}

type HumanOrDog2 = Human2 | Dog2 | Fish2;   //뭉뚱그려서 선언하는것보다 여러개로 나누어선언하고 union으로 묶어주는게 타입을 정확히 유추하는데 훨씬 유리하다

let humanOrDog2: HumanOrDog2 = Math.random() > 0.5 ?
    {
        type: 'human',
        height: 177,
    } : Math.random() > 0.5 ? {
        type: 'dog',
        breed: 'Yorkshire Terrier',
    } : {
        type: 'fish',
        length: 12,
    };

if(humanOrDog2.type === 'human'){
    humanOrDog2;
}else{
    humanOrDog2;
}

// (8) Exhuastiveness Checking <- 체크하면서 narrowing 하는 방법
switch(humanOrDog2.type){
    case 'human':
        humanOrDog2;
        break;
    case 'dog':
        humanOrDog2;
        break;
    case 'fish':
        humanOrDog2;
        break;
    default:
        humanOrDog2;    //선언해논 타입에 다 들어가게 되어있기 때문에 default는 절대 될 수 없음. 그래서 never타입
                        //case 'fish'를 제거하면 fish 타입도 될 수 있기 때문에 never타입이 될 수 없다
        const _check : never = humanOrDog2;
        break;
}


/*
Assignment Narrowing:
변수에 값을 할당함으로써 해당 변수의 타입을 좁혀나갑니다. 예를 들어, let x: number | string이라는 변수가 있고, x = 10이라는 값을 할당하면 x의 타입은 number로 좁혀집니다.

typeof Narrowing:
typeof 연산자를 사용하여 변수의 타입을 좁혀나갑니다. 예를 들어, typeof x === "string"으로 조건을 확인하면 x의 타입은 string으로 좁혀집니다.

Truthiness Narrowing:
조건식에서 변수가 true로 평가될 수 있는 경우, 해당 변수의 타입을 좁혀나갑니다. 예를 들어, if (x)라는 조건문에서 x가 false, 0, "", null, undefined 등이 아닌 값으로 평가된다면, x의 타입은 해당 값의 타입으로 좁혀집니다.

Equality Narrowing:
== 또는 === 연산자를 사용하여 변수를 다른 값과 비교함으로써 타입을 좁혀나갑니다. 예를 들어, x === "hello"라는 비교식이 참이라면 x의 타입은 "hello"의 타입으로 좁혀집니다.

in operator narrowing:
in 연산자를 사용하여 객체의 속성 여부를 확인함으로써 타입을 좁혀나갑니다. 예를 들어, "length" in x라는 표현식이 참이라면 x의 타입은 배열 또는 문자열로 좁혀집니다.

instanceof narrowing:
instanceof 연산자를 사용하여 객체의 타입을 확인함으로써 타입을 좁혀나갑니다. 예를 들어, x instanceof Array라는 표현식이 참이라면 x의 타입은 배열로 좁혀집니다.

discriminated union narrowing (차별된 유니언 내로잉):
차별화된 유니언 타입에서 공통 속성을 기반으로 조건문을 작성하여 타입을 좁혀나갑니다. 예를 들어,


*/
