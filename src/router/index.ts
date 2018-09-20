import Navigo from 'navigo';
import { GENERATE_ROUTE } from './path-generator';
import { NOT_FOUND_PATH, PATHS_CONFIG } from './paths-config';

const root: string = null;
const useHash = true;
const hash = '#';
export const ROUTER = new Navigo(root, useHash, hash);

ROUTER.on(GENERATE_ROUTE(PATHS_CONFIG));
ROUTER.notFound(NOT_FOUND_PATH);
ROUTER.resolve();
