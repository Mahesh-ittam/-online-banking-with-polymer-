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
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';



class MyLogin extends PolymerElement {
  
    static get template() {
        return html `
        <!---css-->
      <style include="shared-styles">   
        .login{
          background:black;
          color:white;
          width:200px;
          border-radius:50px;
        }
        .login:hover {
          background-color: black;
        }
        h1{
          margin-top:-5PX;
        }

        .signup{
          background:black;
          color:white;
          width:200px;
          height:30px;
          border-radius:50px;

          }

          .signup:hover {
          background-color:BLACK;
        }

        .card{
          width:400PX;
          height:80;
          padding:15px;
          font-size:10px;
          border-radius:20px;
          text-align:center;
          margin-top:5%;
          background:white;
        }
        .card{
          align-items:left;
          padding:50px;
        }
@media(max-width:768px){
  .card{
    width:150px;
    font-size:10px;
    margin:50px;
  }
  h1{
    font-size:20px;
  }
  .signup{
    width:80px;
  }
  .login{
    width:80px;
  }
}

          
      </style>  
      <center>      
        <!----app location---->
        <app-location route="{{route}}" ></app-location>  
  
        <div class="card">
        <br>
        <!--------------->
        <h1>Welcome to<br> Scotia Bank</h1>       
     <!---paper input for user name---> 
        <paper-input type="text" user label="Username" value="{{UserName}}" id="UserName"></paper-input>
        <paper-input type="password" Password label="Password"  value="{{Password}}" id="Password"></paper-input>      
         <br><br>
        <paper-button raised class="login" on-click="login"><b>LOGIN</b></paper-button>
        <br>    
        <!---paper button for signup--->
        <h4>Didn't have an account?</h4>&nbsp;
        <paper-button raised class="signup" on-click="signup"><b>SIGNUP</b></paper-button>        
       </div>
      </center>
    `;

    }
    /**route path for login */
    login() {
      if(this.UserName =='' && this.Password ==''){
        alert("Please enter Username and password");
      }
         else if(this.UserName == 'Mahesh' && this.Password == 'maha@123'){
           alert("Login Success......!");
            this.set('route.path','/home');
        } else {
            alert("Please enter Valid Username or password");
        }
        location.reload();
    }


    /**route path for signup */
    signup() {
        this.set('route.path', '/register');

    }

}

window.customElements.define('my-login', MyLogin);