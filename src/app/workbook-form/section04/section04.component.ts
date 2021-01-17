import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { FormControl } from '@angular/forms';

import { HttpClient } from "@angular/common/http";
import { FetchDataService } from '../services/fetch-data.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-section04',
  templateUrl: './section04.component.html',
  styleUrls: ['./section04.component.scss']
})

export class Section04Component implements OnInit {

  dataStore: any;
  mdStore: string[] = [];

  other1 = new FormControl('');
  other2 = new FormControl('');
  other3 = new FormControl('');
  other4 = new FormControl('');

  master_checked: boolean = false;
  master_indeterminate: boolean = false;
  cbl1 = [];
  cbl2 = [];
  cbl4 = [];
  rad1 = [
    { name: "Use visual reminders e.g. visual list of what needs to go into my school bag", selected: null, id: "0", rating: ['Currently use', 'Have not tried yet'] },
    { name: "Use day or week planners to show what I have happening in my life", selected: null, id: "1", rating: ['Currently use', 'Have not tried yet'] },
    { name: "Give one instruction at a time ", selected: null, id: "2", rating: ['Currently use', 'Have not tried yet'] },
    { name: "Practice (generalise) what I learn in all environments in which I spend a lot of time ", selected: null, id: "3", rating: ['Currently use', 'Have not tried yet'] },
    { name: "Practice (generalise) what I learn with all people in my life", selected: null, id: "4", rating: ['Currently use', 'Have not tried yet'] },
    { name: "Use timers to signal end of tasks/activities", selected: null, id: "5", rating: ['Currently use', 'Have not tried yet'] },
    // Other
  ];

  constructor(private http: HttpClient, private fetchDataService: FetchDataService) {

    this.cbl1 = [
      // Thanks: https://www.freakyjolly.com/angular-material-check-uncheck-checkbox-list-with-indeterminate-state-using-matcheckboxmodule/
      { name: "I understand visual information better than verbal information i.e. I need to see information rather than hear it", checked: false },
      { name: "I notice lots of details but find it difficult to see the bigger picture ", checked: false },
      { name: "I have a good long-term memory i.e. remember many facts and events from the past", checked: false },
      { name: "I have difficulties with my working memory i.e. I have trouble remembering what I need to do next", checked: false },
      { name: "I find being organised tricky i.e. remembering all my things", checked: false },
      { name: "I am good at using skills in the environment I learned them, in but find it hard to use these skills in new environments  ", checked: false },
      { name: "I can do certain things well and easily but find other things hard  ", checked: false },
      { name: "I am inconsistent at skills/tasks e.g. may do an activity by myself one day, but I need help the next day", checked: false },
      // Other
    ],
      this.cbl2 = [
        // Thanks: https://www.freakyjolly.com/angular-material-check-uncheck-checkbox-list-with-indeterminate-state-using-matcheckboxmodule/
        { name: "I remember lots of things that my family forget ", checked: false },
        { name: "It is hard to get me to stop an activity I love ", checked: false },
      { name: "It is hard to get me to do things I do not care about e.g. brushing teeth", checked: false },
        { name: "I can be unorganised, so sometimes/frequently I cannot find things, or I forget things ", checked: false },
        { name: "I follow instructions and complete tasks for one person but not another e.g. I brush my teeth at my house but not at Nanna’s house ", checked: false },
        { name: "We often need to deal with unexpected issues as my abilities and needs change regularly ", checked: false },
        // Other
      ],
      this.cbl4 = [
        // Thanks: https://www.freakyjolly.com/angular-material-check-uncheck-checkbox-list-with-indeterminate-state-using-matcheckboxmodule/
        { name: "Parents", checked: false },
        { name: "Other family members", checked: false },
        { name: "Educators (childcare/kindergarten/school)", checked: false },
        { name: "Developmental educators", checked: false },
        { name: "Occupational Therapists", checked: false },
        { name: "Speech Pathologists", checked: false },
        { name: "Behaviour practitioners", checked: false },
        { name: "Psychologists", checked: false },
        { name: "Coaches e.g. swimming coach, gymnastic coach", checked: false },
        { name: "Therapists", checked: false },
        { name: "Other. Please add ...", checked: false },
      ]
  }

  ngOnInit(): void {
    this.fetchMarkDownContent();
    this.getLocalStorage();
    this.setLocalStorage();
  }
  setLocalStorage() {
    this.other1.valueChanges.subscribe(other1_input_value => {
      localStorage.setItem("s4_other1_input_value", other1_input_value);
    });
    this.other2.valueChanges.subscribe(other2_input_value => {
      localStorage.setItem("s4_other2_input_value", other2_input_value);
    });
    this.other3.valueChanges.subscribe(other3_input_value => {
      localStorage.setItem("s4_other3_input_value", other3_input_value);
    });
    this.other4.valueChanges.subscribe(other4_input_value => {
      localStorage.setItem("s4_other4_input_value", other4_input_value);
    });
  }

  getLocalStorage() {
    if (localStorage.length > 0) {
      this.other1.setValue(localStorage.getItem("s4_other1_input_value"));
      this.other2.setValue(localStorage.getItem("s4_other2_input_value"));
      this.other3.setValue(localStorage.getItem("s4_other3_input_value"));
      this.other4.setValue(localStorage.getItem("s4_other4_input_value"));
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

  radioChange(event: MatRadioChange, data) {
    var obj = this.rad1.filter(x => x.id == data.id)[0];
    obj.selected = event.value;
  }

  master_change() {
    for (let value of Object.values(this.cbl1)) {
      value.checked = this.master_checked;
    }
  }

  list_change() {
    let checked_count = 0;
    //Get total checked items
    for (let value of Object.values(this.cbl1)) {
      if (value.checked)
        checked_count++;
    }

    if (checked_count > 0 && checked_count < this.cbl1.length) {
      // If some checkboxes are checked but not all; then set Indeterminate state of the master to true.
      this.master_indeterminate = true;
    } else if (checked_count == this.cbl1.length) {
      //If checked count is equal to total items; then check the master checkbox and also set Indeterminate state to false.
      this.master_indeterminate = false;
      this.master_checked = true;
    } else {
      //If none of the checkboxes in the list is checked then uncheck master also set Indeterminate to false.
      this.master_indeterminate = false;
      this.master_checked = false;
    }
  }

}
