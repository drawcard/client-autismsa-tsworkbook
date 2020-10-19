import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpClient } from "@angular/common/http";
import { FetchDataService } from '../services/fetch-data.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-section07',
  templateUrl: './section07.component.html',
  styleUrls: ['./section07.component.scss']
})
export class Section07Component implements OnInit {

  dataStore: any;
  mdStore: string[] = [];

  // Initialise Form Data Fields
  q1 = new FormControl('');
  q2 = new FormControl('');
  q3 = new FormControl('');
  q4 = new FormControl('');
  q5 = new FormControl('');
  q6 = new FormControl('');

  constructor(private http: HttpClient, private fetchDataService: FetchDataService) {

  }

  ngOnInit(): void {
    this.fetchMarkDownContent();
  }

  fetchMarkDownContent() {
    // Retrieve data from FetchDataService
    this.fetchDataService.dataStream.subscribe(jsonData => this.dataStore = jsonData);

    let that = this; // https://stackoverflow.com/a/49892384

    // Set variables
    let paragraphs = this.dataStore["paragraphs"];

    // On each dataString, do the following
    Object.keys(paragraphs).forEach(function (value) {

      let fileName = paragraphs[value];
      let filePath = environment.filePath + fileName;

      // Retrieve the markdown data
      that.http.get(filePath, { responseType: 'text' })
        .subscribe((data) => {
          // Store the returned markdown data
          that.mdStore.push(data);
        },
          error => {
            // Trigger a communication error if the file can't be retrieved for some reason
            error = "Communication error: File " + filePath + " could not be fetched! Please contact the website administrator.";
            window.alert(error);
          });
    });
  }

}
