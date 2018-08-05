import { ipcRenderer } from "electron";
import { PedidoDeAgendamento } from "./PedidoDeAgendamento";
import { CarregaTabela } from "./CarregaTabela";
import { PedidoDeAgendamentoRepository } from "./PedidoDeAgendamentoRepository";

const troca = document.getElementById("btn-home");

troca.addEventListener("click", () => {
	ipcRenderer.send("open-home");
});

let pedidosDeAgendamentos: PedidoDeAgendamento[] = new PedidoDeAgendamentoRepository().GetAll();
const tableRef = document.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0];
new CarregaTabela(tableRef, pedidosDeAgendamentos).CarregaTabela();


