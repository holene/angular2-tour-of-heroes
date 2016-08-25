import {Component, Input, OnInit, EventEmitter, Output} from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Hero } from "./hero";
import { HeroService } from "./hero.service";

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{
    @Input() hero: Hero;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.route.params.forEach((params:Params) => {
            if (params['id'] !== undefined) {
                let id = +params['id'] ;
                this.navigated = true;
                this.heroService.getHero(id)
                    .then(hero => this.hero = hero);
            } else
            {
                this.navigated = false;
                this.hero = new Hero();
            }
        });
    }

    save(): void {
        this.heroService
            .save(this.hero)
            .then(hero => {
                this.hero = hero; // saved hero, w/ id if new
                this.goBack(hero);
            })
            .catch(error => this.error = error); // TODO: display error message
    }

    goBack(savedHero: Hero = null): void {
        this.close.emit(savedHero);
        if (this.navigated) {
            window.history.back();
        }
    }
        // goBack(): void {
        //     window.history.back();
        //     // Going back too far could take us out of the application. In a real application we'd guard against it, perhaps with the CanDeactivate guard.
}