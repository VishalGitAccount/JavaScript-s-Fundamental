// DOMContentLoaded is a browser event that fires on the document when 
// the browser has completely parsed the HTML document and constructed 
// the DOM, and all deferred (defer) scripts and module scripts that are 
// part of the document have finished executing.

// DOMContentLoaded is an event fired on the document after the browser 
// has finished parsing the HTML and the DOM is ready, including after 
// deferred and module scripts have executed. It does not wait for 
// images and other resources to finish loading.

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("firstButton").
        addEventListener(
            "click", () => {
                document.getElementById("firstHeading").textContent =
                    "JAVA Script DOMContentLoaded Example"
            }
        )
})
