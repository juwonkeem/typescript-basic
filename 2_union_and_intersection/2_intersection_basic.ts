/**
 * Intersection
 * 
 * And
 */
interface Human{
    name: string;
    age: number;
}

interface Contacts{
    phone: string;
    address: string;
}

type HumanAndContacts = Human & Contacts;

let humanAndContacts: HumanAndContacts = {
    name: '코드팩토리',
    age: 32,
    phone: '01012341234',
    address: '서울시'
};

type NumberAndString = number & string;

// let numberAndString: number | string;  <-이건가능

// let numberAndString: NumberAndString = never;
// 앞에서 never는 타입스크립트의 타입 개념이고 = 뒤에 선언하는 never는 자바스크립트 타입이어서 오류남