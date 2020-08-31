import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section06',
  templateUrl: './section06.component.html',
  styleUrls: ['./section06.component.scss']
})
export class Section06Component implements OnInit {

  staticContent: any = [
    {
      // Section Title
      sectionTitle: `How to choose supports and services`,
      // Titles
      title0: `Questions to ask yourself about therapies, services, and supports`,
      title1: `Provider`,
      title2: `Therapy / Service`,
      title3: `Logistics`,
      title4: `General`,
      // Body
      body0: ``,
      body1: ``,

    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
