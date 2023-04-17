import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerListComponent } from './component/player-list/player-list/player-list.component';
import { PlayerAddComponent } from './component/player-add/player-add/player-add.component';

const routes: Routes = [
  { 
    path: 'player/list', 
    component:  PlayerListComponent
  },
  { 
    path: 'player/add', 
    component: PlayerAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
