/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js'
import '@material/paper-i</paper-input>';
import '@material/paper-button';
class MyLoan extends PolymerElement {
  static get template() {
    return html`
    <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
    </app-location>

    <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
    </app-route>
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }

        paper-input>{
            width:100%;
           
          }
          paper-button{
            background-color:#020203;
          }
          section{
            margin-left:40px;
          }
          footer {
            min-height: 100px;
            background-color: #ced4da;
          }  
          h2{
            margin-left:50px;
          }
          @media only screen and (max-width: 480px){
            .table{
              position: relative;
              right:700px;
               top:90px;
               width:300px;
              overflow-x:hidden;
              overflow-y:hidden;
              
             }
             .card{
              position: relative;
              right:30px;
               top:20px;
               width:300px;
              overflow-x:hidden;
              overflow-y:hidden;
             }
           }
           @media only screen and (max-width: 1100px) and (min-width: 480px){
          .table{
              position: relative;
              right:40px;
               top:90px;
               width:1100px;
              overflow-x:hidden;
              overflow-y:hidden;
              
             }
             .card{
              position: relative;
              right:30px;
               top:20px;
               width:600px;
              overflow-x:hidden;
              overflow-y:hidden;
             }
           }
                   
     paper-button.custom {
      align:center;
      margin-left:600px;
      background-color: var(--paper-green-a200);
    } 
    app-header {
          color: white;
          background-color: var(--app-primary-color);
        }
        a{
            text-decoration:none;
            color:white;
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
              padding:0px;
            }
          }
          paper-button{
      color:white;
      background-color:black;
    } 
    .logo{
            color:Black;
            font-size:50px; 
          }
           </style>


    
  <!-- adding tables-->
      
    
  <app-location route="{{route}}"></app-location>
  <app-header slot="header" condenses="" reveals="" effects="waterfall"></app-header>
                <app-toolbar>   
                      <div main-title="Bank" class="logo"><b>Scotia Bank</b></div>
      
                    <iron-selector selected="[[page]]" attr-for-selected="name" class="button" role="navigation">
                      <a name="home" href="[[rootPath]]home"><paper-button>Home</paper-button></a>               
                      <a name="bank" href="[[rootPath]]bank"><paper-button>Bank</paper-button></a> 
                      <a name="contact" href="[[rootpath]]contact"><paper-button>Contact Us</paper-button></a>
                      <a name ="logout" href="[[rootpath]]login"><paper-button>logout</paper-button></a>

                    </iron-selector>
                </app-toolbar>
              </app-header>
    <!--creating form-->
    <center>

      <div class="column">
        <h2>Loan Amount Calculation</h2>
        <div class="card">
        <paper-input outlined  label="Principal" id="principal"  ></paper-input></br></br>
        <paper-input outlined  label="Interest"  id="annual" ></paper-input></br></br>
        <paper-input outlined   label="Peroid" id="peroid" ></paper-input></br></br>
        <paper-button raised label="Calculate Interest" on-click="compound"></paper-button></br></br>
        <h2>Loan Amount: {{Amount}}</h2>
        </div>
      </div>
    </center>
    `;
  }
  // taking data from paper inputs 
  compound(){
    var principal=this.$.principal.value;
    var annual=this.$.annual.value;
    var peroid=this.$.peroid.value;
  //  calculating matured amount
  //   this.Amount = ((principal*(1+annual)^peroid)-principal);
  this.Amount =(principal*annual)*(((1+annual)^peroid)/(((1+annual)^Period)-1));
  }
  static get properties() {
    return {
      Amount: {
        type: Number,
      }
    }
  }

}

// registering elements with browser
window.customElements.define('my-loan', MyLoan);
