import { BrowserWindow } from 'electron';

import mainProcesses from './../main-process';
import { INDEX_FILE } from './constants';

class WindowCreator {
	static mainWindow: BrowserWindow;

	static create = (): void => {
		const windowOptions = {
			width: 800,
			height: 600,
			backgroundColor: '#F9C11C',
			show: false
		};

		WindowCreator.mainWindow = new BrowserWindow(windowOptions);

		WindowCreator.mainWindow.loadFile(INDEX_FILE);

		WindowCreator.loadProcesses();

		WindowCreator.mainWindow.once('ready-to-show', () => {
			WindowCreator.mainWindow.show();
		});

		WindowCreator.mainWindow.on('closed', () => {
			WindowCreator.mainWindow = null;
		});
	};

	private static loadProcesses(): void {
		mainProcesses.forEach((mainProcess) => {
			mainProcess.initialize(WindowCreator.mainWindow);
		});
	}
}

export default WindowCreator;
