import { BrowserWindow, ipcMain } from 'electron';
import MainProcess from './main-process.interface';

class HomeMainProcess implements MainProcess {
	initialize = (mainWindow: BrowserWindow): void => {
		ipcMain.on('open-home', () => {
			mainWindow.loadFile('./src/index.html');
		});
	}
}

export default new HomeMainProcess();
