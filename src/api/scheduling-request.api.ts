import SchedulingRequest from './../models/scheduling-request';

class SchedulingRequestApi {
	getAll(): SchedulingRequest[] {
		const schedulingRequestList: SchedulingRequest[] = [];

		let request = new SchedulingRequest();
		request.id = 1;
		request.citizenName = 'Mark';
		request.rubbleAmount = 7;
		request.distance = 4;
		request.status = 'Valido';
		request.place = 'Rua São Jose';
		schedulingRequestList.push(request);

		request = new SchedulingRequest();
		request.id = 2;
		request.citizenName = 'Jacob';
		request.rubbleAmount = 7;
		request.distance = 5;
		request.status = 'Valido';
		request.place = 'Rua São Jose';
		schedulingRequestList.push(request);

		request = new SchedulingRequest();
		request.id = 3;
		request.citizenName = 'Larry';
		request.rubbleAmount = 7;
		request.distance = 6;
		request.status = 'Valido';
		request.place = 'Rua São Jose';
		schedulingRequestList.push(request);

		return schedulingRequestList;
	}
}

export default SchedulingRequestApi;
