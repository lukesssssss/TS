"use strict";
function greet(name, age) {
    return `${name}你这个${age}怎么睡得着的`;
}
console.log(greet('zzl', 22));
//对象类型
function pjia(pt) {
    console.log(pt.gx, pt.lh);
}
pjia({ gx: 'sb', lh: 'erzi' });
//?表示可传可不传
function shop(pt) {
    var _a;
    console.log(pt);
    console.log(`apple的价格是${pt.apple},香蕉是${(_a = pt.bannlala) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`);
}
shop({ apple: 66, bannlala: '不买' });
