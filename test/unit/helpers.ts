declare var global: NodeJS.Global;
// tslint:disable-next-line:no-namespace
declare namespace NodeJS {
	export interface Global {
		window: DOMWindow;
		document: Document;
	}
}

import { DOMWindow, JSDOM } from 'jsdom';

export const DOM_TEMPLATE = `
	<!DOCTYPE html>
	<html>
		<body></body>
	</html>
`;

export const INIT_DEFAULT_DOM = () => {
	const { window } = new JSDOM(DOM_TEMPLATE);

	global.window = window;
	global.document = window.document;
};
