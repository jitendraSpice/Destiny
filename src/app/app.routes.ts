import { Routes } from '@angular/router';
import { ContactComponent } from './home/contact/contact.component';
import { AboutUsComponent } from './home/about-us/about-us.component';

export const routes: Routes = [
    {path: '', loadChildren: () => import('./home/home.routes').then(mod => mod.routes)},
    {path:'contact', component: ContactComponent},
    {path:'about', component: AboutUsComponent}
];
