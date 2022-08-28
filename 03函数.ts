function greet(name: string, age: any): string {
    return `${name}你这个${age}怎么睡得着的`
}


console.log(greet('zzl', 22));

//对象类型
function pjia(pt: { gx: string, lh: string }) {
    console.log(pt.gx, pt.lh);
}
pjia({ gx: 'sb', lh: 'erzi' })
//?表示可传可不传
function shop(pt: { apple: number | string[], bannlala?: string }) {
    console.log(pt);
    console.log(`apple的价格是${pt.apple},香蕉是${pt.bannlala?.toUpperCase()}`);
}
shop({ apple: 66, bannlala: '不买' })
