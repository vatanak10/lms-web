import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  author: any[] = [];

  constructor(private http: HttpClient) { }

  refreshItemList = new EventEmitter();

  getAllAuthors(){
    return this.http.get('http://54.255.235.62:9093/lmsapi/author');
  }
}
