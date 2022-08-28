"use strict";
function usetype(pt) {
    console.log(pt.x, pt.y);
}
usetype({ x: '服了', y: 666 });
function useid(word) {
    console.log('word其实就是' + word);
}
useid('周泽龙');
const user = {
    x: 'zzl',
    y: 22,
    z: true
};
console.log(user);
