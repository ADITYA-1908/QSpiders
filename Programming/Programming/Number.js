var prompt = require("prompt-sync")();

// //1) Even or odd number
// function evenOdd(n) {
//   console.log(n % 2 === 0 ? `${n} is a even` : `${n} is a odd`);
// }

// evenOdd(11);
// evenOdd(10);

// //2) WAP to print to find the largest number from 2 number

// function compair(a, b) {
//   console.log(a > b ? `${a} is larger then ${b}` : `${b} is larger then ${a}`);
// }
// compair(10, 11);
// compair(10, 111);

//3) WAP to print to find the largest number from 3 number

// function compair(a, b, c) {
//   console.log(
//     a > b && a > c
//       ? `${a} is larger ${b} and ${c}`
//       : b > c && b > a
//       ? `${b} is larger ${a} and ${c}`
//       : `${c} is larger ${a} and ${b}`
//   );
// }
// compair(10, 11, 12);
// compair(10, 111, 11);

// //4)Square of a number
// function square(n) {
//   console.log(`the square of ${n} is ${n * n}`);
// }
// square(2);
// square(4);

// 5)WAP to to convert a negative number to a positive number
// function isPositive(x) {
//   console.log(x * -1);
// }
// isPositive(-10);
// isPositive(-7);

// //6) WAP to count how many digit presnt in a number
// function countDigit(n) {
//   let c = 0;
//   while (n !== 0) {
//     n = Math.floor(n / 10);
//     c++;
//   }
//   console.log(`Number of digits is ${c}`);
// }
// countDigit(1271);

//7)Reverse a number
// function reverseNumber(n) {
//   let r = 0;
//   while (n !== 0) {
//     let d = n % 10;
//     r = r * 10 + d;
//     n = Math.floor(n / 10);
//   }
//   console.log(`Reversed number is ${r}`);
// }
// reverseNumber(1219);

// // 8) find even and odd number
// function evenOdd(n) {
//   let r = 0;
//   let even = 0;
//   let odd = 0;
//   while (n !== 0) {
//     let d = n % 10;
//     if (d % 2 == 0) {
//       even += 1;
//     } else {
//       odd += 1;
//     }
//     n = Math.floor(n / 10);
//   }
//   console.log(`Total even number is ${even}`);
//   console.log(`Total odd number is ${odd}`);
// }
// evenOdd(1229);

// 9)Armstrong number
// function ArmstrongNumber(n) {
//   let act = n;
//   let r = 0;
//   let p = 0;
//   let temp = n;
//   while (temp > 0) {
//     p++;
//     temp = Math.floor(temp / 10);
//   }
//   temp = n;
//   while (temp !== 0) {
//     let d = temp % 10;
//     r += d ** p;
//     temp = Math.floor(temp / 10);
//   }

//   if (act == r) {
//     console.log(`${r} is armstrong number `);
//   } else {
//     console.log(`${r} is not armstrong number `);
//   }
// }
// ArmstrongNumber(153);

// 10) prime number or not
// function PrimeOrNot(n) {
//   let c = 0;
//   let arr = [1, n];
//   for (let i = 1; i <= Math.floor(n / 2); i++) {
//     if (n % i == 0) {
//       arr.push(i);
//       c += 1;
//     }
//   }
//   if (c == 2) {
//     console.log(`${n} is prime number `);
//     console.log(`factors of ${n} is ${arr} `);
//   } else {
//     console.log(`${n} is not prime number `);
//   }
// }
// PrimeOrNot(3);
// PrimeOrNot(10);

// 11)Strong mumber

// function strongNumber(n) {
//   let act = n;
//   let s = 0;

//   function factorial(d) {
//     if (d == 0 || d == 1) {
//       return 1;
//     }
//     return d * factorial(d - 1);
//   }

//   while (n !== 0) {
//     let d = n % 10;
//     s += factorial(d);
//     n = parseInt(n / 10);
//   }

