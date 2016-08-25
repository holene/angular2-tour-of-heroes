/**
 * Created by holenaxe on 24.08.2016.
 */

import { Injectable } from "@angular/core";

import { Hero } from "./hero";
import { Http, Headers, Response } from "@angular/http";

import 'rxjs/add/operator/toPromise';
// import 'rxjs';

@Injectable()
export class HeroService {
    private heroesUrl = 'app/heroes';

    constructor(private http: Http) {}

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }
    // getHeroesSlowly(): Promise<Hero[]>  {
    //     return new Promise<Hero[]>(resolve =>
    //     setTimeout(() => resolve(HEROES), 2000)
    //     );
    // }
    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    private post(hero: Hero): Promise<Hero> {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    private put(hero: Hero): Promise<Hero> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.heroesUrl}/${hero.id}`;

        return this.http
            .put(url, JSON.stringify(hero), {headers: headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }
    delete(hero: Hero): Promise<Response> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.heroesUrl}/${hero.id}`;

        return this.http
            .delete(url, {headers: headers})
            .toPromise()
            .catch(this.handleError);
    }
    save(hero: Hero): Promise<Hero> {
        if (hero.id) {
            return this.put(hero);
        }
        return this.post(hero);
    }

    // Error handling function used in getHeroes()
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
