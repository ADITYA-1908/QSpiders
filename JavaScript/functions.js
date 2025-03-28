// function formatNum(num) {
//     return num.toFixed(2);
// }
// const formattedNum = formatNum(2333.88888)
// console.log(formattedNum)


// const car = {
//     brand: 'honda',
//     model: 'accord',
//     year: 1998
// }
// console.log('i have a car of model',car.brand) // honda
// console.log('i have a car of model '+car.brand) // honda
// function updateBrand(obj) {
//     obj.brand = 'Toyota';
//     obj = null
// }
// updateBrand(car)
// console.log(car.brand) // toyota




//Constructor
// const multiply = new Function('x', 'y', 'return x + y');


// Declaration
// function multiply(x, y) {
    //     return x * y;
    // }
    
    
    
    // Expression - Anonymous function
    // const multiply = function (x, y) {
        //     return x * y;
        // }
        
        // console.log(multiply(2, 3))

// Expression - Named function
// const multiply = function doMultiply(x, y) {
//     return x * y;
// }


// Arrow function
// const multiply = (x, y) => x * y


// Method
// const obj = {
//     multiply(x, y) {
//         return x * y
//     }
// }

// console.log(obj.multiply(7,8))


// const y = function x() { };
// console.log(y());


// console.log(new Function().toString())

// new Function('alert(anonymous);')

//     ();



// globalThis.p = 5;

// function myFunc() {
//     const p = 9;

//     function decl() {
//         console.log(p) // 9
//     }

//     const expr = function () {
//         console.log(p) // 9
//     }

//     const cons = new Function("\tconsole.log(p);") // 5

//     decl()
//     expr()
//     cons()
// }

// myFunc()



// function foo() {
//     console.log('foo!')
// }

// doSomething(
//     function foo() {
//         console.log('foo!')
//     }
// )


// function () {
//     console.log('foo!')
// }();


// (function () {
//     console.log('foo!')
// })();

// void function () {
//     console.log('foo!')
// }();


// function myFunc(a, b, c) {}

// function myFunc({a, b}, c = 1, ...rest) {
//     // console.log(arguments.callee)

//     const x = arguments.length
//     console.log(x);
// }



// "use strict";

// function f() {
//     return 1;
// }

// {
//     function f() {
//         return 2;
//     }
// }

// console.log(f() === 1)



// if (true) {
//     function zero() {
//         console.log('this is zero.')
//     }
// }




// var zero;
// if (true) {
//     zero = function () {
//         console.log('this is zero.')
//     }
// }


                 // 5       4                
// function padZeross(num, totalLen) {

//     let numStr = num.toString()  // '1'
//         //  3           4           1
//     const numZeros = totalLen - numStr.length 

//     for (let i = 0; i < numZeros; i++) {
//        numStr = `0${numStr}`;
//     }

//     return numStr
// }

// let result;

// // result = padZeross(42, 4)

// result = padZeross(5, 4)
// console.log(result)



// if (typeof Window.noFunc() === "function") {
//     console.log('function named function exists')
// } else {
//     return
// }

// function propose(x, y) {
//     return x+y
// }
// console.log(propose(3,4))


// const result = (x,y)=>x+y
// console.log(result(4, 6))

// const anotherVar = result(9, 8)
// console.log(anotherVar)


// const variable = () => {}
// const demo = x => x * 11
// const functionCalled = demo(9)
// console.log(functionCalled)



// function hoc(x, y ,task) {
//     const result = task(x, y)
//     return result
// }

// const hoc = (x, y, task) => {
//     const result = task(x, y)
//     return result
// }

// const add = hoc(10, 20, (a, b) => a + b)
// console.log(add)




function parent() {

    function child() {
        console.log('child function')
        
        function grandChild() {
            console.log('grandchild function')
        }

        return grandChild
    }

    console.log('parent function')
    return child
}

// parent()
const childContainer = parent()
console.log(childContainer)

parent() // child
parent()() // grandchild
parent()()()
// daddy()
