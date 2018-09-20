import { BrowserWindow, ipcMain } from 'electron';
import MainProcess from './main-process.interface';

class SchedulingMainProcess implements MainProcess {
	initialize = (_: BrowserWindow): void => {
		ipcMain.on('open-scheduling-list', () => null as any);
	}
}

export default new SchedulingMainProcess();
