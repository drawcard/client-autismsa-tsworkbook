import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import * as Setting from './../../workbook-settings';

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

  fileName: string = 'section-00-content.md'; // Markdown content filename
  filePath: string = Setting.CONTENT_URL + this.fileName; // Markdown file location
  sourceURL: string = Setting.FORM_URL + 'assets/parser.php?filepath=' + this.filePath; // Completed query URL (points to parser.php on the server)
  returnedData: string;

  constructor(private http: HttpClient) {
    this.fetchContent();
  }

  private fetchContent() {
    // Retrieve the markdown content file, via the PHP parser
    return this.http.get(this.sourceURL, { responseType: 'text' })
      .subscribe(data => {
        // Store the returned data
        this.returnedData = data;
        console.log(this.sourceURL);
        console.log(this.returnedData);
      },
        error => {
          // Trigger a communication error if the file can't be retrieved for some reason
          error = "Communication error: Content could not be fetched! Please contact the website administrator.";
          window.alert(error);
        });
  }

  ngOnInit(): void { }

}
