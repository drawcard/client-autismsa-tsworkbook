import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import ContentFilePaths from "../../../assets/content/content-filepaths.json";

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  // Initialise payload
  private jsonObject = ContentFilePaths;

  // Create an observable for the payload
  private payload = new BehaviorSubject<any>(this.jsonObject);

  // Data object exposed in this service
  dataStream = this.payload.asObservable();


  constructor(private http: HttpClient) {

  }



}
