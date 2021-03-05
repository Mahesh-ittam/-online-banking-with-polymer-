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
import {
	setLegacyNoObservedAttributes,
	setPassiveTouchGestures,
	setRootPath
} from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import './my-icons.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/app-media/app-media-devices.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '@polymer/iron-input/iron-input.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-card/paper-card.js';


// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
	static get template() {
		return html`

      
<app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

       
        
<!----------Iron pages ---------->
              <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
                  <my-home name="home"></my-home>
                  <my-login name="login"></my-login>
                  <my-register  account-list = "{{accountList}}" name="register"></my-register>
                  <my-bank name="bank" account-list = "{{accountList}}" register-data="{{registerData}}"></my-bank>
                  <my-contact name="contact"></my-contact>
                  <my-faq name="faq"></my-faq>
                  <my-registration account-list="{{accountList}}" register-data="{{registerData}}" name="registration"></my-registration>
                  <my-services name="services"></my-services>
                  <my-banking name="banking" account-list="{{accountList}}"></my-banking>
                  <my-loan name="loan"></my-loan>   
                  <my-view404 name="view404"></my-view404>
              </iron-pages>   
    `;
	}

	static get properties() {
		return {
			page: {
				type: String,
				reflectToAttribute: true,
				observer: '_pageChanged'
			},
			routeData: Object,
			subroute: Object,

			registerData: {
				type: Object,
				value: {}
			},
			accountList: {
				type: Array,
				value: []
			}
		};
	}


	static get observers() {
		return [
			'_routePageChanged(routeData.page)'
		];
	}

	_routePageChanged(page) {
		// Show the corresponding page according to the route.
		//
		// If no page was found in the route data, page will be an empty string.
		// Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
		if (!page) {
			this.page = 'login';
		} else if (['login', 'home', 'register', 'bank', 'contact', 'faq', 'registration', 'loan', 'services', 'banking'].indexOf(page) !== -1) {
			this.page = page;
		} else {
			this.page = 'view404';
		}
	}

	_pageChanged(page) {


		// Import the page component on demand.
		//
		// Note: `polymer build` doesn't like string concatenation in the import
		// statement, so break it up.
		switch (page) {
			case 'login':
				import('./my-login.js');
				break;
			case 'home':
				import('./my-home.js');
				break;
			case 'register':
				import('./my-register.js');
				break;
			case 'contact':
				import('./my-contact.js');
				break;
			case 'faq':
				import('./my-faq.js');
				break;
			case 'bank':
				import('./my-bank.js');
				break;
			case 'registration':
				import('./my-registration.js');
				break;
			case 'services':
				import('./my-services.js');
				break;
			case 'banking':
				import('./my-banking.js');
				break;
			case 'loan':
				import('./my-loan.js');
				break;
			case 'view404':
				import('./my-view404.js');
				break;
		}
	}
}

window.customElements.define('my-app', MyApp);