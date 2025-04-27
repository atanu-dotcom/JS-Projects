document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".toggle-button");
    const circle = document.querySelector(".circle");
    const body = document.querySelector("body");

    // Load the saved state from localStorage
    const isActive = localStorage.getItem("toggleActive") === "true";

    if (isActive) {
        toggleButton.classList.add("active");
        circle.style.transform = "translateX(40px)"; // Move circle to the right
        body.style.backgroundColor = "black"; // Set background to dark
    } else {
        toggleButton.classList.remove("active");
        circle.style.transform = "translateX(0)"; // Move circle to the left
        body.style.backgroundColor = "white"; // Set background to light
    }

    toggleButton.addEventListener("click", () => {
        toggleButton.classList.toggle("active");

        if (toggleButton.classList.contains("active")) {
            circle.style.transform = "translateX(40px)"; // Move circle to the right
            body.style.backgroundColor = "black"; // Change body background to dark
            localStorage.setItem("toggleActive", "true"); // Save state
        } else {
            circle.style.transform = "translateX(0)"; // Move circle back to the left
            body.style.backgroundColor = "white"; // Reset body background to light
            localStorage.setItem("toggleActive", "false"); // Save state
        }
    });
});