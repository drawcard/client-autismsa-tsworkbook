import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  httpObject: any = [];

  dataURL = 'https://thespectrum.org.au/myautism/assets/parser.php?callback';

  constructor(private http: HttpClient) {
    this.fetchData();
  }

  fetchData() {
    this.http.jsonp(this.dataURL, 'callback')
      .pipe(
        // catchError(this.handleError('jsonpTest', 'ERROR')),
      ).subscribe(returnedData => {
        // console.table('data: ' + JSON.stringify(data));
        this.httpObject = returnedData;
        console.table(this.httpObject);
      },
        (error) => {
          // If the dataURL is inaccessible, display this error message
          window.alert('A connection error has occurred. Please contact the web administrator.')
        }
      );
  }

}
