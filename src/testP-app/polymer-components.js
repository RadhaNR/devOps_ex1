import {PolymerElement, html} from "@polymer/polymer/polymer-element.js";
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/neon-animation/neon-animations.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/paper-toast/paper-toast.js';
import '@polymer/gold-cc-expiration-input/gold-cc-expiration-input.js';


class Test extends PolymerElement {
    static get properties() {
        return {
            userName: {
                type: String
            },
            password: {
                type: String
            },
            list: {
                type: Array,
                value: [

                ]
            }
        }
    }
    _handleSubmit() {
        this.$.dialog.open()
        if (this.$.login.validate()) {
            console.log(this.userName, this.password);
        }
    }
    _handleReset() {
        this.$.login.reset();
    }
    _getIndex(index) {
        return index + 1;
    }
    _handleResponse(event) {
        this.list = event.detail.response;
        this.$.toast1.open()
    }
    close() {
        this.$.toast1.toggle()
    }
    static get template() {
        return html`

        <style>
        .yellow-button {
            text-transform: none;
            color: #eeff41;
        }
        </style>

          <div>Iron form</div>
          <iron-ajax
          auto
          url="data/data.json"
          method="get"
          handle-as="json"
          on-response="_handleResponse"
          on-error="_handleError"
          debounce-duration="300">
      </iron-ajax>


          <iron-form id="login">
          <form>
            <paper-input type="text" name="userName" label="User Name" auto-validate value={{userName}} required error-message="Enter User Name"></paper-input>
            <paper-input type="password" name="password" label="Password" auto-validate value={{password}} required error-message="Enter Password"></paper-input>
            <paper-dropdown-menu label="Skill Set">
                <paper-listbox slot="dropdown-content">
                    <template is="dom-repeat" items={{list}}>
                        <paper-item>[[_getIndex(index)]] {{item.name}}</paper-item>                    
                    </template>
                </paper-listbox>
            </paper-dropdown-menu>


            <paper-button raised on-click="_handleSubmit">Submit</paper-button>
            <paper-button on-click="_handleReset">Reset</paper-button>
            
          </form>
          </iron-form>
          
          <paper-dialog id="dialog" entry-animation="scale-up-animation" exit-animation="fade-out-animation" with-backdrop>
            <h2>User Name: {{userName}} & password: {{password}}</h2>
        </paper-dialog>

        <paper-toast id="toast1" duration="0" text="dropdown values are loaded with {{list.length}} values">
        <paper-button on-click="close" class="yellow-button">OK Close!</paper-button>
        </paper-toast>

        <gold-cc-expiration-input></gold-cc-expiration-input>
        <gold-cc-expiration-input value="11/15"></gold-cc-expiration-input>

        `;
    }
}

window.customElements.define('polymer-components', Test);