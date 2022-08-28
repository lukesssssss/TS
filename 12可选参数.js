"use strict";
//?表示是一个可选参数
function addall(num) {
    let a = 0;
    num === null || num === void 0 ? void 0 : num.forEach(item => {
        a = item + a;
    });
    console.log(a);
}
addall([1, 5, 7, 45, 8]);
function want(dreamOrMoney, valueOrQian, sad) {
    if (sad === true) {
        return console.log(dreamOrMoney + '( $ _ $ )' + valueOrQian);
    }
    else {
        return ('大丈夫当如是' + dreamOrMoney + valueOrQian);
    }
}
console.log(want('燕雀安知鸿鹄之志', '穷且益坚，不坠青云之志'));
