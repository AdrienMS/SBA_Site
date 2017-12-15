import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';
import { User } from '../_models/index';

@Component({
    moduleId: module.id,
    templateUrl: 'profil.component.html',
    styleUrls: [ '../../assets/css/profil.component.css' ],
})

export class ProfilComponent {
    currentUser: User;
    user: User[] = [];
    is_disabled = true;
    
    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.userService.getById(this.currentUser.id).subscribe(user => { this.user = user; });
    }

    activate_modifications() {
        this.is_disabled = false;
    }

    modify() {
        this.userService.update(this.currentUser);
        this.is_disabled = true;
    }
}