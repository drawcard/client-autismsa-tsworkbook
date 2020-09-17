import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import * as Setting from './../../workbook-settings';

@Component({
  selector: 'app-section06',
  templateUrl: './section06.component.html',
  styleUrls: ['./section06.component.scss']
})
export class Section06Component implements OnInit {

  staticContent: any = [
    {
      // Section Title
      sectionTitle: `How to choose supports and services`,
      // Titles
      title0: `Questions to ask yourself about therapies, services, and supports`,
      title1: `Provider`,
      title2: `Therapy / Service`,
      title3: `Logistics`,
      title4: `General`,
      // Body
      body0: ``,
      body1: ``,

    }
  ];

  fileName: string = 'section-06-content.md'; // Markdown content filename
  filePath: string = Setting.CONTENT_URL + this.fileName; // Markdown file location
  sourceURL: string = Setting.FORM_URL + 'assets/parser.php?filepath=' + this.filePath; // Completed query URL (points to parser.php on the server)
  returnedData: string;

  constructor(private http: HttpClient) {
    this.fetchContent();
  }

  fetchContent() {
    // Retrieve the markdown content file, via the PHP parser
    return this.http.get(this.sourceURL, { responseType: 'text' })
      .subscribe(result => {
        // Store the returned data
        this.returnedData = result;
      },
        error => {
          // Trigger a communication error if the file can't be retrieved for some reason
          error = "Communication error: Content could not be fetched! Please contact the website administrator.";
          window.alert(error);
        });
  }

  ngOnInit(): void { }

}
