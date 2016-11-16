import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
// component
import { HeroFormComponent } from './hero-form.component';
import { AppComponent }   from './app.component';
import { ClickMeComponent }   from './click-me.component';
@NgModule({
    imports:      [ BrowserModule,FormsModule ],
    declarations: [ AppComponent,ClickMeComponent,HeroFormComponent],
    exports:      [ AppComponent ],
    bootstrap:    [ AppComponent]
})
export class AppModule { }