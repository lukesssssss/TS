class mycomputer {
    money: number
    constructor(s: number) {
        this.money = s
    }
}
type computer = {
    //确认要传入的是数字类型
    new(s: number): mycomputer
}
//配置传入的构造函数
function getMoney(cpt: computer) {
    console.log(new cpt(6800));
    const like = new cpt(6800)
    return like.money

}

getMoney(mycomputer)