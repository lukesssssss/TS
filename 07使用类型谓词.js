"use strict";
function isAnimal(animal) {
    return animal.head !== undefined;
}
console.log(isAnimal({ foot: true, head: '对的我要' }));
