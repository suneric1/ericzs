import { Component, ViewChild, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, group } from '@angular/animations';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerTrans', [
      transition('home => contact', [
        query(':enter, :leave', style({ position: 'absolute', width: 'calc(100% - 30px)', left: '15px' }), { optional: true }),
        group([
          query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('300ms ease-in-out', style({ transform: 'translateX(0)' }))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0)' }),
            animate('300ms ease-in-out', style({ transform: 'translateX(-100%)' }))
          ], { optional: true })
        ])
      ]),
      transition('contact => home', [
        query(':enter, :leave', style({ position: 'absolute', width: 'calc(100% - 30px)', left: '15px' }), { optional: true }),
        group([
          query(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('300ms ease-in-out', style({ transform: 'translateX(0)' }))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0)' }),
            animate('300ms ease-in-out', style({ transform: 'translateX(100%)' }))
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
