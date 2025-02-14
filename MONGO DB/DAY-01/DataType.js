// DataType

console.log("=============Data Type =================");

var type = 1;
console.log(typeof type);

var type1 = "aditya";
console.log(typeof type1);

var type3 = ["adi", "subham", 23, {}];
console.log(typeof type3);

var type4 = null;
console.log(typeof type4);

var type5 = undefined;
console.log(typeof type5);

var type6 = true;
console.log(typeof type6);

var type7 = ["adi", "subham", 23, {}, ["MNC", "start-up"]];
console.log(type7[2]);

console.log("=============Object =================");

// object
var details = {
  fn: "aditya",
  age: 23,
  backlog: true,
  passPort: null,
  friendList: ["adi", "subham"],
  address: {
    street: "N4-F44",
    place: "Nayapali",
    pin: "760003",
  },
};

console.log(details.friendList);
console.log(details.friendList[0]);
console.log(details.address.street);

//covert SQl table to JS

var movies = [
  {
    id: 1,
    name: "KGF",
    hero: "yash",
    heroien: "sundari",
    genre: "Action",
  },
  {
    id: 2,
    name: "3idots",
    hero: "Amir",
    heroien: "karina",
    genre: "Melody",
  },
];

console.log(movies[0].heroien);
console.log(movies[1].heroien);
