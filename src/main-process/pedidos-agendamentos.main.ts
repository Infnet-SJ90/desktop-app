import { BrowserWindow, ipcMain } from 'electron';
import MainProcess from './main-process.interface';

class PedidosAgendamentosMainProcess implements MainProcess {
	initialize = (mainWindow: BrowserWindow): void => {
		ipcMain.on('open-pedidos-agendamentos', () => {
			mainWindow.loadFile('./src/scenes/pedidos-agendamentos/pedidos-agendamentos.html');
		});
	}
}

export default new PedidosAgendamentosMainProcess();
