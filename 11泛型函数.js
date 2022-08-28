"use strict";
function animal(pet) {
    return pet.slice(0, 2);
}
//通过自己指定便只能用string类型
console.log(animal(['pig', 'dog', 'bird']));
//限制条件
function shuzi(num) {
    if (num[0].length > num[1].length) {
        return 1;
    }
    else {
        return 0;
    }
}
console.log(shuzi(['11', '11']));
