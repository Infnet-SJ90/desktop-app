import { BrowserWindow, ipcMain } from 'electron';
import MainProcess from './main-process.interface';

class SchedulingMainProcess implements MainProcess {
	initialize = (mainWindow: BrowserWindow): void => {
		ipcMain.on('open-scheduling-list', () => {
			mainWindow.loadFile('./src/scenes/scheduling/scheduling-list.html');
		});
	}
}

export default new SchedulingMainProcess();
