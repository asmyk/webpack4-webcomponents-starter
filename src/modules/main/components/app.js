import { LitElement, html, customElement } from '@polymer/lit-element';
import { styles } from "./app.style.js";

@customElement('main-app')
export class App extends LitElement {
    static get styles() {
        return [styles]
    }

    render(){
        return html`
            <main>  
                <slot>Load app here</slot>
            </main
        `;
    }
}