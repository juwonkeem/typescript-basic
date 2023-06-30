/**
 * Property Check
 * 
 * 초과 속성 검사
 */
type TName = {
    name: string;
}

type TAge = {
    age: number;
}

// 객체리터럴을 직접 입력 할 때만 초과됨
const iu = {
    name: '아이유',
    age: 30,
}

// 타입스크립트 - 빌드될 때 컴파일 될 뿐이지 결국 자바스크립트로 컴파일되면 다 의미없다
const testName: TName = iu;
const testAge: TAge = iu;