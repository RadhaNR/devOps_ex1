import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import "./polymer-components.js";
/**
 * @customElement
 * @polymer
 */
class TestPApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>
        <polymer-components></polymer-components>
        <hr/>
      </h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'testP-app'
      }
    };
  }
}

window.customElements.define('test-app', TestPApp);
