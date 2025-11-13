let str = "madam";
let isPalin = true;
for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
        isPalin = false
    }

}
console.log(isPalin); 
