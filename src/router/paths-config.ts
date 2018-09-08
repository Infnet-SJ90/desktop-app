import { PrivateHomeRenderer } from '../scenes/private-home/private-home.renderer';
import { SchedulingRequestList } from '../scenes/scheduling-request/scheduling-request-list.renderer';
import { Schedulinglist } from '../scenes/scheduling/scheduling-list.renderer';

import { ENV_CONFIG } from '../utils/constants';

import { $MAIN } from './helper';

export const PATHS_CONFIG = [
	{
		key: 'scheduling-request-list',
		sceneDir: `${ENV_CONFIG.scenesFolder}/scheduling-request/scheduling-request-list.html`,
		rendererKey: 'scheduling-request-list',
		loadRenderer: () => new SchedulingRequestList()
	},
	{
		key: 'scheduling-list',
		sceneDir: `${ENV_CONFIG.scenesFolder}/scheduling/scheduling-list.html`,
		rendererKey: 'scheduling-list',
		loadRenderer: () => new Schedulinglist()
	},
	{
		key: '*',
		sceneDir: `${ENV_CONFIG.scenesFolder}/private-home/private-home.html`,
		rendererKey: 'private-home',
		loadRenderer: () => new PrivateHomeRenderer()
	}
];

export const NOT_FOUND_PATH = () => {
	$MAIN.innerHTML = '<h3>Não foi possível encontrar a página pesquisada...</h3>';
};
