import { BrowserWindow, ipcMain } from 'electron';
import MainProcess from './main-process.interface';

class ResourceCreationMainProcess implements MainProcess {
	initialize = (_: BrowserWindow): void => {
		ipcMain.on('open-resource-creation', () => null as any);
	}
}

export default new ResourceCreationMainProcess();
