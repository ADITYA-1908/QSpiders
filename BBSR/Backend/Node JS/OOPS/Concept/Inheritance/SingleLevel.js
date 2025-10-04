class Parent {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  pocketMoney() {
    console.log("Father is giving money");
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name, age);
  }

  study() {
    console.log("Child is a good boy");
  }
}

const c1 = new Child("Aditya", 49);
const c2 = new Child("Sameer", 49);

console.log(c1.name);
console.log(c1.age);

c1.study();
c1.pocketMoney();

