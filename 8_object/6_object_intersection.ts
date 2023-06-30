/**
 * Object Intersection
 */
type PrimitiveIntersection = string & number;

type PersonType = {
    name: string;
    age: number;
}

type CompanyType = {
    company: string;
    companyRegistrationNumber: string;
}

type PersonAndCompany = PersonType & CompanyType;
// 왼쪽 오른쪽 모두 충족해줘야함 exension과 같은 작용

const jisoo: PersonAndCompany = {
    name: '지수',
    age: 32,
    company: 'YG',
    companyRegistrationNumber: 'xxxyyyyzzzz',
}

type PetType = {
    petName: string;
    petAge: number;
}

type CompanyOrPet = PersonType & (CompanyType | PetType);

const companyOrPet: CompanyOrPet = {
    // PersonType
    name: '코드팩토리',
    age: 32,


    // CompanyType 이나 PetType 중에 하나만 충족하면 둘 중 하나는 덜충족해도 상관없다
    // CompanyType
    company: '주식회사 코드팩토리',
    companyRegistrationNumber: 'xxxyyyzzz',

    // PetType
    petName: '오리',
    petAge: 8,
}