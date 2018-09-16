import { ipcRenderer } from 'electron';

const schedulingRequestScene = document.getElementById('btn-scheduling-request-list');
const schedulingScene = document.getElementById('btn-scheduling-list');
const resourceCreationScene = document.getElementById('btn-resource-creation');

schedulingRequestScene.addEventListener('click', () => {
	ipcRenderer.send('open-scheduling-request-list');
});

schedulingScene.addEventListener('click', () => {
	ipcRenderer.send('open-scheduling-list');
});

resourceCreationScene.addEventListener('click', () => {
	ipcRenderer.send('open-resource-creation');
});
