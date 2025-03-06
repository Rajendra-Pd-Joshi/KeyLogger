const logdiv = document.getElementById('log');
const statediv = document.getElementById('state');
const startbtn = document.getElementById('start-btn');
const stopbtn = document.getElementById('stop-btn');

startbtn.addEventListener('click', () => {
    document.addEventListener('keydown', handleDown);
    document.addEventListener('keyup', handleUp);
});

stopbtn.addEventListener('click', () => {
    document.removeEventListener('keydown', handleDown);
    document.removeEventListener('keyup', handleUp);
    logdiv.textContent = "";
    statediv.textContent = " ";
});

function handleDown(e) { // Fixed the parameter name
    logdiv.textContent = `Key ${e.key} Pressed Down`;
    statediv.textContent = "Key is down";
}

function handleUp(e) { // Fixed the parameter name
    logdiv.textContent = `Key ${e.key} Pressed Up`;
    statediv.textContent = "Key is up";
}
