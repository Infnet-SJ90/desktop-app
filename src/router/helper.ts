export const $MAIN = document.getElementById('root');

export const LOAD_HTML = (url: string, callback: () => void) => {
	const req = new XMLHttpRequest();
	req.open('GET', url);
	req.send();
	req.onload = () => {
		$MAIN.innerHTML = req.responseText;
		callback();
	};
};
