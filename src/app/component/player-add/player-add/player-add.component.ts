import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/app/model/player/player';
import { PlayerService } from 'src/app/service/player/player.service';

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.scss']
})
export class PlayerAddComponent {
    
    player: Player = new Player();

    constructor(private router: Router, private playerService: PlayerService){}

    createPlayer(): void {
      this.playerService.createPlayer(this.player)
        .subscribe(data => {
          alert("Usuario generado de forma correcta.");
        });
    };

}
