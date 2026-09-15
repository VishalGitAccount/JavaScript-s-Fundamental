// what is async programming - an async programming means a non - blocking code that executes and never wait for 
// any line of code / action to wait , while on the other hand a sync programming requires to execute the code 
// line by line which is slow and non -efficient. 

// XMLHttpsRequest - this class is used to send the request from client browser to server browser.
// GET, POST, PUT, PATCH, DELETE 

// var URL = "https://v2.jokeapi.dev/joke/Programming?type=single"
// var request = new XMLHttpRequest()
// request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status) {
//         console.log(JSON.parse(request.responseText).joke)
//     } else {
//         console.log("Failed to get the response...")
//     }
// })
// request.open("GET", URL)
// request.send()

// readyState
// 0 : Unsent
// 1 : open function has been called
// 2 : sent function has been called
// 3 : data download has been started
// 4 : completed (either success/ fail)

// Through Callback function 

var URL = "https://v2.jokeapi.dev/joke/Programming?type=single";

// This function does the actual asking.
//   URL     -> the web address to hit
//   handler -> the callback: the code to run once we have a result
function sendRequest(URL, handler) {
  // XMLHttpRequest is the old built-in browser tool for talking
  // to a server. (Newer code uses fetch(), but this shows the
  // machinery underneath.)
  var request = new XMLHttpRequest();

  // "readystatechange" fires every time the request moves one step
  // forward (created -> opened -> sent -> downloading -> done).
  request.addEventListener("readystatechange", () => {
    // readyState === 4  means "completely finished".
    // status === 200    means "OK, here is your data".
    if (request.readyState === 4 && request.status === 200) {
      // request.responseText is just plain text.
      // The server sent JSON-shaped text, so JSON.parse turns that
      // text into a real JavaScript object, and then we pull the
      // .joke value out of it.
      //
      // Common callback habit: call handler(error, data).
      // There is no error here, so the first argument is null.
      handler(null, JSON.parse(request.responseText).joke);
    }

    // Finished, but the server did NOT say 200 (e.g. 404, 500).
    if (request.readyState === 4 && request.status !== 200) {
      // Something went wrong: put a message in the ERROR slot,
      // and null in the data slot.
      handler("Failed to fetch the joke", null);
    }
  });

  request.open("GET", URL); // GET = "just give me data", also sets the address
  request.send(); // actually send the request off
}

// Now we USE it. The arrow function below is the callback that
// sendRequest will run for us later, once the joke is ready.
sendRequest(URL, (err, data) => {
  // Always check the error slot first.
  if (!err) console.log(data); // no error -> show the joke
  else console.log(err); // error -> show the message
});





