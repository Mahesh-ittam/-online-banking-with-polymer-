/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
import {
	PolymerElement,
	html
} from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/iron-input/iron-input.js';


class MyServices extends PolymerElement {
	static get template() {
		return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }    
        
      .card {
        margin: 130px 190px 90px 100px;   
        width:600px;
        padding: 30px;
        color: #777575;
        border-radius: 15px;
        background-color: white;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
          }
        app-header {
          color: white;
          background-color: var(--app-primary-color);
        }
        a{
            text-decoration:none;
            color:white;
          }
          .logo{
              color:Black;
              font-size:50px; 
            }
            paper-button{
              background-color:black;

            }
          @media (max-width:768px){
              .wrapper{
                margin-top:30%;
              }
              h1{
                font-size:50px;
               
              }
              app-toolbar{
                font-size:15px;
                padding:20px;
                margin-top:25px;
                    }
              .card{
              width:250px;
              padding:25px;
              margin-left:10px;
              margin-right:15px;
              font-size:10px;
              }
           }
          
    
      </style>   
     
      <!--------------------navbar ------------------------->
      <app-header slot="header" condenses="" reveals="" effects="waterfall"></app-header>
                <app-toolbar>   
                      <div main-title="Bank" class="logo"><b>Scotia Bank</b></div>
      
                    <iron-selector selected="[[page]]" attr-for-selected="name" class="button" role="navigation">
                      <a name="home" href="[[rootPath]]home"><paper-button>Home</paper-button></a>               
                      <a name="bank" href="[[rootPath]]bank"><paper-button>Bank</paper-button></a> 
                      <a name ="logout" href="[[rootpath]]login"><paper-button>logout</paper-button></a>

                    </iron-selector>
                </app-toolbar>
              </app-header>
<!--------------------balance check--------------->
<center>
           <div class="card">
             <h1>Balance Check</h1>
             <paper-input class="custom" always-float-label label="Account Number" auto-validate pattern="[0-9]*"></paper-input><br>
             <paper-button always-float-label on-click="">Balance</paper-button>
             <h1>{{amount}}</h1>
           </div>
           </center>

           <!-----------------container -------------------->
    `;
	}

}


window.customElements.define('my-services', MyServices);