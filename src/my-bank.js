/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/app-media/app-media-devices.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';

class MyBank extends PolymerElement {
  static get template() {
    return html`
    <style>
        .thead{
          background:lightblue;
        }
        #customers {
            font-family: Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 80%;
            height:150%;
            padding-top:15px;

          }

        #customers td, #customers th {
        border: 1px solid #ddd;
        padding: 5px;
        margin-right:5px;
      }

      #customers tr:nth-child(even){
        background-color: #f2f2f2;
        }

      #customers tr:hover {
        background-color: #ddd;
                }

        #customers th {
          padding-top: 12px;
          padding-bottom: 12px;
          text-align: left;
          color: white;
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
                padding:30px;
                margin-top:25px;
                    }
            #Register{
              width:180px;
              height:150px;
              margin-left:50px;
              font-size:10px;
            }
            .custom{
              width:150px;
            }   
          }
           
            .thead{
              width:100px;
              font-size:12px;
            }
             
          

    </style>
   
            <app-location route="{{route}}"></app-location>

 <!----------------navigation---------------------->

            <app-header slot="header" condenses="" reveals="" effects="waterfall"></app-header>
                <app-toolbar>   
                      <div main-title="Bank" class="logo"><b>Scotia Bank</b></div>
                    <iron-selector selected="[[page]]" class="button" role="navigation">
                      <a name="home" href="[[rootPath]]home"><paper-button>Home</paper-button></a>               
                      <a name="bank" href="[[rootPath]]bank"><paper-button>Bank</paper-button></a> 
                      <a name ="logout" href="[[rootpath]]login"><paper-button>logout</paper-button></a>
                    </iron-selector>
                </app-toolbar>
              </app-header>
     <br>
     <br>

<!-------------------tables form  ------------------->  
<center>
  <table id="customers">
       <thead class="thead"><!---use to group header content in a html table-->
          <tr>
            <!---The scope attribute specifies whether a header cell is a header for a column, row, or group of columns or rows.   ---->
            <th scope="col">Accountholder</th>
            <th scope="col">Email</th>
            <th scope="col">Account Number</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Amount(INR)</th>
          </tr>
        </thead>
        <!--------------table Data from registration------------------------->        
    <tbody>	
      <template is="dom-repeat" items="{{accountList}}">
              <tr>
                        <td>{{item.UserName}}</td>
                        <td>{{item.Email}}</td>                     
                        <td>{{item.accountno}}</td>
                        <td>{{item.phonenumber}}</td>
                        <td>{{item.amount}}</td>
              </tr>       
      </template>             
  </tbody>
</table>
</center>
    `;
  }
 
  static get properties() {
    return {
       //registerData is property which is taking userList array values from registration.js
      registerData:{
        type:Object,
        value:{},
        notify:true
      },
      accountList:{
        type:Array,
        value:[],
        notify:true
      }
    };
  }

}
customElements.define('my-bank', MyBank);