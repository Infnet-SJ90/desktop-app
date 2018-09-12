import 'should';

import TableHandler from '../../src/components/table-handler';
import SchedulingRequest from '../../src/models/scheduling-request';
import SchedulingRequestStatus from '../../src/models/scheduling-request-status';
import { INIT_DEFAULT_DOM } from './helpers';

describe('[Unit Test] - Scheduling Request', () => {
	describe('List scheduling request', () => {
		let schedulingRequestList: SchedulingRequest[];
		before(() => {
			schedulingRequestList = [
				{
					id: 1,
					status: 4,
					citizen:
					{
						citizenId: 0,
						name: 'Mark'
					},
					rubble:
					{
						rubbleId: 0,
						amount: 7
					},
					address:
					{
						addressId: 0,
						fullString: 'Rua São Jose'
					},
					distance: 4,
					date: new Date('2018-09-07T13:03:53.228Z')
				}
			];
			INIT_DEFAULT_DOM();
		});
		it('should return a table with data that matches the columns when there is scheduling request list', () => {
			const tableRef = window.document.createElement('tbody');

			const tableHandler = new TableHandler();
			tableHandler.loadData(tableRef, schedulingRequestList);

			const expectedValue = schedulingRequestList.map(({ id, citizen, status, rubble, address, distance, date }) => ({
				id,
				citizenName: citizen.name,
				status: SchedulingRequestStatus[status],
				rubbleAmount: `${rubble.amount} T`,
				address: address.fullString,
				distance: `${distance} H`,
				date: date.toString()
			}));

			const tableDataArray = Array.from(tableRef.children);
			const returnedValue = tableDataArray.map(({ children }) => ({
				id: +children[0].innerHTML,
				citizenName: children[1].innerHTML,
				status: children[2].innerHTML,
				rubbleAmount: children[3].innerHTML,
				address: children[4].innerHTML,
				distance: children[5].innerHTML,
				date: children[6].innerHTML
			}));

			returnedValue.should.be.eql(expectedValue);
		});
		it('should return a table with quantity equals list when there is scheduling request list', () => {
			const tableRef = window.document.createElement('tbody');

			const tableHandler = new TableHandler();
			tableHandler.loadData(tableRef, schedulingRequestList);

			const { length } = tableRef.children;
			length.should.be.equal(schedulingRequestList.length);
		});
	});
});
