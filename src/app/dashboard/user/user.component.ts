import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {

  public reposSelected = true;

  public starredSelected = false;

  public numeroRepos: any;

  public numeroFavoritos: any;

  public repositories: any;

  public starreds: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getStarreds();
    this.getRepos();
  }

  showRepos() {
    this.reposSelected = true;
    this.starredSelected = false;
  }

  showStarred() {
    this.starredSelected = true;
    this.reposSelected = false;
  }

  getRepos() {
    this.userService.getRepositories().subscribe(repos => {
      this.repositories = repos;
      this.numeroRepos = this.repositories.length;
    });
  }

  getStarreds() {
    this.userService.getStarred().subscribe(starred => {
      this.starreds = starred;
      this.numeroFavoritos = this.starreds.length;
    });
  }

}
