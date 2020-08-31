import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-section01',
  templateUrl: './section01.component.html',
  styleUrls: ['./section01.component.scss']
})
export class Section01Component implements OnInit {

  // Initialise Form Data Fields
  q1 = new FormControl('');
  q2 = new FormControl('');
  q3 = new FormControl('');
  q4 = new FormControl('');
  q5 = new FormControl('');
  q6 = new FormControl('');
  q7 = new FormControl('');
  q8 = new FormControl('');

  staticContent: any = [
    {
      // Section Title
      sectionTitle: `My Child and Autism`,
      // Titles
      title0: `About Me`,
      // Body
      body0: ``,
      body1: `It is always helpful for the people in my life to know what I like, what I am good at, what I find challenging and
  the supports I need. This information can help guide decisions around how to interact with me, what I am likely to be
  successful at and what skills I need to continue developing.`,
    }
  ];

  constructor() {

  }

  ngOnInit(): void {

  }

}
