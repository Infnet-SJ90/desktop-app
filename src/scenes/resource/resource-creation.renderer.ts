import { Renderer } from '../../utils/renderer';
import Resource from './../../models/resource';

export class ResourceCreation implements Renderer {
	private _resourceList: Resource[] = [];

	constructor() {
		//
	}

	init() {
		this.setBackButton();
		this.setSubmitForm();
	}

	private setBackButton(): void {
		const btnHome = document.getElementById('btn-home');

		btnHome.addEventListener('click', () => {
			history.back();
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
		resource.status = 0;
		resource.totalCapacity = Number(document.getElementById('capacidadeTotal').innerText);
		resource.currentCapacity = resource.totalCapacity;
		resource.serialCode = document.getElementById('serialCode').innerText;

		const htmlSelect: HTMLSelectElement = (document.getElementById('tipoRecurso')) as HTMLSelectElement;
		const selectedIndex = htmlSelect.selectedIndex;
		const optionSelectedValue = htmlSelect.options[selectedIndex].value;
		resource.type = Number(optionSelectedValue);

		this._resourceList.push(resource);

		this.emptyForm();
		alert('Recurso Salvo');

		console.log(this._resourceList);
	}

	private emptyForm() {
		document.getElementById('capacidadeTotal').innerText = '';
		document.getElementById('serialCode').innerText = '';
	}
}
