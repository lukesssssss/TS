type peole = {
    foot: boolean,
    head: string
}
type fish = {
    swim: boolean,
    foot: string
}
function isAnimal(animal: peole | fish): animal is peole {
    return (animal as peole).head !== undefined
}


console.log(isAnimal({ foot: true, head:'对的我要' }));

