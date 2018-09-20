import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent implements OnInit {
  @Input() project;

  bgUrl;

  constructor() { }

  ngOnInit() {
    this.bgUrl = `url('/assets/img/${this.project.name}.${this.project.type}')`;
  }

}
