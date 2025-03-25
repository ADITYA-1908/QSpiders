//!  let keyword

// let x; //! D yes
// console.log(x)
// x=10 //! I yes
// console.log(x)
// let y=20 //! D & I yes
// console.log(y)
// // let x; //! RD no
// // let x=40 //! RD and RI no
// console.log(x)


//! const keyword

// //const x; //! D no
// // x=20; //! I no
// const z=20; //! D&I yes
// console.log(z)
// // const x; //! RD no
// // x=null //! RI no
// // const z="hello" //! RD & RI no

//! SCOPES

//!  global 

// 1.global- declare at top level 

// var x=10
// let y=20
// const z=30
// console.log(x,y,z)
// if (true){
//     console.log(x,y,z, "inside a block")
// }
// function demo(){
//     console.log(x,y,z,"inside a function")
// }
// demo()


//!block

// 2.block-declare at block level
if (true){
    var x=10
    let y=20
    const z=30
console.log(x,y,z,"inside a block")

}
console.log(x,"outsided a block")
// console.log(y,"outsided a block") not possible
// console.log(z,"outsided a block") not possible