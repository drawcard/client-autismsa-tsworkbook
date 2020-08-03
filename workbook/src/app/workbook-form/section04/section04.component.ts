import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section04',
  templateUrl: './section04.component.html',
  styleUrls: ['./section04.component.scss']
})
export class Section04Component implements OnInit {

  staticContent: any = [
    {
      // Section Title
      sectionTitle: `Section 4`,
      // Titles
      title0: `My learning style: Characteristics`,
      title1: `My learning style: Impact`,
      title2: `My learning style: Strategies`,
      title3: `My learning style: Supports`,
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
