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
    this.getLocalStorage();
    this.setLocalStorage();
  }
  setLocalStorage() {
    this.q1.valueChanges.subscribe(q1_input_value => {
      localStorage.setItem("s5_q1_input_value", q1_input_value);
    });
    this.q2.valueChanges.subscribe(q2_input_value => {
      localStorage.setItem("s5_q2_input_value", q2_input_value);
    });
    this.q3.valueChanges.subscribe(q3_input_value => {
      localStorage.setItem("s5_q3_input_value", q3_input_value);
    });
    this.q4.valueChanges.subscribe(q4_input_value => {
      localStorage.setItem("s5_q4_input_value", q4_input_value);
    });
    this.q5.valueChanges.subscribe(q5_input_value => {
      localStorage.setItem("s5_q5_input_value", q5_input_value);
    });
    this.q6.valueChanges.subscribe(q6_input_value => {
      localStorage.setItem("s5_q6_input_value", q6_input_value);
    });
    this.q7.valueChanges.subscribe(q7_input_value => {
      localStorage.setItem("s5_q7_input_value", q7_input_value);
    });
    this.q8.valueChanges.subscribe(q8_input_value => {
      localStorage.setItem("s5_q8_input_value", q8_input_value);
    });
    this.q9.valueChanges.subscribe(q9_input_value => {
      localStorage.setItem("s5_q9_input_value", q9_input_value);
    });
    this.q10.valueChanges.subscribe(q10_input_value => {
      localStorage.setItem("s5_q10_input_value", q10_input_value);
    });
    this.q11.valueChanges.subscribe(q11_input_value => {
      localStorage.setItem("s5_q11_input_value", q11_input_value);
    });
    this.q12.valueChanges.subscribe(q12_input_value => {
      localStorage.setItem("s5_q12_input_value", q12_input_value);
    });
  }

  getLocalStorage() {
    if (localStorage.length > 0) {
      this.q1.setValue(localStorage.getItem("s5_q1_input_value"));
      this.q2.setValue(localStorage.getItem("s5_q2_input_value"));
      this.q3.setValue(localStorage.getItem("s5_q3_input_value"));
      this.q4.setValue(localStorage.getItem("s5_q4_input_value"));
      this.q5.setValue(localStorage.getItem("s5_q5_input_value"));
      this.q6.setValue(localStorage.getItem("s5_q6_input_value"));
      this.q7.setValue(localStorage.getItem("s5_q7_input_value"));
      this.q8.setValue(localStorage.getItem("s5_q8_input_value"));
      this.q9.setValue(localStorage.getItem("s5_q9_input_value"));
      this.q10.setValue(localStorage.getItem("s5_q10_input_value"));
      this.q11.setValue(localStorage.getItem("s5_q11_input_value"));
      this.q12.setValue(localStorage.getItem("s5_q12_input_value"));
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
