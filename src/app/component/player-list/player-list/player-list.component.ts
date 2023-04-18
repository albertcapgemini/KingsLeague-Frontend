import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/app/model/player/player';
import { PlayerService } from 'src/app/service/player/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent {
  player: Player[] = [];

  constructor(private router: Router, private playerService: PlayerService){}

  ngOnInit(): void {
    this.playerService.getPlayer()
      .subscribe(data => {
        this.player = data;
      });
  };
  deletePlayer(player: Player): void {
    this.playerService.deletePlayer(player)
      .subscribe(data => {
        this.player = this.player.filter(u => u !== player);
      })
  };
  editPlayer(player: Player): void {
    this.playerService.editPlayer(player)
      .subscribe(data => {
        this.player = this.player
      })
  };
}
