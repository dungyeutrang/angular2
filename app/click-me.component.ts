import {Component} from '@angular/core';

@Component({
    selector: 'click-me',
    template: `
    <button (click)="onClickMe($event)">Click me!</button>
    {{clickMessage}}
     <input #box (keyup)="0">
     <p>{{box.value}}</p>
  `
})
export class ClickMeComponent {
    clickMessage = '';

    onClickMe(event:any) {
        console.log(event)
        this.clickMessage = 'You are my hero!';
    }
}