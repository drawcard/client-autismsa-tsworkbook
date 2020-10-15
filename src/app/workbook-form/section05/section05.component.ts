import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpClient } from "@angular/common/http";
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'app-section05',
  templateUrl: './section05.component.html',
  styleUrls: ['./section05.component.scss']
})
export class Section05Component implements OnInit {

  dataStore: any;
  mdStore: string[] = [];

  // Initialise Form Data Fields
  q1 = new FormControl('');
  q2 = new FormControl('');
  q3 = new FormControl('');
  q4 = new FormControl('');
  q5 = new FormControl('');
  q6 = new FormControl('');
  q7 = new FormControl('');
  q8 = new FormControl('');
  q9 = new FormControl('');
  q10 = new FormControl('');
  q11 = new FormControl('');
  q12 = new FormControl('');

  staticContent: any = [
    {
      // Section Title
      sectionTitle: `Supports and services`,
      // Titles
      title0: `My current supports and services`,
      title1: `Supports and services I need`,
      title2: `My family’s current supports and services`,
      title3: `Supports and services my family need`,
      // Body
      intro: `There are many supports and services available to people on the spectrum and their family but navigate the world of funding and services can be confusing. What should you be looking for, what questions should you be asking yourself and the service providers? Explore these questions for your own situation, see how Janie and her family approached access to services and see an example of completing the Autism and Me: Planning Booklet.`, body0: `
      My current supports and services<br><br>
Everyone needs some level of support at different stages of their lives. My supports and their role in my life will change as I do, which is why it is important to review and manage my supports.
There are many people in my current network who support me in a range of ways, they are listed below. <br><br>
• Formal (paid) supports e.g. professionals such as ECEI partner, speech pathologist, childcare staff, GP.
• Informal supports e.g. my immediate and extended family, friends, or neighbours.
• Community supports e.g. playgroup coordinator, swimming teacher, local library staff.

      `,
      body1: `
      Supports and services I need<br><br>
These are supports and service in addition to the ones I already have, which I could benefit from:
`,
      body2: `
      My family’s current supports and services <br><br>
It is important that my family are supported too, this helps us reach our best outcomes as a family unit. Support for my family could include, but not be limited to, having a babysitter for a night, speaking to a counsellor, or increasing knowledge and skills through training:

      `,
      body3: `
      Supports and services my family need<br><br>
These are supports and service in addition to the ones we already have, which we could benefit from:
`,
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
