import {Injectable} from 'angular2/core';
//import {Http} from 'angular2/http';

@Injectable()
export class AppService {

    private mockData = [
        {
            id: 0,
            image: 'http://www.conversationsforabetterworld.com/wp-content/uploads/2015/06/8839468-i-love-you-hd.jpg',
            name: 'Art'
        },
        {
            id: 1,
            image: 'http://shirleymaya.com/wp-content/uploads/2015/05/How-to-love.jpg',
            name: 'Ken'
        },
        {
            id: 2,
            image: 'http://www.newlovewallpapers.com/download/in-love-images-and-wallpaper/in-love-images-and-wallpaper-2.jpg',
            name: 'Pop'
        }];

  	constructor() {
    }

    getPersonList() {
    	return this.mockData;
    }

    getPersonById(id){
        return this.mockData[id];
    }
}
