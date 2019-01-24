import { LitElement, html, customElement } from '@polymer/lit-element';
import "./components/app";
import "./components/footer";
import "./components/header";

@customElement('main-module')
export class MainModule extends LitElement {
    render() {
        return html`
                <style>
                    :host {
                        display: flex;
                        flex: 1 0 auto; 
                        flex-direction: column;
                        color: var(--text-background);
                        padding: var(--space);
                    }
                    @media (min-width: 768px) {
                        :host {
                            flex-direction: row;
                        }
                    }
                </style>

                ${MainModule.headerTemplate}
                ${MainModule.mainTemplate}
                ${MainModule.footerTemplate}
            `;
    }

    static get headerTemplate() {
        return html`<main-header>My header</main-header>`;
    }
    static get mainTemplate() {
        return html`<main-app>Basic app structure based on lit-element's.</main-app>`;
    }
    static get footerTemplate() {
        return html`<main-footer>Footer</main-footer>`;
    }
}