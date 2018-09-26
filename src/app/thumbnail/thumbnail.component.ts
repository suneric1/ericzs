import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {
  @Input() project;
  bgUrl: string;

  constructor() { }

  ngOnInit() {
    this.bgUrl = `url('/assets/img/thumbnail/${this.project.thumbnail}')`;
  }

}
