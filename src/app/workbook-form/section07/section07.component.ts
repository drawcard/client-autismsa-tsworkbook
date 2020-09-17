import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpClient } from "@angular/common/http";
import * as Setting from './../../workbook-settings';

@Component({
  selector: 'app-section07',
  templateUrl: './section07.component.html',
  styleUrls: ['./section07.component.scss']
})
export class Section07Component implements OnInit {

  // Initialise Form Data Fields
  q1 = new FormControl('');
  q2 = new FormControl('');
  q3 = new FormControl('');
  q4 = new FormControl('');
  q5 = new FormControl('');
  q6 = new FormControl('');

  staticContent: any = [
    {
      // Section Title
      sectionTitle: `Setting Goals`,
      // Titles
      title0: ``,
      title1: ``,
      // Body
      body0: `
Goals e.g. successful transition to kindergarten or school, develop further language skills<br><br>
Tip: keep your goals SMART: S-specific M-measurable A-achievable R-realistic T-timebound <br><br>
Things my family and I want me to achieve in:

`,
      body1: `Reaching Goals<br><br>
      How can I reach my goals?
`,

    }
  ];

  fileName: string = 'section-07-content.md'; // Markdown content filename
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
