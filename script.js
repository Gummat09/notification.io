'use script';

const btn = document.getElementById('btn');
const message = document.querySelector('.message-box');


btn.addEventListener('click', popMessage);

function popMessage(e) {
    e.preventDefault();
    console.log("add me")
        message.style.display = 'block';
}
