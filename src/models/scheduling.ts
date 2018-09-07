import Alocation from './alocation';
import SchedulingStatus from './scheduling-status';
class Scheduling {
	id: number;
	operatorId: number;
	schedulingRequestId: number;
	alocationList: Alocation[];
	status: SchedulingStatus;
}

export default Scheduling;
