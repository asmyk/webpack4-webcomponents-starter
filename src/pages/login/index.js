import { LitElement, html, customElement } from '@polymer/lit-element';
import './components/container';
@customElement('login-page')
export class LoginPage extends LitElement {
    render() {
        return html`
                <style>             
                   :host {  
                        display:flex;
                        align-items:center;
                        flex-direction: column;
                    }   
                    .header{
                        color: 
                    } 
                </style>

                ${LoginPage.mainTemplate}
            `;
    }

    static get mainTemplate() {
        return html` 
    <div class="header">
        <h2>Login to xxxStockTraderxxx</h2>
    </div>
    <div class="form">
        <auth-module class='auth-container'>
        </auth-module>
    </div>`;
    }
}