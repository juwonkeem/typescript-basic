// exclude와 반대 
type stringOnly = Extract<string | boolean | number, string>;   // stirng 만 추출

type functionOnly = Extract<string | (() => void), Function>;   // 함수 만 추출