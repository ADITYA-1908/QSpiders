class GrandParent {
    speak() {
        console.log("Grandparent is speaking")
    }
}

class Parent extends GrandParent {
    constructor() {
        super()
    }
    shout() {
        console.log("parent is shouting")
    }
}


class Child extends Parent {
    constructor() {
        super()
    }
    telling() {
        console.log("child is talling")
    }
}

const call = new Child();

call.speak();
call.shout();
call.telling();