import { ipcRenderer } from 'electron';

import SchedulingApi from './../../api/scheduling.api';
import TableHandler from './../../components/table-handler';

/* tslint:disable:prefer-for-of */

const schedulingList = new SchedulingApi().getAll();

setBackButton();
loadTable(new TableHandler());

function setBackButton(): void {
	const btnHome = document.getElementById('btn-home');

	btnHome.addEventListener('click', () => {
		ipcRenderer.send('open-home');
	});
}

function getTableReference(): HTMLTableSectionElement {
	return document.getElementsByTagName('table')[0].getElementsByTagName('tbody')[0];
}

function loadTable(tableHandler: TableHandler): void {
	const tableRef = getTableReference();
	tableHandler.cleanTable(tableRef);
	tableHandler.loadSchedulingData(tableRef, schedulingList);
	setTableButtonsEvents();
}

function setTableButtonsEvents(): void {
	const tableRef = getTableReference();

	for (let i = 0; i < tableRef.children.length; i++) {
		const button = tableRef.children[i].getElementsByTagName('button')[0];
		button.addEventListener('click', handleSelectedScheduling, false);
	}
}

function handleSelectedScheduling(event: any): void {
	event.preventDefault();

	const targetElement = event.target.parentElement.parentElement;
	const cellElement = targetElement.getElementsByTagName('td');
	const schedulingId = cellElement[0].innerText;

	openEditWindow(schedulingId);
}

function openEditWindow(schedulingId: number): void {
	alert('Maiores Detalhes Em Breve. ID Escolhido: ' + schedulingId);
}
