import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ContentHeader} from './app.header';
import {ContentView} from './app.content.view';
import {FooterView} from './app.footer';
import {ContentDetail} from './app.content.detail';

@Component({
    selector: 'my-app',
    template: `<my-header></my-header>
    		   <router-outlet></router-outlet>
    		   <my-footerview></my-footerview>`,
    directives: [ROUTER_DIRECTIVES, ContentHeader,ContentView, FooterView]
})

@RouteConfig([
  {path:'/',          	  name: 'CrisisCenter', component: ContentView},
  {path:'/detail/:id',        name: 'Heroes',       component: ContentDetail}
])

// import {Component} from 'angular2/core';
// import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
// import {ContentHeader}   from './app.header';
// import {FooterView}     from './app.footer';
// @Component({
//   selector: 'my-app',
//   template: `
//     <h1>Component Router</h1>
//     <router-outlet></router-outlet>
//   `,
//   directives: [RouterOutlet, ROUTER_DIRECTIVES]
// })
// @RouteConfig([
//   {path:'/', name: 'CrisisCenter', component: ContentHeader},
//   {path:'/heroes',        name: 'Heroes',       component: FooterView}
// ])


export class AppComponent { }
