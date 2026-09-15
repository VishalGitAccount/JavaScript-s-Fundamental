var marks = [888, 2, 4, 52, 43, 10000]
// Case 1 : when the value of pv is not known explicitly defined 
// pv = arr[0]
// cv = arr[1]

// sum of all items in the array 
// var total = marks.reduce((total, cv)=>{
//     // total+= cv // This is happening behind the scene 
//     console.log(total,cv)
//     return total+cv
// })
// console.log(total)

// How to find the largest inside an array - old traditional way 

// var largest = marks[0];
// marks.forEach((m) => {
//     if (m > largest) largest = m
// })

// console.log(largest)

// Case 2 : when the value of pv is known explicitly defined 
// pv = user specified
// cv = arr[0]

// console.log(marks.reduce((largest, cv) => {
//     if (cv > largest) {
//         return cv;
//     } else {
//         return largest;
//     }
// }, marks[0]))

// findIndex() - it provides the index of the elemnt which I search inside an array if nothing found will provide us undefined.
// return first occurence the item passing the given condition.
// console.log(marks.findIndex((m, i) => {
//     return m === 10000
// }))

// console.log(Array(10).fill('_'))

// flat function()
// var marks = [
//     [10,20,30],
//     [20,30,40]
// ]
// console.log(marks.flat())



