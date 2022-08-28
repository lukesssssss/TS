"use strict";
//计算面积函数
function mianji(thing) {
    switch (thing.kind) {
        case '圆形':
            return Math.PI * thing.radius ** 2;
        case '正方形':
            return thing.side ** 2;
    }
}
console.log(Math.round(mianji({ kind: '圆形', radius: 8 })));
