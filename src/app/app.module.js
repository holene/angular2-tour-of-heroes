"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core"); // Importing the NgModule, and *
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var hero_detail_component_1 = require("./hero-detail.component");
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
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                hero_detail_component_1.HeroDetailComponent,
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map