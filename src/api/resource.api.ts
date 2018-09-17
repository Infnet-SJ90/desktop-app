import Resource from '../models/resource';

class ResourceApi {
	private _baseUrl = 'https://leonnardoverol.com.br/infnet/data';

	async getAll(): Promise<Resource[]> {
		const response = await fetch(`${this._baseUrl}/Resource.json`);
		return response.json();
	}
}

export default ResourceApi;
