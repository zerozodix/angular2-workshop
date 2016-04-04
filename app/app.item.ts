import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'my-item',
    template: `
                <div class="mdl-card mdl-shadow--2dp" style="margin:5px;">
                    <div class="mdl-card__title" style="background: url('{{person.image}}') center / cover; height:170px; color: #fff;">
                        <h2 class="mdl-card__title-text">
                        {{person.name}}
                        </h2>
                    </div>
                    <div class="mdl-card__actions mdl-card--border">
                        <a [routerLink]="['Detail', {id:person.id}]" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                              View {{person.name}} Detail
                        </a>
                    </div>
                </div>
                `,
    directives : [ROUTER_DIRECTIVES]
})

export class ContentItem {
	@Input() person:Person;
}

export class Person {
    constructor(){
    }
}