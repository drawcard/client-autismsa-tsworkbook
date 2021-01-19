import { Component, OnInit, ViewChildren } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { FormControl, FormGroupName } from '@angular/forms';

import { HttpClient } from "@angular/common/http";
import { FetchDataService } from '../services/fetch-data.service';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';

import * as _ from 'lodash';
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

  // Checkbox data
  @ViewChildren('checkbox') item;
  selection = [];
  deselected = [];
  checkboxNames = [ // names of checkbox 'groups'
    's02-cbl1',
    's02-cbl2',
    's02-cbl4'
  ];
  checkboxStates: { id: number, checked: boolean }[];

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
      { id: 1, groupName: "s02-cbl1", label: "I need a visual support to provide warning of what is next", checked: false },
      { id: 2, groupName: "s02-cbl1", label: "I find it tricky to give eye contact", checked: false },
      { id: 3, groupName: "s02-cbl1", label: "I have trouble knowing what others are going to do e.g. I don’t reach out my arms when someone is about to pick me up, or I don’t seem to understand familiar games e.g. ‘Peek-a-Boo’ or ‘Chasey’", checked: false },
      { id: 4, groupName: "s02-cbl1", label: "I find understanding body language and gestures confusing e.g. smiling when smiled at; pointing or waving in context ", checked: false },
      { id: 5, groupName: "s02-cbl1", label: "I can find it tricky to know how close to stand and sit next to other people ", checked: false },
      { id: 6, groupName: "s02-cbl1", label: "I physically show people what I want or need rather than telling them with words eg pull mum to the fridge when I want a snack or bang on the door if I want to go outside  ", checked: false },
      { id: 7, groupName: "s02-cbl1", label: "I prefer to be alone, with adults or younger children instead of playing with peers ", checked: false },
      { id: 8, groupName: "s02-cbl1", label: "I stick with people and activities I know ", checked: false },
      { id: 9, groupName: "s02-cbl1", label: "I have difficulty imitating actions e.g. following actions in a song or dance", checked: false },
      { id: 10, groupName: "s02-cbl1", label: "I find ‘pretend’ or ‘imaginary’ games confusing and hard to join in with", checked: false },
      { id: 11, groupName: "s02-cbl1", label: "I am confused by other people’s facial expressions", checked: false },
      { id: 12, groupName: "s02-cbl1", label: "I don’t respond to my name when people are talking to me, turn my head to see who is talking or react to loud sounds", checked: false },
      { id: 13, groupName: "s02-cbl1", label: "I find it hard and frustrating to understand what others are saying ", checked: false },
      { id: 14, groupName: "s02-cbl1", label: "I find it hard and frustrating to use my words to get what I need and want from others ", checked: false },
      { id: 15, groupName: "s02-cbl1", label: "I do better when instructions are given to me one at a time ", checked: false },
      { id: 16, groupName: "s02-cbl1", label: "I repeat words and phrases that other people have said (echolalia)", checked: false },
      { id: 17, groupName: "s02-cbl1", label: "I use words and phrases out of context ", checked: false },
      { id: 18, groupName: "s02-cbl1", label: "I keep conversations to topics that I am really interested in", checked: false },
      { id: 19, groupName: "s02-cbl1", label: "I ask questions but don’t make comments (or vice versa) ", checked: false },
      { id: 20, groupName: "s02-cbl1", label: "I find understanding or talking about feelings tricky (mine and others)", checked: false },
      { id: 21, groupName: "s02-cbl1", label: "I have a literal understanding of words e.g. I think “pull your socks up” means I need to pull up my socks rather than try to improve ", checked: false },
      // Other
    ],
      this.cbl2 = [
        // Thanks: https://www.freakyjolly.com/angular-material-check-uncheck-checkbox-list-with-indeterminate-state-using-matcheckboxmodule/
      { id: 1, groupName: "s02-cbl2", label: "I can often feel frustrated as I am not easily understood ", checked: false },
      { id: 2, groupName: "s02-cbl2", label: "It can be harder or slower to get things done as I need support to follow verbal instructions", checked: false },
      { id: 3, groupName: "s02-cbl2", label: "I need more processing time to respond to verbal information", checked: false },
      { id: 4, groupName: "s02-cbl2", label: "It can be difficult having unfamiliar visitors/carers in the home", checked: false },
      { id: 5, groupName: "s02-cbl2", label: "I need a space in the house that is just mine, for calm down time", checked: false },
      { id: 6, groupName: "s02-cbl2", label: "I may need support during playtime between me and my siblings/friends ", checked: false },
      { id: 7, groupName: "s02-cbl2", label: "I find it helpful when my family and friends adjust their communication style to help me understand ", checked: false },
      { id: 8, groupName: "s02-cbl2", label: "I can find it hard to attend mainstream social activities with my family", checked: false },
      { id: 9, groupName: "s02-cbl2", label: "My extended family and friends can find it hard to understand me ", checked: false },
        // Other
      ],
      this.cbl4 = [
        // Thanks: https://www.freakyjolly.com/angular-material-check-uncheck-checkbox-list-with-indeterminate-state-using-matcheckboxmodule/
      { id: 1, groupName: "s02-cbl4", label: "Parents", checked: false },
      { id: 2, groupName: "s02-cbl4", label: "Other family members", checked: false },
      { id: 3, groupName: "s02-cbl4", label: "Educators (childcare/kindergarten/school)", checked: false },
      { id: 4, groupName: "s02-cbl4", label: "Developmental educators", checked: false },
      { id: 5, groupName: "s02-cbl4", label: "Occupational Therapists", checked: false },
      { id: 6, groupName: "s02-cbl4", label: "Speech Pathologists", checked: false },
      { id: 7, groupName: "s02-cbl4", label: "Behaviour practitioners", checked: false },
      { id: 8, groupName: "s02-cbl4", label: "Psychologists", checked: false },
      { id: 9, groupName: "s02-cbl4", label: "Coaches e.g. swimming coach, gymnastic coach", checked: false },
      { id: 10, groupName: "s02-cbl4", label: "Therapists", checked: false },
        // Other
      ]
  }

  ngOnInit(): void {
    this.fetchMarkDownContent();
    this.getLocalStorage();
    this.setLocalStorage();
    this.getCheckboxes();
    this.initCheckboxes();
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

  initCheckboxes() {
    this.checkboxNames.forEach(element => {
      // If localStorage has checkbox values, retrieve and store in this.selection
      if (localStorage.getItem(`checkboxSelection-${element}`)) {
        let fetchedStorage = JSON.parse(localStorage.getItem(`checkboxSelection-${element}`));
        // Merge two arrays, so that the first array is updated with changes from the second
        // https://stackoverflow.com/a/39127724
        let mergedArray = _.map(
          _.assign(
            _.mapKeys(this.cbl1, v => v.id), // first array
            _.mapKeys(fetchedStorage, v => v.id) // second array
          )
        );
        this.cbl1 = mergedArray;
      }
    });
  }

  getCheckboxes() {
    this.checkboxNames.forEach(element => {
      // If localStorage has checkbox values, retrieve and store in this.selection
      if (localStorage.getItem(`checkboxSelection-${element}`)) {
        this.selection = JSON.parse(localStorage.getItem(`checkboxSelection-${element}`));
      }
    });
  }

  setCheckboxes(id, groupName, label, event) {
    let currentlyChecked = { id: id, groupName: groupName, label: label, checked: event.checked }; // The current id & checked state of the checkbox

    if (event.checked === true) {
      let uniqueValues = [];
      this.selection.push(currentlyChecked); // Update array with current checkbox state
      uniqueValues = _.uniqWith(this.selection, _.isEqual); // De-duplicate entries
      this.selection = uniqueValues;
      localStorage.setItem(`checkboxSelection-${groupName}`, JSON.stringify(this.selection)); // Store the array in browser
    }
    else {
      this.deselected = _.pullAllWith(this.selection, [{ id: id, groupName: groupName, label: label, checked: true }], _.isEqual); // Remove deselected checkbox from array
      localStorage.setItem(`checkboxSelection-${groupName}`, JSON.stringify(this.selection)); // Store the array in browser
    }
  }
}
