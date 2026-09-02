/* Something to show on screen as a output we will be using console.log*/
// console.log("Hello world")

// document.write("JS fundamental's")

// prompt() is a built-in JavaScript function that displays a dialog box 
// asking the user to enter some text and returns the value entered by the
// user. when we want to take simple input directly from the user through 
// a browser dialog box. Even if the user enters a number, it return the 
// the output as a string.
// let name = prompt("Enter your name :")
// alert(name);

// If you want to convert the output returned by this prompt function as an 
// Number we should need to use the parseInt or Number() constructor.

// let age = parseInt(prompt("Enter the age :"))
// console.log(typeof age)

// let age = Number(prompt("Enter the age :"))
// console.log(typeof age)

// To show a default value inside the prompt function
// let name = prompt("Enter your name ","Vishal")
// alert(name)

// To show something as a  alret on the screen, we will be using window.alert()
// window is an object and alert is a method inside this object, we will run this
// under the browser environment
// window.alert("Hello Java Script")
// alert("Hello JS")

/* let is a JavaScript keyword used to declare a variable. A variable 
   declared with let can be reassigned but cannot be redeclared within the 
   same scope. let is block-scoped, which means it is accessible only within 
   the block { } where it is declared.*/

// let name = "Vishal";
// let age = 32;

// console.log(name);
// console.log(age);

/* A variable is a named storage location used to hold a value in a 
   JavaScript program, A variable declared with var can be reassigned and 
   redeclared within the same scope. var is function-scoped rather than 
   block-scoped.*/

// var name = "Vishal"
// name ="Rahul"
// name = "Shashank"
// console.log(name)

// const is a block-scoped JavaScript keyword used to declare a 
// variable whose binding cannot be reassigned after initialization.

// if(true){
// const age = 32
// console.log(age)
// }

// data types
// In JavaScript, data types are broadly divided into Primitive Data Types 
// and Reference Data Types.

// Primitive data - A primitive data type is a data type that represents a 
// single, simple value. Primitive values are immutable, and when a 
// primitive value is assigned to another variable, the value itself is 
// copied. JavaScript has 7 primitive data types:

// String, Number, BigInt, Boolean, Undefined(unintentional absence of value)
// Null(intentionnal absence of value), Symbol

// Example 

// let name = "Vishal";       // String
// let age = 32;              // Number
// let bigNumber = 12345678901234567890n; // BigInt
// let isDeveloper = true;    // Boolean
// let salary;                // Undefined
// let address = null;        // Null
// let id = Symbol("id");     // Symbol

// Reference Data type 
// A reference data type is a data type whose variable holds a reference 
// to an object stored in memory. When a reference value is assigned to 
// another variable, the reference is copied, so both variables can refer 
// to the same object.

//Common reference types in JavaScript include:
// Object, Array, Function, Date, Map, Set

// what is hoisting
// Hoisting is JavaScript's behavior of processing declarations before 
// executing the code, which makes certain declared variables and functions 
// available before their declaration appears in the source code.
// so if we use a value before its initialization it will use this varible
// as undefined(JS assume this value as unintentional absence of value)

// String Data Type 
// A sequence of characters(alphabets, characters,special symbol and whitespace) 
// enclosed within single(''), double quotes("") or backticks(``)

// .length is used with string to count the numbers of characters 
// concatenation is used to add two string together using (+) operators

// When the + operator is used and at least one operand is a string, 
// JavaScript generally performs string concatenation and converts the 
// other value to a string.

// var fname = prompt("Enter the first name :") // String
// var lname = prompt("Enter the last name :") // String 
// var city = prompt("Enter the city :") // String 
// var age = parseInt(prompt("Enter the age :")) // Number

// console.log("The first name is "+fname+" last name is "+lname+" age is "+age+" city is "+city)

// A template literal is a way of creating strings in JavaScript using 
// backticks ( ) instead of single (' ') or double (" ") quotes. It allows 
// you to easily insert variables and expressions directly inside a string 
// using ${}, Template literals were introduced in ES6 (ECMAScript 2015).

