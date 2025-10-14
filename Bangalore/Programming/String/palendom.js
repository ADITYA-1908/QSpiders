//string palendrom 
let str = "madam"
let bag = "";
function isPalendrom(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        bag += str[i];
    }
    return bag === str ? true : false
}
let data = isPalendrom(str)
if (data) {
    console.log("palendrom")
} else {
    console.log("not a paledrom")
}
