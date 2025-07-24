class Animal {

    constructor(name, color, sound) {
        this.name = name;
        this.color = color;

        this.sound = sound;
    }
    speak() {
        console.log(`${this.name} is in ${this.color} color and says ${this.sound}`);
    }
}
const dog = new Animal("Dog", "Brown", "Bark");
const cat = new Animal("Cat", "White", "Meow");
dog.speak()
cat.speak()
// const animals = [dog, cat];
// animals.forEach(animal => animal.speak());
