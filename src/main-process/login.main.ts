import { BrowserWindow, ipcMain } from 'electron';
import MainProcess from './main-process.interface';

class LoginMainProcess implements MainProcess {
	initialize = (_: BrowserWindow): void => {
		ipcMain.on('open-login', () => null as any);
	}
}

export default new LoginMainProcess();
