/**
 * Required Type
 * : 모든 프로퍼티가 충족해야함 (ooptional이라도)
 */
interface Dog {
    name: string;
    age?: number;
    country?: string;
}

const requiredDog: Required<Dog> = {
    name: '모찌',
    age: 7,
    country: '한국'
}