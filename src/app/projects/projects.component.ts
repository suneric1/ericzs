import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, useAnimation, transition, query, style, animate } from '@angular/animations';
import { fadeUp } from '../shared/fade-up.animation';
import { ProjectService } from '../shared/project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('fadeUp', [transition(':enter', [useAnimation(fadeUp)])])
  ]
})
export class ProjectsComponent implements OnInit, OnDestroy {
  tabs = [
    ['design_dev', 'Design & Dev', 'icon-design'],
    ['data_viz', 'Data Viz', 'icon-data_viz'],
    ['game_vr', 'Game & VR', 'icon-vr'],
    ['experimental', 'Experimental', 'icon-experimental'],
    ['all', 'All', ''],
  ];
  projects;
  styleData: any = {
    targetOffsetY: 0,
    offsetY: 0,
    targetScale: 1,
    scale: 1,
    targetOpacity: 1,
    opacity: 1,
    targetBlur: 0,
    blur: 0,
  };
  msgStyle: any = {};
  willAnimate: boolean;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.projects = this.projectService.getProjects(params.filter);
    });

    this.willAnimate = true;
    requestAnimationFrame(this.update.bind(this));

    let timer;
    window.addEventListener('scroll', () => {
      if (this.willAnimate === false) {
        requestAnimationFrame(this.update.bind(this));
      }
      this.willAnimate = true;
      clearTimeout(timer);
      timer = setTimeout(() => {
        this.willAnimate = false;
      }, 2000);
    });
  }

  ngOnDestroy() {
    this.willAnimate = false;
  }

  update() {
    const d = this.styleData;
    const y = window.pageYOffset;
    if (y < 100) {
      d.targetScale = 1;
      d.targetOpacity = 1;
      d.targetBlur = 0;
    } else if (y < 400) {
      d.targetScale = 1 - (y - 100) / 800;
      d.targetOpacity = 1 - (y - 100) / 200;
      d.targetBlur = (y - 100) / 40;
    } else {
      d.targetOpacity = 0;
    }

    d.scale = lerp(d.scale, d.targetScale);
    d.opacity = lerp(d.opacity, d.targetOpacity);
    d.blur = lerp(d.blur, d.targetBlur);
    if (d.blur < 0.05) {
      d.blur = 0;
    }

    Object.assign(this.msgStyle, {
      transform: `scale(${d.scale})`,
      opacity: d.opacity,
      filter: `blur(${d.blur}px)`,
    });

    if (this.willAnimate) {
      requestAnimationFrame(this.update.bind(this));
    }
  }

  scroll(top) {
    window.scroll({
      top: top - 80, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}

const lerp = (from, to) => (from * 0.9 + 0.1 * to).toFixed(3);
