import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {AppService} from './app.service';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router';


bootstrap(AppComponent,[AppService, ROUTER_PROVIDERS, ROUTER_DIRECTIVES])
	.catch(console.error);
