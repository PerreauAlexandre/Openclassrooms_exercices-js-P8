const body = document.getElementById("body");
const button = document.getElementById("myButton");

button.addEventListener("click", () => {
    const p = document.createElement("p");
    p.textContent = "Bonjour, vous avez cliqué sur le bouton !";
    body.appendChild(p);
})