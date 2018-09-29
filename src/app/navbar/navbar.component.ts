import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { trigger, transition, style, animate, state, query, group, stagger } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: {
    '(window:scroll)': 'onScroll()'
  },
  animations: [
    trigger('expand', [
      transition(':enter', [
        style({ height: '0', opacity: 0 }),
        group([
          animate('300ms ease-in-out', style({ height: '*', opacity: 1 })),
          query('.nav-item', [
            stagger(50, [
              style({ transform: 'translateX(-100%)' }),
              animate('300ms ease-in-out', style({ transform: 'translateX(0)' }))
            ])
          ])
        ])
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        group([
          animate('500ms ease-in-out', style({ height: 0, opacity: 0 })),
          query('.nav-item', [
            stagger(-100, [
              animate('500ms ease-in-out', style({ transform: 'translateY(-300px)' }))
            ])
          ])
        ])
      ])
    ])
  ]
})
export class NavbarComponent implements OnInit {
  showMenu: boolean = false;
  shrinkNav: boolean = false;
  workActive: boolean;

  constructor(router: Router) {
    router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(e => {
      this.workActive = e['url'] === '/' || e['url'].startsWith('/projects');
    });
  }

  ngOnInit() {}

  onScroll() {
    this.shrinkNav = window.scrollY > 100;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
