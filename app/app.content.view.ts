import {Component} from 'angular2/core';
import {SideBar} from './app.content.sidebar';
import {ContentListView}  from './app.content.list';


@Component({
    selector: 'my-contentview',
    template: `
    			<div class="mdl-grid">
    				<div class="mdl-cell mdl-cell--4-col mdl-cell--2-col-tablet">
    					<my-SideBar></my-SideBar>
    				</div>
					<div class="mdl-cell mdl-cell--8-col mdl-cell--6-col-tablet">
		    		   	<my-content-list></my-content-list>
					</div>
    			</div>
    			
    		   <div style="clear: both;"></div>`,
    directives: [SideBar, ContentListView]
})
export class ContentView { }
