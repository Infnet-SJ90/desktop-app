const {ipcRenderer} = require('electron');

let troca = document.getElementById('btn-pedidos-agendamentos');

troca.addEventListener('click', function(){
	ipcRenderer.send('open-pedidos-agendamentos');
});