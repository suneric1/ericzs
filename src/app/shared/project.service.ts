import { Injectable } from '@angular/core';
import { projects } from './projects';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private sanitizer: DomSanitizer) { }

  getProjects() {
    return projects.map(project => {
      const title = project.name.split('-').join(' ').toUpperCase();
      const tags = this.getTagsDetails(project.tags);
  
      const body = (<any[]>project.body).map(elem => {
        const src = elem.type === 'youtube' ? this.sanitizer.bypassSecurityTrustResourceUrl(elem.src) : elem.src;
        return { ...elem, src };
      });
      return { ...project, body, title, tags };
    });
  }

  getTagsDetails(tags: string[] = []) {
    const icons = {
      ux: {
        name: 'UX',
        fa: 'far fa-gem',
        bg: 'bg-ux'
      },
      'front end': {
        name: 'Front End',
        fa: 'fas fa-code',
        bg: 'bg-front-end'
      },
      'back end': {
        name: 'Back End',
        fa: 'fas fa-database',
        bg: 'bg-back-end'
      },
      mobile: {
        name: 'Mobile',
        fa: 'fas fa-mobile-alt',
        bg: 'bg-mobile'
      },
      angular: {
        name: 'Angular',
        fa: 'fab fa-angular',
        bg: 'bg-angular'
      },
      vr: {
        name: 'VR',
        img: './assets/img/icons/vr.svg',
        bg: 'bg-vr'
      },
      'game dev': {
        name: 'Game Dev',
        fa: 'fas fa-gamepad',
        bg: 'bg-game-dev'
      },
      experience: {
        name: 'Experience',
        fa: 'fas fa-flask',
        bg: 'bg-exp'
      },
      arduino: {
        name: 'Arduino',
        fa: 'fas fa-microchip',
        bg: 'bg-arduino'
      },
      'data vis': {
        name: 'Data Vis',
        fa: 'fas fa-chart-line',
        bg: 'bg-data-vis'
      },
      infographics: {
        name: 'Infographics',
        fa: 'fas fa-newspaper',
        bg: 'bg-infographics'
      },
    };
    return tags.map(tag => icons[tag] || {});
  }
}
