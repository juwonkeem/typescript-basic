/**
 * Unknown Type
 */
let anyValue: any;

anyValue = 24;
anyValue = '아이유';
anyValue = false;
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;

let unknownValue: unknown;

unknownValue = 24;
unknownValue = '아이유';
unknownValue = false;
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;

// let anyType: any = anyValue;
// let unknownType: unknown = anyValue;
// let booleanType: boolean = anyValue;
// let arrayType: string[] = anyValue;
// let objectType: {} = anyValue;
// let nullType: null = anyValue;
// let undefinedType: undefined = anyValue;

// let anyType: any = unknownValue;
// let unknownType: unknown = unknownValue; 
// 위 두개만가능

// let booleanType: boolean = unknownValue;
// let arrayType: string[] = unknownValue;
// let objectType: {} = unknownValue;
// let nullType: null = unknownValue;
// let undefinedType: undefined = unknownValue;

anyValue.toUpperCase();
anyValue.name;
new anyValue();

// 차이 : any는 어떤것이든 가능하다 / unknown 은 아무것도 알지못하다.
// 밑에것들 unknown은 다 안된다
// unknownValue.toUpperCase();
// unknownValue.name;
// new unknownValue();

function isString(target: unknown) : target is string{
    return typeof target === 'string';
}

let testVal: unknown;

if(isString(testVal)){
    testVal;
}

/**
 * Union Type - unknown이 모든 타입을 흡수하지만 any일때는 예외다.
 */
type uOrString = unknown | string;
type uOrBoolean = unknown | boolean;
type uOrNumber = unknown | number;
type uOrAny = unknown | any;    
type anyOrU = any | unknown;

/**
 * Intersection Type
 */
type uAndString = unknown & string;
type uAndBoolean = unknown & boolean;
type uAndNumber = unknown & number;
type uAndAny = unknown & any;
type anyAndU = any & unknown;

/**
 * Operator 사용
 */
let number1: unknown = 10;
let number2: unknown = 20;

// 모르는 타입이기 때문에 연산자 다 안된다.
// number1 + number2;
// number1 - number2;
// number1 * number2;
// number1 / number2;

// 같냐안같냐는 가능
number1 === number2;
number1 == number2;
number1 !== number2;
number1 != number2;