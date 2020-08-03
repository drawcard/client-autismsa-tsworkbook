import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-section03',
  templateUrl: './section03.component.html',
  styleUrls: ['./section03.component.scss']
})
export class Section03Component implements OnInit {

  staticContent: any = [
    {
      // Section Title
      sectionTitle: `Section 3`,
      // Titles
      title0: `My restricted and repetitive behaviors and sensory processing: Characteristics`,
      title1: `My restricted and repetitive behaviors and sensory processing: Impact`,
      title2: `My restricted and repetitive behaviors and sensory processing: Strategies`,
      title3: `My restricted and repetitive behaviors and sensory processing: Supports`,
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
      { name: "Other. Please add …", checked: false },
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
        { name: "I am good at following our family rules ", checked: false },
        { name: "As a family we avoid changes to plans, especially last minute changes ", checked: false },
        { name: "We need to be organised and plan our days and weeks carefully ", checked: false },
        { name: "Sometimes it can take me longer to do self-care tasks ", checked: false },
        { name: "Mealtimes can be tricky as we often need to prepare a range of meals to meet everyone’s needs", checked: false },
        { name: "My family need to carefully choose my clothes, toys, food etc as I am very specific about what I like  ", checked: false },
        { name: "My sensory differences often need to be considered when planning family outings e.g. going to restaurants or in busy shopping centers ", checked: false },
        { name: "Other. Please add …", checked: false },
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
