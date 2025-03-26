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

//6.return function

function add(a, b) {
  let c = a + b;
  return c;
}
var total = add(5, 2);
console.log(total);

//7.HOF (Higher order function)
function parent(x) {
  x(20);
}
parent(function chield(y) {
  console.log(y);
});

//example 2

console.log("HOC example 2 ");
function hoc(a, b, task) {
  const r = task(a, b);
  console.log(r);
}
hoc(2, 2, add);
hoc(4, 2, sub);
hoc(2, 2, mul);
hoc(4, 2, div);

function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mul(x, y) {
  return x * y;
}

function div(x, y) {
  return x / y;
}

//nested function
function parents(x) {
  function childrens(y) {
    console.log("child function" + x);
    function grandchield() {
      console.log("g-child");
    }
  }
  console.log("parents function" + y);
  return childrens;
}
parents(10)(20);
