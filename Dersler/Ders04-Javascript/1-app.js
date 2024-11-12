// JS Giriş

// console.log("Merhaba Javascript");

// Değişkenler
// Number
// var a = 10; // Number
// var b = 3.14; // Number

// String
// var c = "Javascript"; // String

// console.log(a);
// console.log(typeof a);

// console.log(a, b, c);

// otomatik tip dönüşümleri
// var firstNumber = 10;
// var secondNumber = "20";
// var result = firstNumber - secondNumber;
// var result = firstNumber + secondNumber;
// console.log(result);
// console.log(typeof result);

// hoisting!
// var firstNumber;
// console.log(firstNumber);
// firstNumber = 20;
// deneme();
// function deneme() {
//   console.log("a fonksiyonu");
// }

// Boolean (true/false)

// var isActive = true;

// if (age) {
//   age >= 18 ? console.log("Ehliyet alabilir") : console.log("Ehliyet alamaz");
// }

// Undefined - Tanımsız
// var userName;
// console.log(userName);
// console.log(typeof userName);

// Null - Değer yok
// var isNull = null;
// console.log(isNull);
// console.log(typeof isNull);

// Object - Nesne!
// var user = {
//   name: "Hakan",
//   age: 30,
//   isActive: true,
//   notlar: {
//     mat: 90,
//     fizik: 80,
//   },
//   favariteFruits: ["elma", "armut"],
// };

// console.log(user);
// console.log(typeof user);
// console.log(user.name);
// console.log(user.notlar.mat);

// Array - Dizi !
// var fruits = ["elma", "armut", "muz"];
// console.log(fruits);
// console.log(typeof fruits);
// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);

// function - Fonksiyonlar
// function hello() {
//   console.log("Merhaba Javascript");
// }
// hello();
// console.log(hello);
// console.log(typeof hello);

// Date - Tarih
// var date = new Date();
// console.log(date);
// console.log(typeof date);

// var a = 10;
// var b = a;
// console.log("1- ", a, b);
// a = 20;
// console.log("2- ", a, b);

// var a = [10];
// var b = a;
// console.log("1- ", a, b);
// a = [20];
// console.log("2- ", a, b);
// console.log("3- ", a * b);

// var a = [10, 20, 30, 40, 50];
// var b = a;
// console.log("1- ", a, b);
//  a[0] = 60;
//  a.push(60);
// console.log("2- ", a, b);

//Scope Kapsam
// var a = 10; //Global Scope
// function scope() {
//   var b = 20; // Function scope
//   console.log(a, b);
// }
// if (true) {
//   let c = 30; //Block Scope
// }
// {
//   let d = 40; //Block Scope
// }
// console.log(a, b, c, d);

//Tip Dönüşümleri

// var a=5;
// console.log(a,typeof a);
// a=String(a);
// console.log(typeof a);

// var a="5";
// console.log(a,typeof a);
// a=Number(a);
// console.log(typeof a);

// var a="deneme";
// console.log(a,typeof a);
// a=Number(a);
// console.log(a, typeof a);

// var a = 5 + "2";
// console.log(a, typeof a);

// var a = 5 - "2";
// console.log(a, typeof a);

// Operatörler - Operators
// Atama operatörü (=)
// const a = 10;

// Aritmetik Operatörler
// console.log(10 + 5); // Toplama
// console.log(10 - 5); // Çıkarma
// console.log(10 * 5); // Çarpma
// console.log(10 / 5); // Bölme
// console.log(10 % 5); // Mod Alma
// console.log(10 ** 5); // Üs Alma

// Math Functions

// let sonuc;

// // sonuc = Math.PI;
// sonuc = Math.round(3.6);
// sonuc = Math.ceil(3.2);
// sonuc = Math.floor(3.9);
// sonuc = Math.sqrt(16);
// sonuc = Math.floor(Math.random() * 100);

// console.log(sonuc)

// String Methodları

let value;
// const firstName = "Recep";
// const lastName = "Pazarlı";
// const department = "Software";
// const age = 25;

// value = firstName + " " + lastName;
// value = firstName;
// value += " " + lastName;

// value = firstName.length;
// value = firstName.toUpperCase();
// value = firstName.toLowerCase();
// value = firstName[0];
// value = firstName[firstName.length - 1];
// value = firstName.indexOf("c");
// value = firstName.includes("p");
// value = firstName.concat(" - ", lastName, " - ", department);
// value =
//   "İsim: " +
//   firstName +
//   " \nSoyisim: " +
//   lastName +
//   " \nYaş: " +
//   age +
//   " \nBölüm: " +
//   department;

// //Template Literals
// value = `
// İsim: ${firstName} 
// Soyisim: ${lastName} 
// Yaş: ${age} 
// Departman: ${department}
// `;


const langs = ["Python","Java","C++","Javascript"];
const numbers =[43,25,74,85,78,95,96,1,58,99,23,14,15]

value = numbers.length;
console.log(value);
