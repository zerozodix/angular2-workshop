import {Component} from 'angular2/core';
import {AppService} from './app.service';
import {Person} from './app.item';
import {Router, RouteParams} from 'angular2/router';

@Component({
    selector: 'content-detail',
    template: `
    			<div class="mdl-grid" style="max-width: 900px; width: 100%; margin:0 auto;">
					<div class="mdl-cell--12-col mdl-card mdl-shadow--2dp" style="margin:5px;">
	                    <div class="mdl-card__title">
	                        <h2 class="mdl-card__title-text">
	                        {{person.name}}
	                        </h2>
	                    </div>
	                    <div class="mdl-card__card__media">
	                        <img style="max-width: 900px;" src="{{person.image}}"/>
	                    </div>
	                </div>
                </div>`
})

export class ContentDetail { 

	private _selectedId:number;
	private person:Person;

	constructor(private appService:AppService, private routeParams: RouteParams) {
      	this._selectedId =+ routeParams.get('id');
     	this.person = this.appService.getPersonById(this._selectedId);
    }
 }
