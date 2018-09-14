import { Component, OnInit } from '@angular/core';
import {APIService} from '../services/api.service';
import {Router} from '@angular/router';
import {GuestBook} from '../dataobjects/GuestBook';

@Component({
  selector: 'app-guestbookcreate',
  templateUrl: './guestbookcreate.component.html',
  styleUrls: ['./guestbookcreate.component.css']
})
export class GuestbookcreateComponent implements OnInit {

  constructor( private apiService: APIService, private router: Router) { }

  model: any = {};
  modelStr: string = '';


  ngOnInit() {
  }

  onSubmit(){
    // this.modelStr = JSON.stringify(this.model);
    // console.log(this.modelStr);
    this.apiService.save(JSON.stringify(this.model)).subscribe((data:  GuestBook) => {
      this.router.navigate(['/getall']);
    });
  }
}
