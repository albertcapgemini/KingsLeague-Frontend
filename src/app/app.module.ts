import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerAddComponent } from './component/player-add/player-add/player-add.component';
import { PlayerListComponent } from './component/player-list/player-list/player-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerAddComponent,
    PlayerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
