class Vechile {
    constructor(name, price, color) {
        this.name = name;
        this.price = price;
        this.color = color;
    }

    PrintData() {
        console.log(`Name: ${this.name}, price: ${this.price}, Color: ${this.color}`);
    }
}
//print 10 car data
const cars = [];
const carNames = ["BMW", "Audi", "Mercedes", "Toyota", "Honda", "Tata", "Ford", "Chevrolet", "Hyundai", "Kia"];
const carPrices = [400000, 500000, 300000, 560000, 230000, 450000, 550000, 350000, 650000, 250000];
const carColors = ["Black", "White", "Silver", "Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Pink"];

carNames.forEach((carNames, index) => {
    const car = new Vechile(carNames, carPrices[index], carColors[index])
    cars.push(car);
})

const carData = cars;

carData.forEach(cars => cars.PrintData())