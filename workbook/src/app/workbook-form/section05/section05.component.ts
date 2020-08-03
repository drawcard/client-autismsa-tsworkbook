import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section05',
  templateUrl: './section05.component.html',
  styleUrls: ['./section05.component.scss']
})
export class Section05Component implements OnInit {

  staticContent: any = [
    {
      // Section Title
      sectionTitle: `Section 5`,
      // Titles
      title0: `My current supports and services`,
      title1: `Supports and services I need`,
      title2: `My family’s current supports and services`,
      title3: `Supports and services my family need`,
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
