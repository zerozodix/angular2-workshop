import {Injectable} from 'angular2/core';
import {ServiceConnector} from './app.commonLib.service';
import {Http} from 'angular2/http';

@Injectable()
export class AppService {

    private url = "https://gank.io/api/data/%E7%A6%8F%E5%88%A9/50/1";

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

    constructor(private serviceConnector:ServiceConnector) {
    }

    getPersonList() {
    	return Promise.resolve(this.mockData);
        // Waiting Service from POP
        // return this.serviceConnector.GET(this.url);
    }

    getPersonById(id){
        return this.mockData[id];
        // Waiting Service from POP
        // return this.serviceConnector.GET(this.url , id);
    }
}
