import { app } from 'electron';

import WindowCreator from './utils/window-creator';

class ElectronInitializer {
	static initialize(): void {
		const shouldQuit = ElectronInitializer.makeSingleInstance();
		if (shouldQuit) return app.quit();
		ElectronInitializer.loadEvents();
	}

	// Make this app a single instance app.
	//
	// The main window will be restored and focused instead of a second window
	// opened when a person attempts to launch a second instance.
	//
	// Returns true if the current version of the app should quit instead of
	// launching.
	static makeSingleInstance(): boolean {
		if (process.mas) return false;

		return app.makeSingleInstance(() => {
			if (!WindowCreator.mainWindow) {
				return;
			}

			if (WindowCreator.mainWindow.isMinimized()) {
				WindowCreator.mainWindow.restore();
			}
			WindowCreator.mainWindow.focus();
		});
	}

	static loadEvents(): void {
		app.on('ready', () => {
			WindowCreator.create();
		});

		app.on('window-all-closed', () => {
			if (process.platform !== 'darwin') {
				app.quit();
			}
		});

		app.on('activate', () => {
			if (!WindowCreator.mainWindow) {
				WindowCreator.create();
			}
		});
	}
}

ElectronInitializer.initialize();
