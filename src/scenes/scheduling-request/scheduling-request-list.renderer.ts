import { ipcRenderer } from 'electron';
import SchedulingRequestApi from './../../api/scheduling-request.api';
import TableHandler from './../../components/table-handler';

/* tslint:disable:prefer-for-of */

const schedulingRequestList = new SchedulingRequestApi().getAll();

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
	tableHandler.loadData(tableRef, schedulingRequestList);
	setTableButtonsEvents();
}

function setTableButtonsEvents(): void {
	const tableRef = getTableReference();

	for (let i = 0; i < tableRef.children.length; i++) {
		const button = tableRef.children[i].getElementsByTagName('button')[0];
		button.addEventListener('click', handleSelectedSchedulingRequest, false);
	}
}

function handleSelectedSchedulingRequest(event: any): void {
	event.preventDefault();

	const targetElement = event.target.parentElement.parentElement;
	const cellElement = targetElement.getElementsByTagName('td');
	const schedulingRequestId = cellElement[0].innerText;

	openEditWindow(schedulingRequestId);
}

function openEditWindow(schedulingRequestId: number): void {
	changeSchedulingRequestStatus(schedulingRequestId);
}

function changeSchedulingRequestStatus(schedulingRequestId: number): void {
	for (let index = 0; index < schedulingRequestList.length; index++) {
		if (schedulingRequestList[index].id == schedulingRequestId) {
			schedulingRequestList[index].status = 1;
			loadTable(new TableHandler());
			return;
		}
	}
}
