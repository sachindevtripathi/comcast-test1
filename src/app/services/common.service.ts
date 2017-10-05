import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class CommonService {
    private dataUrl: string = '../app/asset/data.json';  

    constructor(private _http: Http) {}

    public getData(): Observable<any> {        
        return this._http.get(this.dataUrl, {})
            .map((response: Response) => {
                return response.json();
            })            
    }    
}