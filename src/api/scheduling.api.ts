import Scheduling from '../models/scheduling';

class SchedulingApi {
	getAll(): Scheduling[] {
		const schedulingList: Scheduling[] = [];

		let request = new Scheduling();
		request.id = 1;
		request.operatorId = 1;
		request.schedulingRequestId = 3;
		request.alocationList = [null, null];
		request.status = 0;
		schedulingList.push(request);

		request = new Scheduling();
		request.id = 2;
		request.operatorId = 1;
		request.schedulingRequestId = 3;
		request.alocationList = [null, null];
		request.status = 0;
		schedulingList.push(request);

		request = new Scheduling();
		request.id = 3;
		request.operatorId = 1;
		request.schedulingRequestId = 3;
		request.alocationList = [null, null];
		request.status = 0;
		schedulingList.push(request);

		return schedulingList;
	}
}

export default SchedulingApi;
