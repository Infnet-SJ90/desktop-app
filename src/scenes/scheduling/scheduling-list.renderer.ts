import { Renderer } from '../../utils/renderer';
import SchedulingApi from './../../api/scheduling.api';
import TableHandler from './../../components/table-handler';

/* tslint:disable:prefer-for-of */

export class Schedulinglist implements Renderer {
	private _schedulingList = new SchedulingApi().getAll();

	init() {
		this.setBackButton();
		this.loadTable(new TableHandler());
	}

	private setBackButton(): void {
		const btnHome = document.getElementById('btn-home');

		btnHome.addEventListener('click', () => {
			history.back();
		});
	}

	private getTableReference(): HTMLTableSectionElement {
		return document.getElementsByTagName('table')[0].getElementsByTagName('tbody')[0];
	}

	private loadTable(tableHandler: TableHandler): void {
		const tableRef = this.getTableReference();
		tableHandler.cleanTable(tableRef);
		tableHandler.loadSchedulingData(tableRef, this._schedulingList);
		this.setTableButtonsEvents();
	}

	private setTableButtonsEvents(): void {
		const tableRef = this.getTableReference();

		for (let i = 0; i < tableRef.children.length; i++) {
			const button = tableRef.children[i].getElementsByTagName('button')[0];
			button.addEventListener('click', (event) => this.handleSelectedScheduling(event), false);
		}
	}

	private openEditWindow(schedulingId: number): void {
		alert('Maiores Detalhes Em Breve. ID Escolhido: ' + schedulingId);
	}

	private handleSelectedScheduling(event: any): void {
		event.preventDefault();

		const targetElement = event.target.parentElement.parentElement;
		const cellElement = targetElement.getElementsByTagName('td');
		const schedulingId = cellElement[0].innerText;

		this.openEditWindow(schedulingId);
	}
}
