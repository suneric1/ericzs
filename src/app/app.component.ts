import { Component, ViewChild, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, group } from '@angular/animations';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

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
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'ericzs';
  routerState;
  @ViewChild(RouterOutlet) outlet: RouterOutlet;

  constructor(router: Router) {
    router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(e => {
      this.routerState = this.outlet.activatedRouteData.state;
      console.log(this.routerState);
    });
  }

  ngOnInit() {
    
  }

}
