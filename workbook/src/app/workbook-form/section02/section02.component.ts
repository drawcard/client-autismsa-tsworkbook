import { Component, OnInit } from '@angular/core';

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
  checkbox_list = [];

  constructor() {
    this.checkbox_list = [
      // Thanks: https://www.freakyjolly.com/angular-material-check-uncheck-checkbox-list-with-indeterminate-state-using-matcheckboxmodule/
      { name: "label1", checked: false },
      { name: "label2", checked: false },
      { name: "label3", checked: false },
      { name: "label4", checked: false },
      { name: "label5", checked: false },
      { name: "label6", checked: false },
      { name: "label7", checked: false },
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
    ]
  }

  ngOnInit(): void {
  }

  master_change() {
    for (let value of Object.values(this.checkbox_list)) {
      value.checked = this.master_checked;
    }
  }

  list_change() {
    let checked_count = 0;
    //Get total checked items
    for (let value of Object.values(this.checkbox_list)) {
      if (value.checked)
        checked_count++;
    }

    if (checked_count > 0 && checked_count < this.checkbox_list.length) {
      // If some checkboxes are checked but not all; then set Indeterminate state of the master to true.
      this.master_indeterminate = true;
    } else if (checked_count == this.checkbox_list.length) {
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
