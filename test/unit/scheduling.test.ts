import 'should';

import TableHandler from '../../src/components/table-handler';
import Scheduling from '../../src/models/scheduling';
import SchedulingStatus from '../../src/models/scheduling-status';
import { INIT_DEFAULT_DOM } from './helpers';

describe('[Unit Test] - Scheduling', () => {
	describe('List scheduling', () => {
		let schedulingList: Scheduling[];
		before(() => {
			schedulingList = [
				{
					id: 1,
					operatorId: 0,
					schedulingRequestId: 1,
					alocationList:
					[
						{
							alocationId: 0,
							resourceId: 0,
							operatorId: 0,
							status: 0,
							alocationDate: new Date('2018-09-07T13:03:53.228Z')
						}
					],
					status: 0
				}
			];
			INIT_DEFAULT_DOM();
		});
		it('should return a table with data that matches the columns when there is scheduling list', () => {
			const tableRef = window.document.createElement('tbody');

			const tableHandler = new TableHandler();
			tableHandler.loadSchedulingData(tableRef, schedulingList);

			const expectedValue = schedulingList.map(({
				id, operatorId, schedulingRequestId, alocationList, status
			}) => {
				const alocationIdList = alocationList.map((alocation) => alocation.alocationId);
				return {
					id,
					operatorId,
					schedulingRequestId,
					status: `${SchedulingStatus[status]}`,
					alocationList: JSON.stringify(alocationIdList)
				};
			});

			const tableDataArray = Array.from(tableRef.children);
			const returnedValue = tableDataArray.map(({ children }) => ({
				id: +children[0].innerHTML,
				operatorId: +children[1].innerHTML,
				schedulingRequestId: +children[2].innerHTML,
				status: children[3].innerHTML,
				alocationList: children[4].innerHTML
			}));

			returnedValue.should.be.eql(expectedValue);
		});
		it('should return a table with quantity equals list when there is scheduling list', () => {
			const tableRef = window.document.createElement('tbody');

			const tableHandler = new TableHandler();
			tableHandler.loadSchedulingData(tableRef, schedulingList);

			const { length } = tableRef.children;
			length.should.be.equal(schedulingList.length);
		});
	});
});
