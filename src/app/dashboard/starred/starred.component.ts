import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-starred',
  templateUrl: './starred.component.html',
})
export class StarredComponent implements OnInit {

  @Input() starreds;

  public searchText = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }



}
