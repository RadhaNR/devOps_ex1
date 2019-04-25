import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import "@polymer/polymer/lib/elements/dom-repeat.js";
import "@polymer/polymer/lib/elements/dom-if.js";

class HelloWord extends PolymerElement{
    static get properties() {
        return {
            name: {
                type: String,
                value: "Radha N"
            },
            sapId: {
                type: Number,
                value: 1214
            },
            isEmployee: {
                type: Boolean,
                value: true
            },
            location: {
                type: Object,
                value: {
                    name: "Bangalore"
                }
            },
            list: {
                type: Array,
                value: [
                    {name: "Angular", id: 1},
                    {name: "React", id: 2},
                    {name: "Polymer", id: 3}
                ]
            }
            
        }
    }

    _getIndex(index) {
        return index + 1;
    }
    static get template() {
        return html `
         <div>Name: {{name}}</div>
         <div>Sap Id: {{sapId}}</div>
         <div>
            isEmployee:
            <template is="dom-if" if="{{isEmployee}}">
                Yes
            </template>
            <template is="dom-if" if="{{!isEmployee}}">
                No
            </template>
         </div>
         <div>Location : {{location.name}}</div>
         <div>
            Skill Set : {{skillSet.length}}
            <template is="dom-repeat" items="{{list}}">
                <div>[[_getIndex(index)]]. {{item.name}}</div>
            </template>           

         </div>

        `;
    }

}

window.customElements.define('hello-world', HelloWord);