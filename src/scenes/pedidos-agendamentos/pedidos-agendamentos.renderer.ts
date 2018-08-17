import { ipcRenderer } from 'electron';

import PedidoDeAgendamentoApi from './../../api/pedido-agendamento.api';
import TableHandler from './../../components/table-handler';

/* tslint:disable:prefer-for-of */

const pedidosDeAgendamentos = new PedidoDeAgendamentoApi().getAll();

setBackButton();
loadTable(new TableHandler());

function setBackButton(): void {
	const troca = document.getElementById('btn-home');

	troca.addEventListener('click', () => {
		ipcRenderer.send('open-home');
	});
}

function getTableReference(): HTMLTableSectionElement {
	return document.getElementsByTagName('table')[0].getElementsByTagName('tbody')[0];
}

function loadTable(tableHandler: TableHandler): void {
	const tableRef = getTableReference();
	tableHandler.cleanTable(tableRef);
	tableHandler.loadPedidosDeAgendamentosTable(tableRef, pedidosDeAgendamentos);
	setTableButtonsEvents();
}

function setTableButtonsEvents(): void {
	const tableRef = getTableReference();

	for (let i = 0; i < tableRef.children.length; i++) {
		const button = tableRef.children[i].getElementsByTagName('button')[0];
		button.addEventListener('click', handleSelectedPedidoDeAgendamento, false);
	}
}

function handleSelectedPedidoDeAgendamento(event: any): void {
	event.preventDefault();

	const targetElement = event.target.parentElement.parentElement;
	const cellElement = targetElement.getElementsByTagName('td');
	const pedidoDeAgendamentosId = cellElement[0].innerText;

	openEditWindow(pedidoDeAgendamentosId);
}

function openEditWindow(pedidoDeAgendamentosId: number): void {
	changePedidoDeAgendamentoStatus(pedidoDeAgendamentosId);
}

function changePedidoDeAgendamentoStatus(pedidoDeAgendamentosId: number): void {
	for (let index = 0; index < pedidosDeAgendamentos.length; index++) {
		if (pedidosDeAgendamentos[index].pedidoDeAgendamentoId === pedidoDeAgendamentosId) {
			pedidosDeAgendamentos[index].status = 'Agendado';
			loadTable(new TableHandler());
			return;
		}
	}
}
