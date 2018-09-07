import SchedulingRequest from './../models/scheduling-request';

class SchedulingRequestApi {
	getAll(): SchedulingRequest[] {
		const schedulingRequestList: SchedulingRequest[] = [];

		let request = new SchedulingRequest();
		request.id = 1;
		request.citizen.name = 'Mark';
		request.rubble.amount = 7;
		request.distance = 4;
		request.status = 0;
		request.address.fullString = 'Rua São Jose';
		schedulingRequestList.push(request);

		request = new SchedulingRequest();
		request.id = 2;
		request.citizen.name = 'Jacob';
		request.rubble.amount = 7;
		request.distance = 5;
		request.status = 0;
		request.address.fullString = 'Rua São Jose';
		schedulingRequestList.push(request);

		request = new SchedulingRequest();
		request.id = 3;
		request.citizen.name = 'Larry';
		request.rubble.amount = 7;
		request.distance = 6;
		request.status = 0;
		request.address.fullString = 'Rua São Jose';
		schedulingRequestList.push(request);

		return schedulingRequestList;
	}
}

export default SchedulingRequestApi;
