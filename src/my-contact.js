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
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-checkbox/paper-checkbox.js';


class Mycontact extends PolymerElement{
  static get template() {
    return html`

      <style include="shared-styles"> 
       :host{
         margin:25px;
       }
       .card {
            border:1.5px solid #000000;      
            width:600px;         
            min-width:650px;
            margin-left:100px;
            margin-bottom:0px;
            margin-top:100px;
            margin-right:80px;
            padding-top:25px;
            background-color:white;
            border-radius:30px;
        }
                
        paper-button{
      color:white;
      background-color:black;
    } 
    .logo{
            color:Black;
            font-size:50px; 
            margin-top:55px;
          }
       .heading
            {
              color:#000000;
              font-weight:bold;
            }
          table
            {
              border-collapse: separate;
              border-spacing: 20px 20px;
            }
          td
            {
              vertical-align:top;
            }
          #phone_no
            {
              width:500px;
              position:relative;
              margin-left:100px;
              padding:0px;
            }
          #phone_no table
            {
              margin:0px;
              vertical-align:top;
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
            .card{
              width:50px;
              margin-right:15px;
              margin-left:5px;
              font-size:10px;

            }
          }
        </style>
        
        <app-location route="{{route}}"></app-location>
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
              <!-----------Main Content-------------->
      <center>   
         <div class="card">
			<h2>Contact Us</h2>
			<table>
				<tr>
					<td>
						<div >
						<b class="heading">Registered Office : </b><br>
						Scotia Bank Ltd. <br>
					    Uniqhire Tower,<br>
						Fort, Bangalore 400005.
						</div>
					</td>
					<td>
						<div id="phone_no">
							<table>
								<tr>
									<td>
										<b class="heading">Customers can contact our 24 X 7 Phone Banking numbers 
										from any Landline / Mobile number, our Toll free numbers are as follows:</b><br>
										1800-200-1345<br>
										1800-33-1470
									</td>
								</tr>
								<tr>
									<td><b class="heading">Debit Card Blocking Toll Free number:</b> 1983-22-6999</td>
								</tr>
								<tr>
									<td>
										<b class="heading">Our Non-Toll Free number:</b> (+91-22) 6663 7111<br>
										<b class="heading">Contact number for outside India customers:</b> (+91-22) 9999 7000
									</td>
								</tr>
							</table>
						</div>
					</td>
				</tr>
			</table>
      </div>
      </center>

    `;
  }
}

window.customElements.define('my-contact', Mycontact);
