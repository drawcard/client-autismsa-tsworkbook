import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section08',
  templateUrl: './section08.component.html',
  styleUrls: ['./section08.component.scss']
})
export class Section08Component implements OnInit {

  staticContent: any = [
    {
      // Section Title
      sectionTitle: `Section 8`,
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
