import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registration-app';
  user = new User();
  registered = false;

  onSubmit() {
    console.log('user submitted', this.user);
    this.registered = true;
  }
}