// console.log(`first name is ${fname} last name is ${lname} is ${age} years old living in ${city}`)

// console.log(12+12)
// console.log(12+"12")
// console.log("12"+"12")
// console.log(+"12"+12)
// console.log(-"12"+12)

// Operators : An operator is a symbol or keyword used to perform an 
// operation on one or more values (called operands).

// let a = 10;
// let b = 5;
// let c = "10";

// 1. Arithmetic Operator : 
// Arithmetic operators are used to perform mathematical calculations 
// such as addition, subtraction, multiplication, and division.

// let result = a + b;
// console.log(a+b); // 15 Addition 
// console.log(a-b); // 5  Subtraction
// console.log(a*b); // 50 Multiplication
// console.log(a/b); // 2  Division
// console.log(a**b);// 100000 exponential
// console.log(a++); // 10 Post Increment
// console.log(++a); //12 Pre Increment
// console.log(--a); // 11 Pre decrement
// console.log(a--); //11 Post Decrement
// console.log(a); // value print

// 2. Comparison Operators
// Comparison operators are used to compare two values. They return a 
// Boolean value

// == and ===
// == compares values after performing type conversion when necessary.

// console.log(a==c); // Equal to true
// console.log(a===c); // Strictly equal false
// console.log(a!=c); // Equal to false
// console.log(a!==c); // Equal to true
// console.log(a>b); // Equal to true
// console.log(a<b); // Equal to false
// console.log(a>=b); // Equal to true
// console.log(a<=b); // Equal to false

// Logical Operators
// Logical operators are used to combine or reverse Boolean conditions. 
// They are commonly used with if, while, and other conditional statements.

// AND (&&) The result is true only when both conditions are true.

// let age= 16

// if(age>18 && true){
//  console.log("Can vote!!")
// }else{
// console.log("Can't vote!!")
// }

// The result is true if at least one condition is true.

// if(age>18 || true){
//  console.log("Can vote!!")
// }else{
// console.log("Can't vote!!")
// }
// 3. The not ! operator is used to negate the boolean value
// The ! operator reverses a Boolean value.

// let isAdmin= false;

// if(!isAdmin){
//    console.log("user is not an admin")
// }

// 4. Assignment Operator 

// Assignment operators are used to assign or update values stored in 
// variables.

// Common assignment operators
// =(assignment),+=(addassign),-=(subtractassign),*=(multiplyassign),
// /=(quotientassign),%=(modulusassign),**=(exponentialassign)

// Ternary Operator
// The ternary operator is a shorthand way of writing a simple if...else 
// condition.It is called a ternary operator because it works with three 
// operands. condition ? valueIfTrue : valueIfFalse;

// let age = 18
// console.log(age>=18?"adult":"child");

// Type convertion and type coercion
// In JavaScript, Type Conversion and Type Coercion both mean changing a 
// value from one data type to another, but the key difference is who 
// does the conversion.

// let value ="123"
// console.log(typeof Number(value));

// Common convertion 
// console.log(Number("100"))
// console.log(String(100))
// console.log(Boolean(1))
// console.log(Boolean(0))

// Type convertion is the explicit conversion done by the developer.
// Type Coercion JavaScript automatically converts the type when an 
// operation requires it. 5 == "5"   // true
// == allows type coercion, so JavaScript converts "5" to 5.

