/**
 * Generic 함수에서 사용하기
 */

function whatValue(value: any) {
    return value;
}

const value = whatValue('test');

// <T> : generic 타입 하나 받을건데 t 로 선언할게
function genericWhatValue<T>(value: T): T {
    return value;
}

const genericResult1 = genericWhatValue<number>(123);

let genericResult2 = genericWhatValue('123')

function multipleGenerics<X, Y, Z>(x: X, y: Y, z: Z) {
    return {
        x,
        y,
        z,
    }
}

const multipleGenericResult = multipleGenerics<number, boolean, string>(
    123,
    true,
    '123',
);

const multipleGenericResult2 = multipleGenerics(
    123,
    true,
    '123',
);

function getTuple<X, Y>(val1: X, val2: Y) {
    return [val1, val2] as const;
}

const tuple = getTuple(true, 100);

class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Car {
    brand: string;
    codeName: string;

    constructor(brand: string, codeName: string) {
        this.brand = brand;
        this.codeName = codeName;
    }
}

// 객체반환 / parameter을 자유롭게 받을 수 있는  constructor 가 있는 객체를 타입으로만든다.
                    // T 타입은 어떤타입의 형태를 상속받는지? new(...args: any[]): {} 형태
                    // new(...args: any[]): constructor 에서 parameter을 무한대로 받을거고
                    // : {} : constructor을 실행하면 객체ㅔ타입으로 반환될거다.
                                    // argument 무한하게 여러개 받는다
                                                            // 뭘 할 수 있냐?
function instantiator<T extends { new(...args: any[]): {} }>(constructor: T,...args: any[]) {
                                                            // constructor 라는 parameter 받고 T로선언.
                                                            // ...args: any[] : parameter에 넣어줄 타입
    return new constructor(...args);
}
            // 객체 넣어주고 객체안에 원하는 값을 넣어줌
console.log(instantiator(Idol, '아이유', 23));
console.log(instantiator(Car, 'BMW', 1111));