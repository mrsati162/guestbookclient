import { Component, OnInit } from '@angular/core';
import {APIService} from '../services/api.service';
import {GuestBook} from '../dataobjects/GuestBook';

@Component({
  selector: 'app-guestbook',
  templateUrl: './guestbook.component.html',
  styleUrls: ['./guestbook.component.css']
})
export class GuestbookComponent implements OnInit {

  constructor( private apiService: APIService) { }

  public guestBookArray:  Array<GuestBook> = [];

  ngOnInit() {
    this.getData();
  }

  private getData(){
    this.apiService.getAll().subscribe((data:  Array<GuestBook>) => {
      this.guestBookArray  =  data;
    });
  }
}
