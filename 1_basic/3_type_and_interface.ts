/**
 * Type and Interface
 */

/**
 * Type
 * 
 * 타입은 쉽게 말해서 TS의 타입에 이름을 지어주는 역할을 한다.
 */
type NewStringType = string;

type NewNullType = null;

type NewNumberType = number;

type MaleOrFemale = 'male' | 'female';

const stringVar: NewStringType = 'test';    
//2번파일에서 선언했기 때문에 또 선언했다고 오류가 뜸
//tsconfig파일에서  "moduleDetection": "auto" ->  "moduleDetection": "force"로 변환 후 주석풀어줌 -> 중복가능

type IdolType = {
    name: string;
    year?: number;
}

const yuJin: IdolType = {
    name: '안유진',
    // year: 2002,
    // ㄴ optional을 넣었기 때문에 넣어도 되고 안넣어도 된다 
}

/**
 * Interface
 * 
 * 인터페이스는 = 이 없어도 된다
 */
interface IdolInterface {
    name: string;
    year: number;
}

const yuJin2 : IdolInterface = {
    name: '안유진',
    year: 2002,
}

interface IdolIT {
    name: NewStringType;
    year: NewNumberType;
}

const yuJin3: IdolIT = {
    name: '안유진',
    year: 2002,
};

interface IdolOptional{
    name: string;
    year?: number;
    
}

const yuJin4: IdolOptional = {
    name: '안유진',
    // year: 2002,
}