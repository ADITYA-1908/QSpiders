// 1) palendrom string
function isPalindrome(str) {
  const result = str === str.split("").reverse().join("") ? 1 : 0;
  console.log(result === 1 ? "palendrom" : "not a palendrom");
}
isPalindrome("mom");
