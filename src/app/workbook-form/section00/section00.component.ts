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

  // Names of each of the markdown files on the server, for this section

  // TODO: Test data - replace with real section files!
  fileArray: any = [
    "section-00-content.md",
    "section-01-content.md",
    "section-02-content.md",
    "section-03-content.md",
    "section-04-content.md",
    "section-05-content.md",
    "section-06-content.md",
    "section-07-content.md",
    "section-08-content.md",
    "section-09-content.md"
  ];
  // Initialise content storage object
  // TODO: Make this accessible to the PDF generator as well (via shared service?)
  contentStore$: any = [];

  constructor(private http: HttpClient) {
    // Pass fileArray object to the method
    this.fetchContent(this.fileArray);
  }

  private fetchContent(input: any) {

    let files = input;

    // Iterate over every file
    for (let i = 0; i < files.length; i++) {

      // Fetch filename from this.fileArray[] above
      let forFileName = Setting.CONTENT_URL + files[i];
      // Construct a query URL (pointing to parser.php on the server)
      let forSourceURL = Setting.FORM_URL + 'assets/parser.php?filepath=' + forFileName;

      // Retrieve the markdown content file, via the PHP parser
      this.http.get(forSourceURL, { responseType: 'text' })
        .subscribe((data: string) => {
          // Store the returned data
          this.contentStore$.push(data);
          // Display an error if the markdown file cannot be found on the server, or is empty
          let dataStreamCheck = data;
          if (dataStreamCheck.length <= 1) {
            window.alert('Sorry, an error has occurred: File ' + this.fileArray[i] + ' is missing or empty. Please contact the website administrator for assistance.');
          }
        },
          error => {
            // Trigger a communication error if the file can't be retrieved for some reason
            error = "Communication error: Content could not be fetched! Please contact the website administrator.";
            window.alert(error);
          })
    }
    console.log(this.contentStore$);
  }

  ngOnInit(): void { }

}
