import {Component} from 'angular2/core';

@Component({
    selector: 'my-header',
    template: `  
	    <header class="mdl-layout__header">
		    <div class="mdl-layout__header-row">
		     	<!-- Title -->
		      	<span class="mdl-layout-title">WorkShop Angular2 js</span>
		    </div>
	  	</header>`
})
export class ContentHeader { }
