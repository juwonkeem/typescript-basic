/**
 * Defining Function
 */

// function printName(name){
//     console.log(name);
// }

function printName(name: string) {
    console.log(name);
}

function returnTwoCouples(person1: string, person2: string) {
    return `${person1}과 ${person2}는 사귀고 있습니다.`
}

console.log(returnTwoCouples('아이유', '코드팩토리'));
// returnTwoCouples(0, 1); <- string이 아니여서 안됨
// returnTwoCouples('아이유'); <- 두개의 argument가 필요한데 하나만 넣어서 안됨
// returnTwoCouples('아이유', '코드팩토리', '레드벨벳'); <- 두개가 필요한데 세개도 안됨

/**
 * Optional Parameter
 */
function mulitplyOrReturn(x: number, y?: number) {
    if (y) {
        return x * y;
    } else {
        return x;
    }
}

console.log(mulitplyOrReturn(10, 20));
console.log(mulitplyOrReturn(10));

function multiplyOrReturn2(x: number, y: number = 20) { 
    //y를 optional로 하지 않은 이유 : ? 넣었을 때 값이 없으면 undifid가 되는건데 20이라는 값을 가지고 있기 때문에
    //굳이 넣을 필요가 없다. 왜냐 값이 없으면 자동 20으로 설정됨 / 이런경우에는 안넣어야한다

    return x * y;
}

console.log(multiplyOrReturn2(10));
console.log(multiplyOrReturn2(10, 30));

/**
 * 나머지 매개변수
 */
function getInfiniteParameters(...args: string[]) {
    return args.map((x) => `너무좋아 ${x}`);
}

console.log(getInfiniteParameters('아이유', '아이브', '블랙핑크'))
// console.log(getInfiniteParameters(1, 2, 3))

/**
 * Return Type
 */
function addTwoNumbers(x: number, y: number) {
    return x + y;
}

addTwoNumbers(10, 20);

function randomNumber() {
    return Math.random() > 0.5 ?
        10 : '랜덤';
}

randomNumber();
                                                // 반환타입입력
function subtractTwoNumbers(x: number, y: number): number{
    // return '이게 반환이 되나?'; <- string이여서 에러남
    return x - y;
}

const subtracTwoNumbersArrow = (x: number, y: number) : number => {
    return x - y;
}

/**
 * 특수 반환 타입
 * 
 * void / never
 */
function doNotReturn(): void{
    // 반환값이 없음을 명시함 - ex) 콘솔출력 , 파일쓰기, 이벤트핸들러, 생성자함수 등등 .. 
    console.log('저는 반환을 하지 않습니다.');
}

doNotReturn();

function neverEndingLoop() : never{
    while(true){    //while true 일 때 절대 끝나지 않기때문에 never타입

    }
}

function throwErro2() : never{
    throw Error();
}