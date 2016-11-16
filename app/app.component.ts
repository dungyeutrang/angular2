import {Component} from '@angular/core';
import {Hero} from './hero';
import { ClickMeComponent }   from './click-me.component';
@Component({
    selector: 'my-app',
    template: `    
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero.name}}</h2>
    <p  (click)="onClickMe()">Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
         {{ hero.name }}
      </li>
    </ul>
    <p *ngIf="heroes.length > 3">There are many heroes!</p>
    <click-me></click-me>
    <hero-form></hero-form>
  `
})
export class AppComponent{
    title = 'Tour of Heroes';
    heroes = [
        new Hero(1, 'Windstorm','ff','1'),

    ];
    myHero = this.heroes[0];
    onClickMe() {
        alert('You are my hero!');
    }
}
