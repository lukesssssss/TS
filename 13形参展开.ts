function fruits(cheap: number, ...m: string[]) {
    return ('价格是' + cheap + '有' + m.join('|'))
}
//为什么我这么贫穷，555
console.log(fruits(7, 'apple', 'orange', 'lizi'));
