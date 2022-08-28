type point = {
    x: string,
    y: number
}

function usetype(pt: point) {
    console.log(pt.x, pt.y);

}
usetype({ x: '服了', y: 666 })

type id = number | string

function useid(word: id) {
    console.log('word其实就是' + word);
}

useid('周泽龙')
//开始拓展类型别名
type point2 = point & {
    z: boolean
}
const user:point2 = {
    x:'zzl',
    y:22,
    z:true
}
console.log(user);
