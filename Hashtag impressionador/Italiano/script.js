var texts = ["Aproveite! :)", "Disfruta! :)", "Enjoy! :)", "Goditi! :)"];

var currentIndex = 0;


function updateText() {
    document.getElementById('EnjoyText').innerText = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
}

updateText();

setInterval(updateText, 2000);
