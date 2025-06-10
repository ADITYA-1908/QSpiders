// 1) palendrom string
// function isPalindrome(str) {
//   const result = str === str.split("").reverse().join("") ? 1 : 0;
//   console.log(result === 1 ? "palendrom" : "not a palendrom");
// }
// isPalindrome("mom");

//! CONVERT TO LOWERCASE
// function tolowerCase(str) {
//   let res = "";
//   for (let i = 0; i < str.length; i++) {
//     let code = str.charCodeAt(i);
//     if (code >= 65 && code <= 90) {
//       res += String.fromCharCode(code + 32);
//     } else {
//       res += str[i];
//     }
//   }
//   return res;
// }
// console.log(tolowerCase("JITENDRA"));

//! count frequency of each character in the string

// function frequency(str) {
//   let res = {};
//   for (let char of str) {
//     res[char] = (res[char] || 0) + 1;
//   }
//   return res;
// }
// console.log(frequency("hello"));

// function duplicate(str) {
//   let res = {};
//   let duplicates = [];
//   for (let char of str) {
//     res[char] = (res[char] || 0) + 1;
//   }
//   for (let [key, value] of Object.entries(res)) {
//     if (value > 1) {
//       duplicates.push(key);
//     }
//   }
//   return duplicates;
// }
// console.log(duplicate("hello"));

//CONVERT TO UPPERCASE
// function toupperCase(str) {
//   let res = "";
//   for (let i = 0; i < str.length; i++) {
//     let code = str.charCodeAt(i);
//     if (code >= 97 && code <= 122) {
//       res += String.fromCharCode(code - 32);
//     } else {
//       res += str[i];
//     }
//   }
//   return res;
// }
// console.log(toupperCase("aditya"));

// //Anagram string
// function isAnagram(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   return (
//     str1.toLowerCase().split("").sort().join("") ===
//     str2.toLowerCase().split("").sort().join("")
//   );
// }
// console.log(isAnagram("meat", "team"));

//print non repeating cheracter in a string
// function nonRepeating(str) {
//   const count = {};

//   for (let char of str) {
//     count[char] = (count[char] || 0) + 1;
//   }

//   console.log("Non-repeating characters:");
//   for (let char of str) {
//     if (count[char] === 1) {
//       console.log(char);
//     }
//   }
// }

// const input = "aaab";
// nonRepeating(input);

// //compressed string
// //with inbuilt functions
// function nonRepeating(str) {
//   const count = {};

//   for (let char of str) {
//     count[char] = (count[char] || 0) + 1;
//   }

//   console.log("Non-repeating characters:");
//   for (let [key, value] of Object.entries(res)) {
//     count += key + value;
//   }
//   console.log(count);
// }

// const input = "aaab";
// nonRepeating(input);

// //without using inbuilt functions
// function compressString(str) {
//   if (str.length === 0) return "";

//   let compressed = "";
//   let count = 1;

//   for (let i = 1; i <= str.length; i++) {
//     if (str[i] === str[i - 1]) {
//       count++;
//     } else {
//       compressed += str[i - 1] + count;
//       count = 1;
//     }
//   }

//   console.log(compressed);
// }
// const x = "aaabbcddd";
// compressString(x);

// //remove spacial cheracter
// function removeSpacial(str) {
//   const specialChars = "~!@#$%^&*()`{}[]\\|;':\"/.,<>?";
//   const digits = "0123456789";
//   let r = "";

//   for (let i = 0; i < str.length; i++) {
//     if (!specialChars.includes(str[i]) && !digits.includes(str[i])) {
//       r += str[i];
//     }
//   }

//   console.log(r);
// }

// removeSpacial("abc123@gmail.com");

// //only print spacial cheracter
// function printSpecialCharacter(str) {
//   const specialChars = "~!@#$%^&*()`{}[]\\|;':\"/.,<>?";
//   let r = "";

//   for (let i = 0; i < str.length; i++) {
//     if (specialChars.includes(str[i])) {
//       r += str[i];
//     }
//   }
//   console.log(r);
// }

// printSpecialCharacter("abc123@gmail.com");

//if vouel print *
// function replaceVowels(str) {
//   const vowels = "aeiouAEIOU";
//   let res = "";

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       res + "*";
//     } else {
//       res += str[i];
//     }
//   }

//   console.log(res);
// }
// const input = "Hello World";
// replaceVowels(input);

//reverse a string
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// const os = "Aditya is a useless boy";
// const rs = reverseString(os);

// console.log("Original String:", os);
// console.log("Reversed String:", rs);

// //reverse each word
// function reverseWords(input) {
//   let words = [];
//   let word = "";

//   for (let i = 0; i <= input.length; i++) {
//     if (input[i] === " " || i === input.length) {
//       if (word.length > 0) {
//         words.push(word);
//         word = "";
//       }
//     } else {
//       word += input[i];
//     }
//   }

//   let rs = "";
//   for (let j = words.length - 1; j >= 0; j--) {
//     rs += words[j];
//     if (j !== 0) rs += " ";
//   }

//   return rs;
// }

// const input = "the sky is blue";
// const output = reverseWords(input);

// console.log("Input:", input);
// console.log("Output:", output);

// //reverse each word in a sting
// function reverseEachWord(str) {
//   return str
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join("");
// }

// const os = "Hello world from Aditya";
// const rws = reverseEachWord(os);

// console.log("Original String:", os);
// console.log("Each Word Reversed:", rws);

//reverse each word in a string without inbuilt method
// function reverseEachWord(str) {
//   let result = "";
//   let word = "";

//   for (let i = 0; i <= str.length; i++) {
//     if (str[i] === " " || i === str.length) {
//       for (let j = word.length - 1; j >= 0; j--) {
//         result += word[j];
//       }
//       if (i !== str.length) {
//         result += " ";
//       }
//       word = "";
//     } else {
//       word += str[i];
//     }
//   }

//   return result;
// }

// const os = "Hello world from Aditya";
// const rws = reverseEachWord(os);

// console.log("Original String:", os);
// console.log("Each Word Reversed:", rws);

// //reverse each word and reverse the sentence
// function reverseEachWord(str) {
//   return str
//     .split(" ")
//     .reverse()
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");
// }

// const os = "Hello world from Aditya";
// const rws = reverseEachWord(os);

// console.log("Original String:", os);
// console.log("Each Word Reversed and Sentence Reversed:", rws);

// function capitalizeWords(str) {
//   return str
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }

// const input = "hello world from aditya";
// const output = capitalizeWords(input);

// console.log("Original:", input);
// console.log("Capitalized:", output);

//remove a word such a way that word become palendrom
// function checkPalendrom(str) {
//   function isPalindrome(s) {
//     return s === s.split("").reverse().join("");
//   }

//   for (let i = 0; i < str.length; i++) {
//     let newStr = str.slice(0, i) + str.slice(i + 1);
//     if (isPalindrome(newStr)) {
//       return str[i];
//     }
//   }
// }
// console.log(checkPalendrom("xyvx"));
// console.log(checkPalendrom("abca"));

//convert roman to intiger
function romanToInt(roman) {
  const convert = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < roman.length; i++) {
    const current = convert[roman[i]];
    const next = convert[roman[i + 1]];

    if (next > current) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
}

console.log(romanToInt("IX"));
console.log(50 > 50);
