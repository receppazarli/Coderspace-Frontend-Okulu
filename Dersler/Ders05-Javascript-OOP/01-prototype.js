// // Object Literal
// const person1= {
//     name: "Recep",
//     age: 24,
//     langs :["C#","Js","Ts"],
//     address: {
//         city : "İstanbul",
//         street: "Kadıköy"
//     },
//     showInfos : function (){
//         console.log(this.name,this.age,this.langs,this.address);
//     },
// };

// const person2= {
//     name: "Mehmet",
//     age: 35,
//     langs :["C","Go","Ts"],
//     address: {
//         city : "İstanbul",
//         street: "Üsküdar"
//     },
//     showInfos : function (){
//         console.log(this.name,this.age,this.langs,this.address);
//     },
// };

// console.log(person1);
// console.log(person2);

// Yapıcı fonksion (Constructor)
function Person(name, age, langs) {
  this.name = name;
  this.age = age;
  this.langs = langs;

  //   this.showInfos = function () {
  //     console.log(this.name, this.age, this.langs);
  //   };
}

Person.prototype.showInfos = function () {
  console.log(this.name, this.age, this.langs);
};

function Employee(name, age, langs, salary) {
  Person.call(this, name, age, langs); // Person miras alma
  this.salary = salary;
}

Employee.prototype =Object.create(Person.prototype); // persondan yeni bir obje üretiyor ve içindeki showınfosa erişiyorum o referansa bakıyorum.
const emp1 = new Employee("Recep", 24, ["C#", "Js", "Ts"], 4000);
console.log(emp1);
emp1.showInfos();

const person1 = new Person("Recep", 24, ["C#", "Js", "Ts"]);
const person2 = new Person("Mehmet", 35, ["C", "Go", "Ts"]);

// console.log(person1);
// console.log(person2);
// person1.showInfos();
// person2.showInfos();
// console.log(person1.langs);
// console.log(person1.langs[0]);
