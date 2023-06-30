/**
 * Type vs Interface

    ㄴ 동시에 만들어진 개념이 아님. 원래는 type만 있었는데 후에 interface가 만들어졌다.
       타입에서 안되는 몇가지 기능들을 추가하기위해 inrterface 만들어짐. <- 겹치는 부분이 있다.
       but 인터페이스는 타입을 대체하려고 나온게 아니기 때문에 상이한 부분이 있다.
*/

// Object 선언할때
interface IObject {
    x: number;
    y: number;
}

type TObject = {
    x: number;
    y: number;
}

// function을 선언할때
interface IFunction {
    (x: number, y: number): number;
}

type TFunction = (x: number, y: number) => number;

/**
 * Type에서는 할 수 있지만
 * interface에서는 할 수 없는것들
 */

// (1) primitive 타입 선언하기
type Name = string; // <- interface는 객체형식으로 선언되기 때문에 애초에 이런 형태를 할 수 없다.

// (2) union 타입 선언하기
type UnionType = string | number;

// (3) primitive list 또는 tuple 타입 선언하기
type TupleType = [number, string];

/**
 * Interface는 할 수 있고
 * Type은 못하는 것
 */

// interface merging
interface IRectangle {
    height: number;
}

interface IRectangle {
    width: number;
}
//똑같은이름의 인터페이스 두개 선언함 -> 두개가 다 merge됨 / 무한한 중첩가능

let rectangle: IRectangle = {
    height: 200,
    width: 100,
}

// type TRectangle = {
//     height: number;
// }

// type TRectangle = {
//     width: number;
// }
//type은 중복되는 이름으로 선언 자체가 되지 않는다.

/**
 * Interface Merging
 */
class Review {
    // 프로퍼티 <- 인스턴스에 귀속되는값
    getY = (x: number) => { return x };

    // 메서드 <-프로토타입에 귀속되는 값
    getX(x: number) {
        return x;
    }
}

interface GetXnY {
    getX: (x: number) => number;
    getY: (y: number) => number;
}

interface GetXnY {
    getX: (x: number) => number; // property형태  //== getX : number;
    // getY: (y: string) => number; <- overloading이 안돼서 완전히 똑같이 number로선언해주어야한다
}

interface GetXnY2 {
    getX(x: number): number;    //메서드형태 
    getY(y: number): number;
}

interface GetXnY2 {
    getX(x: number): number;
    getY(y: string): number;
}

const testMethod: GetXnY2 = {
    getX(x){
        return x;
    },
    getY(y){
        return 1;
    }
}


//인터페이스는 extends 사용해서 확장할 수 있지만 type은 확장할 수 있는 기능이 없다.
//타입은 유니온(Union)과 인터섹션(Intersection) 타입을 선언하는 데 사용할 수 있고 인터페이스는 없다.
// /interface는 객체의 구조를 정의하는 데 주로 사용되며, type은 유니온, 인터섹션, 리터럴 타입 등을 정의하는 데 유용함.