//   if (s === act) {
//     console.log(`${act} is a Strong Number`);
//   } else {
//     console.log(`${act} is not a Strong Number`);
//   }
// }
// let p = prompt("enter some data: ");
// strongNumber(Number(p));

// //find a given number happy numbers
// function happyNumber(n) {
//   let num = n;

//   let s = 0;
//   let r;

//   while (n > 9) {
//     while (n > 0) {
//       r = n % 10;
//       s = s + r * r;
//       n = Math.floor(n / 10);
//     }
//     n = s;
//     s = 0;
//   }

//   if (n === 1) {
//     console.log(num + " is a happy number");
//   } else {
//     console.log(num + " is not a happy number");
//   }
// }
// let n = parseInt(prompt("Enter the number: "));

// happyNumber(n);

//find all the happy number between the range
// function happyNumber(n) {
//   let arr = [];
//   let s = 0;
//   let r;

//   for (let i = 1; i < n; i++) {
//     let temp = i;
//     let original = i;

//     for (let j = 0; j < 1000; j++) {
//       s = 0;
//       while (temp > 0) {
//         r = temp % 10;
//         s = s + r * r;
//         temp = Math.floor(temp / 10);
//       }

//       if (s === 1) {
//         arr.push(original);
//         break;
//       }

//       temp = s;
//     }
//   }

//   console.log(`All the happy numbers are ${arr}`);
// }

// let n = parseInt(prompt("Enter the number: "));
// happyNumber(n);

// //find all the strong number between a range
// function strongNumber(n) {
//   let arr = [];
//   function factorial(d) {
//     if (d === 0 || d === 1) return 1;
//     return d * factorial(d - 1);
//   }

//   for (let i = 1; i <= n; i++) {
//     let n = i;
//     let s = 0;

//     while (n !== 0) {
//       let d = n % 10;
//       s += factorial(d);
//       n = Math.floor(n / 10);
//     }

//     if (s === i) {
//       arr.push(i);
//     }
//   }

//   console.log(`All strong numbers between 1 and ${n}: ${arr.join(", ")}`);
// }

// let p = prompt("Enter a number: ");
// strongNumber(Number(p));

//HOME TASK
//Disarium number
//find Disarium number in a range
//Hashed humber 18=9 9 is 9/9=0
//find Hashed number in a range
//factors of a given number
//Deficient Number 8=1,2,4  sum is 7   so 7<8 true
//find Deficient Number in a range
// Abundent Number 12   1,2,3,4,6 =16 16>12 true
// const disarum=(num)=>{
//     let digits=num.toString().length;
//     let sum=0;
//     let ans=num;
//     if(num==0){
//         return 0
//     }

//     while(num>0){
//         let rem=num%10
//         sum+=rem**digits;
//         digits--
//         num=Math.floor(num/10);
//     }
//     return sum==ans?true:false;
// }
// let size = parseInt(prompt("Enter the number:"));

// let count=0
// let arr=[]
// for(let i=1;i<=size;i++){
//     if(disarum(i)){
//         arr.push(i)
//         count++;

//     }
// }

// console.log(count)
// console.log(arr)

// const factors=(n)=>{
//     let arr=[]
//     let count=0;
//     for(let i=1;i<=n;i++){
//         if(n%i==0){
//             arr.push(i)
//             count++;
//         }
//     }
//     console.log(count)
//     console.log(arr)
// }

// factors(200);

// const isHashed=(n)=>{
//     if(n<0){
//         return false;
//     }
//     let dummy=n
//     let sum=0

//     while(n>0){
//         let rem=n%10
//         sum+=rem
//         n=parseInt(n/10)
//     }

//     return dummy%sum==0?true:false
// }

// console.log(isHashed(23))

// const isdefficient=(n)=>{
//     let arr=[]
//     let count=0;
//     let sum=0
//     for(let i=1;i<=n;i++){
//         if(n%i==0){
//             arr.push(i)
//             count++;
//             sum+=i
//         }
//     }
//     return sum<n?true:false

// }
// console.log(isdefficient(8))
