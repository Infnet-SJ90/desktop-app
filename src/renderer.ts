import { ipcRenderer } from 'electron';

const schedulingRequestScene = document.getElementById('btn-scheduling-request-list');
const schedulingScene = document.getElementById('btn-scheduling-list');

schedulingRequestScene.addEventListener('click', () => {
	ipcRenderer.send('open-scheduling-request-list');
});

schedulingScene.addEventListener('click', () => {
	ipcRenderer.send('open-scheduling-list');
});
