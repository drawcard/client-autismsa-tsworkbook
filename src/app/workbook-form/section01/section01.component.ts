import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpClient } from "@angular/common/http";
import * as Setting from './../../workbook-settings';

@Component({
  selector: 'app-section01',
  templateUrl: './section01.component.html',
  styleUrls: ['./section01.component.scss']
})
export class Section01Component implements OnInit {

  // Initialise Form Data Fields
  q1 = new FormControl('');
  q2 = new FormControl('');
  q3 = new FormControl('');
  q4 = new FormControl('');
  q5 = new FormControl('');
  q6 = new FormControl('');
  q7 = new FormControl('');
  q8 = new FormControl('');

  staticContent: any = [
    {
      // Section Title
      sectionTitle: `My Child and Autism`,
      // Titles
      title0: `About Me`,
      // Body
      intro: `Develop your understanding of the autism diagnosis including common strengths and interest for children on the spectrum and meet Janie, a 4-year-old with an autism diagnosis. Throughout the videos the journey of Janie and her family will help illustrate what autism may look like for a young child and their family.`, body0: `My Autism and Me: Planning Booklet includes important information about me! It is a document that will change and develop as I do. It's purpose is to help everyone in my life understand my autism and what it means for me and my family on a day to day basis. <br><br> My Autism and Me: Planning Booklet includes information about: <br><br>
        • The characteristics of my autism <br>
        • The impact of those characteristics on me and my family <br>
        • Strategies that can support me and my family <br>
        • Information about supports and services <br>`,
      body1: `It is always helpful for the people in my life to know what I like, what I am good at, what I find challenging and
  the supports I need. This information can help guide decisions around how to interact with me, what I am likely to be
  successful at and what skills I need to continue developing.`,
    }
  ];

  fileName: string = 'section-01-content.md'; // Markdown content filename
  filePath: string = Setting.CONTENT_URL + this.fileName; // Markdown file location
  sourceURL: string = Setting.FORM_URL + 'assets/parser.php?filepath=' + this.filePath; // Completed query URL (points to parser.php on the server)
  returnedData: string;

  constructor(private http: HttpClient) {
    this.fetchContent();
  }

  fetchContent() {
    // Retrieve the markdown content file, via the PHP parser
    return this.http.get(this.sourceURL, { responseType: 'text' })
      .subscribe(data => {
        // Store the returned data
        this.returnedData = data;
      },
        error => {
          // Trigger a communication error if the file can't be retrieved for some reason
          error = "Communication error: Content could not be fetched! Please contact the website administrator.";
          window.alert(error);
        });
  }

  ngOnInit(): void {

  }

}
