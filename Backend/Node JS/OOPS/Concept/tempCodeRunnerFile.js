class Bank {
    #balance = 1000
    constructor(name) {
        this.name = name
    }
    getBalance() {
        return this.#balance
    }
    deposite(money) {
        this.#balance = money + this.#balance
    }
}
const b1 = new Bank("sbi")
b1.deposite(2000)
console.log(b1.getBalance())