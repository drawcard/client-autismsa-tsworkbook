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
      sectionTitle: `Supports and services`,
      // Titles
      title0: `My current supports and services`,
      title1: `Supports and services I need`,
      title2: `My family’s current supports and services`,
      title3: `Supports and services my family need`,
      // Body
      body0: `
      My current supports and services<br><br>
Everyone needs some level of support at different stages of their lives. My supports and their role in my life will change as I do, which is why it is important to review and manage my supports.
There are many people in my current network who support me in a range of ways, they are listed below. <br><br>
• Formal (paid) supports e.g. professionals such as ECEI partner, speech pathologist, childcare staff, GP.
• Informal supports e.g. my immediate and extended family, friends, or neighbours.
• Community supports e.g. playgroup coordinator, swimming teacher, local library staff.

      `,
      body1: `
      Supports and services I need<br><br>
These are supports and service in addition to the ones I already have, which I could benefit from:
`,
      body2: `
      My family’s current supports and services <br><br>
It is important that my family are supported too, this helps us reach our best outcomes as a family unit. Support for my family could include, but not be limited to, having a babysitter for a night, speaking to a counsellor, or increasing knowledge and skills through training:

      `,
      body3: `
      Supports and services my family need<br><br>
These are supports and service in addition to the ones we already have, which we could benefit from:
`,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
