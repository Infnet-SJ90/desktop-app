import { ipcRenderer } from 'electron';
import { ENV_CONFIG } from './utils/constants';

const troca = document.getElementById('btn-scheduling-request-list');

troca.addEventListener('click', () => {
	ipcRenderer.send('open-scheduling-request-list');
});

console.log(ENV_CONFIG);
