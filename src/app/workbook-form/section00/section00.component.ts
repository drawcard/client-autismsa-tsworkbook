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
      body0: `My Autism and Me: Planning Booklet includes important information about me! It is a document that will change and
        develop as I do. It's purpose is to help everyone in my life understand my autism and what it means for me and
        my family on a day to day basis. <br><br>
        My Autism and Me: Planning Booklet includes information about: <br><br>
        • The characteristics of my autism <br>
        • The impact of those characteristics on me and my family <br>
        • Strategies that can support me and my family <br>
        • Information about supports and services <br>`,
      body1: ``,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
