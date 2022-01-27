function changeMode (){
    changeClasses();
    changeText();
}

function changeClasses (){
    botao.classList.toggle(darkModeClass);
    titulo.classList.toggle(darkModeClass);
    rodape.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
}

function changeText() {
    const darkMode = "Dark Mode";
    const lightMode = "Light Mode";

    if(botao.classList.contains(darkModeClass)){
        botao.innerHTML = lightMode;
        titulo.innerHTML = darkMode + ' ON';
        return;
    }

    botao.innerHTML = darkMode;
    titulo.innerHTML = lightMode + ' ON';
}

const darkModeClass = 'dark-mode';
const botao = document.getElementById('mode-selector');
const titulo = document.getElementById('page-title');
const rodape = document.getElementsByTagName('footer') [0];
const body = document.getElementsByTagName('body') [0];


botao.addEventListener('click', changeMode);


