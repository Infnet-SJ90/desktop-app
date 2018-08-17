import PedidoDeAgendamento from './PedidoDeAgendamento';

class PedidoDeAgendamentoRepository {
	getAll(): PedidoDeAgendamento[] {
		const pedidosDeAgendamentos: PedidoDeAgendamento[] = [];

		let pedido = new PedidoDeAgendamento();
		pedido.pedidoDeAgendamentoId = 1;
		pedido.nomeDoCidadao = 'Mark';
		pedido.quantidadeDeEntulho = 7;
		pedido.distancia = 4;
		pedido.status = 'Valido';
		pedido.localidade = 'Rua São Jose';
		pedidosDeAgendamentos.push(pedido);

		pedido = new PedidoDeAgendamento();
		pedido.pedidoDeAgendamentoId = 2;
		pedido.nomeDoCidadao = 'Jacob';
		pedido.quantidadeDeEntulho = 7;
		pedido.distancia = 5;
		pedido.status = 'Valido';
		pedido.localidade = 'Rua São Jose';
		pedidosDeAgendamentos.push(pedido);

		pedido = new PedidoDeAgendamento();
		pedido.pedidoDeAgendamentoId = 3;
		pedido.nomeDoCidadao = 'Larry';
		pedido.quantidadeDeEntulho = 7;
		pedido.distancia = 6;
		pedido.status = 'Valido';
		pedido.localidade = 'Rua São Jose';
		pedidosDeAgendamentos.push(pedido);

		return pedidosDeAgendamentos;
	}
}

export default PedidoDeAgendamentoRepository;
