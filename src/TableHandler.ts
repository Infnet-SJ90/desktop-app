import PedidoDeAgendamento from './PedidoDeAgendamento';

/* tslint:disable:prefer-for-of */

class TableHandler {
	cleanTable(tableReference: HTMLTableSectionElement): void {
		tableReference.innerHTML = '';
	}

	loadPedidosDeAgendamentosTable(
		tableReference: HTMLTableSectionElement,
		pedidosDeAgendamentos: PedidoDeAgendamento[]
	): void {
		for (let index = 0; index < pedidosDeAgendamentos.length; index++) {
			const element = pedidosDeAgendamentos[index];
			this.insertPedidoDeAgendamentoRow(tableReference, element);
		}
	}

	private insertPedidoDeAgendamentoRow(
		tableReference: HTMLTableSectionElement,
		pedidoDeAgendamento: PedidoDeAgendamento
	): void {
		const newRow = tableReference.insertRow();

		let newCell = newRow.insertCell(0);
		let newText = document.createTextNode((pedidoDeAgendamento.pedidoDeAgendamentoId).toString());
		newCell.appendChild(newText);

		newCell = newRow.insertCell(1);
		newText = document.createTextNode(pedidoDeAgendamento.nomeDoCidadao);
		newCell.appendChild(newText);

		newCell = newRow.insertCell(2);
		newText = document.createTextNode(pedidoDeAgendamento.status);
		newCell.appendChild(newText);

		newCell = newRow.insertCell(3);
		newText = document.createTextNode((pedidoDeAgendamento.quantidadeDeEntulho).toString() + ' T');
		newCell.appendChild(newText);

		newCell = newRow.insertCell(4);
		newText = document.createTextNode(pedidoDeAgendamento.localidade);
		newCell.appendChild(newText);

		newCell = newRow.insertCell(5);
		newText = document.createTextNode((pedidoDeAgendamento.distancia).toString() + ' H');
		newCell.appendChild(newText);

		newCell = newRow.insertCell(6);
		newCell.innerHTML = `
			<td>
				<button class='btn btn-outline-success'>Alocar</button>
			</td>
		`;
	}
}

export default TableHandler;
