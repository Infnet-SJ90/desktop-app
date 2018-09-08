import { Renderer } from '../../utils/renderer';
import SchedulingRequestApi from './../../api/scheduling-request.api';
import TableHandler from './../../components/table-handler';

/* tslint:disable:prefer-for-of */

export class SchedulingRequestList implements Renderer {
	private _schedulingRequestList = new SchedulingRequestApi().getAll();

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
		tableHandler.loadData(tableRef, this._schedulingRequestList);
		this.setTableButtonsEvents();
	}

	private setTableButtonsEvents(): void {
		const tableRef = this.getTableReference();

		for (let i = 0; i < tableRef.children.length; i++) {
			const button = tableRef.children[i].getElementsByTagName('button')[0];
			button.addEventListener('click', (event) => this.handleSelectedSchedulingRequest(event), false);
		}
	}

	private handleSelectedSchedulingRequest(event: any): void {
		event.preventDefault();

		const targetElement = event.target.parentElement.parentElement;
		const cellElement = targetElement.getElementsByTagName('td');
		const schedulingRequestId = cellElement[0].innerText;

		this.openEditWindow(schedulingRequestId);
	}

	private openEditWindow(schedulingRequestId: number): void {
		this.changeSchedulingRequestStatus(schedulingRequestId);
	}

	private changeSchedulingRequestStatus(schedulingRequestId: number): void {
		for (let index = 0; index < this._schedulingRequestList.length; index++) {
			if (this._schedulingRequestList[index].id == schedulingRequestId) {
				this._schedulingRequestList[index].status = 1;
				this.loadTable(new TableHandler());
				return;
			}
		}
	}
}
