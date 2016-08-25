/**
 * Created by holenaxe on 25.08.2016.
 */

import { Routes, RouterModule } from "@angular/router";
import { HeroesComponent } from "./heroes.component";
import { DashboardComponent } from "./dashboard.component";
import { HeroDetailComponent } from "./hero-detail.component";

const appRoutes: Routes =  [
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
    },
    {
        path: 'detail/:id', // : indicating that id is a placeholder
        component: HeroDetailComponent,
    }
];
/* Array of routes definitions.
path: the router matches this route's path to the URL in the browser address bar (heroes)
component: the component that the router should create when navigating to this route (HeroesComponent)
*/

export const routing = RouterModule.forRoot(appRoutes);