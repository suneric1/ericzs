import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projects } from '../shared/projects';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  project;
  projects = projects;
  nextLink;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.project = projects.find(({ name }) => name === this.route.snapshot.params.id);

    const pi = projects.findIndex(({ name }) => name === this.project.name);
    const next = pi < projects.length - 1 ? projects[pi + 1].name : projects[0].name;
    this.nextLink = ['/projects', next];
  }

  onActivate() {
    console.log('activate');
    
  }

}
