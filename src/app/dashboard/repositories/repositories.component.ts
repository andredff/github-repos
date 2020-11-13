import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Repositorie } from '../models/repositorie';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
})
export class RepositoriesComponent implements OnInit {

  @Output() numeroRepositorios: EventEmitter<any> = new EventEmitter();

  @Input() repositories: any;

  public searchText = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
