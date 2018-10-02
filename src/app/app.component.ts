import { Component, ViewChild, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, group } from '@angular/animations';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

const ANIM_TIMING = '500ms cubic-bezier(.83,.01,.17,1)';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerTrans', [
      transition('home => contact', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%', left: '0' }), { optional: true }),
        group([
          query(':enter', [
            style({ transform: 'translateX(100%)', opacity: 0 }),
            animate(ANIM_TIMING, style({ transform: 'translateX(0)', opacity: 1 }))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0)', opacity: 1 }),
            animate(ANIM_TIMING, style({ transform: 'translateX(-100%)', opacity: 0 }))
          ], { optional: true })
        ])
      ]),
      transition('contact => home', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%', left: '0' }), { optional: true }),
        group([
          query(':enter', [
            style({ transform: 'translateX(-100%)', opacity: 0 }),
            animate(ANIM_TIMING, style({ transform: 'translateX(0)', opacity: 1 }))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0)', opacity: 1 }),
            animate(ANIM_TIMING, style({ transform: 'translateX(100%)', opacity: 0 }))
          ], { optional: true })
        ])
      ]),
      transition('* => project', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%', left: '0' }), { optional: true }),
        query(':enter', style({ transform: 'translateY(180px)', opacity: 0 }), { optional: true }),
        query(':leave', [
          style({ transform: 'scale(1)', opacity: 1 }),
          animate('200ms ease-in', style({ transform: 'scale(.8)', opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          animate('400ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
        ], { optional: true })
      ]),
      transition('project => *', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%', left: '0' }), { optional: true }),
        query(':enter', style({ transform: 'scale(.8)', opacity: 0 }), { optional: true }),
        query(':leave', [
          style({ opacity: 1 }),
          animate('200ms ease-in', style({ transform: 'translateY(180px)', opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          animate('400ms ease-out', style({ transform: 'scale(1)', opacity: 1 }))
        ], { optional: true })
      ])
    ])
  ]
})
export class AppComponent {
  title = 'ericzs';
  prevState;
  routerState;
  @ViewChild(RouterOutlet) outlet: RouterOutlet;

  constructor(router: Router) {
    router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(e => {
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
