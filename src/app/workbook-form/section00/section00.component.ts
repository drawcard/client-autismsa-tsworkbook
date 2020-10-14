import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import ContentFilePaths from '../../../assets/content/content-filepaths.json';

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

  jsonContent: any = ContentFilePaths;

  youtubeVideoURL: any = this.jsonContent["section00"][0].youtubeVideoURL;
  paragraphs: any = this.jsonContent["section00"][0]["paragraphs"][0];
  checkboxes: any = this.jsonContent["section00"][0]["checkboxes"][0];
  radios: any = this.jsonContent["section00"][0]["radios"][0];
  textFields: any = this.jsonContent["section00"][0]["textFields"][0];
  textAreas: any = this.jsonContent["section00"][0]["textAreas"][0];

  markdownStore$: string[] = [];

  // Names of each of the markdown files on the server, for this section

  constructor(private http: HttpClient) {
    this.fetchParagraphs();
  }

  private fetchParagraphs() {
    // https://stackoverflow.com/a/49892384
    let that = this;

    // Get values
    let paragraphs = that.paragraphs;

    // Fer each returned value, do the following:
    Object.keys(paragraphs).forEach(function (value) {

      let fileNames = paragraphs[value];
      let sourceURLs = '../../../assets/content/' + fileNames;

      // Retrieve the markdown content file, via the PHP parser
      that.http.get(sourceURLs, { responseType: 'text' })
        .subscribe((data: string) => {
          // Store the returned data
          that.markdownStore$.push(data);
        },
          error => {
            // Trigger a communication error if the file can't be retrieved for some reason
            error = "Communication error: File " + sourceURLs + " could not be fetched! Please contact the website administrator.";
            window.alert(error);
          });
      console.log(that.markdownStore$);
    });
  }

  ngOnInit(): void {

  }
}
