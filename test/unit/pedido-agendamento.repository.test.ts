import { assert, expect } from 'chai';
import 'mocha';

import PedidoDeAgendamento from './../../src/pedido-agendamento';
import PedidoDeAgendamentoRepository from './../../src/pedido-agendamento.repository';

describe('PedidoDeAgendamentoRepository', () => {

	it('should return all Pedidos Mock', () => {
		const expectResult: PedidoDeAgendamento[] = new PedidoDeAgendamentoRepository().getAll();
		const result: PedidoDeAgendamento[] = new PedidoDeAgendamentoRepository().getAll();

		expect(result).eql(expectResult);
	});
});
