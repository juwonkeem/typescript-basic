/**
 * Object Union
 */

/**
 * 유추된 객체 타입 유니언
 */
const dogOrCat = Math.random() > 0.5 ?
    // 강아지
    {
        name: '별이',
        age: 12,
    } :
    // 고양이
    {
        name: '오리',
        breed: '코리안 길냥이',
    }

dogOrCat.name;
dogOrCat.age;
dogOrCat.breed;

interface Dog {
    name: string;
    age: number;
}

interface Cat {
    name: string;
    breed: string;
}

type DogOrCat = Dog | Cat;

const dogOrCat2: DogOrCat = Math.random() > 0.5 ?
    // 강아지
    {
        name: '별이',
        age: 12,
    } :
    // 고양이
    {
        name: '오리',
        breed: '코리안 길냥이',
    }

dogOrCat2.name; // name은 공통적인거라서 가능한데
// dogOrCat2.age; // 없을수도 있기때문에 밑에두개는 안됨
// dogOrCat2.breed;

//in 사용한 narrowing
if('age' in dogOrCat2){
    dogOrCat2;
    dogOrCat2.age;
    dogOrCat2.name;
}else{
    dogOrCat2;
    dogOrCat2.name;
    dogOrCat2.breed;
}