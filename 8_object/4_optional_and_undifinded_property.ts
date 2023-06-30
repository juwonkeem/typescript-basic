/**
 * Optional and Undefined Property
 */
interface Dog {
    name: string;
    age: number;
    // 종을 모르면 undefined를 넘겨줘도 괜찮다는 의미
    breed?: string;
}

const byulE: Dog = {
    name: '별이',
    age: 12,
    breed: '미니핀',
}

const ori: Dog = {
    name: '오리',
    age: 3,
}

interface Cat{
    name: string;
    age: number;
    breed?: string | undefined;
}

const nabi: Cat = {
    name: '나비',
    age: 7,
    // breed: undefined,
    // 옵셔널 : ?. 을 넣지않으면 undifined인 경우에도 위 처럼 명시해줘야함
    // ? 넣는것은 입력을 해도 되냐 안해도되냐 이거 차이 
}