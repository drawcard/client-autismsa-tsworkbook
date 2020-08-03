import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-section02',
  templateUrl: './section02.component.html',
  styleUrls: ['./section02.component.scss']
})
export class Section02Component implements OnInit {

  staticContent: any = [
    {
      // Section Title
      sectionTitle: `Section 2`,
      // Titles
      title0: `My social communication and social interaction: Strategies`,
      title1: `My social communication and social interaction: Strategies`,
      title2: `My social communication and social interaction: Supports`,
      title3: `My social communication and social interaction: Characteristics`,
      // Body
      body0: ``,
      body1: ``,
      // Labels
      label0: ``,
      label1: ``
    }
  ];

  master_checked: boolean = false;
  master_indeterminate: boolean = false;
  cbl1 = [];
  cbl2 = [];
  cbl3 = [];
  cbl4 = [];

  constructor() {
    this.cbl1 = [
      // Thanks: https://www.freakyjolly.com/angular-material-check-uncheck-checkbox-list-with-indeterminate-state-using-matcheckboxmodule/
      { name: "I understand pictures better than spoken words", checked: false },
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
      { name: "Other. Please add ...", checked: false },
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
        { name: "Other. Please add ...", checked: false },
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
      this.cbl3 = [
        // Thanks: https://www.freakyjolly.com/angular-material-check-uncheck-checkbox-list-with-indeterminate-state-using-matcheckboxmodule/
        { name: "label1", id: "1", label: ['test', 'test2'], value: ['1', '2'] },
        { name: "label2", id: "2", label: ['test', 'test2'], value: ['1', '2'] },
        { name: "label3", id: "3", label: ['test', 'test2'], value: ['1', '2'] },
        { name: "label4", id: "4", label: ['test', 'test2'], value: ['1', '2'] },
        { name: "label5", id: "5", label: ['test', 'test2'], value: ['1', '2'] },
        { name: "label6", id: "6", label: ['test', 'test2'], value: ['1', '2'] },
        { name: "label7", id: "7", label: ['test', 'test2'], value: ['1', '2'] },
        { name: "label8", id: "8", label: ['test', 'test2'], value: ['1', '2'] },
        { name: "label9", id: "9", label: ['test', 'test2'], value: ['1', '2'] },
        { name: "label10", id: "10", label: ['test', 'test2'], value: ['1', '2'] },
        { name: "label11", id: "11", label: ['test', 'test2'], value: ['1', '2'] },
        { name: "label12", id: "12", label: ['test', 'test2'], value: ['1', '2'] },
        { name: "label13", id: "13", label: ['test', 'test2'], value: ['1', '2'] },
        { name: "label14", id: "14", label: ['test', 'test2'], value: ['1', '2'] },
        { name: "label15", id: "15", label: ['test', 'test2'], value: ['1', '2'] },
        { name: "label16", id: "16", label: ['test', 'test2'], value: ['1', '2'] },
        { name: "label17", id: "17", label: ['test', 'test2'], value: ['1', '2'] },
        { name: "label18", id: "18", label: ['test', 'test2'], value: ['1', '2'] },
        { name: "label19", id: "19", label: ['test', 'test2'], value: ['1', '2'] },
        { name: "label20", id: "20", label: ['test', 'test2'], value: ['1', '2'] },
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

  someName = [
    { name: "name 1", id: "1", rating: ['0', '1', '2', '3', '4', '5'], selected: null },
    { name: "name 2", id: "2", rating: ['0', '1', '2', '3', '4', '5'], selected: null },
    { name: "name 3", id: "3", rating: ['0', '1', '2', '3', '4', '5'], selected: null }
  ];

  finalArray: any[] = [];

  radioChange(event: MatRadioChange, data: any) {
    var obj = this.someName.filter(x => x.id == data.id)[0];
    console.log(obj);
    obj.selected = event.value;
    console.log(this.finalArray.some(x => x.id == data.id))
    if (!this.finalArray.some(x => x.id == data.id)) {
      this.finalArray.push(obj);
    }
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
