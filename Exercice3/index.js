// Créez votre fonction ici

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage

function calculateAverage(list){
    if (list === undefined || list.length === 0) {
        return "No numbers to calculate average";
    }
    else {
        const total = list.reduce((accumulator, currentValue) => accumulator + currentValue);
        const moyenne = total/list.length;
        return moyenne;
    }
}