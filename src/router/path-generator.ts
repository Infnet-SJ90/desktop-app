import { Renderer } from '../utils/renderer';
import { LOAD_HTML } from './helper';

const renderers: { [id: string]: Renderer } = {};

export class PathConfig {
	key: string;
	rendererKey: string;
	sceneDir: string;
	loadRenderer: () => Renderer;
}

export const GENERATE_PATH = (config: PathConfig) => {
	const { key, rendererKey, sceneDir, loadRenderer } = config;
	return {
		[key]: () => {
			LOAD_HTML(`${sceneDir}`, () => {
				if (!renderers[rendererKey]) {
					renderers[rendererKey] = loadRenderer();
				}
				renderers[rendererKey].init();
			});
		}
	};
};

export const GENERATE_ROUTE = (configList: PathConfig[]) =>
	configList.reduce((previousValue, currentValue) => {
		const path = GENERATE_PATH(currentValue);
		return {
			...previousValue,
			...path
		};
	}, {});
