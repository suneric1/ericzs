import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
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
  showMenu: boolean;
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
