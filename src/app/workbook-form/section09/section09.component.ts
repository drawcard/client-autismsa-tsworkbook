import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'app-section09',
  templateUrl: './section09.component.html',
  styleUrls: ['./section09.component.scss']
})
export class Section09Component implements OnInit {

  dataStore: any;
  mdStore: string[] = [];

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
    let dataStrings = this.dataStore["dataStrings"];

    // On each dataString, do the following
    Object.keys(dataStrings).forEach(function (value) {

      let fileName = dataStrings[value];
      let filePath = '../../../assets/content/' + fileName;

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
