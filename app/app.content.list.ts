import {Component} from 'angular2/core';
import {ContentItem, Person}  from './app.item';
import {AppService} from './app.service';

@Component({
    selector: 'my-content-list',
    template: `<div *ngFor="#personItem of personList">
    			<my-item [person]="personItem" (click)="showDetail(personItem.id)" >
    			</my-item></div>`,
    directives: [ContentItem]
})


export class ContentListView { 

	personList:Person[]

	constructor(private appService:AppService){	
	}

	ngOnInit() {
		this.appService.getPersonList().then((personData) => {
			this.personList = personData
		});
	}

	showDetail(id:String){

	}


}
