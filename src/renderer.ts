import { ipcRenderer } from 'electron';

const troca = document.getElementById('btn-scheduling-request-list');

troca.addEventListener('click', () => {
	ipcRenderer.send('open-scheduling-request-list');
});
