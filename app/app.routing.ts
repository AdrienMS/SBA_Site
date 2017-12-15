import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { LogoutComponent } from './logout/index';
import { HomeComponent } from './home/index';
import { AuthGuard } from './_guards/index';
import { ShopComponent } from './shop/index';
import { SmithyComponent } from './smithy/index';
import { RegisterComponent } from './register/index';
import { ProfilComponent } from './profil/index';
import { AboutComponent } from './about/index';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profil', component: ProfilComponent },
    { path: '', component: HomeComponent },
    { path: 'shop',    component: ShopComponent, canActivate: [AuthGuard] },
    { path: 'smithy',    component: SmithyComponent, canActivate: [AuthGuard] },
    { path: 'about',    component: AboutComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);