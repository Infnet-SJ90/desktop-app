import Scheduling from '../models/scheduling';

class SchedulingApi {
	getAll(): Scheduling[] {
		const schedulingList: Scheduling[] = [];

		let request = new Scheduling();
		request.id = 1;
		request.operatorId = 1;
		request.schedulingRequestId = 3;
		request.alocationList = ['Caminhao 1, Caminhao 2'];
		request.status = 'Agendado';
		schedulingList.push(request);

		request = new Scheduling();
		request.id = 2;
		request.operatorId = 1;
		request.schedulingRequestId = 3;
		request.alocationList = ['Caminhao 1, Caminhao 2'];
		request.status = 'Agendado';
		schedulingList.push(request);

		request = new Scheduling();
		request.id = 3;
		request.operatorId = 1;
		request.schedulingRequestId = 3;
		request.alocationList = ['Caminhao 1, Caminhao 2'];
		request.status = 'Agendado';
		schedulingList.push(request);

		return schedulingList;
	}
}

export default SchedulingApi;
