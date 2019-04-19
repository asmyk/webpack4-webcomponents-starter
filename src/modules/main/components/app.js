import { LitElement, html, customElement } from '@polymer/lit-element';
import styles from './app.style';

@customElement('main-app')
class App extends LitElement {
  static get styles() {
    return [styles];
  }

  render() {
    return html`
            <main>  
                <slot>Load app here</slot>
            </main
        `;
  }
}

export default App;
