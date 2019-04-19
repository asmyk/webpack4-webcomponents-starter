import { LitElement, html, customElement } from '@polymer/lit-element';
import './components/app';

@customElement('main-module')
class MainModule extends LitElement {
  render() {
    return html`
      <style>
        :host {
          color: #4696e5;
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
        <h1>VanillaJS starter with Lit-Elements</h1>
        <p>
          This is a simple stater for vanilla JS projects with web components
        </p>
        <ul class="actions">
          <li>
            <a
              href="https://github.com/asmyk"
              class="button icon fa-chevron-down scrolly"
              >Visit my github: @asmyk</a
            >
          </li>
        </ul>
      </main-app>
    `;
  }
}

export default MainModule;
