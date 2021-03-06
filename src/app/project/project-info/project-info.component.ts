import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent implements OnChanges {
  @Input() project;
  bgUrl;

  constructor() { }

  ngOnChanges() {
    this.bgUrl = `url('./assets/img/thumbnail/${this.project.thumbnail}')`;
  }

}
