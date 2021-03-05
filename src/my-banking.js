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
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-radio-button/paper-radio-button.js';




class MyBanking extends PolymerElement {
	static get template() {

		return html `
        <!---css-->
      <style include="shared-styles">
        
		    .table{
			display: table;
			width: 100%;
		}
    .card {
        margin: 130px 190px 90px 100px;   
        width:550px;
        padding: 30px;
        height:580px;
        color: #777575;
        border-radius: 15px;
        background-color: white;
        padding-right:10px;
        padding-left:10px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }
		.Title
		{
			display: table-caption;
			text-align: center;
			font-weight: bold;
			font-size: larger;
		}
		.Heading
		{
			display: table-row;
			font-weight: bold;
			text-align: center;
	  	}
	  	.Row
	    	{
	  		display: table-row;
	      	}
	    	.Cell
	      	{
			display: table-cell;
			border: solid;
			border-width: thin;
			padding-left: 5px;
			padding-right: 5px;
	    	}    
       paper-button{
      color:white;
      background-color:black;
         } 
  	    .logo{
            color:Black;
            font-size:50px; 
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
            .custom{
              width:250px;
              height:30px;
            }
            .card{
              width:300px;
              margin-left:20px;
            }
            .logo{
              font-size:30px;
              margin-top:25px;
            }
          }
          </style> 
          <custom-style>
  <style is="custom-style">
    .custom-parent {
      font-size: 12px;
    }
    paper-input.custom:hover {
      border: 1px solid #29B6F6;
    }
    paper-input.custom {
      margin-bottom: 14px;
      --primary-text-color: #01579B;
      --paper-input-container-color: black;
      --paper-input-container-focus-color: black;
      --paper-input-container-invalid-color: black;
      border: 1px solid #BDBDBD;
      border-radius: 5px;

      /* Reset some defaults */
      --paper-input-container: { padding: 0;};
      --paper-input-container-underline: { display: none; height: 0;};
      --paper-input-container-underline-focus: { display: none; };

      /* New custom styles */
      --paper-input-container-input: {
        box-sizing:body;
        font-size: inherit;
        padding: 4px;
      };
      --paper-input-container-input-focus: {
        background: rgba(0, 0, 0, 0.1);
      };
      --paper-input-container-input-invalid: {
        background: rgba(255, 0, 0, 0.3);
      };
      --paper-input-container-label: {
        top: -8px;
        left: 4px;
        background: white;
        padding: 2px;
        font-weight: bold;
      };
      --paper-input-container-label-floating: {
        width: auto;
      };

    }
  </style>
</custom-style>
                  
        <!----app location---->
        <app-location route="{{route}}" ></app-location>  
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
       
              <!--------------Same bank card transfer content------------------>
	<center>   
     <div class="card">
        <h2>Same Bank Transfer</h2>
		<div class="Table">
    <paper-input class="custom" label="From Account"  value="{{accountno}}" auto-validate pattern="[0-9]*" always-float-label></paper-input><br>
			<paper-input class="custom" label="Accountholder name"  value="{{accname}}" auto-validate pattern="[A-Za-z]*" always-float-label></paper-input><br>
      <paper-input class="custom" label="IFSC Code" value="{{toifsc}}"   auto-validate pattern="[A-Z0-9]*" error-message="This must contain Caps Lock ⇪ & Numbers...!" always-float-label></paper-input><br>
			<paper-input class="custom" label="To Account No." value="{{toaccountno}}" auto-validate pattern="[0-9]*" maxlength="16" always-Float-Label></paper-input><br>
			<paper-input class="custom" label="Re-Enter Account No." value="{{toreaccno}}" auto-validate pattern="[0-9]*" maxlength="16" always-Float-Label></paper-input><br>
      <paper-input class="custom" label="Amount" value="{{toamount}}" auto-validate pattern="[0-9]*" always-float-label></paper-input>
			<br>
			<paper-button toggles raised on-click="handleClick">send</paper-button>
		</div>
      </div>
    </center>
    <!-------------Intra bank transfer content--------------->
    <center>
   <div class="card">
   <h2>Intra Bank Transfer</h2>
   <div class="table">
       <paper-input class="custom" label="Account Holder Name" value="" auto-validate pattern="[A-Za-z]*" always-float-label></paper-input><br>
       <paper-input class="custom" label="Account Number" value="" auto-validate pattern="[0-9]*" always-float-label></paper-input>
       <span><p><b>Mode Of Transfer:</b>
       <span><paper-radio-button>NEFT</paper-radio-button></span>
       <paper-radio-button>IMPS</paper-radio-button>
       <span><paper-radio-button>RTGS</paper-radio-button></span>
        </p></span>
      <paper-button toggles raised on-click="handleClick">Send</paper-button>
      
   </div>
   </div>
   </center>
	
    `;
	}

	static get properties() {
		return {
			accountno: {
				type: Number,
				value: '',
			},
			toaccname: {
				type: String,
				value: '',

			},
			toaccountno: {
				type: Number,
				value: '',

			},
			toifsc: {
				type: String,
				value: '',
			},
			toreaccno: {
				type: Number,
				value: ''
			},
			toamount: {
				type: Number,
				value: ''
			},
			accountList: {
				type: Array,
				value: [],
				notify: true
			}
		};
	}

	handleClick() {
		// let accountExisted = false;
		let accountFilter = this.accountList.filter((account) => {
			if (account.accountno === this.accountno) {
				return account;
			}
		});
		if (accountFilter.length > 0) {
			let accounts = this.accountList.map((account, index) => {
				if (account.accountno === this.accountno) {
					if (account.amount >= this.toamount) {
						account.amount = account.amount - this.toamount;
						this.notifyPath('accountList.' + index + '.amount', account.amount);
						alert('Funds are transfered sucessfully');
					} else {
						alert('Funds are not sufficient');
					}
				}
				return account;
			});
		} else {
			alert('Account does not exist...');
		}
		//reset input fields
		this.accountno = '';
		this.toaccname = '';
		this.toaccountno = '';
		this.toifsc = '';
		this.toreaccno = '';
		this.toamount = '';
		console.log(this.accountList);
	}
}

window.customElements.define('my-banking', MyBanking);