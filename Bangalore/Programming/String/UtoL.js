let str = "HELLO";
let result = "";
for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 65 && code <= 90) code += 32;
    result += String.fromCharCode(code);
}
console.log(result); 
