// console.log(a);
// var a = 10;

// // 2
// let x = 5;
// {
//   let x = 10;
//   console.log(x);
// }
// console.log(x);

// . Predict the output (hoisting + scope):
// function test() {
//     if (true) {
//       var x = 50;
//     }
//     console.log(x); // what will it show?
//   }
//   test();

  
//   5. Tricky variable swap – write code to swap two variables without a third variable
// let a = 10;
// let b = 12;

// a = a + b; // 22
// b = a - b; // 10
// a = a - b; // 12

// console.log("After swap: a = " + a + ", b = " + b);

// 5 Q2. What’s the output?

// let a = [1, 2, 3];
// let b = a;
// b.push(4);
// console.log(a); // ?

// Q4. Create an object that stores your name, age, city, and favorite language.

// let obj = [
//     fullname= "Anshan",
//     age= 21,
//     isdeveloper= true,
// ]


// ✅ Definition of Operator in JavaScript:
// An operator is a symbol that performs an operation on values or variables.
// It is used to perform tasks like calculations, comparisons, or assignments.



// let marks = 33;
// if(marks >= 33){
//     console.log("A grade", marks)
// }
// else{
//     console.log("B grade", marks)
// }

// 🔥 Next Topic: Control Statements
// let age = 18;

// if(age < 18){
//   console.log("You are underage");
// } else if(age === 18){
//   console.log("You just became an adult!");
// } else {
//   console.log("You are an adult");
// }

// ✅ 2. Switch Case
// Used for checking multiple exact values.
// let day = "Monday";

// switch(day){
//   case "Monday":
//     console.log("Start of week");
//     break;
//   case "Friday":
//     console.log("End of week");
//     break;
//   default:
//     console.log("Midweek");
// }

// ✅ 3. Truthy & Falsy values
// Falsy:

// false, 0, "", null, undefined, NaN

// Everything else is truthy!

// if(0){
//     console.log("Yes");
//   } else {
//     console.log("No");  // This will run
//   }

// Q1. Write an if-else to check if a number is even or odd.

// let num = 2;
// if(num % 2==0){
//     console.log("num is even")
// }
// else{
//     console.log("num is odd")
// }

// Q2. What will this switch statement output?

// let fruit = "apple";
// switch(fruit){
//   case "banana":
//     console.log("Yellow fruit");
//     break;
//   case "apple":
//     console.log("Red fruit");
//     break;
//   default:
//     console.log("Unknown");
// }

// Q3. Is this value truthy or falsy: "" (empty string)?

// Q4. Convert this to if-else:

// let mode = "dark";
// let message = mode === "dark" ? "Dark Mode On" : "Light Mode";

// let mode = "dark";
// let message;

// if (mode === "dark") {
//   message = "Dark Mode On";
// } else {
//   message = "Light Mode";
// }

// console.log(message);

// topic Loop
// A loop is used to excecute a function multiple times until a certain condition is not met.

// Q= Imagine you want to print your name 5 times

// for(let i=0; i<5; i++){
//     console.log("Anshan")
// }

// ex = start = 5 , end = 10;
// out put = 5,6,7,8,9,10;

// let num = 10;
// for(let i =5; i<=num; i++){
//     console.log(i, "a number is")
// }

//  write a js function that takes a number n and return the sum of the first n natural number using loop.
// let num = 15;
// let sum = 0;
// for(let i =0; i<=num; i++){
//     sum += i
// }
// console.log("sum of the first", num ,"natural number is",sum)

// write a js program that takes a number n and printers number from n down to 1 using a loop;

// let num = 10;
// for(let i=num; i>=1; i--){
//     console.log(i)
// }

// write a js program function that takes a number N and return the factorial of N using a loop;

// let num = 5;
// let factorial = 1;
// for(let i=1; i<=num; i++){
//     factorial *= i;
// }
// console.log("factorial of",num, "is: ",factorial)

// write a js function that takes a number n  and check if it's a prime number using a loop;


// write a program that takes an integer and counts how many digits it has using a while loop;
// let num = 12345;
// let count = 0;

// while(num > 0){
//     num = Math.floor(num / 10); // Remove last digit
//     count++; // Count how many times it runs
// }

// console.log(count);


// Topic SetTimeout
// Settimeout is a built in js function that execute a function after a specified deley . It is commanly used for delaying code execuation/
// console.log("start")
// setTimeout(() => {
//     console.log("This is executed in 2 second")
// },2000)
// console.log("end") 


