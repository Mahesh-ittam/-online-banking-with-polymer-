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
import '@polymer/paper-spinner/paper-spinner.js';


class MyFaq extends PolymerElement{
  static get template() {
    return html`
      <style include="shared-styles"> 
       #card{
          margin-top:50px;
          margin-left:50px;
          margin-bottom:50px;
          margin-right:50px;
          background-color:White;
          border-radius:25px;
        }
        
       #page_heading
	     {
		margin-left:75px;
		font-size:35px;
		color:#020303;
		margin-bottom:8px;
	      }
        #faq_table
	     {
		margin-left:35px;
		margin-right:15px;
	    }
        #faq_table td
	{
		padding-left:10px;
		padding-bottom:10px;
	}
.question
	{
		border-top:1px dashed #ADADAD;
		font-weight:bold;
		font-size:20px;
		color:#000000;
	}
.question td
	{
		padding-top:10px;
		padding-bottom:0;
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
                font-size:10px;
                padding:20px;
                margin-top:25px;
				font-size
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
		  footer p{  
            margin: 1px 0;
            align-items:center;
           font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida  Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
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

      <center>   
      <div id="card">
			<div id="page_heading">
				Frequently Asked Questions (F.A.Q.)
			</div>
			<div id="faq_questions">
					<table id="faq_table" style="border-collapse:collapse;">
						<tr class="question">
							<td>1. What is Online Scotia Bank ?</td>
						</tr>
						<tr>
							<td>Online Scotia Bank is the Internet banking service provided by Union State Bank Of Maharashtra, India's largest and premier commercial bank</td>
						</tr>
						<tr class="question">
							<td>2. What is special about Internet banking?</td>
						</tr>
						<tr>
							<td>Internet banking is the most convenient way to bank- anytime, any place, at your convenience.</td>
						</tr>
						<tr class="question">
							<td>3. I do not have a PC?</td>
						</tr>
						<tr>
							<td>You can access Online Scotia Bank from any computer that has connectivity to the Internet. But make sure your computer is Malware free.</td>
						</tr>
						<tr class="question">
							<td>4. How do I access Online Scotia Bank ?</td>
						</tr>
						<tr>
							<td>You need to have an account at a branch. You also need to register for the Internet banking service with the branch. Branch will provide you a Pre Printed Kit (PPK) containing username and password for first login. If you are not in a position to collect PPK in person, the bank will arrange to send a username through SMS and a mailer containing password to your registered address. Logon to our website using this username and password. At the first login, you will need to go through a simple initialization process. Our Net banking assistant will guide you step by step through this process on the site.</td>
						</tr>
						<tr class="question">
							<td>5. I do not have an account with Scotia Bank ?</td>							
						</tr>
						<tr>
							<td>You are welcome to open it now. It is very easy to open an account with Scotia Bank. You can apply online for opening of a savings bank account. A link 'Online SB Account Application' is available on the home page of our website or just walk in to any of our branches nearby. Our staff would be pleased to assist you.</td>
						</tr>
						<tr class="question">
							<td>6. I want a Corporate Account?</td>
						</tr>
						<tr>
							<td>We are sorry that this service is under-development.</td>
						</tr>
					</table>
			</div>
		</div>
      </center>
      <footer>
           <center><p>
              Copyright &copy; by Scotia Bank  
            </p></center>
        </footer>
    `;
  }
}
 /**route path for login */
 
 


window.customElements.define('my-faq', MyFaq);
