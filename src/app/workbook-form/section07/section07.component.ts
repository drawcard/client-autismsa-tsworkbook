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
      sectionTitle: `Setting Goals`,
      // Titles
      title0: ``,
      title1: ``,
      // Body
      body0: `
Goals e.g. successful transition to kindergarten or school, develop further language skills<br><br>
Tip: keep your goals SMART: S-specific M-measurable A-achievable R-realistic T-timebound <br><br>
Things my family and I want me to achieve in:

`,
      body1: `Reaching Goals<br><br>
      How can I reach my goals?
`,

    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
