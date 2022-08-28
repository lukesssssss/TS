"use strict";
class mycomputer {
    constructor(s) {
        this.money = s;
    }
}
//配置传入的构造函数
function getMoney(cpt) {
    console.log(new cpt(6800));
    const like = new cpt(6800);
    return like.money;
}
getMoney(mycomputer);
