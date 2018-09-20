import Address from './address';
import Citizen from './citizen';
import Rubble from './rubble';
import SchedulingRequestStatus from './scheduling-request-status';

class SchedulingRequest {
	id: number;
	status: SchedulingRequestStatus;
	citizen: Citizen;
	rubble: Rubble;
	address: Address;
	distance: number;
	date: Date;
}

export default SchedulingRequest;
