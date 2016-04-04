import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ContentHeader} from './app.header';
import {ContentView} from './app.content.view';
import {FooterView} from './app.footer';
import {ContentDetail} from './app.content.detail';


@Component({
    selector: 'my-app',
    template: `
    			<div class="mdl-layout mdl-js-layout">
    				<my-header class="mdl-layout__header mdl-layout__header--transparent"></my-header>
    				<main class="mdl-layout__content">
					   	<div class="page-content">
    						<router-outlet></router-outlet>
    					</div> 		
					</main>

    		   		<my-footerview class="mdl-mini-footer" style="padding: 10px;"></my-footerview>
    		   	</div>`,
    directives: [ROUTER_DIRECTIVES, ContentHeader, ContentView, FooterView, ContentDetail],

})

@RouteConfig([
  	{ path: '/',       		name: 'ContentView', 	component: ContentView   , useAsDefault: true },
  	{ path: '/detail/:id', 	name: 'Detail',       	component: ContentDetail }
])

export class AppComponent { }
