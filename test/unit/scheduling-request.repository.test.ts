import { expect } from 'chai';
import 'mocha';

import SchedulingRequestApi from './../../src/api/scheduling-request.api';
import SchedulingRequest from './../../src/models/scheduling-request';

describe('SchedulingRequestApi', () => {

	it('should return all Pedidos Mock', () => {
		const expectResult: SchedulingRequest[] = new SchedulingRequestApi().getAll();
		const result: SchedulingRequest[] = new SchedulingRequestApi().getAll();

		expect(result).eql(expectResult);
	});
});
