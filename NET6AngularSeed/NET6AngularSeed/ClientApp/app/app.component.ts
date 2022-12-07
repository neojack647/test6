import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from './core/services/loading.service';
import { CookieService, CookieOptions } from 'ngx-cookie';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'NET6AngularSeed';
  year = new Date().getFullYear();
  activeTheme = '';
  menuOpen = true;
  constructor(
    private router: Router,
    private loader: LoadingService,
    private cookieService: CookieService,
    @Inject(DOCUMENT) private document
  ) { }
  ngOnInit() {
    this.router.events.subscribe(event => {
      // on route changes resolve the loading animation
      this.loader.resolveAllLoading();
      this.loader.resolveAllError();
    });

    this.checkThemeSetting();
  }

  private checkThemeSetting() {
    const themeSettingCookie: string = this.cookieService.get('theme');
    this.activeTheme = themeSettingCookie;

    if (themeSettingCookie !== null) {

      switch(themeSettingCookie) {
         case 'dark-theme': {
            this.document.body.classList.add('dark-theme');
            break;
         }
         case 'light-theme' : {
          this.document.body.classList.add('light-theme');
          break;
         }

         case 'solarized-dark-theme' : {
          this.document.body.classList.add('solarized-dark-theme');
          break;
         }

         case 'solarized-light-theme' : {
          this.document.body.classList.add('solarized-light-theme');
          break;
         }
      }
    }
  }

  setThemeSetting(themeVal): void {
    let exp = this.expDate();
    let cookieOptions = { path: 'AngualrSeed', expires: exp } as CookieOptions;
    this.activeTheme = themeVal;
    this.cookieService.remove('theme');
    this.document.body.classList.remove('dark-theme', 'light-theme', 'solarized-dark-theme', 'solarized-light-theme');
    this.cookieService.put('theme', themeVal, cookieOptions);
    this.document.body.classList.add(themeVal);
  }

  expDate(): Date {
    let date = new Date();
    let y = date.getFullYear();
    let m = date.getMonth();
    let d = date.getDate();
    let nextYear = new Date(y + 1, m, d);
    return nextYear;
  }

}
