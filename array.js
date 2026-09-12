// HOF - Higher Order Function 

// var marks = [23, 34, 3, 3, 2, 3, 452, 33, 454, 23]
// marks.find((v) => {
//     console.log(v)
// }) // find function requires a callback function to execute and we can pass an anonymous & arrow function both 

// how to find the element having value inside the array is 34 using find function

// console.log(marks.find(v => v === 34))

// Note : If the element found inside the array them it should return the value or else if not found in the 
// then it should return undefined, for example 

// console.log(marks.find(v=>v===2067)) // undefined as 2067 does not exists inside the array 

// How to calculate the sum of the value inside the array element 

// Way 1 - The below is the traditional way of finding the sum of the all array element 
// var marks = [23, 34, 3, 3, 2, 3, 452, 33, 454, 23]
// var total = 0
// for (var i = 0; i < marks.length; i++) {
//     total += marks[i]
// }
// console.log("The total of marks are "+total)

// Way 2 - forEach - Iterate the array element 
// marks.forEach(element => {
//     total+=element
// }); 
// console.log("The total of marks are :"+total)

// create a new array containing doubles of each of the items from the original array 
// var marks = [23, 34, 3, 3, 2, 3, 452, 33, 454, 23]
// var doubles = []
// for (var i = 0; i < marks.length; i++) {
//     doubles.push(marks[i] * 2)
// }

// console.log(doubles)

// map - Iterate over each item, perform an action and return its result in the new array

// Q what are the difference between the forEach and map function ?
// A. forEach does not returns any array, and only iterate the element of the array, and for map function 
// it iterate over each and every element of the array and returns the final array which operation you applied on it.
// var marks = [23, 34, 3, 3, 2, 3, 452, 33, 454, 23]

// var finalarray = marks.forEach(v => v * 2)
// console.log(finalarray) // this produces the undefined under the output

// var finalarray = marks.map(v => v * 2)
// console.log(finalarray)

// find an create a new array containing all the even nos from an array 

// var marks = [23, 34, 3, 3, 2, 3, 452, 33, 454, 23]
// var evennos =[]
// marks.forEach((m)=>{
//     if(m%2===0){
//         evennos.push(m)
//     }
// })
// console.log(evennos)

// If we use the map function it should returns a value however this is not possible through forEach()
// but the important things to remember is that it should iterate each and every element of the array 
// regardless of the condition specified, but for this filter should be the right choice for this.

// var marks = [23, 34, 3, 3, 2, 3, 452, 33, 454, 23]

// var finalarray = marks.map((m) => {
//     return m % 2 === 0
// })
// console.log(finalarray)

// var marks = [23, 34, 3, 3, 2, 3, 452, 33, 454, 23]

// var finalarray = marks.filter((m) => {
//     return m % 2 === 0
// })
// console.log(finalarray)

// some - return true if atleast one of the condition passes true
// var marks = [23, -34, 3, 3, 2, 3, 452, 33, 454, 23]
// var some_positive = marks.some(x => x > 0)
// console.log(some_positive)

// every - return true if all the condition passes the condition 
// var marks = [23, -34, 3, 3, 2, 3, 452, 33, 454, 23]
// var every_positive = marks.every(x => x > 0)
// console.log(every_positive)

// sort() - this function having an anonymous function which if return a-b provides the data in ascending 
// order if do in b-a then sort the array in descending order

// var marks = [23, -34, 3, 3, 2, 3, 452, 33, 454, 23]
// var sorted_marks = marks.sort((a, b) => {
//     return a - b
// })
// console.log(sorted_marks)

// var marks = [23, -34, 3, 3, 2, 3, 452, 33, 454, 23]
// var sorted_marks = marks.sort((a, b) => {
//     return b - a
// })
// console.log(sorted_marks)

// The above is useful for array having integer type elements

// if we have a string type elements inside an array then we should follow another approach 

// var names = ["John", "Jack", "James", "Josie"]
// var arranged = names.sort((a, b) =>
//     a.localeCompare(b)
// //b.localeCompare(a)
// )
// console.log(arranged)