// Input in JavaScript
// Input means taking data from the user or another source so that the 
// program can process it. In basic JavaScript, the prompt() function can 
// be used to take input from a user.The prompt function always takes any 
// value as a string value whether it may be any string, Number or boolean 
// or any other type.
// let name = prompt("Enter your name ")
// console.log(name)
// 2. Output in JavaScript
// Output means displaying the result produced by a program.
// A. console.log() - Mostly used for displaying information in the 
// browser's developer console.
// let name = "Vishal"
// console.log(name)
// B. alert() - Displays a popup message in the browser.
// alert("Welcome to JavaScript!");
// C. document.write() - Writes content directly into the HTML document.
// document.write("Hello JavaScript");
// The console is a developer tool used to display information, errors, warnings, and debugging messages.
// You can open it in most browsers using:
// F12 → Console Or Right click → Inspect → Consolex
// console.log()- Used for normal information.
// console.warn() - Used for warnings.
// console.error() - Used for errors.
// console.table()- Very useful for displaying arrays or objects in table format.
// console.log("Hello Java Script....")
// console.error("Hello Java Script....")
// console.warn("Hello Java Script....")
// let users = [
//     { name: "Vishal", age: 32 },
//     { name: "Rahul", age: 30 }
// ];
// console.table(users);

// let a = 10;
// let b = 20;
// let sum = a + b;
// console.log(sum);

// F12 → Sources → click the line number, The program will pause when 
// it reaches that line. you can inspect Variable values, Execution flow,
// Function calls, Expressions, Call stack
// You can use Step Over, Step Into, and Step Out to move through the code.
// JavaScript also provides a debugger statement.

// Conditional Statement 
// The if statement is used to execute a block of code only when a 
// specified condition is true.
// 1. if statement
// let age = 20;
// if(age>=18){
// console.log("You can vote")
// }

// 2. if...else is used when you have two possible outcomes:
// If the condition is true → execute if
// If the condition is false → execute else
// let age = 21
// if(age >=18){
// console.log("You are an adult..")
// }else{
// console.log("You are an child..")
// }

// 3. else if
// else if is used when you need to check multiple conditions.
// You can have multiple else if blocks.

// let marks = 63.11;
// if(marks>=90){
//    console.log("Grade A+");
// }
// else if(marks>=90){
//    console.log("Grade A+");
// }else if(marks>=80){
//    console.log("Grade A");
// }else if(marks>=70){
//    console.log("Grade B");
// }else if(marks>=60){
//    console.log("Grade C");
// }else{
// console.log("fail")
// }

// Nested if Conditions
// A nested condition means placing one if statement inside another 
// if statement.An if inside another if is called a nested if.

// let age = 30;
// let hasLicense = true;
// if(age>25){
//    if(hasLicense=true){
//       console.log("You can drive")
//    }
// }

// Nested if...else
// let age = 20;
// let hasLicense = false;

// if (age >= 18) {

//    if (hasLicense) {
//       console.log("You can drive.");
//    } else {
//       console.log("You need a driving license.");
//    }

// } else {
//    console.log("You are not old enough to drive.");
// }
// Nested Conditions with else if
// let age = 25;
// let hasLicense = true;

// if (age >= 18) {

//     if (hasLicense) {
//         console.log("You can drive.");
//     } else {
//         console.log("You need a license.");
//     }

// } else if (age >= 16) {

//     console.log("You may be eligible for a learner's permit.");

// } else {

//     console.log("You are too young to drive.");

// }

// Conditional statements in JavaScript are used to control the flow of a 
// program by executing different blocks of code based on whether specified 
// conditions evaluate to true or false.

// switch statements - The switch statement is used to execute different 
// blocks of code based on the value of a single expression.
// It is especially useful when you want to compare one value against 
// multiple possible values. The break statement stops the execution of 
// the switch statement.

// let day = 2;
// switch(day){
// case 1:
//    console.log("Sunday");
//    break;
// case 2:
//    console.log("Monday");
//    break;
// case 3:
//    console.log("Tuesday");
//    break;
// case 4:
//    console.log("Wednesday");
//    break;
// case 5:
//    console.log("Thrusday");
//    break;
// case 6:
//    console.log("Friday");
//    break;
// default:
//    console.log("Saturday");
//    break;
// }

// Multiple Cases with the Same Code, JavaScript's switch cases are 
// matched using strict equality (===).
// let rank = 3
// switch(rank){
//       case 1:
//       case 2:
//       case 3:
//       case 4:
//          console.log("Qualified");
//          break;
//       default:
//          console.log("Non Qualified");
// }

