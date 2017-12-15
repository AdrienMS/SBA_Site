import { Component, OnInit } from '@angular/core';

import { AlertService, UserService } from '../_services/index';
import { User } from '../_models/index';

@Component({
  moduleId: module.id,
  selector: 'shop',  // <shop></shop>
  styleUrls: [ '../../assets/css/shop.component.css' ],
  templateUrl: './shop.component.html'
})
export class ShopComponent {
    currentUser: User;
    user: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.userService.getById(this.currentUser.id).subscribe(user => { this.user = user; });
    }
}