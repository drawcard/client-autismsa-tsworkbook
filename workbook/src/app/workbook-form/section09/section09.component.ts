import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section09',
  templateUrl: './section09.component.html',
  styleUrls: ['./section09.component.scss']
})
export class Section09Component implements OnInit {

  staticContent: any = [
    {
      // Section Title
      sectionTitle: `Section 9`,
      // Titles
      title0: `User notes & Copyright`,
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
