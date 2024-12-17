const display = document.getElementById("display");

function appendChar(char) {
    display.value += char;
}

function clearDisplay() {
    display.value = "";
}


function backspace() {
    display.value = display.value.slice(0, -1);
}


function squareNumber() {
    if (display.value) {
        let number = parseFloat(display.value);
        display.value = number * number;
    }
}


function calculateResult() {
    const input = display.value;
    let tokens = input.split(/([+\-*/%])/); 
    let result = parseFloat(tokens[0]);

    try {
        for (let i = 1; i < tokens.length; i += 2) {
            let operator = tokens[i];
            let nextNumber = parseFloat(tokens[i + 1]);

            switch (operator) {
                case '+':
                    result += nextNumber;
                    break;
                case '-':
                    result -= nextNumber;
                    break;
                case '*':
                    result *= nextNumber;
                    break;
                case '/':
                    result /= nextNumber;
                    break;
                case '%':
                    result %= nextNumber;
                    break;
                default:
                    throw "Invalid Operation";
            }
        }
        display.value = result;
    } catch (error) {
        alert("Invalid Input!");
        display.value = "";
    }
}

document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (/[\d+\-*/%.]/.test(key)) appendChar(key);
    else if (key === "Enter") calculateResult();
    else if (key === "Backspace") backspace();
    else if (key === "Escape") clearDisplay();
});
