import {ipcRenderer} from "electron";

const troca = document.getElementById("btn-pedidos-agendamentos");

troca.addEventListener("click", () => {
	ipcRenderer.send("open-pedidos-agendamentos");
});
