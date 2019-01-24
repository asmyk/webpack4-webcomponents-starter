import { LitElement, html, customElement } from '@polymer/lit-element';
import { styles } from "./header.style.js";

@customElement('main-header')
export class Header extends LitElement {
    static get styles() {
        return [styles]
    }

    render() {
        return html`
        <header>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </header>`;
    }
}