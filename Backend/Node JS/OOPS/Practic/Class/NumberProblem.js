class NumberProblem {
    constructor(number) {
        this.number = number;
    }

    palendrom() {
        const str = this.number.toString();
        const reversed = str.split('').reverse().join('');
        return str === reversed;
    }

    Amstrong() {
        const strNum = this.number.toString();
        const numDigits = strNum.length;
        const sum = strNum
            .split('')
            .reduce((acc, digit) => acc + Math.pow(parseInt(digit), numDigits), 0);
        return sum === this.number;
    }

    strongNumber() {
        const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
        const sum = this.number.toString()
            .split('')
            .reduce((acc, digit) => acc + factorial(parseInt(digit)), 0);
        return sum === this.number;
    }

    disariumNumber() {
        const digits = this.number.toString().split('');
        const sum = digits.reduce((acc, digit, idx) => {
            return acc + Math.pow(parseInt(digit), idx + 1);
        }, 0);
        return sum === this.number;
    }

    harshadNumber() {
        const digitSum = this.number.toString()
            .split('')
            .reduce((acc, digit) => acc + parseInt(digit), 0);
        return this.number % digitSum === 0;
    }

    deficientNumber() {
        let sum = 0;
        for (let i = 1; i <= this.number / 2; i++) {
            if (this.number % i === 0) sum += i;
        }
        return sum < this.number;
    }

    neonNumber() {
        const square = this.number * this.number;
        const digitSum = square.toString()
            .split('')
            .reduce((acc, digit) => acc + parseInt(digit), 0);
        return digitSum === this.number;
    }

    happyNumber() {
        const getNext = (num) => {
            return num.toString()
                .split('')
                .reduce((acc, digit) => acc + Math.pow(parseInt(digit), 2), 0);
        };

        let slow = this.number;
        let fast = getNext(this.number);

        while (fast !== 1 && slow !== fast) {
            slow = getNext(slow);
            fast = getNext(getNext(fast));
        }

        return fast === 1;
    }

    primeNumber() {
        if (this.number <= 1) return false;
        for (let i = 2; i <= Math.sqrt(this.number); i++) {
            if (this.number % i === 0) return false;
        }
        return true;
    }

    factorialNumber() {
        let fact = 1;
        let i = 1;
        while (fact < this.number) {
            i++;
            fact *= i;
        }
        return fact === this.number;
    }
}

const numberObj = new NumberProblem(145); // Try different numbers here

console.log("Palindrome:", numberObj.palendrom());
console.log("Armstrong:", numberObj.Amstrong());
console.log("Strong:", numberObj.strongNumber());
console.log("Disarium:", numberObj.disariumNumber());
console.log("Harshad:", numberObj.harshadNumber());
console.log("Deficient:", numberObj.deficientNumber());
console.log("Neon:", numberObj.neonNumber());
console.log("Happy:", numberObj.happyNumber());
console.log("Prime:", numberObj.primeNumber());
console.log("Factorial Number:", numberObj.factorialNumber());

