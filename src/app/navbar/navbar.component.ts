import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, throttleTime } from 'rxjs/operators';
import { trigger, transition, style, animate, query, group, stagger, useAnimation } from '@angular/animations';
import { fadeDown } from '../shared/fade-down.animation';
import { BehaviorSubject } from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
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
    ]),
    trigger('fadeDown', [transition(':enter', [useAnimation(fadeDown)])])
  ]
})
export class NavbarComponent {
  showMenu: boolean = false;
  workActive: boolean;
  inProject: boolean;
  navClass: string = '';
  prevScrollY: number = 0;
  offsetY: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(router: Router, private translate: TranslateService) {
    router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(e => {
      this.inProject = e['url'].startsWith('/projects');
      this.workActive = e['url'].split('?')[0] === '/';        
      if (window.pageYOffset <= 100) {
        this.navClass = '';
      } else {
        this.navClass = 'shrinked';
      }
    });
    this.offsetY
      .pipe(
        filter(val => Math.abs(val) > 2),
        throttleTime(300, async, { trailing: true })
      )
      .subscribe(val => {
        if (window.pageYOffset <= 100) {
          this.navClass = '';
        } else if (this.inProject) {
          this.navClass = val > 0 ? 'hidden' : 'shrinked';
        } else {
          this.navClass = 'shrinked';
        }
      });
  }

  @HostListener('window:scroll')
  onScroll() {
    this.offsetY.next(window.pageYOffset - this.prevScrollY);
    this.prevScrollY = window.pageYOffset;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  toggleLang() {
    const lang = this.translate.currentLang === 'en' ? 'zh' : 'en';
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    this.showMenu = false;
  }
}
