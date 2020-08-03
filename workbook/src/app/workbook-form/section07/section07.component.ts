import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-section07',
  templateUrl: './section07.component.html',
  styleUrls: ['./section07.component.scss']
})
export class Section07Component implements OnInit {

  // Initialise Form Data Fields
  q1 = new FormControl('');
  q2 = new FormControl('');
  q3 = new FormControl('');
  q4 = new FormControl('');
  q5 = new FormControl('');
  q6 = new FormControl('');

  staticContent: any = [
    {
      // Section Title
      sectionTitle: `Section 7`,
      // Titles
      title0: `Settings Goals`,
      title1: `Reaching Goals`,
      // Body
      body0: ``,
      body1: ``,

    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
