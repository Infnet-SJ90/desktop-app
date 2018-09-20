import { BrowserWindow, ipcMain } from 'electron';
import MainProcess from './main-process.interface';

class HomeMainProcess implements MainProcess {
	initialize = (_: BrowserWindow): void => {
		ipcMain.on('open-home', () => null as any);
	}
}

export default new HomeMainProcess();
