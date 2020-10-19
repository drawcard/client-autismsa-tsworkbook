import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { FetchDataService } from '../services/fetch-data.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-section09',
  templateUrl: './section09.component.html',
  styleUrls: ['./section09.component.scss']
})
export class Section09Component implements OnInit {

  dataStore: any;
  mdStore: string[] = [];

  constructor(private http: HttpClient, private fetchDataService: FetchDataService) {

  }

  ngOnInit(): void {
    this.fetchMarkDownContent();
  }

  fetchMarkDownContent() {    // Subscribe to FetchDataService
    this.fetchDataService.requestDataFromMultipleSources().subscribe(responseList => {
      // Store the data to object
      for (let i = 0; i < this.fetchDataService.fileCounter; i++) {
        this.mdStore[i] = responseList[i];
      }
    });
  }

}
