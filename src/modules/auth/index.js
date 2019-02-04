import { LitElement, html, customElement } from '@polymer/lit-element';
import "./components/login";

import { authenticate } from "./auth.service";

@customElement('auth-module')
export class AuthModule extends LitElement {
    static get properties() {
        return {
            isAuthenticated: { type: Boolean }
        };
    }

    constructor() {
        super();
        this.isAuthenticated = false;
    }

    render() {
        return html`
                <style> 
                    ul {
                        list-style: none;
                    }
                
                </style>
                ${AuthModule.mainTemplate}
            `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('formSent', this.onFormSent);
    }

    disconnectedCallback() {
        this.removeEventListener('formSent');
    }

    onFormSent(e) {
        const login = e.detail.login;
        const pass = e.detail.pass;
        const isAuthenticated = await authenticate(login, pass);

        if (isAuthenticated) {

        }
    }

    static get mainTemplate() {
        return html`<login-form />`;
    }
}