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
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/paper-toolbar/paper-toolbar.js';
import '@polymer/app-media/app-media-devices.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/app-layout'

class MyHome extends PolymerElement {

	static get template() {
		return html`
     <style include="shared-styles">
        :host {
          display : inline;
          padding : 10px;
              }
        app-header {
          color: white;
          background-color: var(--app-primary-color);
        } 
        .button{
            color:white; 
          }
          .logo{
            color:Black;
            font-size:50px; 
          }
        a{
            text-decoration:none;
            color:white;
          }
        .title{
            text-align:center;
            box-align:center;
          }
        .green{
            color:white;
            font-weight:bold;
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
        #box{
            width:500px;
            float:left;
            height:420px;
            margin:50px;
            color:black;  
          }   
        #box h4{
            text-align:center;
            color:black;
            margin-top:-3%;
          } 
        #box ul li{
            text-align:inline;
          }
       
        #box1{
            width:500px;
            float:right;
            height:420px;
            margin:50px;  
            color:black;          
          }  
        #box1 h4{
            text-align:center;
            color:black;
            margin-top:-3%;
          }  
        #box1 ul li{
            text-align:inline;
          } 
        #image{
            align-items:right;
            float:right;
            background-color:red;
          }
       
        #red{
            width:800px;
            height:50px;
            margin:50px;
          }
        iron-image{
          margin-left:40%;
          }  
        footer p{  
            margin: 1px 0;
            align-items:center;
           font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida  Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
          }
          
        h1{
            font-size:50%;
          }
          @media (max-width:768px){
            .wrapper{
              margin-top:10%;
            }
            
            #box,#box1{
              width:200px;
              font-size:12px;
              padding-bottom:0px;             
            }
            app-toolbar{
                font-size:15px;
                padding:20px;
                margin-top:25px;
                    }
          } 
          paper-button{
            color:white;
            background-color:black;           
            }        
      </style>
       <!---------nav bar ----------->
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
           
      <!-------------paper tabs ------------------->
      <div class="wrapper">
            <paper-tabs selected="0">
               <a href="[[rootpath]]banking"><paper-tab>Internet Banking</paper-tab></a>
               <a href="[[rootpath]]services"><paper-tab>Services</paper-tab></a> 
               <a href="[[rootpath]]contact"><paper-tab>Contact Us</paper-tab></a>
               <a href="[[rootpath]]faq"><paper-tab>FAQ'S</paper-tab></a>
            </paper-tabs>
            </div>
<!---------------header------------------->
                    
      <div class="card" id="box">	
							<tr>
								<h2 align="center"><b>$Personal Banking</b></h2>
								<td><img src="../images/User_icon.png" width="80px" height="80px" align="right"></td>
							</tr>						
                      &nbsp;<br>&nbsp;<br>
                     <h4>Our Personal Banking securely allows you to :</h4>
							<ul>
								<li>Transfer Money</li>
								<li>Bill Payments  <font size="1" color="red">(coming soon)</font></li>
								<li>Tax Payments</li>
								<li>Scotia Bank Virtual Card</li>
								<li>Mobile/DTH Recharge  <font size="1" color="red">(coming soon)</font></li>
								<li>View your Transaction History</li>
							</ul>			
              <br>
              <center>	
              <a href="[[Rootpath]]register"><paper-button toggles raised class="green">Create Account</paper-button></a>              
              </center>
				</div>
          

          <div class="card" id="box1">	
							<tr>
								<h2 align="center"><b>$Corporate Banking</b></h2>
								<td><img src="../images/corporate_icon.jpg" width="80px" height="80px" align="right"></td>
							</tr>
						
                      <br>
                     <h4>Our Corporate Banking securely allows you to :</h4>
							<ul>
								<li>Transfer Money</li>
								<li>Tax Payments</li>
								<li>Scotia Bank Virtual Card</li>
								<li>View your Transaction History</li>
							</ul>		
              <br><br><br>
              <br>
              <center>			
              <a href="[[Rootpath]]registration"><paper-button toggles raised class="green">Create Account</paper-button></a>     
              </center>
					</div>
         
          <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
          <!----------------footer------------>
          <footer>
           <center><p>
              Copyright &copy; by Scotia Bank  
            </p></center>
        </footer>
    `;
	}
}

window.customElements.define('my-home', MyHome);