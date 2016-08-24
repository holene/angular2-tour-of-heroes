/**
 * Created by holenaxe on 24.08.2016.
 */

import { Injectable } from "@angular/core";

import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";

@Injectable()
export class HeroService {
    getHeroes(): Hero[] {
        return HEROES;
    // getHeroes(): Promise<Hero[]> {
    //     return Promise.resolve(HEROES);
    }
}