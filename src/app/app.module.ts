import { NgModule }      from "@angular/core"; // Importing the NgModule, and *
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule }   from "@angular/forms";
import { HttpModule, XHRBackend }    from "@angular/http";

import { InMemoryBackendService, SEED_DATA } from "angular2-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service"

import { AppComponent } from "./app.component";
import { routing }      from "./app.routing";

import { HeroesComponent }      from "./heroes.component";
import { HeroDetailComponent }  from "./hero-detail.component";
import { HeroService }          from "./hero.service";
import { DashboardComponent }   from "./dashboard.component";
import { HeroSearchComponent } from "./hero-search.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroSearchComponent,
    ],
    providers: [
        HeroService,
        { provide: XHRBackend, useClass: InMemoryBackendService}, // in-mem server
        { provide: SEED_DATA,  useClass: InMemoryDataService}     // in-mem server data
    ],
    bootstrap: [ AppComponent ],
})

export class AppModule {

}