import { LitElement, html, customElement } from '@polymer/lit-element';
import style from "./style.pcss";

@customElement('my-app')
export class MyApp extends LitElement {
    static get properties() {
        return {
            uppercase: {
                type: Boolean,
                attrName: "uppercase"
            }
        }
    }

    render() {
        return html`
      <style>
      ${style}
      </style>
      <div id="box" @class="${this.uppercase ? 'uppercase' : ''}">
        Hello World
      </div>
    `;
    }
}