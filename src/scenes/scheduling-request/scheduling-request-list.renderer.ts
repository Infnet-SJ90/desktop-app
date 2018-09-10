import { Renderer } from '../../utils/renderer';
import SchedulingRequestApi from './../../api/scheduling-request.api';
import TableHandler from './../../components/table-handler';
import SchedulingRequest from './../../models/scheduling-request';

/* tslint:disable:prefer-for-of */

export class SchedulingRequestList implements Renderer {
	private _schedulingRequestApi: SchedulingRequestApi;
	private _schedulingRequestList: SchedulingRequest[];

	constructor(schedulingRequestApi: SchedulingRequestApi) {
		this._schedulingRequestApi = schedulingRequestApi;
	}

	init() {
		this.setBackButton();
		this.loadTableAsync(new TableHandler())
			.catch((e) => console.log(e));
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

	private refreshTable(tableHandler: TableHandler): void {
		const tableRef = this.getTableReference();
		tableHandler.cleanTable(tableRef);
		tableHandler.loadData(tableRef, this._schedulingRequestList);
		this.setTableButtonsEvents();
	}

	private async loadTableAsync(tableHandler: TableHandler): Promise<void> {
		try {
			this._schedulingRequestList = await this._schedulingRequestApi.getAll();
			const tableRef = this.getTableReference();

			tableHandler.cleanTable(tableRef);
			tableHandler.loadData(tableRef, this._schedulingRequestList);
			this.setTableButtonsEvents();
		} catch (e) {
			console.log(e);
		}
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
				this.refreshTable(new TableHandler());
				return;
			}
		}
	}
}
