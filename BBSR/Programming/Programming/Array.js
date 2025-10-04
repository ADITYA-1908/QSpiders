// // 1) move all the zero to the end
// const movezerostolast = (arr) => {
//   let count = 0,
//     idx = 0;
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 0) {
//       count++;
//     } else {
//       res[idx++] = arr[i];
//     }
//   }
//   for (let j = 0; j < count; j++) {
//     res[arr.length - 1 - j] = 0;
//   }
//   return res;
// };

// console.log(movezerostolast([0, 1, 0, 5, 6]));

// // 2)match the 2 array is same or not
// const arraymatching = (arr1, arr2) => {
//   if (arr1.length != arr2.length) {
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(arraymatching([1, 2, 3], [1, 3, 2]));

// // 3) find out the matching element
// const commomelements = (arr1, arr2) => {
//   let res = [];
//   let idx = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] == arr2[j]) {
//         res[idx++] = arr2[j];
//         break;
//       }
//     }
//   }
//   console.log(res);
// };

// commomelements([1, 2, 3, 4], [5, 4, 7, 3]);

//split array
function chunkArray(arr, size) {
  const r = [];
  for (let i = 0; i < arr.length; i += size) {
    const t = [];
    for (let j = i; j < i + size; j++) {
      t.push(arr[j]);
    }
    r.push(t);
  }

  console.log(r);
}
chunkArray([1, 2, 3, 4, 5, 6], 2);

// 5)place even then odd to the new array
// function getNonRepeatingNumbers(arr) {
//   const freq = {};

//   for (let num of arr) {
//     freq[num] = (freq[num] || 0) + 1;
//   }
//   const result = arr.filter((num) => freq[num] === 1);
//   return [...new Set(result)];
// }
// const input = [1, 1, 2, 3, 3, 4, 5, 4];
// const output = getNonRepeatingNumbers(input);
// console.log(output); // [2, 5]
