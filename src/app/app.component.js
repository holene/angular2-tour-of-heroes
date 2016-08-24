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
// One or more import statements to reference the things we need. Whatever that may be...
var core_1 = require('@angular/core');
/* Angular apps are modular. When we need something from a module or a library, we import it. Here we import the Angular
2 core, so that our component code can have access to the @Component decorator. Component is a decorator function
that takes a metadata object as argument. The function is applied to
the component class by prefixing the function with the @ suymbol and invoking it with a metadata oibject, just
above the class (AppComponent).
*/
// @Component decorator that tells Angular what template to use and how to create the component.
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<h1>My Second Angular 2 App</h1>'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/* This is an empty do nothing class named AppComponent. When we're ready to build a substantive application, we can
 expand this class with properties and application logic. Our AppComponent class is empty because we don't need it
  to do anything in this QuickStart. We export it so that we can import it elsewhere in our application, as in
   app.module.ts.
 */ 
//# sourceMappingURL=app.component.js.map