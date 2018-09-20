import { ROUTER } from '../../router';
import { Renderer } from '../../utils/renderer';

export class PrivateHomeRenderer implements Renderer {
	private _schedulingRequestScene?: HTMLElement;
	private _schedulingScene?: HTMLElement;
	private _resourceCreationScene?: HTMLElement;

	init() {
		this._schedulingRequestScene = document.getElementById('btn-scheduling-request-list');
		this._schedulingScene = document.getElementById('btn-scheduling-list');
		this._resourceCreationScene = document.getElementById('btn-resource-creation');

		if (this._schedulingRequestScene) {
			this._schedulingRequestScene.addEventListener('click', () => {
				ROUTER.navigate('/scheduling-request-list');
			});
		}

		if (this._schedulingScene) {
			this._schedulingScene.addEventListener('click', () => {
				ROUTER.navigate('/scheduling-list');
			});
		}

		if (this._resourceCreationScene) {
			this._resourceCreationScene.addEventListener('click', () => {
				ROUTER.navigate('/resource-creation');
			});
		}

		this.setLogoutButton();
	}

	private setLogoutButton(): void {
		const btnHome = document.getElementById('btn-login');

		btnHome.addEventListener('click', () => {
			ROUTER.navigate('/login');
		});
	}
}
