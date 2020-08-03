import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-section04',
  templateUrl: './section04.component.html',
  styleUrls: ['./section04.component.scss']
})

export class Section04Component implements OnInit {

  staticContent: any = [
    {
      // Section Title
      sectionTitle: `Section 4`,
      // Titles
      title0: `My learning style: Characteristics`,
      title1: `My learning style: Impact`,
      title2: `My learning style: Strategies`,
      title3: `My learning style: Supports`,
      // Body
      body0: ``,
      body1: ``,

    }
  ];

  master_checked: boolean = false;
  master_indeterminate: boolean = false;
  cbl1 = [];
  cbl2 = [];
  cbl4 = [];
  rad1 = [
    { name: "name 0", selected: null, id: "0", rating: ['Currently use', 'Have not tried yet'] },
    { name: "name 1", selected: null, id: "1", rating: ['Currently use', 'Have not tried yet'] },
    { name: "name 2", selected: null, id: "2", rating: ['Currently use', 'Have not tried yet'] },
    { name: "name 3", selected: null, id: "3", rating: ['Currently use', 'Have not tried yet'] },
    { name: "name 4", selected: null, id: "4", rating: ['Currently use', 'Have not tried yet'] },
    { name: "name 5", selected: null, id: "5", rating: ['Currently use', 'Have not tried yet'] },
    { name: "name 6", selected: null, id: "6", rating: ['Currently use', 'Have not tried yet'] },
    { name: "name 7", selected: null, id: "7", rating: ['Currently use', 'Have not tried yet'] },
    { name: "name 8", selected: null, id: "8", rating: ['Currently use', 'Have not tried yet'] },
    { name: "name 9", selected: null, id: "9", rating: ['Currently use', 'Have not tried yet'] },
  ];

  constructor() {
    this.cbl1 = [
      // Thanks: https://www.freakyjolly.com/angular-material-check-uncheck-checkbox-list-with-indeterminate-state-using-matcheckboxmodule/
      { name: "I understand visual information better than verbal information i.e. I need to see information rather than hear it", checked: false },
      { name: "I notice lots of details but find it difficult to see the bigger picture ", checked: false },
      { name: "I have a good long-term memory i.e. remember many facts and events from the past", checked: false },
      { name: "I have a good long-term memory i.e. remember many facts and events from the past", checked: false },
      { name: "I have difficulties with my working memory i.e. I have trouble remembering what I need to do nextel5", checked: false },
      { name: "I find being  eneraliz tricky i.e. remembering all my things", checked: false },
      { name: "I am good at using skills in the environment I learned them, in but find it hard to use these skills in new environments  ", checked: false },
      { name: "I can do certain things well and easily but find other things hard  ", checked: false },
      { name: "I am inconsistent at skills/tasks e.g. may do an activity by myself one day, but I need help the next day", checked: false },
      { name: "Other. Please add …", checked: false },
      { name: "label11", checked: false },
      { name: "label12", checked: false },
      { name: "label13", checked: false },
      { name: "label14", checked: false },
      { name: "label15", checked: false },
      { name: "label16", checked: false },
      { name: "label17", checked: false },
      { name: "label18", checked: false },
      { name: "label19", checked: false },
      { name: "label20", checked: false },
      { name: "label21", checked: false },
      { name: "label22", checked: false },
    ],
      this.cbl2 = [
        // Thanks: https://www.freakyjolly.com/angular-material-check-uncheck-checkbox-list-with-indeterminate-state-using-matcheckboxmodule/
        { name: "I remember lots of things that my family forget ", checked: false },
        { name: "It is hard to get me to stop an activity I love ", checked: false },
        { name: "It is hard to get me to do things I do not care about e.g. brushing teeth ", checked: false },
        { name: "I can be  eneralize , so sometimes/frequently I cannot find things, or I forget things ", checked: false },
        { name: "I follow instructions and complete tasks for one person but not another e.g. I brush my teeth at my house but not at Nanna’s house ", checked: false },
        { name: "We often need to deal with unexpected issues as my abilities and needs change regularly ", checked: false },
        { name: "Other. Please add …", checked: false },
        { name: "label8", checked: false },
        { name: "label9", checked: false },
        { name: "label10", checked: false },
        { name: "label11", checked: false },
        { name: "label12", checked: false },
        { name: "label13", checked: false },
        { name: "label14", checked: false },
        { name: "label15", checked: false },
        { name: "label16", checked: false },
        { name: "label17", checked: false },
        { name: "label18", checked: false },
        { name: "label19", checked: false },
        { name: "label20", checked: false },
        { name: "label21", checked: false },
        { name: "label22", checked: false },
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
