const ingressos = [];

function addRedBorder(id) {
    element = document.querySelector(`#${id})`);
    element.style.border = "5px solid red";
}

function highLightCard(cardId) {
    var element = document.getElementById(cardId);
    element.classList.toggle("card-highLight");
}

function checkKeyboardCode()
{
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;

        alert(`Tecla Pressionada ${name} \r\n key code: ${code}`);
    }, false);
}

function addKeyboardEventListener()
{
    document.addEventListener('keydown', (event) => {

        var ingresso1 = document.getElementById("quinta");
        var ingresso2 = document.getElementById("sexta");
        var ingresso3 = document.getElementById("sabado");
        var ingresso4 = document.getElementById("domingo");

        var code = event.code;
        if (code == "Digit1") {
            ingresso1.classList.toggle("card-highLight");
            ingresso2.classList.remove("card-highLight");
            ingresso3.classList.remove("card-highLight");
            ingresso4.classList.remove("card-highLight");
        }
        if (code == "Digit2") {
            ingresso1.classList.remove("card-highLight");
            ingresso2.classList.toggle("card-highLight");
            ingresso3.classList.remove("card-highLight");
            ingresso4.classList.remove("card-highLight");
        }
        if (code == "Digit3") {
            ingresso1.classList.remove("card-highLight");
            ingresso2.classList.remove("card-highLight");
            ingresso3.classList.toggle("card-highLight");
            ingresso4.classList.remove("card-highLight");
        }
        if (code == "Digit4") {
            ingresso1.classList.remove("card-highLight");
            ingresso2.classList.remove("card-highLight");
            ingresso3.classList.remove("card-highLight");
            ingresso4.classList.toggle("card-highLight");
        }
    }, false);
}

selectCard = (selector) => {
    var element = document.querySelector(selector);
    element.classList.toggle("cardSelected");
    if (ingressos.inludes(selector)) ingressos.pop(selector);
    else ingressos.push(selector)
}

showSelectedCards = () =>
{
    if (ingressos.length > 0) alert("Ingressos Selecionados:" + ingressos);
}


addKeyboardEventListener();