// One or more import statements to reference the things we need. Whatever that may be...
import { Component, OnInit } from '@angular/core';

import { Hero } from "./hero";
import { HeroService } from "./hero.service";
import { Router } from "@angular/router";

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    providers: [],
})

// A component class that controls the appearance and behaviour of a view through its template
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private router: Router,
        private heroService: HeroService,
    ) {}

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit(): void{
        this.getHeroes();
    }
    onSelect(hero: Hero): void{
        this.selectedHero = hero;
    }
    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
    addHero(): void{
        this.addingHero = true;
        this.selectedHero = null;
    }
    close(savedHero: Hero): void {
        this.addingHero = false;
        if(savedHero){this.getHeroes();}
    }
    deleteHero(hero: Hero, event: any): void {
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(res => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if(this.selectedHero === hero) {this.selectedHero = null;}
            })
            .catch(error => this.error = error);
    }
}