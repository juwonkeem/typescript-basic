/**
 * Key Value Mapping - 어렵넹
 */

enum State {
    loading,
    done,
    error,
}

type GlobalApiStatus = {
    getUser: State;
    paginateUsers: State | undefined;
    banUser: State | null;
    getPosts: State;
}

type UserApiStatus = {
    getUser: State;
    paginateUsers: State | undefined;
    banUser: State | null;
}

type UserApiStatus2 = {
    getUser: GlobalApiStatus['getUser'];
    paginateUsers: GlobalApiStatus['paginateUsers'];
    banUser: GlobalApiStatus['banUser'];
}

type UserApiStatus3 = {
    // 대괄호 꼭 넣어주기
    // 이 키값들을넣어줘야 k를 변수처럼 쓸수있다
    // [] 안에는 key값만 입력 : 
    [k in 'getUser' | 'paginateUsers' | 'banUser']: GlobalApiStatus[k];
    // 이거와 동일
    // getUser: 
    // paginateUsers:
    // banUser:
}
                        //pick : 어디서부터 값을 골라오고싶은지
type PickedUserApiStatus = Pick<GlobalApiStatus, 'getUser' | 'banUser' | 'paginateUsers'>;
                        //Omit : 제외하고싶은것만 넣어주면된다
type OmitUserApiStatus = Omit<GlobalApiStatus, 'getPosts'>;

/**
 * keyof
 */
type AllKeys = keyof GlobalApiStatus;

const key: AllKeys = 'getUser';

// keyof 쓰면 다 들어옴
type KeyOfUserApiStatus = {
    [k in keyof GlobalApiStatus]: GlobalApiStatus[k];
}

// Exclude 쓰면 제외가능
type KeyOfUserApiStatus2 = {
    [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]: GlobalApiStatus[k];
}

type KeyOfUserApiStatus3 = {
    [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]?: GlobalApiStatus[k];
}

interface LoadingStatus {
    type: 'loading';
    data: string[];
}

interface ErrorStatus {
    type: 'error';
    message: string;
}

type FetchStatus = LoadingStatus | ErrorStatus;

type StatusType = FetchStatus['type'];