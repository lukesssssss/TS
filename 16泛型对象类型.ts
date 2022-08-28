type things<Type> = {
    this: Type
}
let dog: things<string> = {
    this: 'gou'
}