import { LitElement, html, customElement } from '@polymer/lit-element';
import { styles } from "./footer.style.js";

@customElement('main-footer')
export class Footer extends LitElement {
    static get styles() {
        return [styles]
    }

    render() {
        return html`   
            <footer>
                <slot>Load footer here</slot>
            </footer>`;
    }
}