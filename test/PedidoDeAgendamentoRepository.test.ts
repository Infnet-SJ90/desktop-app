import { PedidoDeAgendamentoRepository } from "../src/PedidoDeAgendamentoRepository";
import { PedidoDeAgendamento } from "../src/PedidoDeAgendamento";
import { expect, assert  } from "chai";
import "mocha";

describe("PedidoDeAgendamentoRepository", () => {

	it("should return all Pedidos Mock", () => {
		const expectResult: PedidoDeAgendamento[]  = new PedidoDeAgendamentoRepository().GetAll();
		const result: PedidoDeAgendamento[] = new PedidoDeAgendamentoRepository().GetAll();

		expect(result).eql(expectResult);
	});
});
