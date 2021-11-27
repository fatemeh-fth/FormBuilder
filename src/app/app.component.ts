import { Component } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private userService: UserService) { }

  data = {
    firstName: null,
    lastName: null,
    isActive: null,
    city: null
  }

  onFirstNameChange(event) {
    this.data.firstName = event;
  }

  onLastNameChange(event) {
    this.data.lastName = event;
  }

  onActiveChange(event) {
    this.data.isActive = event;
  }

  onCityChange(event) {
    this.data.city = event;
  }

  onSubmit() {
    this.userService.postData(this.data).subscribe(res => {

    })
  }
}
