import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public reposSelected = true;

  public starredSelected = false;

  public numeroRepos;

  public repositories;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
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
      console.log(this.repositories);
    });
  }

  recebeNumeroRepos(repos) {
    console.log('repos', repos);
    this.numeroRepos = repos;
  }

}
