import { BrowserWindow, ipcMain } from 'electron';
import SchedulingRoute from '../utils/routes';
import MainProcess from './main-process.interface';

class HomeMainProcess implements MainProcess {
	initialize = (mainWindow: BrowserWindow): void => {
		ipcMain.on('open-home', () => {
			mainWindow.loadFile(SchedulingRoute.index);
		});
	}
}

export default new HomeMainProcess();
