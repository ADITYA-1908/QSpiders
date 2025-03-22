//Function

// 1. Named function
function sundari() {
  console.log("Named function");
}

sundari();

//2. Anonymous function
var bro = function () {
  console.log("Anonymous function");
};
bro();

//3. function expression
var x = function y() {
  console.log("function expression");
};

x();

//4. IIFE
(function () {
  console.log("IIFE");
})();

//5.Arrow function

var demo = () => {
  console.log("Arrow function");
};

demo();

//return keyword

function add(a, b) {
  let c = a + b;
  return c;
}
var total = add(5, 2);
console.log(total);
