import ResourceStatus from './resource-status';
import ResourceType from './resource-type';

class Resource {
	resourceId: number;
	status: ResourceStatus;
	currentCapacity: number;
	totalCapacity: number;
	serialCode: string;
	type: ResourceType;
}

export default Resource;
