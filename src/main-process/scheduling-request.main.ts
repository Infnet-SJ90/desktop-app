import { BrowserWindow, ipcMain } from 'electron';
import SchedulingRoute from '../utils/routes';
import MainProcess from './main-process.interface';

class SchedulingRequestMainProcess implements MainProcess {
	initialize = (mainWindow: BrowserWindow): void => {
		ipcMain.on('open-scheduling-request-list', () => {
			mainWindow.loadFile(SchedulingRoute.schedulingRequestList);
		});
	}
}

export default new SchedulingRequestMainProcess();
