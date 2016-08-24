import { NgModule }      from "@angular/core"; // Importing the NgModule, and *
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent }  from "./app.component";
import { FormsModule } from "@angular/forms";
import { HeroDetailComponent } from "./hero-detail.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }