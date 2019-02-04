import { LitElement, html, customElement } from '@polymer/lit-element';
import "./components/app";

@customElement('main-module')
export class MainModule extends LitElement {
    render() {
        return html`
                <style>
                    :host { 
			            color: #33475b; 
                    }
                    ul {
                        list-style: none;
                    }
                
                </style>

                ${MainModule.mainTemplate}
            `;
    }

    static get mainTemplate() {
        return html`
        <main-app>
            <login-page></login-page>
        </main-app>`;
    }
}