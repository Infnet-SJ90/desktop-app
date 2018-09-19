import SchedulingRequestApi from '../api/scheduling-request.api';
import SchedulingApi from '../api/scheduling.api';

import { LoginRenderer } from '../scenes/login/login.renderer';
import { PrivateHomeRenderer } from '../scenes/private-home/private-home.renderer';
import { ResourceCreation } from '../scenes/resource/resource-creation.renderer';
import { SchedulingRequestList } from '../scenes/scheduling-request/scheduling-request-list.renderer';
import { Schedulinglist } from '../scenes/scheduling/scheduling-list.renderer';

import { ENV_CONFIG } from '../utils/constants';

import { $MAIN } from './helper';

export const PATHS_CONFIG = [
	{
		key: 'scheduling-request-list',
		sceneDir: `${ENV_CONFIG.scenesFolder}/scheduling-request/scheduling-request-list.html`,
		rendererKey: 'scheduling-request-list',
		loadRenderer: () => new SchedulingRequestList(new SchedulingRequestApi())
	},
	{
		key: 'scheduling-list',
		sceneDir: `${ENV_CONFIG.scenesFolder}/scheduling/scheduling-list.html`,
		rendererKey: 'scheduling-list',
		loadRenderer: () => new Schedulinglist(new SchedulingApi())
	},
	{
		key: 'resource-creation',
		sceneDir: `${ENV_CONFIG.scenesFolder}/resource/resource-creation.html`,
		rendererKey: 'resource-creation',
		loadRenderer: () => new ResourceCreation()
	},
	{
		key: 'private-home',
		sceneDir: `${ENV_CONFIG.scenesFolder}/private-home/private-home.html`,
		rendererKey: 'private-home',
		loadRenderer: () => new PrivateHomeRenderer()
	},
	{
		key: '*',
		sceneDir: `${ENV_CONFIG.scenesFolder}/login/login.html`,
		rendererKey: 'login',
		loadRenderer: () => new LoginRenderer()
	}
];

export const NOT_FOUND_PATH = () => {
	$MAIN.innerHTML = '<h3>Não foi possível encontrar a página pesquisada...</h3>';
};
