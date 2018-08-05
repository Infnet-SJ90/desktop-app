import { PedidoDeAgendamento } from "./PedidoDeAgendamento";

export class CarregaTabela
{
	private TableReference: HTMLTableSectionElement;
	private PedidosDeAgendamentos: PedidoDeAgendamento[];

	constructor(tableReference: HTMLTableSectionElement, pedidosDeAgendamentos: PedidoDeAgendamento[])
	{
		this.TableReference = tableReference;
		this.PedidosDeAgendamentos = pedidosDeAgendamentos;
	}

	public CarregaTabela(): void
	{
		for (let index = 0; index < this.PedidosDeAgendamentos.length; index++)
		{
			const element = this.PedidosDeAgendamentos[index];
			this.InsereLinhaTabela(element);
		}
	}

	private InsereLinhaTabela(pedidoDeAgendamento: PedidoDeAgendamento): void
	{
		const newRow = this.TableReference.insertRow();

		let newCell  = newRow.insertCell(0);
		let newText  = document.createTextNode((pedidoDeAgendamento.pedidoDeAgendamentoId).toString());
		newCell.appendChild(newText);

		newCell  = newRow.insertCell(1);
		newText  = document.createTextNode(pedidoDeAgendamento.nomeDoCidadao);
		newCell.appendChild(newText);

		newCell  = newRow.insertCell(2);
		newText  = document.createTextNode(pedidoDeAgendamento.status);
		newCell.appendChild(newText);

		newCell  = newRow.insertCell(3);
		newText  = document.createTextNode((pedidoDeAgendamento.quantidadeDeEntulho).toString() + " T");
		newCell.appendChild(newText);

		newCell  = newRow.insertCell(4);
		newText  = document.createTextNode(pedidoDeAgendamento.localidade);
		newCell.appendChild(newText);

		newCell  = newRow.insertCell(5);
		newText  = document.createTextNode((pedidoDeAgendamento.distancia).toString() + " H");
		newCell.appendChild(newText);

		newCell  = newRow.insertCell(6);
		newCell.innerHTML = '<td><button class="btn btn-outline-success">Editar</button></td>';
	}

}


