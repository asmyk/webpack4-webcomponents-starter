import { LitElement, html, customElement } from '@polymer/lit-element';
import { styles } from "./login.style.js";

@customElement('login-form')
export class LoginForm extends LitElement {
    static get styles() {
        return [styles]
    }

    submitHandler(e) {
        e.preventDefault();
        const form = this.shadowRoot.querySelector('form');
        const event = new CustomEvent('formSent', { bubbles: true, composed: true, detail: { login: form.login.value, pass: form.pass.value } });
        this.dispatchEvent(event);
    }

    render() {
        return html`
            <form @submit="${this.submitHandler}" id="form">
                <label for="login">Login</label>
                <input type="text" name="login" />
                <label form="password">Password</label>
                <input type="password" name="pass" />
                <input type="submit" value="Login" />
            </form>
        `;
    }
}