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
      title0: `My restricted and repetitive behaviors and sensory processing: Characteristics`,
      title1: `My restricted and repetitive behaviors and sensory processing: Impact`,
      title2: `My restricted and repetitive behaviors and sensory processing: Strategies`,
      title3: `My restricted and repetitive behaviors and sensory processing: Supports`,
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
