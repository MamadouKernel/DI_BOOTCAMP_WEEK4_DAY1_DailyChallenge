import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user = {
    firstName: 'Mamadou',
    lastName: 'Konate',
    profilePictureUrl: 'https://avatars.githubusercontent.com/u/120653410?s=96&v=4'
  };
  get profileUser(){
    return this.user.profilePictureUrl
  }

  get FullName() {
    return this.user.firstName + ' ' + this.user.lastName;
  }
}