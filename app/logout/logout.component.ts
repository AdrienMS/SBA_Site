import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id,
    styleUrls: [ '../../assets/css/shop.component.css' ],
    templateUrl: 'logout.component.html'
})

export class LogoutComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';
    test = false;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
        this.router.navigate(['/']);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/']);
    }
}
