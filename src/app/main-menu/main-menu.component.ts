import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {

  menuBaseURL: string = 'https://thespectrum.org.au/myautism';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
  );


  constructor(private breakpointObserver: BreakpointObserver) {

  }

  clearLocalStorage() {
    var clearAll = confirm("Warning! This will clear all saved form data. Continue?");
    if (clearAll == true) {
      localStorage.clear();
      location.reload(); // Reload the browser window
    }
  }
}
