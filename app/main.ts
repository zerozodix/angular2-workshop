import 	{bootstrap}    from 'angular2/platform/browser';
import 	{AppComponent} from './app.component';
import 	{HTTP_PROVIDERS} from 'angular2/http';
import 	{AppService} from './app.service';
import 	{ServiceConnector} from './app.commonLib.service';

import 	{
			ROUTER_PROVIDERS, 
			ROUTER_DIRECTIVES,
			LocationStrategy,
	        HashLocationStrategy
    	} from 'angular2/router';

import {provide}           from 'angular2/core';


bootstrap(AppComponent,
		[	
			HTTP_PROVIDERS, 
			ROUTER_PROVIDERS, 
			AppService, 
			ServiceConnector,
			provide(LocationStrategy,
     		{useClass: HashLocationStrategy}) 
     	])
	.catch(console.error);
