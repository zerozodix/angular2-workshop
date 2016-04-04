import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

enum connectorType {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
};

@Injectable()
export class ServiceConnector {
    constructor(private http:Http) {
    }


    public GET(url:String, parameters:Object) {
        url = this.generateGetUrlWithParameter(url, parameters)
        return new Promise(
            (resolve) => {
                this.http.get(url).subscribe(
                    (res) => {
                        resolve(res.json());
                    },
                    (err) => this.errorLogs(connectorType.GET, url, err),
                    () => this.completeLogs(connectorType.GET, url)
                )
            }
        );
    }

    public POST(url:String, parameter:Object) {
        return new Promise(
            (resolve) => {
                this.http.post(url, parameter).subscribe(
                    (res) => {
                        resolve(res.json());
                    },
                    (err) => this.errorLogs(connectorType.POST, url, err),
                    () => this.completeLogs(connectorType.POST, url)
                )
            }
        );
    }

    private generateGetUrlWithParameter(url:String, parameters:Object) {
        var result = [];
        result.push(this.stripTrailingLastCharactor(url, '/'));
        result.push(this.encodeQueryData(parameters));
        return this.stripTrailingLastCharactor(result.join('?'), '?');
    }

    private stripTrailingLastCharactor(url:string, target:string) {
        if (url.substr(-1) === target) {
            return url.substr(0, url.length - 1);
        }
        return url;
    }

    private encodeQueryData(parameters:Object) {
        if (!parameters) return null;
        if (typeof parameters != "object")return parameters;

        var result = [];
        for (var param in parameters) {
            result.push(encodeURIComponent(param) + "=" + encodeURIComponent(parameters[param]));
        }
        return result.join("&");
    }

    private completeLogs(type:connectorType, url:String) {
        return console.log(type + ' Complete : ' + url);
    }

    private errorLogs(type:connectorType, url:String, err:String) {
        console.log("Error from " + type + " : " + url + " \nMsg : " + err);
    }
}