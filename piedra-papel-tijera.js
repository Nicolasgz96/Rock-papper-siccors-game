let btn = document.getElementById("btn");

const arr = ["✋🏻", "✊🏻", "✌🏻"];

document.getElementById("emoji").innerHTML = `✋🏻 ✊🏻 ✌🏻`;
document.getElementById("text").innerHTML = `Toca el boton para jugar`;

function rockPaperSissors(){
    const random1 = Math.floor(Math.random() * arr.length);
    const random2 = Math.floor(Math.random() * arr.length);

    const player1 = arr[random1];
    const player2 = arr[random2];

    if (player1 == player2) {
        resultEmj = `${player1} ${player2}`
        resultTxt = `empate`
        console.log(`tie ${player1} ${player2}`)
    } else if (player1 == "✋🏻" && player2 == "✊🏻" ||
        player1 == "✊🏻" && player2 == "✌🏻" ||
        player1 == "✌🏻" && player2 == "✋🏻"
    ) {
        resultEmj = `${player1} ${player2}`
        resultTxt = `Jugador uno gana!!!`
        console.log(`Player one winss!!! ${player1} ${player2}`);
    } else {
        resultEmj = `${player1} ${player2}`
        resultTxt = `Jugador dos gana!!!`
        console.log(`Player two wins!!!  ${player1} ${player2}`);
    }

    document.getElementById("emoji").innerHTML = resultEmj;
    document.getElementById("text").innerHTML = resultTxt;
};

btn.addEventListener("click", () => {
    rockPaperSissors();    
});

// Función para activar o desactivar el modo oscuro
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Guarda el estado del modo oscuro en localStorage
    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
};

// Al cargar la página, verifica si el modo oscuro está activo en localStorage y aplícalo si es necesario
window.onload = function() {
    const darkModeStorage = localStorage.getItem("darkMode");

    // Si el modo oscuro está activo en localStorage, aplicarlo al cuerpo
    if (darkModeStorage && darkModeStorage === "true") {
        document.body.classList.add("dark-mode");
    }
};


