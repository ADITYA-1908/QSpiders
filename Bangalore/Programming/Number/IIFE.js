function range(s, e, opeartion) {
    return opeartion(s, e)
}
function add(a, b) {
    console.log(a + b)
}
function sub(a, b) {
    console.log(a - b)
}
range(20, 10, add)
range(20, 10, sub)