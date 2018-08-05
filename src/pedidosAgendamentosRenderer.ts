import { ipcRenderer } from "electron";
import { PedidoDeAgendamento } from "./PedidoDeAgendamento";
import { CarregaTabela } from "./CarregaTabela";
import { PedidoDeAgendamentoRepository } from "./PedidoDeAgendamentoRepository";

SetBackButton();
LoadPedidosDeAgendamentosTable();
SetTableButtonsEvents();

function SetBackButton()
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

function LoadPedidosDeAgendamentosTable()
{
	const tableRef = GetTableReference();
	const pedidosDeAgendamentos: PedidoDeAgendamento[] = new PedidoDeAgendamentoRepository().GetAll();
	new CarregaTabela(tableRef, pedidosDeAgendamentos).CarregaTabela();
}

function SetTableButtonsEvents()
{
	const tableRef = GetTableReference();

	for (let i = 0; i < tableRef.children.length; i++)
	{
		const button = tableRef.children[i].getElementsByTagName("button")[0];
		button.addEventListener("click", HandleSelectedPedidoDeAgendamento, false);
	}
}

function HandleSelectedPedidoDeAgendamento(e: any): void
{
	e.preventDefault();

	const targetElement = e.target.parentElement.parentElement;
	const cellElement = targetElement.getElementsByTagName("td");
	const pedidoDeAgendamentosId = cellElement[0].innerText;

	OpenEditWindow(pedidoDeAgendamentosId);
}

function OpenEditWindow(pedidoDeAgendamentosId: number)
{
	alert(pedidoDeAgendamentosId);
}
