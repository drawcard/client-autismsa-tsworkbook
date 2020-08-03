import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-section05',
  templateUrl: './section05.component.html',
  styleUrls: ['./section05.component.scss']
})
export class Section05Component implements OnInit {

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

  staticContent: any = [
    {
      // Section Title
      sectionTitle: `Section 5`,
      // Titles
      title0: `My current supports and services`,
      title1: `Supports and services I need`,
      title2: `My family’s current supports and services`,
      title3: `Supports and services my family need`,
      // Body
      body0: ``,
      body1: ``,

    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
