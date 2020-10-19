import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpClient } from "@angular/common/http";
import { FetchDataService } from '../services/fetch-data.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-section05',
  templateUrl: './section05.component.html',
  styleUrls: ['./section05.component.scss']
})
export class Section05Component implements OnInit {

  dataStore: any;
  mdStore: string[] = [];

  // Initialise Form Data Fields
  q1 = new FormControl('');
  q2 = new FormControl('');
  q3 = new FormControl('');
  q4 = new FormControl('');
  q5 = new FormControl('');
  q6 = new FormControl('');
  q7 = new FormControl('');
  q8 = new FormControl('');
  q9 = new FormControl('');
  q10 = new FormControl('');
  q11 = new FormControl('');
  q12 = new FormControl('');

  constructor(private http: HttpClient, private fetchDataService: FetchDataService) {

  }

  ngOnInit(): void {
    this.fetchMarkDownContent();
  }

  fetchMarkDownContent() {
    // Subscribe to FetchDataService
    this.fetchDataService.requestDataFromMultipleSources().subscribe(responseList => {
      // Store the data to object
      for (let i = 0; i < this.fetchDataService.fileCounter; i++) {
        this.mdStore[i] = responseList[i];
      }
    });
  }

}
