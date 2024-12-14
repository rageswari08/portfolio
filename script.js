// script.js
const colors = ["black", "white"];

function changeTheme() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
    document.body.style.color = colors[randomIndex] === "black" ? "white" : "black";
}

