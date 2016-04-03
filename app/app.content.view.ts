import {Component} from 'angular2/core';
import {SideBar} from './app.content.sidebar';
import {ContentListView}  from './app.content.list';


@Component({
    selector: 'my-contentview',
    template: `<my-SideBar style="float: left; width: 25%;"></my-SideBar>
    		   <my-content-list style="float: left; width: 75%;"></my-content-list>
    		   <div style="clear: both;"></div>`,
    directives: [SideBar,ContentListView]
})
export class ContentView { }
