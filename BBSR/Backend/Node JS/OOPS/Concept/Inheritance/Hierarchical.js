class Parent {
    pocketMoney() {
        console.log("pocket");
    }
}

class Child1 extends Parent {
    constructor() {
        super();
    }
    moreMoney() {
        console.log("half of money from Child1");
    }
}

class Child2 extends Parent {
    constructor() {
        super();
    }
    lessMoney() {
        console.log("half of money from Child2");
    }
}

const c1 = new Child1();
const c2 = new Child2();

c1.pocketMoney();
c2.pocketMoney();
c1.moreMoney();
c2.lessMoney();    
