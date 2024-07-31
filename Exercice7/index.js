function convertToBinary() {
    let decimalInput = document.getElementById("decimalInput").value;

    if (/^[0-9]+$/.test(decimalInput) === false) {
        return;
    }

    let decimalNumber = parseInt(decimalInput);

    let binaryOutput = "";

    if (decimalNumber === 0) {
        binaryOutput = "0";
    } else {
        while (decimalNumber > 0) {
            let remainder = decimalNumber % 2;
            binaryOutput = remainder + binaryOutput;
            decimalNumber = Math.floor(decimalNumber / 2);
        }
    }

    document.getElementById("binaryResult").innerText = binaryOutput;
}