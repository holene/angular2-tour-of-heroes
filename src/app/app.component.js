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
/* Angular apps are modular. When we need something from a module or a library, we import it. Here we import the Angular 2 core, so that our component code can have access to the @Component decorator. Component is a decorator function that takes a metadata object as argument. The function is applied to the component class by prefixing the function with the @ symbol and invoking it with a metadata object, just above the class (AppComponent).
*/
// @Component decorator that tells Angular what template to use and how to create the component.
var Hero = (function () {
    function Hero() {
    }
    Hero = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Hero);
    return Hero;
}());
exports.Hero = Hero;
// Creating HEROES, an array of type Hero
var HEROES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Nagbeta' },
    { id: 16, name: 'Rubberman' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr. IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' },
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1>{{title}}</h1>\n        <h2>My Heroes</h2>\n        <ul class=\"heroes\">\n            <li *ngFor=\"let hero of heroes\"\n                [class.selected]=\"hero === selectedHero\"\n                (click)=\"onSelect(hero)\">\n                <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n            </li>\n        </ul>\n        <div *ngIf=\"selectedHero\">\n            <h2>{{selectedHero.name}} details!</h2>\n            <div><label>id: </label>{{selectedHero.id}}</div>\n            <div>\n                <label>name: </label>\n                <input [(ngModel)]=\"selectedHero.name\" placeholder=\"name\"/>\n            </div>\n        </div>\n    ",
            styles: ["\n        .selected {\n            background-color: #CFD8DC !important;\n            color: white;\n        }\n        .heroes {\n            margin: 0 0 2em 0;\n            list-style-type: none;\n            padding: 0;\n            width: 15em;\n        }\n        .heroes li {\n            cursor: pointer;\n            position: relative;\n            left: 0;\n            background-color: #EEE;\n            margin: .5em;\n            padding: .3em 0;\n            height: 1.5em;\n            border-radius: 4px;\n        }\n        .heroes li:hover {\n            color: #607D8B;\n            background-color: #DDD;\n            left: .1em;\n        }\n        .heroes .text {\n            position: relative;\n            top: -3px;\n        }\n        .heroes .badge {\n            display: inline-block;\n            font-size: small;\n            color: white;\n            padding: 0.8em 0.7em 0 0.7em;\n            background-color: #607D8B;\n            line-height: 1em;\n            position: relative;\n            left: -1px;\n            top: -4px;\n            height: 1.8em;\n            margin-right: .8em;\n            border-radius: 4px 0 0 4px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map