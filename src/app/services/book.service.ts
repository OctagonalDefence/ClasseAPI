import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookApi } from '../classes/interface/book/book.api';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks():Observable<BookApi> {
    return this.http.get<BookApi>("https://the-one-api.dev/v2/book");
  }
}
