//在严格模式下需要对定义的数组确认里面内容的类型
let friends: Array<string> = ['gx', 'lh', 'ls']
let a: number = 2333
//使用any的话就可以添加任意类型了
let my: Array<any> = ['zzl', 22, false]
console.log(my);
