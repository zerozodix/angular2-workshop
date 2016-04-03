import {Component} from 'angular2/core';
import {AppService} from './app.service';
import {Person} from './app.item';
import {Router, RouteParams} from 'angular2/router';
@Component({
    selector: 'content-detail',
    template: `<div><img src="{{person.image}}" width="300">
    			<h1>{{person.name}}</h1>`
})
export class ContentDetail { 

	private _selectedId:number;
	private person:Person;

	constructor(private appService:AppService, private routeParams: RouteParams) {
      	this._selectedId = +routeParams.get('id');
     	this.person = this.appService.getPersonById(this._selectedId);
     }
 }
