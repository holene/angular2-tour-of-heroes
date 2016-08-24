// One or more import statements to reference the things we need. Whatever that may be...
import { Component  } from '@angular/core';
import { Hero } from "./hero";
/* Angular apps are modular. When we need something from a module or a library, we import it. Here we import the Angular 2 core, so that our component code can have access to the @Component decorator. Component is a decorator function that takes a metadata object as argument. The function is applied to the component class by prefixing the function with the @ symbol and invoking it with a metadata object, just above the class (AppComponent).
*/

// Creating HEROES, an array of type Hero
const HEROES: Hero[] = [
    {id: 11, name: 'Mr. Nice'},
    {id: 12, name: 'Narco'},
    {id: 13, name: 'Bombasto'},
    {id: 14, name: 'Celeritas'},
    {id: 15, name: 'Nagbeta'},
    {id: 16, name: 'Rubberman'},
    {id: 17, name: 'Dynama'},
    {id: 18, name: 'Dr. IQ'},
    {id: 19, name: 'Magma'},
    {id: 20, name: 'Tornado'},
];

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>My Heroes</h2>
        <ul class="heroes">
            <li *ngFor="let hero of heroes"
                [class.selected]="hero === selectedHero"
                (click)="onSelect(hero)">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
        <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `,
    styles: [`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }
        .heroes {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 15em;
        }
        .heroes li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0;
            height: 1.5em;
            border-radius: 4px;
        }
        .heroes li:hover {
            color: #607D8B;
            background-color: #DDD;
            left: .1em;
        }
        .heroes .text {
            position: relative;
            top: -3px;
        }
        .heroes .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0 0 4px;
        }
    `]
})
/* @Component allows us to associate metadata with the component class. The metadata tells Angular how to create and use this component. This particular metadata object has two fields: a selector and a template.

The selector specifies a simple CSS selector for an HTML element that represents the component. Angular creates and displays an instance of our AppComponent wherever it encounters a my-app element in the host HTML.

The template specifies the component's companion template, written in an enhanced form of HTML that tells Angular  how to render this component's view. Our template is a single line of HTML announcing "My First Angular 2 App". A more advanced template could contain data bindings to component properties and might identify other application components which have their own templates, and so on. In this way an Angular application becomes a tree of components.
*/


// A component class that controls the appearance and behaviour of a view through its template
export class AppComponent {
    title = 'Tour of Heroes';
    heroes = HEROES;
    selectedHero: Hero;
    onSelect(hero: Hero): void{
        this.selectedHero = hero;
    }
}