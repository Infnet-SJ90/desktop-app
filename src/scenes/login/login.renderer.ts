import { ROUTER } from '../../router';
import { Renderer } from '../../utils/renderer';

export class LoginRenderer implements Renderer {

	init() {
		this.setSubmitForm();
	}

	private setSubmitForm(): void {
		const btnSubmit = document.querySelector('#login-autentication-form');

		btnSubmit.addEventListener('submit', (event) => {
			event.preventDefault();
			ROUTER.navigate('/private-home');
		});
	}
}
