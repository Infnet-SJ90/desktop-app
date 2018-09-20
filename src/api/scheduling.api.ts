import Scheduling from '../models/scheduling';

class SchedulingApi {
	private _baseUrl = 'https://leonnardoverol.com.br/infnet/data';

	async getAll(): Promise<Scheduling[]> {
		const response = await fetch(`${this._baseUrl}/Scheduling.json`);
		return response.json();
	}
}

export default SchedulingApi;
