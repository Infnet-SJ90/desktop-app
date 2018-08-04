const {ipcRenderer} = require('electron');

let troca = document.getElementById('btn-home');

troca.addEventListener('click', function(){
	ipcRenderer.send('open-home');
});