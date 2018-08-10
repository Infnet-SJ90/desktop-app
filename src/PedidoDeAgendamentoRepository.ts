import { PedidoDeAgendamento } from "./PedidoDeAgendamento";

export class PedidoDeAgendamentoRepository
{
	public GetAll(): PedidoDeAgendamento[]
	{
		let pedidosDeAgendamentos: PedidoDeAgendamento[] = [];

		let _pedidoDeAgendamento: PedidoDeAgendamento = new PedidoDeAgendamento();
		_pedidoDeAgendamento.pedidoDeAgendamentoId = 1;
		_pedidoDeAgendamento.nomeDoCidadao = "Mark";
		_pedidoDeAgendamento.quantidadeDeEntulho = 7;
		_pedidoDeAgendamento.distancia = 4;
		_pedidoDeAgendamento.status = "Valido";
		_pedidoDeAgendamento.localidade = "Rua São Jose";
		pedidosDeAgendamentos.push(_pedidoDeAgendamento);

		_pedidoDeAgendamento = new PedidoDeAgendamento();
		_pedidoDeAgendamento.pedidoDeAgendamentoId = 2;
		_pedidoDeAgendamento.nomeDoCidadao = "Jacob";
		_pedidoDeAgendamento.quantidadeDeEntulho = 7;
		_pedidoDeAgendamento.distancia = 5;
		_pedidoDeAgendamento.status = "Valido";
		_pedidoDeAgendamento.localidade = "Rua São Jose";
		pedidosDeAgendamentos.push(_pedidoDeAgendamento);

		_pedidoDeAgendamento = new PedidoDeAgendamento();
		_pedidoDeAgendamento.pedidoDeAgendamentoId = 3;
		_pedidoDeAgendamento.nomeDoCidadao = "Larry";
		_pedidoDeAgendamento.quantidadeDeEntulho = 7;
		_pedidoDeAgendamento.distancia = 6;
		_pedidoDeAgendamento.status = "Valido";
		_pedidoDeAgendamento.localidade = "Rua São Jose";
		pedidosDeAgendamentos.push(_pedidoDeAgendamento);

		return pedidosDeAgendamentos;
	}
}
