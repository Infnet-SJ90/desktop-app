import { BrowserWindow } from 'electron';

import mainProcesses from './../main-process';
import { INDEX_FILE } from './constants';

class WindowCreator {
	static mainWindow: BrowserWindow;

	static create = (): void => {
		const windowOptions = {
			minWidth: 1024,
			minHeight: 640,
			width: 1024,
			height: 640,
			backgroundColor: '#F1F1F1',
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
