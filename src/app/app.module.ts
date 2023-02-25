import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './view/wrapper/menu/menu.component';
import { PlayerComponent } from './view/wrapper/player/player.component';
import { ExploreComponent } from './view/wrapper/explore/explore.component';
import { SearchbarComponent } from './view/wrapper/searchbar/searchbar.component';
import { WrapperComponent } from './view/wrapper/wrapper.component';

NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PlayerComponent,
    ExploreComponent,
    SearchbarComponent,
    WrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
