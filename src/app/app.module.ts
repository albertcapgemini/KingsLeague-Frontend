import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerAddComponent } from './component/player-add/player-add/player-add.component';
import { PlayerListComponent } from './component/player-list/player-list/player-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { PlayerService } from './service/player/player.service';
import { TeamService } from './service/team/team.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayerAddComponent,
    PlayerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PlayerService,TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
