/**
 * Function Type
 */


type Mapper = (x:string) => string;
const runner = (callback: Mapper)=> {
    return ['a','b','c'].map(callback)
}
console.log(runner((x) => `알파벳: ${x}`));

//자바스크립트 ㄱ
// const runner = () => {
//    return ['a','b','c'].map ( x => `알파벳 ${x}` )
//}
//console.log(runner());

type MultiplyTwoNumbers = (x: number, y: number) => number;

                        //이부분은 선언해줘서 어떤타입인지 알 수 있다. 
const multiplyTwoNumbers: MultiplyTwoNumbers = (a,b)=>{
    return a + b;
}

/**
 * Interface로 함수 타입 선언하기
 */
interface IMultiplyTwoNumbers{
    (x: number, y: number): number;
}

const multiplyTwoNumbers3: IMultiplyTwoNumbers = (x, y) => {
    //return true;
    return x * y;
}