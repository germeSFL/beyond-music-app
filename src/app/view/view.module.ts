import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { WrapperComponent } from './wrapper/wrapper.component';
import { MenuComponent } from './wrapper/menu/menu.component';
import { PlayerComponent } from './wrapper/player/player.component';
import { ExploreComponent } from './wrapper/explore/explore.component';
import { SearchbarComponent } from './wrapper/searchbar/searchbar.component';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        WrapperComponent,
        MenuComponent,
        PlayerComponent,
        ExploreComponent,
        SearchbarComponent
    ],
    exports: [
        WrapperComponent,
        MenuComponent,
        PlayerComponent,
        ExploreComponent,
        SearchbarComponent
    ]
  })

  export class ViewModule { }