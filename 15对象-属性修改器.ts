//扩展类型
interface badman {
    like: string,
    tall: number
}

interface goodman {
    heart: string,
    have: boolean
}
//开始扩展
interface person extends badman, goodman {
    all: string
}

let man: person = {
    like: 'money',
    tall: 168,
    heart: 'good',
    have: false,
    all: 'is person'
}
console.log(man);
//交叉类型
const allone: badman & goodman = {
    like: 'money',
    tall: 170,
    heart: 'bad',
    have: false
}