import { Component, OnInit } from '@angular/core';

import { AlertService, UserService } from '../_services/index';
import { User } from '../_models/index';

@Component({
  moduleId: module.id,
  selector: 'smithy',  // <smithy></smithy>
  styleUrls: [ '../../assets/css/smithy.component.css' ],
  templateUrl: 'smithy.component.html'
})
export class SmithyComponent {
    currentUser: User;
    user: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.userService.getById(this.currentUser.id).subscribe(user => { this.user = user; });
    }
}