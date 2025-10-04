// //! method overriding ( runtime polymorphism = during the execution of the code it'll decide which method it nedd to chose )
class Parent {
    pocketMoney() {
        console.log("2000 is your pocketmoney")
    }
}
class Child extends Parent {
    pocketMoney() {
        console.log("5000 is your pocketmoney")
    }
}
const c1 = new Child()  //? accessing the child
c1.pocketMoney()
const p1 = new Parent()  //? accessing the parent
p1.pocketMoney()

// //! method overloading ( compiletime polymorphism )
// class Demo{
//     add(){
//         if (arguments.length===3) {
//             console.log("logic for 3 parameters")
//         } else if (arguments.length===2) {
//             console.log("logic for 2 parameters")
//         }else if(arguments.length===1) {
//             console.log("logic for 1 parameters")
//         }else{
//             console.log("logic for unknown parameters")
//         }
//     }
// }
// const c1=new Demo()
// c1.add(1,2,3)
// c1.add(1,2)
// c1.add(1)
// c1.add()