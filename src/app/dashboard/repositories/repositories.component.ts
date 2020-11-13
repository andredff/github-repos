import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Repositorie } from '../models/repositorie';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
})
export class RepositoriesComponent implements OnInit {

  @Output() numeroRepositorios: EventEmitter<any> = new EventEmitter();

  public repositories;

  public searchText = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.getRepos();
  }

  getRepos() {
    this.userService.getRepositories().subscribe(repos => {
      this.repositories = repos;
      console.log(this.repositories);
      this.numeroRepositorios.emit(this.repositories.length)
    });
  }


}
