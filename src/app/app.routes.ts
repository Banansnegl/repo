/* Barrels start */
import { Routes } from '@angular/router';
/* Barrels end */
import { AppComponent } from './app.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: AppComponent }
]