import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section00',
  templateUrl: './section00.component.html',
  styleUrls: ['./section00.component.scss']
})
export class Section00Component implements OnInit {

  staticContent: any = [
    {
      // Section Title
      sectionTitle: `Introduction`,
      // Titles
      title0: ``,
      // Body
      body0: ``,
      body1: ``,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