// A switch statement in JavaScript is a control-flow statement that 
// executes one block of code from multiple possible blocks based on 
// the value of an expression. The case keyword defines possible values, 
// break prevents fall-through, and default handles unmatched values.

// Loops: for, while, do...while
// A loop is a programming structure that allows you to execute the same 
// block of code repeatedly as long as a specified condition is satisfied.

//A for loop is used when you generally know how many times you want 
// to execute a block of code.
// for(let i = 0;i<=5;i++){
// console.log(i);
// }

// A while loop repeatedly executes a block of code as long as the condition 
// is true.

// A do...while loop executes the code at least once, and then checks the 
// condition.

// let i =0;
// while(i<=5){
// console.log(i);
// i++;
// }
// let i =0;
// do{
// console.log(i);
// i++;
// }while(i<=5);

// A loop in JavaScript is a control-flow structure that repeatedly 
// executes a block of code while a specified condition is satisfied. 
// The main traditional loops are for, while, and do...while.

// break and continue statement
// 1. break statement - this is completely used to currently terminate the 
// iteration for the loops, exit the loop and continues executing the code 
// after the loop.

// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         break;
//     }

//     console.log(i);
// }

// console.log("Loop ended");

// 2. continue statement
// The continue statement is used to skip the current iteration of a loop and move to the next iteration.
// Unlike break, it does not terminate the loop.
// for (let i = 1; i <= 5; i++) {

//     if (i === 3) {
//         continue;
//     }

//     console.log(i);
// }
// break is used to immediately terminate a loop or switch statement,
//  whereas continue skips the current 
// iteration of a loop and proceeds with the next iteration.

// Nested Loop's and Pattern Building Problems 
// Nested Loops : A nested loop is a loop placed inside another loop.
// for (let i = 0; i <= 4; i++) {

//    let row = "";
//    for (let j = 0; j <= i; j++) {

//       row += j;
//    }
//    console.log(row);
// }

// Arrays: creation, indexing, updating and traversal
// An array is a data structure used to store multiple values in a 
// single variable. An array can contain strings, numbers, objects, or 
// Even a mixture of different data types. There are several ways to 
// create an array. Using [] — Recommended

// let fruits =[];
// fruits.push('Apples');
// fruits.push('Oranges');
// fruits.push('Pineapples');
// fruits.push('Banana');
// fruits.push(2);
// fruits.push(true);
// console.log(fruits);

// You can also use to create the array using the new Array()
// let numbers = new Array(10, 20, 30);
// console.log(numbers);

// Array Indexing
// Indexing means accessing an element of an array using its position.
// JavaScript arrays use zero-based indexing.
// console.log(fruits[2]);
// Accessing the last element of the array 
// console.log(fruits[fruits.length-1])

// Modern JavaScript also provides:
// console.log(fruits.at(-1));

// Updating an array element
// Updating means changing the value stored at a particular index.
// fruits[5]= "Watermelon";
// console.log(fruits);

// Adding Elements
// push() adds an element to the end of an array.
// fruits.push("Guava","Sapodilla");
// console.log(fruits);
// unshift() adds an element to the beginning.
// fruits.unshift("Pomegranate","Papaya");
// console.log(fruits);

// Removing Elements
// pop() removes the last element.
// fruits.pop();
// fruits.pop();
// console.log(fruits);

// shift() removes the first element.
// fruits.shift();
// console.log(fruits);

// Array Length 
// The length property tells you how many elements are in an array.
// console.log(fruits.length);

// Array Traversal
// Array traversal means visiting/accessing each element of an 
// array one by one.
// Using for Loop
// for(let i =0;i<=fruits.length;i++){
//    console.log(fruits[i]);
// }
//Using for...of
// for(fruit of fruits){
//    console.log(fruit)
// }
// using forech loop traversal
// fruits.forEach(function (fruit) {
//     console.log(fruit);
// });
// Getting both index and value 
// fruits.forEach((index,fruit) => {
//    console.log(index,fruit);
// });

