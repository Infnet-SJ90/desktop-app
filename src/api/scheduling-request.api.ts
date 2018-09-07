import SchedulingRequest from './../models/scheduling-request';

class SchedulingRequestApi {
	getAll(): SchedulingRequest[] {
		const schedulingRequestList: SchedulingRequest[] = [];

		let request = new SchedulingRequest();
		request.id = 1;
		request.citizen = { citizenId: 0, name: 'Mark' };
		request.rubble = { rubbleId: 0, amount: 7 };
		request.distance = 4;
		request.status = 0;
		request.address = { addressId: 0, fullString: 'Rua São Jose' };
		request.date = new Date('2018-09-07T13:03:53.228Z');
		schedulingRequestList.push(request);

		request = new SchedulingRequest();
		request.id = 2;
		request.citizen = { citizenId: 1, name: 'Jacob' };
		request.rubble = { rubbleId: 1, amount: 7 };
		request.distance = 5;
		request.status = 0;
		request.address = { addressId: 0, fullString: 'Rua São Jose' };
		request.date = new Date('2018-09-07T13:03:53.228Z');
		schedulingRequestList.push(request);

		request = new SchedulingRequest();
		request.id = 3;
		request.citizen = { citizenId: 2, name: 'Larry' };
		request.rubble = { rubbleId: 2, amount: 7 };
		request.distance = 6;
		request.status = 0;
		request.address = { addressId: 0, fullString: 'Rua São Jose' };
		request.date = new Date('2018-09-07T13:03:53.228Z');
		schedulingRequestList.push(request);

		return schedulingRequestList;
	}
}

export default SchedulingRequestApi;
