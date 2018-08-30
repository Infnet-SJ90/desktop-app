import { BrowserWindow, ipcMain } from 'electron';
import SchedulingRoute from '../utils/routes';
import MainProcess from './main-process.interface';

class SchedulingMainProcess implements MainProcess {
	initialize = (mainWindow: BrowserWindow): void => {
		ipcMain.on('open-scheduling-list', () => {
			mainWindow.loadFile(SchedulingRoute.schedulingList);
		});
	}
}

export default new SchedulingMainProcess();
