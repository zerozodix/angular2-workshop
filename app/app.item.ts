import {Component, Input} from 'angular2/core';
// import {Router, RouteParams} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'my-item',
    template: `<a [routerLink]="['Heroes', {id:person.id}]">
    				<img width="120px" src="{{person.image}}"/>{{person.name}}</a>`,
    directives : [ROUTER_DIRECTIVES]
})
export class ContentItem {
	@Input() person:Person;
}

export class Person {
    id: number = 0;
    image: string = "";
    name: string = "";

    constructor(){

    }
}