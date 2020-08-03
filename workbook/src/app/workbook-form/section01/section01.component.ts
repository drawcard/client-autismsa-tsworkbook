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
      sectionTitle: `Section 1`,
      // Titles
      title0: `About Me`,
      // Body
      body0: `My Autism and Me: Planning Booklet includes important information about me! It is a document that will change and
        develop as I do. It's purpose is to help everyone in my life understand my autism and what it means for me and
        my family on a day to day basis. <br><br>
        My Autism and Me: Planning Booklet includes information about: <br><br>
        • The characteristics of my autism <br>
        • The impact of those characteristics on me and my family <br>
        • Strategies that can support me and my family <br>
        • Information about supports and services <br>`,
      body1: `It is always helpful for the people in my life to know what I like, what I am good at, what I find challenging and
  the supports I need. This information can help guide decisions around how to interact with me, what I am likely to be
  successful at and what skills I need to continue developing.`,
      // Labels
      label0: ``,
      label1: ``,
    }
  ];

  constructor() {

  }

  ngOnInit(): void {

  }

}
