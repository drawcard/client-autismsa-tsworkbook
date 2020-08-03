import { Component, OnInit } from '@angular/core';

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
      title0: ``,
      title1: ``,
      // Body
      body0: ``,
      body1: ``,
      // Labels
      label0: ``,
      label1: ``
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
