import { BrowserWindow } from 'electron';

interface MainProcess {
	initialize: (mainWindow: BrowserWindow) => void;
}

export default MainProcess;
