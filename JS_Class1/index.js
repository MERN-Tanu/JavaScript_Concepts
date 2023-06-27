// let a=12.3;
// var y =24;
// const b=2;
// const c=4;

// console.log(a);
// console.log(b);
// console.log(c);
// variables -> let,var and const
// let is a local variable & var is a global variable
// const is keyword if we change the value that value won't chnage

// Primitive types ->
// string-> 'tanu'
// number-> 1,23,4
// boolean-> true/false
// undefined-> let a;
// console.log(a); o/p : undefined
// null 

// Dynamic Typing
// let a=2;
// a = "tanu";
// console.log(a);

// Reference Types
// object
// Array
// Functions

// there is n number of variables present in the program if the variables is link with each other then on that case we
// make an Object if all variables are link to each other
// example:
//  let person ={firstName: 'tanu',
//         age = 24};

// How to access the object in JavaScript
//  with the help of two ways
// 1. Dot Notations : person.age
// 2. Bracket Notation : person['age']

//  Array : list of similar kind of items

// how to access an array
// let array = ['tanu','a',3,true];
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);

// // Ternary operator

// let age = (age >= 18)? 'i can vote':'i cant vote';
// console.log(age);

// Equality Operator
// // 1. Loose Equality : we will check only the value example: 
//  let num =1
//  let str = '1';
//     num == str 
//    o/p : true
// // 2. Strict Equality :  we will check both data and value 
//    let num =1;
//    let str = '1';
//    num === str
//    o/p: false

// loopin in JS
// for loop
// for (let i=1;i<5;i++)
// console.log('tanu' + " " +i);

//  while loop

// let i=0;
// while(i <= 5)
// {
//     console.log(i);
//     i++;
// }

// do-while loop
// let j=0;
// do{
//     console.log(j);
//     j++;
// }while(j < 10);

// Object(property and behaviour) in JS

// let a = {}; // a is an empty object
// collections of keys-value pair

// object creation
// let rectangle ={
//     length:1,
//     breadth:2,
//     draw: function(){ // if you are creating function inside object creation is called method
//         console.log('hi');
//     }
// };

// let rectangle1 ={
//     length:1,
//     breadth:2,
//     draw: function(){ // if you are creating function inside object creation is called method
//         console.log('hi');
//     }
// };

// if you want to create n number of objects so the best practise is Factory function and constructor function
// you need to use the

// 1. Factory function
// camelcase-> numberOfStudent
// function createRectangle(){
//     let rectangle={
//         length:1, // property
//         breadth:2,
//         drawn: function(){ // behaviour
//             console.log("hi");
//         }
//     };
//     return rectangle;
// }

// OR

// function createRectangle(length,breadth){
//     let rectangle={
//         length, // property
//         breadth,
//         draw() { // behaviour
//             console.log("hi");
//         }
//     };
//     return rectangle;
// }
// accessing Object

// let rectangleObj1 = createRectangle();

// 2. Constructor Function

// Pascal notation-> NumberOfStudent

// function Rectangle()
//     {
//         this.length =1;
//          this.breadth=2;
//          this.draw= function(){
//             console.log("heelllo");
//          }
//     }

//     accessing 

//     let RectangleObj1 = new Rectangle();

// Dynamic nature of objects

// a.c = 4;
//  Function are also object in JS
// Constructor object

// let ObjectName = new Rectangle(2,3);
// let rectangleObj1 = new Function('length','breadth',` length:1, // property
// //         breadth:2,
// //         drawn: function(){ // behaviour
// //             console.log("hi");
// //         }`)


//  Primitive are copied by their value
//  Refernces are copied by their address/refereces

//  For-In loop

// let rectangle = {
//     length:2,
//     breadth:3
// };

// for-in loop
//  keys are reflected through key variable
// values are
// for(let key in rectangle){
//     console.log(key,rectangle[key]);
// }

// Practice

// let i=3;

// switch(i){
//     case 1:
//         console.log("A");
//         break;
//     case 2:
//         console.log("B");
//         break;
//     case 3:
//         console.log("c");
//         break;
//     default:
//         console.log("Hi");
// }


// for(let i=0;i<5;i++){
//     console.log(i);
// }

// let i=0;

// while(i<5)
// {
//     console.log(i + "*");
//     i++;
// }

// do while
// let i=0;

// do{
//     console.log(i+"**");
//     i++;
// } while(i < 10);

// let circle={
//     radius: 1,
//     happyDraw: function() // Methods
//     {
//         console.log("Hello");
//     }
// };

// let square={
//     a: 3,

//     AreaOfSquare: function()
//     {
      
//         console.log("hi how are you");
//     }
// };

//  Factory function

// function createSquare(a){
//     let square ={
//         a: 1,
//         squ(){
//         console.log("Hi Jee");
//         }
//     }
// };

// // Factory function
// function Rectangle(){
// let rectangle={
//     length: 1,
//     breadth:3,
//     rect: function()
//     {
//         console.log("Hlloooo");
//     }
// }
// return rectangle;
// };

// // Factory function

// function createSquare(){
// let circle={
//     radius: 2,
//     cir: function()
//     {
//         console.log("oops");
//     }
// }
// return circle;
// };


// function TriangleCreate(){
// let triangle={
//     a:2,
//     b:3,
//     c:4,

//     tri: function()
//     {
//         console.log("Hiii");
//     }
// };
// return triangle;
// }

// let rectangleObj1 = TriangleCreate(2,4,7);
// let rectangle1 = createRectangle(5,6);

// Constructor function
//  can be access by this keyword

-------------------------------------------------------------------------------

// line below is used to print on the console window
console.log('Namaste Dunia version4');

// let a = true;
// console.log(a);

// const num = 12;
// //num = 13;

// let lastName = 3;
// console.log(lastName);

// lastName = true;
// console.log(lastName);

// console.log(5 !== 3);

// let age = 27;
// let status = (age >= 18) ? 'Yes Vote' : 'No Vote';

// console.log(status);

// let marks = 12;

// if(marks >= 90) {
//     console.log('A');
// }
// else if(marks >= 80) {
//     console.log('B');
// }
// else if(marks >=70) {
//     console.log('C');
// }
// else if(marks >= 60) {
//     console.log('D');
// }
// else {
//     console.log('E');
//}

// Switch case
// let num = 1;

// switch(num) {
//     case 1: console.log('A');
//     break;
//     case 2: console.log('B');
//     break;
//     case 3: console.log('C');
//     break;
//     default: console.log('D');
// }

// For loop
// for(let i = 1; i<=5; i=i+1) {
//     console.log("Babbar" + i);
// }


//  While Loop
// let x = 1;

// while(x <= 5) {
//     console.log(x);
//     x++;
// }

//  Do while Loop
let y = 1;

do {
    console.log(y);
    y++;
} while(y < 10);
