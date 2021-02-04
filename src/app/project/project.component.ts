import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService, TransformedPost } from '../shared/project.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [
    trigger('fade', [
      transition('false => true', [
        style({ opacity: 0 }),
        animate('200ms ease-in-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ProjectComponent implements OnInit {
  project: TransformedPost;
  projects: TransformedPost[];
  prevLink;
  nextLink;
  nextName;
  loaded = true;
  dropdownOn = false;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit() {
    this.projects = this.projectService.getProjects();

    this.route.params.subscribe(({ id }) => {
      this.project = this.projects.find(({ name }) => name === id);

      if (this.project.body.find(({ type }) => type === 'youtube')) {
        this.loaded = false;
        setTimeout(() => {
          this.loaded = true;
        }, 5000);
      }

      const next = this.projectService.getNextProject(this.project);
      this.nextLink = next.link;
      this.nextName = next.title;
      this.prevLink = this.projectService.getNextProject(this.project, -1).link;
    });
  }

  @HostListener('window:keyup', ['$event.key'])
  detectShortcut(key) {
    switch (key) {
      case 'ArrowRight':
        this.router.navigate(this.nextLink);
        break;
      case 'ArrowLeft':
        this.router.navigate(this.prevLink);
        break;
      case 'Escape':
        this.router.navigate(['/']);
        break;
    }
  }

  load(src) {
    if (src) {
      this.loaded = true;
    }
  }
}
