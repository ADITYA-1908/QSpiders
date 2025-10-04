class Data {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
   PrintData(){
  console.log("userName: "+this.name);
    console.log("age: " +this.age);

   }
}

const p1 = new Data("Aditya", 21)
const p2 = new Data("Anurag", 22)
p1.PrintData();
p2.PrintData();