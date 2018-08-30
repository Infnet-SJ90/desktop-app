import Scheduling from './../models/scheduling';
import SchedulingRequest from './../models/scheduling-request';

/* tslint:disable:prefer-for-of */

class TableHandler {
	cleanTable(tableReference: HTMLTableSectionElement): void {
		tableReference.innerHTML = '';
	}

	loadData(tableReference: HTMLTableSectionElement, schedulingRequests: SchedulingRequest[]): void {
		for (let index = 0; index < schedulingRequests.length; index++) {
			const element = schedulingRequests[index];
			this.insertRow(tableReference, element);
		}
	}

	loadSchedulingData(tableReference: HTMLTableSectionElement, schedulingList: Scheduling[]): void {
		for (let index = 0; index < schedulingList.length; index++) {
			const element = schedulingList[index];
			this.insertSchedulingRow(tableReference, element);
		}
	}

	private insertRow(tableReference: HTMLTableSectionElement, request: SchedulingRequest): void {
		const newRow = tableReference.insertRow();

		let newCell = newRow.insertCell(0);
		let newText = document.createTextNode((request.id).toString());
		newCell.appendChild(newText);

		newCell = newRow.insertCell(1);
		newText = document.createTextNode(request.citizenName);
		newCell.appendChild(newText);

		newCell = newRow.insertCell(2);
		newText = document.createTextNode(request.status);
		newCell.appendChild(newText);

		newCell = newRow.insertCell(3);
		newText = document.createTextNode((request.rubbleAmount).toString() + ' T');
		newCell.appendChild(newText);

		newCell = newRow.insertCell(4);
		newText = document.createTextNode(request.place);
		newCell.appendChild(newText);

		newCell = newRow.insertCell(5);
		newText = document.createTextNode((request.distance).toString() + ' H');
		newCell.appendChild(newText);

		newCell = newRow.insertCell(6);
		newCell.innerHTML = `
			<td>
				<button class='btn btn-outline-success'>Alocar</button>
			</td>
		`;
	}

	private insertSchedulingRow(tableReference: HTMLTableSectionElement, request: Scheduling): void {
		const newRow = tableReference.insertRow();

		let newCell = newRow.insertCell(0);
		let newText = document.createTextNode((request.id).toString());
		newCell.appendChild(newText);

		newCell = newRow.insertCell(1);
		newText = document.createTextNode((request.operatorId).toString());
		newCell.appendChild(newText);

		newCell = newRow.insertCell(2);
		newText = document.createTextNode((request.schedulingRequestId).toString());
		newCell.appendChild(newText);

		newCell = newRow.insertCell(3);
		newText = document.createTextNode(request.status);
		newCell.appendChild(newText);

		newCell = newRow.insertCell(4);
		newText = document.createTextNode((request.alocationList).toString());
		newCell.appendChild(newText);

		newCell = newRow.insertCell(5);
		newCell.innerHTML = `
			<td>
				<button class='btn btn-outline-success'>Editar</button>
			</td>
		`;
	}
}

export default TableHandler;
