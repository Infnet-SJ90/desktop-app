import { BrowserWindow, ipcMain } from 'electron';
import MainProcess from './main-process.interface';

class SchedulingRequestMainProcess implements MainProcess {
	initialize = (mainWindow: BrowserWindow): void => {
		ipcMain.on('open-scheduling-request-list', () => {
			mainWindow.loadFile('./src/scenes/scheduling-request/scheduling-request-list.html');
		});
	}
}

export default new SchedulingRequestMainProcess();
