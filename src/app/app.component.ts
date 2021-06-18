import { Component, ViewChild } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';
import smoothscroll from 'smoothscroll-polyfill';
import { routerTrans } from './routerTrans.animation';

smoothscroll.polyfill();

declare const ga: Function;
const updateGa = (url) => {
  ga('set', 'page', url);
  ga('send', 'pageview');
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTrans]
})
export class AppComponent {
  title = 'ericzs';
  prevState;
  routerState;
  @ViewChild(RouterOutlet) outlet: RouterOutlet;

  constructor(router: Router, translate: TranslateService) {
    const lang = localStorage.getItem('lang') || 'en';
    translate.setDefaultLang(lang);
    translate.use(lang);

    router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(e => {
      updateGa(e['urlAfterRedirects']);
      
      this.prevState = this.routerState;
      this.routerState = this.outlet.activatedRouteData.state;
      
      if (this.prevState === this.routerState) {
        if (this.prevState === 'project') {
          window.scroll({ top: 0, left: 0 });
        }
      } else {
        window.scroll({
          top: 0, 
          left: 0, 
          behavior: 'smooth' 
        });
      }
      
    });
  }
}
