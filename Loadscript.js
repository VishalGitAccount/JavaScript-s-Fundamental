window.addEventListener("load", () => {
    document.getElementById("firstButton").addEventListener(
        "click", () => {
            document.getElementById("firstHeading").textContent =
                "JavaScript Load Example";
        }
    );
});