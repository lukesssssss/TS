function fn(hanshu: (name: string) => void) {
    hanshu('我就是zzl')
}

function myname(mz: string) {
    console.log(mz);
}

fn(myname)

//调用签名
type tothing = {
    jiao: string,
    //规定函数传入的值和返回的值必须是number类型
    (num: number): number
}
//传入一个函数，并能够在get中调用这个函数
function get(thenum: tothing) {
    console.log(thenum(66),thenum.jiao);
}
function fuck(num: number) {
    console.log(num*10);
    return num*10
}
fuck.jiao = 'laji'
get(fuck)