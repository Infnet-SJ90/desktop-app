import Navigo from 'navigo';
import { NOT_FOUND_PATH, PATHS } from './paths';

const root: string = null;
const useHash = true;
const hash = '#';
export const ROUTER = new Navigo(root, useHash, hash);

ROUTER.on(PATHS);
ROUTER.notFound(NOT_FOUND_PATH);
ROUTER.resolve();
