/**
 * Overloading
 */
/**
 * 파라미터를 
 * 1) 하나를 받거나
 * 2) 세개를 받는 함수 (여러개)
 * ㄴ 하나의함수로 이 두가지 기능을 구현해볼것
 * 
 */

//웬만하면 오버로딩보다 각각 함수를따로 만들어서 사용하는게 유지보수에 더 편리할 수 있다


function stringOrStrings(members: string): string;  //어떤 parameter 받을지 어떤 type 반환할지 시그니쳐만 정의함
function stringOrStrings(member1: string, member2: string, member3:string): string;
// function stringOrStrings(): string;
// 구현체에서 가능한 시그니쳐만 선언가능하다.

/**
 * 만약에 하나의 파라미터만 입력받는다면
 * 아이돌 멤버들을 하나의 스트링으로 입력받는다.
 * 예) '안유진, 장원영, 레이'
 * 
 * 만약에 세개의 파라미터를 받는다면
 * 각각 아이돌을 각각의 파라미터의 값으로 입력한다.
 * 예) '안유진', '장원영', '레이'
 */
function stringOrStrings(memberOrMembers: string, member2?: string, member3?:string) :string{
    if(member2 && member3){ //member2dhk member3가 입력이 되었다면,
        return `아이브: ${memberOrMembers}, ${member2}, ${member3}`;
    }else{
        return `아이브: ${memberOrMembers}`;
    }
}

console.log(stringOrStrings('안유진, 장원영, 레이'));
console.log(stringOrStrings('안유진', '장원영', '레이'));
// console.log(stringOrStrings('안유진', '장원영')); <- 위에서 하나 또는 세가지 조합만 받을수있다고 명시해놔서 여기서 에러가난다