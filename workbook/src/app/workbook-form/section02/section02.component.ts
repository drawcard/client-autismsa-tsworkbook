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

  constructor() { }

  ngOnInit(): void {
  }

}
