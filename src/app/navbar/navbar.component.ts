import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: {
    '(window:scroll)': 'onScroll()'
  }
})
export class NavbarComponent implements OnInit {
  shrinkNav: boolean = false;
  workActive: boolean;

  constructor(router: Router, route: ActivatedRoute) {
    router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(e => {
      this.workActive = e['url'] === '/' || e['url'].startsWith('/projects');
    });
  }

  ngOnInit() {}

  onScroll() {
    this.shrinkNav = window.scrollY > 100;
  }
}
