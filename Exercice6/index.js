const result = document.getElementById("display");

let calcString = "";

function appendToDisplay(str) {
    calcString += str;
    result.value = calcString;
}

function clearDisplay() {
    calcString = "";
    result.value = calcString;
}

function calculateResult(){
    if (calcString[calcString.length - 2] === "/" && calcString[calcString.length - 1] === "0") {
        result.value = "Division by zero is not allowed";
    }
    else {
        calcString = eval(calcString);
        result.value = calcString;
    }
}