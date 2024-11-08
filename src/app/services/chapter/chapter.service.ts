import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  constructor(private http: HttpClient) { }

  configureHeaders(): { headers: HttpHeaders } {
    const headerDict = {
      'Authorization': `Beare ${environment.apikey}`,
      'Content-Type': 'application/json'
    };

    return { headers: new HttpHeaders(headerDict) };
  }

  getChapter():Observable<any> {
    return this.http.get("https://the-one-api.dev/v2/chapter",this.configureHeaders());
  }
}
