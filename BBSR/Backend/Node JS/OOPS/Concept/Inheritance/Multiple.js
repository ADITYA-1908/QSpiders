const Eating = {
    Burger() {
        console.log("teasty")
    }
}
const Workout = {
    running() {
        console.log("running")
    }
}
class Sleeping {

}
Object.assign(Sleeping.prototype, Eating, Workout)
const p1 = new Sleeping();
p1.Burger()
p1.running()