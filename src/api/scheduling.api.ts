import Scheduling from '../models/scheduling';

class SchedulingApi {
	private _baseUrl = 'https://leonnardoverol.com.br/infnet/data';

	async getAll(): Promise<Scheduling[]> {
		const resp = await fetch(`${this._baseUrl}/Scheduling.json`);
		return resp.json();
	}
}

export default SchedulingApi;
