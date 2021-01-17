import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpClient } from "@angular/common/http";
import { FetchDataService } from '../services/fetch-data.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-section07',
  templateUrl: './section07.component.html',
  styleUrls: ['./section07.component.scss']
})
export class Section07Component implements OnInit {

  dataStore: any;
  mdStore: string[] = [];

  // Initialise Form Data Fields
  q1 = new FormControl('');
  q2 = new FormControl('');
  q3 = new FormControl('');
  q4 = new FormControl('');
  q5 = new FormControl('');
  q6 = new FormControl('');

  constructor(private http: HttpClient, private fetchDataService: FetchDataService) {

  }

  ngOnInit(): void {
    this.fetchMarkDownContent();
    this.getLocalStorage();
    this.setLocalStorage();
  }
  setLocalStorage() {
    this.q1.valueChanges.subscribe(q1_input_value => {
      localStorage.setItem("s7_q1_input_value", q1_input_value);
    });
    this.q2.valueChanges.subscribe(q2_input_value => {
      localStorage.setItem("s7_q2_input_value", q2_input_value);
    });
    this.q3.valueChanges.subscribe(q3_input_value => {
      localStorage.setItem("s7_q3_input_value", q3_input_value);
    });
    this.q4.valueChanges.subscribe(q4_input_value => {
      localStorage.setItem("s7_q4_input_value", q4_input_value);
    });
    this.q5.valueChanges.subscribe(q5_input_value => {
      localStorage.setItem("s7_q5_input_value", q5_input_value);
    });
    this.q6.valueChanges.subscribe(q6_input_value => {
      localStorage.setItem("s7_q6_input_value", q6_input_value);
    });
  }

  getLocalStorage() {
    if (localStorage.length > 0) {
      this.q1.setValue(localStorage.getItem("s7_q1_input_value"));
      this.q2.setValue(localStorage.getItem("s7_q2_input_value"));
      this.q3.setValue(localStorage.getItem("s7_q3_input_value"));
      this.q4.setValue(localStorage.getItem("s7_q4_input_value"));
      this.q5.setValue(localStorage.getItem("s7_q5_input_value"));
      this.q6.setValue(localStorage.getItem("s7_q6_input_value"));
    }
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
