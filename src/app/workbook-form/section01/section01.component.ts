import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpClient } from "@angular/common/http";
import { FetchDataService } from '../services/fetch-data.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-section01',
  templateUrl: './section01.component.html',
  styleUrls: ['./section01.component.scss']
})
export class Section01Component implements OnInit {

  dataStore: any;
  mdStore: string[] = [];
  localStore: any;

  // Initialise Form Data Fields

  questions: any = [
    "q1",
    "q2",
    "q3",
    "q4",
    "q5",
    "q6",
    "q7",
    "q8"
  ];
  q1 = new FormControl('');
  q2 = new FormControl('');
  q3 = new FormControl('');
  q4 = new FormControl('');
  q5 = new FormControl('');
  q6 = new FormControl('');
  q7 = new FormControl('');
  q8 = new FormControl('');

  constructor(private http: HttpClient, private fetchDataService: FetchDataService) { }

  ngOnInit(): void {
    this.fetchMarkDownContent();
    this.getLocalStorage();
    this.setLocalStorage();
  }

  getLocalStorage() {
    this.q1.valueChanges.subscribe(q1_input_value => {
      localStorage.setItem("s0_q1_input_value", q1_input_value);
    });
    this.q2.valueChanges.subscribe(q2_input_value => {
      localStorage.setItem("s0_q2_input_value", q2_input_value);
    });
    this.q3.valueChanges.subscribe(q3_input_value => {
      localStorage.setItem("s0_q3_input_value", q3_input_value);
    });
    this.q4.valueChanges.subscribe(q4_input_value => {
      localStorage.setItem("s0_q4_input_value", q4_input_value);
    });
    this.q5.valueChanges.subscribe(q5_input_value => {
      localStorage.setItem("s0_q5_input_value", q5_input_value);
    });
    this.q6.valueChanges.subscribe(q6_input_value => {
      localStorage.setItem("s0_q6_input_value", q6_input_value);
    });
    this.q7.valueChanges.subscribe(q7_input_value => {
      localStorage.setItem("s0_q7_input_value", q7_input_value);
    });
    this.q8.valueChanges.subscribe(q8_input_value => {
      localStorage.setItem("s0_q8_input_value", q8_input_value);
    });
  }

  setLocalStorage() {
    if (localStorage.length > 0) {
      // don't display if value = null
      if (localStorage.s0_q1_input_value) {
      this.q1.setValue(localStorage.getItem("s0_q1_input_value"));
      }
      if (localStorage.s0_q2_input_value) {
      this.q2.setValue(localStorage.getItem("s0_q2_input_value"));
      }
      if (localStorage.s0_q3_input_value) {
      this.q3.setValue(localStorage.getItem("s0_q3_input_value"));
      }
      if (localStorage.s0_q4_input_value) {
      this.q4.setValue(localStorage.getItem("s0_q4_input_value"));
      }
      if (localStorage.s0_q5_input_value) {
      this.q5.setValue(localStorage.getItem("s0_q5_input_value"));
      }
      if (localStorage.s0_q6_input_value) {
      this.q6.setValue(localStorage.getItem("s0_q6_input_value"));
      }
      if (localStorage.s0_q7_input_value) {
      this.q7.setValue(localStorage.getItem("s0_q7_input_value"));
      }
      if (localStorage.s0_q8_input_value) {
      this.q8.setValue(localStorage.getItem("s0_q8_input_value"));
    }
  }
  }

  fetchMarkDownContent() {
    // Subscribe to FetchDataService
    this.fetchDataService.requestDataFromMultipleSources().subscribe(responseList => {
      for (let i = 0; i < this.fetchDataService.fileCounter; i++) {
        this.mdStore[i] = responseList[i];
      }
    });
  }

}
