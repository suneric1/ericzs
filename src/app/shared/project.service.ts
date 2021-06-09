import { Injectable } from '@angular/core';
import { projects } from './projects';
import { DomSanitizer } from '@angular/platform-browser';
import { Post } from '../posts/post';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects: TransformedPost[] = projects.map((project) => {
    const tags = this.getTagsDetails(project.tags);

    const body = project.body.map((elem) => {
      const src =
        elem.type === 'youtube'
          ? this.sanitizer.bypassSecurityTrustResourceUrl(elem.src)
          : elem.src;
      return { ...elem, src };
    });
    return { ...project, body, tags };
  });

  constructor(private sanitizer: DomSanitizer) {}

  getProjects(filter?: string): TransformedPost[] {
    if (!filter) return this.projects.filter(p => p.featured);
    if (filter === 'all') return this.projects;
    if (filter === 'design_dev')
      return this.projects.filter(({ tags }) =>
        tags.some(({ key }) => key === 'design' || key === 'dev')
      );
    if (filter === 'game_vr')
      return this.projects.filter(({ tags }) =>
        tags.some(({ key }) => key === 'game' || key === 'vr')
      );
    return this.projects.filter(({ tags }) =>
      tags.some(({ key }) => key === filter)
    );
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
      design: {
        name: 'Design',
        icon: 'icon-design',
        bg: 'bg-ux',
        key: 'design',
      },
      dev: {
        name: 'Dev',
        icon: 'icon-dev',
        bg: 'bg-front-end',
        key: 'dev',
      },
      data_viz: {
        name: 'Data Viz',
        icon: 'icon-data_viz',
        bg: 'bg-data-vis',
        key: 'data_viz',
      },
      game: {
        name: 'Game',
        icon: 'icon-game',
        bg: 'bg-game-dev',
        key: 'game',
      },
      vr: {
        name: 'VR',
        icon: 'icon-vr',
        bg: 'bg-vr',
        key: 'vr',
      },
      experimental: {
        name: 'Experimental',
        icon: 'icon-experimental',
        bg: 'bg-exp',
        key: 'experimental',
      },
    };
    return tags.map((tag) => icons[tag] || {});
  }
}

export interface TransformedPost extends Post {
  tags: any[];
  body: any;
}
