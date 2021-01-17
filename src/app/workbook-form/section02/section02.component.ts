import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { FormControl } from '@angular/forms';

import { HttpClient } from "@angular/common/http";
import { FetchDataService } from '../services/fetch-data.service';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-section02',
  templateUrl: './section02.component.html',
  styleUrls: ['./section02.component.scss']
})
export class Section02Component implements OnInit {

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
    { name: "Visual supports e.g. photos, videos, pictures", selected: null, id: "0", rating: ['Currently use', 'Have not tried yet'] },
    { name: "Visual schedules", selected: null, id: "1", rating: ['Currently use', 'Have not tried yet'] },
    { name: "Social narratives", selected: null, id: "2", rating: ['Currently use', 'Have not tried yet'] },
    { name: "Picture Exchange Communication system (PECS)", selected: null, id: "3", rating: ['Currently use', 'Have not tried yet'] },
    { name: "Sign language", selected: null, id: "4", rating: ['Currently use', 'Have not tried yet'] },
    { name: "Simplify words used when talking to me e.g. say “Time for lunch” instead of, “It’s lunch time now, come over to the table to eat your lunch”", selected: null, id: "5", rating: ['Currently use', 'Have not tried yet'] },
    { name: "Phrase information as statements not questions e.g. say “It’s time for bed” instead of “Do you want to go to bed?”", selected: null, id: "6", rating: ['Currently use', 'Have not tried yet'] },
    { name: "Give one instruction at a time e.g. say “Get your shoes” instead of “Get your shoes and your bag then wait for me at the door”", selected: null, id: "7", rating: ['Currently use', 'Have not tried yet'] },
    { name: "Use positive phrasing e.g. “Walk inside” instead of “Stop running”", selected: null, id: "8", rating: ['Currently use', 'Have not tried yet'] },
    { name: "Join in with my play, rather than direct my play ", selected: null, id: "9", rating: ['Currently use', 'Have not tried yet'] },
    { name: "Use what I am interested in to help me engage with play ", selected: null, id: "10", rating: ['Currently use', 'Have not tried yet'] },
    { name: "Establish consistency between people and places i.e. have consistent expectations, routines, resources etc. ", selected: null, id: "11", rating: ['Currently use', 'Have not tried yet'] },
    { name: "Give me extra processing time to take in and respond to verbal information ", selected: null, id: "12", rating: ['Currently use', 'Have not tried yet'] },
    { name: "Use my name to get my attention before talking to me ", selected: null, id: "13", rating: ['Currently use', 'Have not tried yet'] },
    // Other
  ];

  constructor(private http: HttpClient, private fetchDataService: FetchDataService) {

    this.cbl1 = [
      // Thanks: https://www.freakyjolly.com/angular-material-check-uncheck-checkbox-list-with-indeterminate-state-using-matcheckboxmodule/
      { name: "I need a visual support to provide warning of what is next", checked: false },
      { name: "I find it tricky to give eye contact", checked: false },
      { name: "I have trouble knowing what others are going to do e.g. I don’t reach out my arms when someone is about to pick me up, or I don’t seem to understand familiar games e.g. ‘Peek-a-Boo’ or ‘Chasey’", checked: false },
      { name: "I find understanding body language and gestures confusing e.g. smiling when smiled at; pointing or waving in context ", checked: false },
      { name: "I can find it tricky to know how close to stand and sit next to other people ", checked: false },
      { name: "I physically show people what I want or need rather than telling them with words eg pull mum to the fridge when I want a snack or bang on the door if I want to go outside  ", checked: false },
      { name: "I prefer to be alone, with adults or younger children instead of playing with peers ", checked: false },
      { name: "I stick with people and activities I know ", checked: false },
      { name: "I have difficulty imitating actions e.g. following actions in a song or dance", checked: false },
      { name: "I find ‘pretend’ or ‘imaginary’ games confusing and hard to join in with", checked: false },
      { name: "I am confused by other people’s facial expressions", checked: false },
      { name: "I don’t respond to my name when people are talking to me, turn my head to see who is talking or react to loud sounds", checked: false },
      { name: "I find it hard and frustrating to understand what others are saying ", checked: false },
      { name: "I find it hard and frustrating to use my words to get what I need and want from others ", checked: false },
      { name: "I do better when instructions are given to me one at a time ", checked: false },
      { name: "I repeat words and phrases that other people have said (echolalia)", checked: false },
      { name: "I use words and phrases out of context ", checked: false },
      { name: "I keep conversations to topics that I am really interested in", checked: false },
      { name: "I ask questions but don’t make comments (or vice versa) ", checked: false },
      { name: "I find understanding or talking about feelings tricky (mine and others)", checked: false },
      { name: "I have a literal understanding of words e.g. I think “pull your socks up” means I need to pull up my socks rather than try to improve ", checked: false },
      // Other
    ],
      this.cbl2 = [
        // Thanks: https://www.freakyjolly.com/angular-material-check-uncheck-checkbox-list-with-indeterminate-state-using-matcheckboxmodule/
        { name: "I can often feel frustrated as I am not easily understood ", checked: false },
        { name: "It can be harder or slower to get things done as I need support to follow verbal instructions", checked: false },
        { name: "I need more processing time to respond to verbal information", checked: false },
        { name: "It can be difficult having unfamiliar visitors/carers in the home", checked: false },
        { name: "I need a space in the house that is just mine, for calm down time", checked: false },
        { name: "I may need support during playtime between me and my siblings/friends ", checked: false },
        { name: "I find it helpful when my family and friends adjust their communication style to help me understand ", checked: false },
        { name: "I can find it hard to attend mainstream social activities with my family", checked: false },
        { name: "My extended family and friends can find it hard to understand me ", checked: false },
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
      localStorage.setItem("s2_other1_input_value", other1_input_value);
    });
    this.other2.valueChanges.subscribe(other2_input_value => {
      localStorage.setItem("s2_other2_input_value", other2_input_value);
    });
    this.other3.valueChanges.subscribe(other3_input_value => {
      localStorage.setItem("s2_other3_input_value", other3_input_value);
    });
    this.other4.valueChanges.subscribe(other4_input_value => {
      localStorage.setItem("s2_other4_input_value", other4_input_value);
    });
  }

  getLocalStorage() {
    if (localStorage.length > 0) {
      this.other1.setValue(localStorage.getItem("s2_other1_input_value"));
      this.other2.setValue(localStorage.getItem("s2_other2_input_value"));
      this.other3.setValue(localStorage.getItem("s2_other3_input_value"));
      this.other4.setValue(localStorage.getItem("s2_other4_input_value"));
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
    // alert('changed radio!');
  }

  checkboxChange() { }
}
