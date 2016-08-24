import { NgModule }      from "@angular/core"; // Importing the NgModule, and *
import { BrowserModule } from "@angular/platform-browser";
import { HeroesComponent }  from "./heroes.component";
import { FormsModule } from "@angular/forms";
import { HeroDetailComponent } from "./hero-detail.component";
import { AppComponent } from "./app.component";
import { HeroService } from "./hero.service";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
    ],
    bootstrap: [ AppComponent ],
    providers: [ HeroService ],
})

export class AppModule { }