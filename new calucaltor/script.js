// script.js

document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    let currentInput = "";
    let operation = "";
    let previousInput = "";
    
    // Function to handle button clicks
    function handleButtonClick(value) {
        if (value === "C") {
            currentInput = "";
            previousInput = "";
            operation = "";
            display.value = "";
        } else if (value === "=") {
            try {
                currentInput = eval(currentInput).toString();
                display.value = currentInput;
            } catch (e) {
                display.value = "Error";
            }
        } else {
            currentInput += value;
            display.value = currentInput;
        }
    }

    // Adding event listeners to buttons
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            handleButtonClick(this.getAttribute("data-value"));
        });
    });

    // Keydown event listener for keyboard input
    window.addEventListener("keydown", function(event) {
        const key = event.key;
        if (
            "0123456789+-*/C=".indexOf(key) !== -1
        ) {
            handleButtonClick(key);
        }
    });
});
