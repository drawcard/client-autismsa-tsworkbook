import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section07',
  templateUrl: './section07.component.html',
  styleUrls: ['./section07.component.scss']
})
export class Section07Component implements OnInit {

  staticContent: any = [
    {
      // Section Title
      sectionTitle: `Section 7`,
      // Titles
      title0: `Settings Goals`,
      title1: `Reaching Goals`,
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
