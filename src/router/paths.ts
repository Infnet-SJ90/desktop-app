import { PrivateHomeRenderer } from '../scenes/private-home/private-home.renderer';
import { SchedulingRequestlist } from '../scenes/scheduling/scheduling-list.renderer';

import { ENV_CONFIG } from '../utils/constants';
import { Renderer } from '../utils/renderer';

import { $MAIN, LOAD_HTML } from './helper';

const renderers: { [id: string]: Renderer } = {};

export const PATHS = {
	'scheduling-request-list': () => {
		LOAD_HTML(`${ENV_CONFIG.scenesFolder}/scheduling-request/scheduling-request-list.html`, () => {
			if (!renderers['scheduling-request-list']) {
				renderers['scheduling-request-list'] = new SchedulingRequestlist();
			}
			renderers['scheduling-request-list'].init();
		});
	},
	'*': () => {
		LOAD_HTML(`${ENV_CONFIG.scenesFolder}/private-home/private-home.html`, () => {
			if (!renderers['private-home']) {
				renderers['private-home'] = new PrivateHomeRenderer();
			}
			renderers['private-home'].init();
		});
	}
};

export const NOT_FOUND_PATH = () => {
	$MAIN.innerHTML = '<h3>Não foi possível encontrar a página pesquisada...</h3>';
};
