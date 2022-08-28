//?表示是一个可选参数
function addall(num?: number[]) {
    let a: number = 0
    num?.forEach(item => {
        a = item + a
    })
    console.log(a);

}
addall([1, 5, 7, 45, 8])

//函数重载
function want(dream: string, value: string): string
function want(money: string, qian: string, sad: boolean): string
function want(dreamOrMoney: string, valueOrQian: string, sad?: boolean) {
    if (sad === true) {
        return console.log(dreamOrMoney + '( $ _ $ )' + valueOrQian);

    } else {
        return ('大丈夫当如是' + dreamOrMoney + valueOrQian)
    }
}
console.log(want('燕雀安知鸿鹄之志', '穷且益坚，不坠青云之志'));
