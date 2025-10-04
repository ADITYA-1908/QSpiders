class Calculator{
   constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    add() {
        return this.num1 + this.num2;
    }
    subtract() {
        return this.num1 - this.num2;
    }
    multiply() {
        return this.num1 * this.num2;
    }
    divide() {
        if (this.num2 === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return this.num1 / this.num2;
    }
}
const calculator = new Calculator(20,5);
console.log(calculator.add()); 
console.log(calculator.subtract()); 
console.log(calculator.multiply()); 
console.log(calculator.divide()); 
