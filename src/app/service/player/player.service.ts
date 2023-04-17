import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from 'src/app/model/player/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http:HttpClient) { }

  private apiUrl = 'http://localhost:8081/player';

  public getPlayer() {
    return this.http.get<Player[]>(this.apiUrl);
  }

  //http://localhost:8080/user-portal/Player/5
  public deletePlayer(player:Player) {
    return this.http.delete(this.apiUrl + "/"+ player.id);
  }

  public createPlayer(player:Player) {
    return this.http.post<Player>(this.apiUrl + "/add", player);
  }
}
