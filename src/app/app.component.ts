import { Component, ViewChild } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import smoothscroll from 'smoothscroll-polyfill';
import { routerTrans } from './routerTrans.animation';

smoothscroll.polyfill();

declare const ga: any;
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
  @ViewChild(RouterOutlet, { static: false }) outlet: RouterOutlet;

  constructor(router: Router) {
    router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(e => {
      updateGa(e['urlAfterRedirects']);
      
      this.prevState = this.routerState;
      this.routerState = this.outlet.activatedRouteData.state;
      
      if (this.prevState === this.routerState) {
        window.scroll({ top: 0, left: 0 });
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
