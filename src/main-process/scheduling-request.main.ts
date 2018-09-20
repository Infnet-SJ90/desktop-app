import { BrowserWindow, ipcMain } from 'electron';
import MainProcess from './main-process.interface';

class SchedulingRequestMainProcess implements MainProcess {
	initialize = (_: BrowserWindow): void => {
		ipcMain.on('open-scheduling-request-list', () => null as any);
	}
}

export default new SchedulingRequestMainProcess();
