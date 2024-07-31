// //votre code ici

export default pairNumbers

function pairNumbers(min, max) {
    let pairString = "";
    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            pairString = pairString + i.toString() + ",";
        }
    }
    pairString = pairString.substring(0, pairString.length - 1);
    return pairString;
}