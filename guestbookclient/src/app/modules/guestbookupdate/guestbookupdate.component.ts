import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GuestBook} from '../dataobjects/GuestBook';
import {APIService} from '../services/api.service';

@Component({
  selector: 'app-guestbookupdate',
  templateUrl: './guestbookupdate.component.html',
  styleUrls: ['./guestbookupdate.component.css']
})
export class GuestbookupdateComponent implements OnInit {

  id: number;
  guestBook: GuestBook;

  constructor(private route: ActivatedRoute, private apiService: APIService, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log("id:                "+this.id);
      this.apiService.get(this.id).subscribe((data:  GuestBook) => {
        this.guestBook = data;
        console.log(this.guestBook);
      })
    });
  }

  onSubmit(){
     console.log(JSON.stringify(this.guestBook));
    this.apiService.update(JSON.stringify(this.guestBook)).subscribe((data:  GuestBook) => {
      this.router.navigate(['/getall']);
    });
  }

}
