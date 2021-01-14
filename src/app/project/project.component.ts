import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../shared/project.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [
    trigger('fade', [
      transition('false => true', [
        style({ opacity: 0 }),
        animate('200ms ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ProjectComponent implements OnInit {
  project;
  projects;
  nextLink;
  nextName;
  loaded = true;
  dropdownOn = false;

  constructor(private route: ActivatedRoute, private projectService: ProjectService) {}

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

      const pi = this.projects.findIndex(({ name }) => name === this.project.name);
      const next =
        pi < this.projects.length - 1 ? this.projects[pi + 1].name : this.projects[0].name;
      this.nextLink = ['/projects', next];
      this.nextName = next.split('-').join(' ').toUpperCase();
    });
  }

  load(src) {
    if (src) {
      this.loaded = true;
    }
  }
}
