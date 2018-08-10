import { ipcRenderer } from "electron";
import { PedidoDeAgendamento } from "./PedidoDeAgendamento";
import { TableHandler } from "./TableHandler";
import { PedidoDeAgendamentoRepository } from "./PedidoDeAgendamentoRepository";


let pedidosDeAgendamentos: PedidoDeAgendamento[] = new PedidoDeAgendamentoRepository().GetAll();

SetBackButton();
LoadTable(new TableHandler());

function SetBackButton(): void
{
	const troca = document.getElementById("btn-home");

	troca.addEventListener("click", () => {
		ipcRenderer.send("open-home");
	});
}

function GetTableReference(): HTMLTableSectionElement
{
	return document.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0];
}

function LoadTable(tableHandler: TableHandler): void
{
	const tableRef = GetTableReference();
	tableHandler.CleanTable(tableRef);
	tableHandler.LoadPedidosDeAgendamentosTable(tableRef, pedidosDeAgendamentos);
	SetTableButtonsEvents();
}

function SetTableButtonsEvents(): void
{
	const tableRef = GetTableReference();

	for (let i = 0; i < tableRef.children.length; i++)
	{
		const button = tableRef.children[i].getElementsByTagName("button")[0];
		button.addEventListener("click", HandleSelectedPedidoDeAgendamento, false);
	}
}

function HandleSelectedPedidoDeAgendamento(event: any): void
{
	event.preventDefault();

	const targetElement = event.target.parentElement.parentElement;
	const cellElement = targetElement.getElementsByTagName("td");
	const pedidoDeAgendamentosId = cellElement[0].innerText;

	OpenEditWindow(pedidoDeAgendamentosId);
}

function OpenEditWindow(pedidoDeAgendamentosId: number): void
{
	// TODO: Form

	ChangePedidoDeAgendamentoStatus(pedidoDeAgendamentosId);
}

function ChangePedidoDeAgendamentoStatus(pedidoDeAgendamentosId: number): void
{
	for (let index = 0; index < pedidosDeAgendamentos.length; index++)
	{
		if (pedidosDeAgendamentos[index].pedidoDeAgendamentoId == pedidoDeAgendamentosId)
		{
			pedidosDeAgendamentos[index].status = "Agendado";
			LoadTable(new TableHandler());
			return;
		}
	}
}
