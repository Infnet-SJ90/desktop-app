import { ROUTER } from '../../router';
import { Renderer } from '../../utils/renderer';
import Resource from './../../models/resource';
import ResourceStatus from './../../models/resource-status';
import ResourceType from './../../models/resource-type';

export class ResourceCreation implements Renderer {
	private _resourceList: Resource[] = [];

	constructor() {
		//
	}

	init() {
		this.setBackButton();
		this.setLogoutButton();
		this.setSubmitForm();
	}

	private setBackButton(): void {
		const btnHome = document.getElementById('btn-home');

		btnHome.addEventListener('click', () => {
			history.back();
		});
	}

	private setLogoutButton(): void {
		const btnHome = document.getElementById('btn-login');

		btnHome.addEventListener('click', () => {
			ROUTER.navigate('/login');
		});
	}

	private setSubmitForm(): void {
		const btnSubmit = document.querySelector('#resource-creation-unit');

		btnSubmit.addEventListener('submit', (event) => {
			event.preventDefault();
			this.createResourceFromForm();
		});
	}

	private createResourceFromForm(): void {
		const resource = new Resource();

		resource.resourceId = 2;
		resource.status = ResourceStatus.AVAILABLE;
		resource.totalCapacity = Number((document.getElementById('capacidadeTotal') as HTMLInputElement).value);
		resource.currentCapacity = resource.totalCapacity;
		resource.serialCode = (document.getElementById('serialCode') as HTMLInputElement).value;

		const htmlSelect: HTMLSelectElement = (document.getElementById('tipoRecurso')) as HTMLSelectElement;
		const selectedIndex = htmlSelect.selectedIndex;
		const optionSelectedValue: ResourceType = Number(htmlSelect.options[selectedIndex].value);
		resource.type = optionSelectedValue;

		this._resourceList.push(resource);

		this.emptyForm();

		alert('Recurso Salvo');
		console.log(this._resourceList);
	}

	private emptyForm() {
		(document.getElementById('capacidadeTotal') as HTMLInputElement).value = '';
		(document.getElementById('serialCode') as HTMLInputElement).value = '';
	}
}
