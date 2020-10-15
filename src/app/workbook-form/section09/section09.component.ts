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

  staticContent: any = [
    {
      // Section Title
      sectionTitle: `Miscellaneous`,
      // Titles
      title0: `User notes & Copyright`,
      // Body
      body0: `
User notes and Copyright information:<br><br>
The Autism and Me: Planning Booklet is designed to be used in conjunction with the My Child and Autism Online Training.<br><br>
Upon completion we recommend you share this document with the team of people who support and care for the child it has been completed for.<br><br>
The information in the My Child and Autism Online Training and the Autism and Me: Planning Booklet are intended as an introduction, for more comprehensive information please seek further details as per information in the Further Information links.<br><br>
This document and all other materials contained on this digital platform (Materials) are copyright © 2020 Autism Association of South Australia ACN 164 545 215 (Autism SA) and its licensors.  All rights reserved.PCS is a trademark of Tobii Dynavox LLC.  All rights reserved.  Used with permission by Autism SA. PCS and Boardmaker are trademarks of Tobii Dynavox LLC.  All rights reserved.  Used with permission by Autism SA.You may not copy, reproduce, upload, transmit, translate, adapt, vary or modify the Materials in any form and by any means (electronic, mechanical, microcopying, photocopying, recording or otherwise) without the express written consent of Autism SA, except as expressly authorised herein or as otherwise may be permitted by the Copyright Act 1968 (Cth).<br><br>
<br><br>
Inquires as to further uses of the Materials should be addressed to Autism SA.
`,
      body1: ``,

    }
  ];

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
