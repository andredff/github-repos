import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-starred',
  templateUrl: './starred.component.html',
})
export class StarredComponent implements OnInit {

  @Output() numeroFavoritos: EventEmitter<any> = new EventEmitter();


  public starreds;

  public searchText = '';


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getStarreds();
  }

  getStarreds() {
    this.userService.getStarred().subscribe(starred => {
      this.starreds = starred;
      this.numeroFavoritos.emit(this.starreds.length)
    });
  }

}
