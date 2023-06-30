/**
 * Extension
 */
interface IName{
    name: string;
}

interface IIdol extends IName{ // interface에서 상속받을때는 'extends'
    age: number;
}

const idol: IIdol = {   // 상속받은 property 다 적어야한다. 빼면 오류남 == interfacs merging
                        // 이름똑같이하지않아도 다른 interface 가져올 수 있다.
    name: '안유진',
    age: 23,
}

type TName = {
    name: string;
}

type TIdol = TName & { //타입에서 상속받을때는 '&' 넣어줘야함.
    age: number
};

const idol2: TIdol = {
    name: '아이유',
    age: 29,
}

interface IIdol2 extends TName{
    age: number;
}

const idol3: IIdol2 = {
    name: '제니',
    age: 29,
}

type TIdol2 = IName & {
    age: number;
}

const idol4: TIdol2 = {
    name: '지수',
    age: 31,
}

/**
 * extending multiple
 * 타입에서 사용하는 extending은 여러개를 상속 할 수 있다.
 */
type DogName = {
    name: string;
}

type DogAge = {
    age: number;
}

type DogBreed = {
    breed: string;
}

type Dog = DogName & DogAge & DogBreed;

const dog: Dog = {
    name: '코드팩토리',
    age: 32,
    breed: 'Poodl',
}

interface CatName{
    name: string;
}
interface CatAge{
    age: number;
}
interface Cat extends CatName, CatAge{
    breed: string;
}

const cat: Cat = {
    name: '오리',
    age: 7,
    breed: '코리안 냥냥이',
}

/**
 * Overrding
 */
type THeight = {
    height: number;
}

//중복으로 type 설정할 때
type TRectangle = THeight & {
    height: string;     // number와 string 맞춰줘야함. 두개가 다르면 never타입으로뜬다.
    width: number;
}

// const rectangle: TRectangle = {
//     height:, 
//     width: 100,
// }

type TWidth = {
    width: number | string;
}

type TRectangle2 = TWidth & {
    width: number;
    height: number;
}

const rectangle: TRectangle2 = {
    height: 100,
    width: 200,
}

interface IHeight{
    height: number;
}

// interface IRectangle extends IHeight{
//     height: string;
//     width: number;
// }

interface IWidth{
    width: number | string;
}

interface IRectangle extends IWidth{
    width: number;
    height: number;
}