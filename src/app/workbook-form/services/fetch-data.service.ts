import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import ContentFilePaths from "../../../assets/content/content-filepaths.json";

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  // Initialise payload
  private jsonObject = ContentFilePaths;

  // Create an observable for the payload
  private payload = new BehaviorSubject<any>(this.jsonObject);

  // Data object exposed in this service
  dataStream = this.payload.asObservable();

  fileCounter: number = 0;

  constructor(private http: HttpClient) {

  }


  public requestDataFromMultipleSources(): Observable<any[]> {

    // Retrieve all markdown files via HTTP Get request
    let response000 = this.http.get(environment.filePath + 'paragraphs/paragraph-000.md', { responseType: 'text' });
    let response001 = this.http.get(environment.filePath + 'paragraphs/paragraph-001.md', { responseType: 'text' });
    let response002 = this.http.get(environment.filePath + 'paragraphs/paragraph-002.md', { responseType: 'text' });
    let response003 = this.http.get(environment.filePath + 'paragraphs/paragraph-003.md', { responseType: 'text' });
    let response004 = this.http.get(environment.filePath + 'paragraphs/paragraph-004.md', { responseType: 'text' });
    let response005 = this.http.get(environment.filePath + 'paragraphs/paragraph-005.md', { responseType: 'text' });
    let response006 = this.http.get(environment.filePath + 'paragraphs/paragraph-006.md', { responseType: 'text' });
    let response007 = this.http.get(environment.filePath + 'paragraphs/paragraph-007.md', { responseType: 'text' });
    let response008 = this.http.get(environment.filePath + 'paragraphs/paragraph-008.md', { responseType: 'text' });
    let response009 = this.http.get(environment.filePath + 'paragraphs/paragraph-009.md', { responseType: 'text' });
    let response010 = this.http.get(environment.filePath + 'paragraphs/paragraph-010.md', { responseType: 'text' });
    let response011 = this.http.get(environment.filePath + 'paragraphs/paragraph-011.md', { responseType: 'text' });
    let response012 = this.http.get(environment.filePath + 'paragraphs/paragraph-012.md', { responseType: 'text' });
    let response013 = this.http.get(environment.filePath + 'paragraphs/paragraph-013.md', { responseType: 'text' });
    let response014 = this.http.get(environment.filePath + 'paragraphs/paragraph-014.md', { responseType: 'text' });
    let response015 = this.http.get(environment.filePath + 'paragraphs/paragraph-015.md', { responseType: 'text' });
    let response016 = this.http.get(environment.filePath + 'paragraphs/paragraph-016.md', { responseType: 'text' });
    let response017 = this.http.get(environment.filePath + 'paragraphs/paragraph-017.md', { responseType: 'text' });
    let response018 = this.http.get(environment.filePath + 'paragraphs/paragraph-018.md', { responseType: 'text' });
    let response019 = this.http.get(environment.filePath + 'paragraphs/paragraph-019.md', { responseType: 'text' });
    let response020 = this.http.get(environment.filePath + 'paragraphs/paragraph-020.md', { responseType: 'text' });
    let response021 = this.http.get(environment.filePath + 'paragraphs/paragraph-021.md', { responseType: 'text' });
    let response022 = this.http.get(environment.filePath + 'paragraphs/paragraph-022.md', { responseType: 'text' });
    let response023 = this.http.get(environment.filePath + 'paragraphs/paragraph-023.md', { responseType: 'text' });
    let response024 = this.http.get(environment.filePath + 'paragraphs/paragraph-024.md', { responseType: 'text' });
    let response025 = this.http.get(environment.filePath + 'paragraphs/paragraph-025.md', { responseType: 'text' });
    let response026 = this.http.get(environment.filePath + 'paragraphs/paragraph-026.md', { responseType: 'text' });
    let response027 = this.http.get(environment.filePath + 'paragraphs/paragraph-027.md', { responseType: 'text' });
    let response028 = this.http.get(environment.filePath + 'paragraphs/paragraph-028.md', { responseType: 'text' });

    // Total file count - update this number if the tally of variables above changes
    this.fileCounter = 28;

    // Return HTTP content
    return forkJoin([
      response000,
      response001,
      response002,
      response003,
      response004,
      response005,
      response006,
      response007,
      response008,
      response009,
      response010,
      response011,
      response012,
      response013,
      response014,
      response015,
      response016,
      response017,
      response018,
      response019,
      response020,
      response021,
      response022,
      response023,
      response024,
      response025,
      response026,
      response027,
      response028
    ]);
  }

}
