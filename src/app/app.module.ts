import { NgModule }      from "@angular/core"; // Importing the NgModule, and *
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent }  from "./app.component";
import { FormsModule } from "@angular/forms";

// @NgModule({ // * use it here to declare other shit, thus giving our class AppModule
//     imports:        [ BrowserModule ],
//     declarations:   [ AppComponent ],
//     bootstrap:      [ AppComponent ],
// })
/* Imports: the other modules that export material we need in this module. Almost every application's root module should import the BrowserModule.
    Declarations - components and directives that belong to this module.
    bootstrap - identifies the root component that Angular should bootstrap when it starts the application.

    Basically, we import our lone app.components.ts (import {AppComponent} from "./app.component"(.ts)) and add it to both the declarations and bootstrap arrays.

    We also add the BrowserModule from @angular/platform-browser to the "imports" array. This is the Angular Module that contains all the needed Angular bits and pieces to run our app in the browser.

    The most common modules are FormsModule, RouterModule and HttpModule.
 */

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }