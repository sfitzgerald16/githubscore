import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }
  retrieveUser(username){
    console.log('service was called');
    if (username) {
      console.log('user exists');
      return this._http.get('https://api.github.com/users/' + username)
      .map(data => data.json())
      .toPromise();
    }
  }
}