// An array in JavaScript is an ordered collection of elements stored 
// under a single variable. Array elements are accessed using zero-based 
// indexes, can be modified using their indexes, and can be traversed 
// using loops or array methods such as forEach().

// let msg = "      welcome to java script           ";
// console.log(msg.toUpperCase()); // a new string containing upper case 
// // of string
// console.log(msg.toLowerCase());
// console.log(msg.trim());// remove white spaces, tabs 
// //and newline character for new line from both trailing 
// // leading position
// console.log(msg.trimStart());
// console.log(msg.trimEnd());

// includes function checks whether or not any substring/characters exists in 
// inside the string also checks that if this substring exists after a particular
// start position(inclusive) and before end position(exclusive) inside this string
// let msg = "hello world";
// console.log(msg.includes('l',4));
// console.log(msg.startsWith('h')); // It checks whether or not any string start with 
// a particular character or not.
// console.log(msg.startsWith('w',6));// this check if any string starts with a particular character 
// after leaving specified character in the string.
// console.log(msg.endsWith('d'));
// console.log(msg.endsWith('o',5)); // here it is checking at 4th position from the 
// end as the end position is exclusive.

// console.log(msg.indexOf('l'));// check the first occurrence of the 
// character inside the string
// console.log(msg.indexOf('l',3));

// console.log(msg.lastIndexOf('l'));
// console.log(msg.lastIndexOf('l',5));

// Regex methods used to search for any characters inside the string 
// console.log(msg.search(/l/)); // search for any character inside the string 
// console.log(msg.search(/l/g)); // search for any character inside the string globally it will 
// always provide the first occurence of the characters inside the string.

// To check any uppercase character inside the string
// console.log(msg.search(/[A-Z]/)); // it checks for the uppercase characters inside the string
//  console.log(msg.search(/[a-z]/)); // provide the first occurence of the lower-case character inside the 
 // string

 // slice method is used to return the part of the substring inside an string

//  console.log(msg.slice(0,4));
//  console.log(msg.slice(-5,-3));// also support negative indexing 
// console.log(msg.substring(0,5));
// console.log(msg.substring(-5));
// console.log(msg.substr(3,3));

// console.log(msg.charAt(4));// returns a single characters from the string; does not support negative indexing 
// console.log(msg.at(-1)); // returns the last character from the string; supports the negative indexing also.

let msg = "hello world";
// console.log(msg.replace('l','0')); // replace the first occurenece of the character in the string.

// console.log(msg.replace(/l/g,"x"));// check the character globally inside the string and replace them 
// with the specified character into it, this replace is done using the regex method.

//console.log(msg.replaceAll("l","x")); // this is the newer method of java script to replace all the character 
// globally inside the string.

// console.log("My name is ", " Vishal Gupta");// this is the concat method and it is used to concat the two string
//generally this can also be done using the template literals and using the + operator may be in future anyone can 
// depreciate this method also.

// console.log(msg.repeat(3))

// console.log(msg.padStart(15));
// console.log(msg.padStart(15,'*=*=*'));
// console.log(msg.padEnd(15));
// console.log(msg.padEnd(15,'*+'));

// console.log(msg.padStart(15,'*').padEnd(19,'#'))

// console.log(msg.split(""));
// console.log(msg.split(" "));
// console.log(msg.split("o"));
// console.log(msg.split());

// console.log(msg.split("").join("-"));
// console.log("Vishal".toString());
// console.log((123).toString());
// console.log((true).toString());
// console.log([1,2,3].toString());

// console.log(msg.valueOf());

// var a = "Hello World"; // primitive
// var b = new String("Hello World") // string object
// console.log(typeof(a));
// console.log(typeof(b));

// console.log(typeof b.valueOf());
// console.log(typeof b.toString());

// console.log(a===b);
// console.log(a==b);









