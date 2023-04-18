import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from 'src/app/model/team/team';

@Injectable({
  providedIn: 'root'
})

export class TeamService {
  //private team: Team[];
  //Todo lo de la clase es nuevo
  constructor(private http: HttpClient) { }

  private userUrl = 'http://localhost:8081/user-portal/users';

  //returns an Observable of User[]
  public getUsers() {
    return this.http.get<Team[]>(this.userUrl);
  }

  //http://localhost:8080/user-portal/users/5
  public deleteUser(user: Team) {
    return this.http.delete(this.userUrl + "/" + user.id);
  }

  public createUser(user: Team) {
    return this.http.post<Team>(this.userUrl, user);
  }

}
