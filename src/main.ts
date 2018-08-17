import { app, BrowserWindow, ipcMain } from 'electron';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow: Electron.BrowserWindow = null;

function createWindow(): void {
	// Create the browser window.
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		backgroundColor: '#F9C11C',
		show: false
	});

	// and load the index.html of the app.
	mainWindow.loadFile('./src/index.html');
	mainWindow.once('ready-to-show', () => {
		mainWindow.show();
	});

	// Emitted when the window is closed.
	mainWindow.on('closed', () => {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null;
	});
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
	// On macOS it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (mainWindow === null) {
		createWindow();
	}
});

ipcMain.on('open-pedidos-agendamentos', () => {
	mainWindow.loadFile('./src/pedidos-agendamentos.html');
});

ipcMain.on('open-home', () => {
	mainWindow.loadFile('./src/index.html');
});
