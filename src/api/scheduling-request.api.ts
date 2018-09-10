import SchedulingRequest from './../models/scheduling-request';

class SchedulingRequestApi {
	private _baseUrl = 'https://leonnardoverol.com.br/infnet/data';

	async getAll(): Promise<SchedulingRequest[]> {
		const response = await fetch(`${this._baseUrl}/SchedulingRequest.json`);
		return response.json();
	}
}

export default SchedulingRequestApi;
