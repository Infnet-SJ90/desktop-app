import getAllData from '../data/mock/scheduling-request.get-all.json';
import SchedulingRequest from './../models/scheduling-request';

class SchedulingRequestApi {
	getAll(): SchedulingRequest[] {
		return getAllData;
	}
}

export default SchedulingRequestApi;
