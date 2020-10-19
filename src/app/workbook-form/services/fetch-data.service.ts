import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, from, Observable } from 'rxjs';
import { catchError, delay, mergeMap, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import ContentFilePaths from "../../../assets/content/content-filepaths.json";
import RateLimiter from 'rxjs-ratelimiter';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  fileArray: string[] =
    [
      (environment.filePath + 'paragraphs/paragraph-000.md'),
      (environment.filePath + 'paragraphs/paragraph-001.md'),
      (environment.filePath + 'paragraphs/paragraph-002.md'),
      (environment.filePath + 'paragraphs/paragraph-003.md'),
      (environment.filePath + 'paragraphs/paragraph-004.md'),
      (environment.filePath + 'paragraphs/paragraph-005.md'),
      (environment.filePath + 'paragraphs/paragraph-006.md'),
      (environment.filePath + 'paragraphs/paragraph-007.md'),
      (environment.filePath + 'paragraphs/paragraph-008.md'),
      (environment.filePath + 'paragraphs/paragraph-009.md'),
      (environment.filePath + 'paragraphs/paragraph-010.md'),
      (environment.filePath + 'paragraphs/paragraph-011.md'),
      (environment.filePath + 'paragraphs/paragraph-012.md'),
      (environment.filePath + 'paragraphs/paragraph-013.md'),
      (environment.filePath + 'paragraphs/paragraph-014.md'),
      (environment.filePath + 'paragraphs/paragraph-015.md'),
      (environment.filePath + 'paragraphs/paragraph-016.md'),
      (environment.filePath + 'paragraphs/paragraph-017.md'),
      (environment.filePath + 'paragraphs/paragraph-018.md'),
      (environment.filePath + 'paragraphs/paragraph-019.md'),
      (environment.filePath + 'paragraphs/paragraph-020.md'),
      (environment.filePath + 'paragraphs/paragraph-021.md'),
      (environment.filePath + 'paragraphs/paragraph-022.md'),
      (environment.filePath + 'paragraphs/paragraph-023.md'),
      (environment.filePath + 'paragraphs/paragraph-024.md'),
      (environment.filePath + 'paragraphs/paragraph-025.md'),
      (environment.filePath + 'paragraphs/paragraph-026.md'),
      (environment.filePath + 'paragraphs/paragraph-027.md'),
      (environment.filePath + 'paragraphs/paragraph-028.md')
    ]

  // Don't hammer the website with API requests (otherwise you will get Error 429: Too many requests)
  // https://github.com/insidewhy/rxjs-ratelimiter
  private rateLimiter = new RateLimiter(6, 200);

  // Initialise file counter
  fileCounter: number = 0;

  constructor(private http: HttpClient) {

  }


  public requestDataFromMultipleSources(): Observable<any[]> {
    let response000 = this.rateLimiter.limit(this.http.get(environment.filePath + 'paragraphs/paragraph-000.md', { responseType: 'text' }).pipe(retry(3)));
    let response001 = this.rateLimiter.limit(this.http.get(environment.filePath + 'paragraphs/paragraph-001.md', { responseType: 'text' }).pipe(retry(3)));
    let response002 = this.rateLimiter.limit(this.http.get(environment.filePath + 'paragraphs/paragraph-002.md', { responseType: 'text' }).pipe(retry(3)));
    let response003 = this.rateLimiter.limit(this.http.get(environment.filePath + 'paragraphs/paragraph-003.md', { responseType: 'text' }).pipe(retry(3)));
    let response004 = this.rateLimiter.limit(this.http.get(environment.filePath + 'paragraphs/paragraph-004.md', { responseType: 'text' }).pipe(retry(3)));
    let response005 = this.rateLimiter.limit(this.http.get(environment.filePath + 'paragraphs/paragraph-005.md', { responseType: 'text' }).pipe(retry(3)));
    let response006 = this.rateLimiter.limit(this.http.get(environment.filePath + 'paragraphs/paragraph-006.md', { responseType: 'text' }).pipe(retry(3)));
    let response007 = this.rateLimiter.limit(this.http.get(environment.filePath + 'paragraphs/paragraph-007.md', { responseType: 'text' }).pipe(retry(3)));
    let response008 = this.rateLimiter.limit(this.http.get(environment.filePath + 'paragraphs/paragraph-008.md', { responseType: 'text' }).pipe(retry(3)));
    let response009 = this.rateLimiter.limit(this.http.get(environment.filePath + 'paragraphs/paragraph-009.md', { responseType: 'text' }).pipe(retry(3)));
    let response010 = this.rateLimiter.limit(this.http.get(environment.filePath + 'paragraphs/paragraph-010.md', { responseType: 'text' }).pipe(retry(3)));
    let response011 = this.rateLimiter.limit(this.http.get(environment.filePath + 'paragraphs/paragraph-011.md', { responseType: 'text' }).pipe(retry(3)));
    let response012 = this.rateLimiter.limit(this.http.get(environment.filePath + 'paragraphs/paragraph-012.md', { responseType: 'text' }).pipe(retry(3)));
    let response013 = this.rateLimiter.limit(this.http.get(environment.filePath + 'paragraphs/paragraph-013.md', { responseType: 'text' }).pipe(retry(3)));
    let response014 = this.rateLimiter.limit(this.http.get(environment.filePath + 'paragraphs/paragraph-014.md', { responseType: 'text' }).pipe(retry(3)));
    let response015 = this.rateLimiter.limit(this.http.get(environment.filePath + 'paragraphs/paragraph-015.md', { responseType: 'text' }).pipe(retry(3)));
    let response016 = this.rateLimiter.limit(this.http.get(environment.filePath + 'paragraphs/paragraph-016.md', { responseType: 'text' }).pipe(retry(3)));
    let response017 = this.rateLimiter.limit(this.http.get(environment.filePath + 'paragraphs/paragraph-017.md', { responseType: 'text' }).pipe(retry(3)));
    let response018 = this.rateLimiter.limit(this.http.get(environment.filePath + 'paragraphs/paragraph-018.md', { responseType: 'text' }).pipe(retry(3)));
    let response019 = this.rateLimiter.limit(this.http.get(environment.filePath + 'paragraphs/paragraph-019.md', { responseType: 'text' }).pipe(retry(3)));
    let response020 = this.rateLimiter.limit(this.http.get(environment.filePath + 'paragraphs/paragraph-020.md', { responseType: 'text' }).pipe(retry(3)));
    let response021 = this.rateLimiter.limit(this.http.get(environment.filePath + 'paragraphs/paragraph-021.md', { responseType: 'text' }).pipe(retry(3)));
    let response022 = this.rateLimiter.limit(this.http.get(environment.filePath + 'paragraphs/paragraph-022.md', { responseType: 'text' }).pipe(retry(3)));
    let response023 = this.rateLimiter.limit(this.http.get(environment.filePath + 'paragraphs/paragraph-023.md', { responseType: 'text' }).pipe(retry(3)));
    let response024 = this.rateLimiter.limit(this.http.get(environment.filePath + 'paragraphs/paragraph-024.md', { responseType: 'text' }).pipe(retry(3)));
    let response025 = this.rateLimiter.limit(this.http.get(environment.filePath + 'paragraphs/paragraph-025.md', { responseType: 'text' }).pipe(retry(3)));
    let response026 = this.rateLimiter.limit(this.http.get(environment.filePath + 'paragraphs/paragraph-026.md', { responseType: 'text' }).pipe(retry(3)));
    let response027 = this.rateLimiter.limit(this.http.get(environment.filePath + 'paragraphs/paragraph-027.md', { responseType: 'text' }).pipe(retry(3)));
    let response028 = this.rateLimiter.limit(this.http.get(environment.filePath + 'paragraphs/paragraph-028.md', { responseType: 'text' }).pipe(retry(3)));

    let fileIDs = 28; // NOTE: Update this to match the last ID # in the file list above
    this.fileCounter = fileIDs + 1;

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
