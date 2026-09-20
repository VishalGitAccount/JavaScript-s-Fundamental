// var URL = "https://v2.jokeapi.dev/joke/Programming?type=single"

// fetch(URL).then((response) => {
//     return response.json()
// }).then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.log(error)
// })

// Creating our own promises that takes age as a parameter and using the promises will check if person is eligible 
// or not 

// function checkEligibility(age) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (age >= 18) {
//                 resolve("Eligible")
//             } else {
//                 reject("Not Eligible")
//             }
//         }, 5000)
//     })
// }
// checkEligibility(21).then((data) => {
//     console.log(data)
// }).catch((error) => {console.log(error)})
// checkEligibility(12).then((data) => {
//     console.log(data)
// }).catch((error) => {console.log(error)})

var URL = "https://v2.jokeapi.dev/joke/Programming?type=single";

function sendRequest(URL) {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                resolve(JSON.parse(request.responseText).joke);
            }
            if (request.readyState === 4 && request.status !== 200) {
                reject("Failed to fetch the joke");
            }
        });
        request.open("GET", URL);
        request.send();
    })
}
sendRequest(URL).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})