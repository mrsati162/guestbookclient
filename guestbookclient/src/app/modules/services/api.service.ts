import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private  httpClient:  HttpClient) { }
  API_URL  =   'http://localhost:8080'; // 'http://10.181.138.62:8090/datavalidation-service';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  getAll(){
    return this.httpClient.get(`${this.API_URL}/guestbook`,this.httpOptions);
  }

  save(guestbook){
    return this.httpClient.post(`${this.API_URL}/guestbook`, guestbook, this.httpOptions);
  }

  get(id){
    return this.httpClient.get(`${this.API_URL}/guestbook/get?id=${id}`,this.httpOptions);
  }

  update(guestbook){
    return this.httpClient.put(`${this.API_URL}/guestbook`, guestbook, this.httpOptions);
  }

 /* getValidationData(value) {
    return this.httpClient.get(`${this.API_URL}/eptValidation?eptDataVal=${value}`, this.httpOptions);
  }

  changeValidationStatus(dataValidation) {
    return this.httpClient.put<DataValidation>(`${this.API_URL}/eptChangeStatus`, JSON.stringify(dataValidation), this.httpOptions);
  }

  getPaginationData(tableParam, page, size) {
    return this.httpClient.get(`${this.API_URL}/${tableParam}?page=${page}&size=${size}`, this.httpOptions);
  }*/
}
