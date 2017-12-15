import { Component, OnInit } from '@angular/core';

import { User } from './_models/index';
import { UserService } from './_services/index';

@Component({
    moduleId: module.id,
    selector: 'app',
    styleUrls: [ '../assets/css/app.component.css' ],
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
    currentUser: User;
    user: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.userService.getById(this.currentUser.id).subscribe(user => { this.user = user; });
    }
}