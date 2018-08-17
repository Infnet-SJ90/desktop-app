import { expect } from 'chai';
import 'mocha';

import PedidoDeAgendamentoApi from './../../src/api/pedido-agendamento.api';
import PedidoDeAgendamento from './../../src/models/pedido-agendamento';

describe('PedidoDeAgendamentoApi', () => {

	it('should return all Pedidos Mock', () => {
		const expectResult: PedidoDeAgendamento[] = new PedidoDeAgendamentoApi().getAll();
		const result: PedidoDeAgendamento[] = new PedidoDeAgendamentoApi().getAll();

		expect(result).eql(expectResult);
	});
});
