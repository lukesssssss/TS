"use strict";
//感觉有点像对象
function all(jia) {
    return jia.x + jia.y + jia.z;
}
console.log(all({
    x: 5,
    y: 66,
    z: 12
}));
//数字类型
//返回的值只能是这三个数之中的
function num(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
}
console.log(num(5, 10));
