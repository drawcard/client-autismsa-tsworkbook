import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FetchDataService } from '../services/fetch-data.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-section00',
  templateUrl: './section00.component.html',
  styleUrls: ['./section00.component.scss']
})
export class Section00Component implements OnInit {

  dataStore: any;
  mdStore: string[] = [];

  constructor(private http: HttpClient, private fetchDataService: FetchDataService) { }

  ngOnInit(): void {
    this.fetchMarkDownContent();

    console.log(this.mdStore);
  }

  fetchMarkDownContent() {
    // Subscribe to FetchDataService
    this.fetchDataService.requestDataFromMultipleSources().subscribe(responseList => {
      // Store the data to object
      for (let i = 0; i < this.fetchDataService.fileCounter; i++) {
        this.mdStore[i] = responseList[i];
      }
    });
  }
}
