// function() - functions are the reusable block of code where the code inside the function runs only when the 
// function is called by its name.


// function keyword is used to create a function followed by its name

// function addition(parameter/s){
// // code be executed 
// }

// addition(argument/s) // 

// function addition (a,b){
//     console.log(a+b)
// }
// addition(10,15)

// function calcBmi(weight, height) {
//     var bmi = weight / height ** 2
//     return bmi
// }
// var bmi =
//     console.log("The BMI of the " + calcBmi(100, 1.80))

// function expressions 
// 1) arrow function ()=>{}
// 2) anonymous function function(){} 

// Use case - 
// 1. As anonymous and arrow function should not have any name so we can assign them as a value 
// to a variable 

// for example 
// Throudh anonymous function
// var sq = function (n) {
//     return n * n
// }

// var res = sq(13)
// console.log(res)

// for arrow function 

// var res = n => n * n
// console.log(res(4))

// 2. Use them as a callback
// callback - when function is passed to another function as a value of a parameter the passed function 
// called as a callback.

// var ageCalc = function (yob) {
//     return new Date().getFullYear() - yob;
// }

// var lifeSpan = (average_age, yob, ageFn) => {
//     var year_left = average_age - ageFn(yob)
//     console.log("Years Left :", year_left)
// }

// lifeSpan(90, 1994, ageCalc)







