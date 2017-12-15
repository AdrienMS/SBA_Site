"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./login/index");
var index_2 = require("./logout/index");
var index_3 = require("./home/index");
var index_4 = require("./_guards/index");
var index_5 = require("./shop/index");
var index_6 = require("./smithy/index");
var index_7 = require("./register/index");
var index_8 = require("./profil/index");
var index_9 = require("./about/index");
var appRoutes = [
    { path: 'login', component: index_1.LoginComponent },
    { path: 'logout', component: index_2.LogoutComponent },
    { path: 'register', component: index_7.RegisterComponent },
    { path: 'profil', component: index_8.ProfilComponent },
    { path: '', component: index_3.HomeComponent },
    { path: 'shop', component: index_5.ShopComponent, canActivate: [index_4.AuthGuard] },
    { path: 'smithy', component: index_6.SmithyComponent, canActivate: [index_4.AuthGuard] },
    { path: 'about', component: index_9.AboutComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map