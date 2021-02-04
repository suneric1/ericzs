import { Injectable } from '@angular/core';
import { projects } from './projects';
import { DomSanitizer } from '@angular/platform-browser';
import { Post } from '../posts/post';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: TransformedPost[] = projects.map(project => {
    const tags = this.getTagsDetails(project.tags);

    const body = project.body.map(elem => {
      const src = elem.type === 'youtube' ? this.sanitizer.bypassSecurityTrustResourceUrl(elem.src) : elem.src;
      return { ...elem, src };
    });
    return { ...project, body, tags };
  });

  constructor(private sanitizer: DomSanitizer) { }

  getProjects(): TransformedPost[] {
    return this.projects;
  }

  getNextProject(curr: TransformedPost, step = 1) {
    const pi = this.projects.findIndex((p) => p === curr);
    const piNext = (pi + step + this.projects.length) % this.projects.length;
    return {
      link: ['/projects', this.projects[piNext].name],
      title: this.projects[piNext].title,
    };
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

export interface TransformedPost extends Post {
  tags: any[];
  body: any;
}
