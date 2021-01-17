import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { FormControl } from '@angular/forms';

import { HttpClient } from "@angular/common/http";
import { FetchDataService } from '../services/fetch-data.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-section03',
  templateUrl: './section03.component.html',
  styleUrls: ['./section03.component.scss']
})
export class Section03Component implements OnInit {

  dataStore: any;
  mdStore: string[] = [];

  other1 = new FormControl('');
  other2 = new FormControl('');
  other3 = new FormControl('');
  other4 = new FormControl('');

  cbl1 = [];
  cbl2 = [];
  cbl4 = [];
  rad1 = [
    { name: "I need a visual support to provide warning of what is next", selected: null, id: "0", rating: ['Currently use', 'Have not tried yet'] },
    { name: "Use a visual support to provide warning of unexpected changes", selected: null, id: "1", rating: ['Currently use', 'Have not tried yet'] },
    { name: "Create and follow routines for regular tasks e.g. bedtime, dinner time  ", selected: null, id: "2", rating: ['Currently use', 'Have not tried yet'] },
    { name: "Use visual supports to assist completing my routines e.g. a visual schedule of bedtime routine ", selected: null, id: "3", rating: ['Currently use', 'Have not tried yet'] },
    { name: "Reduce sensory input where needed", selected: null, id: "4", rating: ['Currently use', 'Have not tried yet'] },
    { name: "Increase sensory input where needed", selected: null, id: "5", rating: ['Currently use', 'Have not tried yet'] },
    { name: "Provide breaks from difficult tasks e.g. social interactions, chores, learning activities", selected: null, id: "6", rating: ['Currently use', 'Have not tried yet'] },
    { name: "Use what I am passionate about to engage with me ", selected: null, id: "7", rating: ['Currently use', 'Have not tried yet'] },
    { name: "Use a communication book/system between home and other environments that I attend to keep everyone informed and to promote consistency ", selected: null, id: "8", rating: ['Currently use', 'Have not tried yet'] },
    { name: "Use timers to signal end of tasks/activities", selected: null, id: "9", rating: ['Currently use', 'Have not tried yet'] },
    { name: "Use limited choice to help me make decisions e.g. “Do you want red or blue” instead of “What colour do you want?”", selected: null, id: "10", rating: ['Currently use', 'Have not tried yet'] },
    { name: "Break tasks into smaller steps and complete one by one", selected: null, id: "11", rating: ['Currently use', 'Have not tried yet'] },
    // Other
  ];

  constructor(private http: HttpClient, private fetchDataService: FetchDataService) {

    this.cbl1 = [
      // Thanks: https://www.freakyjolly.com/angular-material-check-uncheck-checkbox-list-with-indeterminate-state-using-matcheckboxmodule/
      { name: "I have a strong interest in certain objects or activities ", checked: false },
      { name: "I make repetitive and or unusual body movements e.g. hand flapping, rocking body, walking on tippy toes", checked: false },
      { name: "I like doing one activity over and over again e.g. lining up objects, doing the same puzzle ", checked: false },
      { name: "I like to follow a routine and can get upset by change", checked: false },
      { name: "Other people think that I over react to or avoid certain sounds, tastes, textures, noises, smells, sights and physical feelings ", checked: false },
      { name: "I don’t react to, or, I seek out certain sounds, tastes, textures, noises, smells, sights and physical feelings ", checked: false },
      { name: "I have/had trouble toilet training", checked: false },
      { name: "I stick to a limited diet ", checked: false },
      { name: "I play with toys in a different way to those around me e.g. spin wheels on a car rather than drive the car on the road mat", checked: false },
      { name: "I am really good at talking about my favourite things ", checked: false },
      { name: "I like following rules and can become upset when other people break the rules", checked: false },
      { name: "I enjoy sticking with places and activities I know  ", checked: false },
      // Other
    ],
      this.cbl2 = [
        // Thanks: https://www.freakyjolly.com/angular-material-check-uncheck-checkbox-list-with-indeterminate-state-using-matcheckboxmodule/
        { name: "I am good at following our family rules ", checked: false },
        { name: "As a family we avoid changes to plans, especially last minute changes ", checked: false },
        { name: "We need to be organised and plan our days and weeks carefully ", checked: false },
        { name: "Sometimes it can take me longer to do self-care tasks ", checked: false },
        { name: "Mealtimes can be tricky as we often need to prepare a range of meals to meet everyone’s needs", checked: false },
        { name: "My family need to carefully choose my clothes, toys, food etc as I am very specific about what I like  ", checked: false },
        { name: "My sensory differences often need to be considered when planning family outings e.g. going to restaurants or in busy shopping centers ", checked: false },
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
        // Other
      ]
  }

  ngOnInit(): void {
    this.fetchMarkDownContent();
    this.getLocalStorage();
    this.setLocalStorage();
  }
  setLocalStorage() {
    this.other1.valueChanges.subscribe(other1_input_value => {
      localStorage.setItem("s3_other1_input_value", other1_input_value);
    });
    this.other2.valueChanges.subscribe(other2_input_value => {
      localStorage.setItem("s3_other2_input_value", other2_input_value);
    });
    this.other3.valueChanges.subscribe(other3_input_value => {
      localStorage.setItem("s3_other3_input_value", other3_input_value);
    });
    this.other4.valueChanges.subscribe(other4_input_value => {
      localStorage.setItem("s3_other4_input_value", other4_input_value);
    });
  }

  getLocalStorage() {
    if (localStorage.length > 0) {
      this.other1.setValue(localStorage.getItem("s3_other1_input_value"));
      this.other2.setValue(localStorage.getItem("s3_other2_input_value"));
      this.other3.setValue(localStorage.getItem("s3_other3_input_value"));
      this.other4.setValue(localStorage.getItem("s3_other4_input_value"));
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

  radioChange(event: MatRadioChange, data) {
    var obj = this.rad1.filter(x => x.id == data.id)[0];
    obj.selected = event.value;
  }

  checkboxChange() { }
}
