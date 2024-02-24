var texts = ["Bem-Vindo", "Welcome", "Bienvenido", "Benvenuto"];

var currentIndex = 0;


function updateText() {
    document.getElementById('welcomeText').innerText = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
}

updateText();

setInterval(updateText, 2000);
