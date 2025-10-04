class Vehicle {
    #start() {
        console.log("train is starting")
    }
    constructor(Vname) {
        this.Vname = Vname
    }
    move() {
        this.#start()
        console.log("train is moving")
    }
}
const v1 = new Vehicle("train")
v1.move()