import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {
  @Input() project;
  bgUrl: string;
  title: string;
  icons: string[];

  constructor() { }

  ngOnInit() {
    this.bgUrl = `url('./assets/img/thumbnail/${this.project.thumbnail}')`;
    this.title = this.project.name.split('-').join(' ').toUpperCase();
    this.icons = this.getIconsByTags(this.project.tags);
  }

  getIconsByTags(tags: string[] = []) {
    const icons = {
      ux: {
        fa: 'far fa-gem',
        bg: 'bg-ux'
      },
      'front end': {
        fa: 'fas fa-code',
        bg: 'bg-front-end'
      },
      'back end': {
        fa: 'fas fa-database',
        bg: 'bg-back-end'
      },
      mobile: {
        fa: 'fas fa-mobile-alt',
        bg: 'bg-mobile'
      },
      angular: {
        fa: 'fab fa-angular',
        bg: 'bg-angular'
      },
      vr: {
        fa: 'fas fa-eye',
        bg: 'bg-vr'
      },
      'game dev': {
        fa: 'fas fa-gamepad',
        bg: 'bg-game-dev'
      },
      experience: {
        fa: 'far fa-lightbulb',
        bg: 'bg-exp'
      },
      arduino: {
        fa: 'fas fa-microchip',
        bg: 'bg-arduino'
      },
      'data vis': {
        fa: 'fas fa-chart-line',
        bg: 'bg-data-vis'
      },
      infographics: {
        fa: 'fas fa-newspaper',
        bg: 'bg-infographics'
      },
    };
    return tags.map(tag => icons[tag] || '');
  }

}
