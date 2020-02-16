import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {

  constructor(
    private data: DataService,
    private appComponent: AppComponent
  ) { 
    this. data.changeEmitted$.subscribe(
      dataServer => {
        this.user = dataServer['user'];
      });
   }
   user = {};

   signOut() {
    this.appComponent.signOut()
  }


}
