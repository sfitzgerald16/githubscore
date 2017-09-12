import { Component, ViewChild } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') form: any;
  user: any;
  userExists;
  promise;
  score = null;
  constructor(private _apiservice: ApiService){}

  calculateScore(username){
    console.log('step 1');
    this.promise = this._apiservice.retrieveUser(username)
    if (this.promise){
      console.log('promise returned');
      this.promise
        .then((user) => {
            this.userExists = true;
            if (user.id){
              this.score = user.public_repos + user.followers;
              console.log(this.score);
            }
          })
        .catch(() => {
            this.userExists = false;
        })
    }
  }
}
