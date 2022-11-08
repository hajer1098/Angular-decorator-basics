import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulardecorator';
  //if you will choose false you will show please login msg 
  userLoggedIn =true;

}
