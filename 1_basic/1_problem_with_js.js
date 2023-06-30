/**
 * JS문제점
 * 
 * dynamically typed
 * 
 */


"use strict";
function add(num1, num2) {  //변수이름때문에 숫자인건 예상가능하지만 어떤변수인지 알 수 없다
        return num1 + num2;
}
console.log(add(1, 2));
console.log(add(1, '2'));
console.log(add('1', '2'));

