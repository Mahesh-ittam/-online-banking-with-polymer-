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
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '@polymer/paper-radio-button/paper-radio-button.js';
import '@polymer/iron-input/iron-input.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';


class MyRegister extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        
        :host {
          display: block;
          padding: 10px;
        }
        .card {
        margin: 130px 190px 90px 100px;   
        width:100px;
        padding: 30px;
        color: #777575;
        border-radius: 15px;
        background-color: white;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }
        #Register{
          width:600px;
          margin:250px;
          margin-top:50px;
          margin-bottom:50px;
          margin-left:160px;
          color:black;
          }
        span{
        padding:15px;
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
              font-size:10px;
            }
            app-toolbar{
              font-size:15px;
              margin-top:25px;
              padding:50px;
            }
            #Register{
              width:200px;
              height:450px;
              margin-left:50px;
              font-size:10px;

            }
            .custom{
              width:150px;
            }   
          }
      
          </style>

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
        box-sizing: border-box;
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



<app-location route="{{route}}"></app-location>

<!----------------navigation---------------------->

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
    <br>
    <br>
<!---------------------------Form ----------------->      
<center>
      <div class="card" id="Register">
        <center><h1>Personal Banking Application</h1></center>
           <br>     
           <paper-input class="custom" always-float-label label="FullName" auto-validate pattern="[a-zA-Z]*"  value="{{UserName}}" error-message="letters only!"></paper-input>       
           <br>
           <paper-input class="custom" always-float-label label="Email" value="{{Email}}" required auto-validate error-message="Enter correct Email Id!" pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"></paper-input>
           <br>
           <paper-input class="custom" always-float-label label="AccountNo" value="{{account}}" ></paper-input>
           <paper-input class="custom" always-float-label label="mobilenumber" country-code="+91" id="phone" value="{{phonenumber}}" phone-number-pattern="xxx-xxxx-xxx" maxlength="10"></paper-input>
           <br>
        <center>
            <paper-button toggles raised class="green" on-click="register">Register</paper-button>
        </center>
      </div>
</center>       
    `;
  }


  /* Declared properties and their corresponding attributes
  */
static get properties() {
  return {
    UserName: {
        type: String,
        value: '',     
      },
      Email: {
        type: String,
        value: '',
        
      },
      account:{
        type: String,
        value: '',
        
      },
      phonenumber: {
        type: String,
        value: '',
        
      },
      amount:{
        type:String,
        value:'',
        
      },
      registerData: {
        type: Object,
        value: {},
        notify: true
      },
      accountList:{
        type:Array,
        value:[],
        notify:true
      }
};
}


  register(){
    if(this.UserName.trim() == '' || this.account.trim() == '' || this.Email.trim() == '' || this.phonenumber.trim() == ''){
      alert('Please enter all fields');
      return false;
    }
    //------------mail Format ---------------------//
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (this.Email.trim().match(mailformat))
    {
      // return true;
    }
    else{
      alert('Please enter valid email address');
      return false;

    }
        //------------number Format ---------------------//

     var numberFormat = /^\d{10}$/;  
      if (!this.phonenumber.trim().match(numberFormat)){
      alert('Please enter valid phone number');
      return false;
    }
    if (!this.account.trim().match(numberFormat)){
      alert('Please enter valid account number of length 10');
      return false;
    }
    //-------------Object---------------//
    this.registerData={
      "UserName": this.UserName,
      "accountno": this.account,
      "Email": this.Email,
      "phonenumber": this.phonenumber,
      "amount":10000  
    }
//pushing the data into accountlist
    this.accountList.push(this.registerData);
    let accounts = this.accountList.map((account) => {
      return account;
    });
    this.set('accountList',accounts); //setting the accounts into accountlist 
    console.log(this.registerData);
    //reset input fields
    this.UserName ='';
    this.account = '';
    this.Email = '';
    this.phonenumber = '';
     this.set('route.path','/bank');//route path to bank page
 } 
}

window.customElements.define('my-register', MyRegister);
