import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projects } from '../shared/projects';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  title;
  project;
  projects = projects;
  nextLink;
  nextName;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.project = projects.find(({ name }) => name === id);
      this.project.body.forEach(elem => {
        if (elem.type === 'youtube')
          elem.src = this.sanitizer.bypassSecurityTrustResourceUrl(elem.src);
      });
      this.title = this.project.name.split('-').join(' ').toUpperCase();

      const pi = projects.findIndex(({ name }) => name === this.project.name);
      const next =
        pi < projects.length - 1 ? projects[pi + 1].name : projects[0].name;
      this.nextLink = ['/projects', next];
      this.nextName = next.split('-').join(' ').toUpperCase();
    });
  }

  onActivate() {
    console.log('activate');
  }
}
