import { ROUTER } from '../../router';
import { Renderer } from '../../utils/renderer';
import SchedulingApi from './../../api/scheduling.api';
import TableHandler from './../../components/table-handler';

/* tslint:disable:prefer-for-of */

export class Schedulinglist implements Renderer {
	private _schedulingApi: SchedulingApi;

	constructor(schedulingApi: SchedulingApi) {
		this._schedulingApi = schedulingApi;
	}

	init() {
		this.setBackButton();
		this.setLogoutButton();
		this.loadTableAsync(new TableHandler())
			.catch((e) => console.log(e));
	}

	private setBackButton(): void {
		const btnHome = document.getElementById('btn-home');

		btnHome.addEventListener('click', () => {
			history.back();
		});
	}

	private setLogoutButton(): void {
		const btnHome = document.getElementById('btn-login');

		btnHome.addEventListener('click', () => {
			ROUTER.navigate('/login');
		});
	}

	private getTableReference(): HTMLTableSectionElement {
		return document.getElementsByTagName('table')[0].getElementsByTagName('tbody')[0];
	}

	private async loadTableAsync(tableHandler: TableHandler): Promise<void> {
		try {
			const data = await this._schedulingApi.getAll();
			const tableRef = this.getTableReference();

			tableHandler.cleanTable(tableRef);
			tableHandler.loadSchedulingData(tableRef, data);
			this.setTableButtonsEvents();
		} catch (e) {
			console.log(e);
		}
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
