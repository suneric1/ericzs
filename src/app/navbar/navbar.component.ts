import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  onScroll() {
    this.shrinkNav = window.scrollY > 100;
  }

}
