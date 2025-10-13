let arr = [1, 2, 3, 4]
let element = 5

function myPush(arr, element) {
    arr[arr.length] = element
    return arr
}
let data = myPush(arr, element)
console.log(data)