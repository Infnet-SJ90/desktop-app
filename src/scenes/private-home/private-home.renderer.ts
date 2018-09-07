import { ipcRenderer } from 'electron';

import { ROUTER } from '../../router';
import { Renderer } from '../../utils/renderer';

export class PrivateHomeRenderer implements Renderer {
	private _schedulingRequestScene?: HTMLElement;
	private _schedulingScene?: HTMLElement;

	init() {
		this._schedulingRequestScene = document.getElementById('btn-scheduling-request-list');
		this._schedulingScene = document.getElementById('btn-scheduling-list');
		if (this._schedulingRequestScene) {
			this._schedulingRequestScene.addEventListener('click', () => {
				ROUTER.navigate('/scheduling-request-list');
			});
		}

		if (this._schedulingScene) {
			this._schedulingScene.addEventListener('click', () => {
				ipcRenderer.send('open-scheduling-list');
			});
		}
	}
}
