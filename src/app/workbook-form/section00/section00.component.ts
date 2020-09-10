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
      intro: `In this short video we introduce the online module videos, the Autism and Me: Planning Booklet and facts sheets, as well as tips for getting the most out of this online module.`,
      body0: ``,
      body1: ``,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
