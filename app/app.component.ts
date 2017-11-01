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

    constructor() {}

    ngOnInit() {
        
    }
}